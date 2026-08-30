import base64
import json
import logging
import os
import re
from pathlib import Path
from typing import Any

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

load_dotenv()

# ---------------------------------------------------------------------------
# Gemini SDK
# ---------------------------------------------------------------------------

try:
    from google import genai
    from google.genai import types
except ImportError:
    # Allows the application to start with a useful error message if the
    # Gemini SDK was not installed.
    genai = None
    types = None


# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

logging.basicConfig(
    level=os.getenv("LOG_LEVEL", "INFO")
)

logger = logging.getLogger("agrit")

ROOT = Path(__file__).resolve().parent.parent

MODEL = os.getenv(
    "GEMINI_MODEL",
    "gemini-3.5-flash",
)

MAX_IMAGE_BYTES = int(
    os.getenv(
        "MAX_IMAGE_BYTES",
        str(8 * 1024 * 1024),
    )
)


# ---------------------------------------------------------------------------
# FastAPI application
# ---------------------------------------------------------------------------

app = FastAPI(
    title="AgriT API",
    version="1.0.0",
)


# ---------------------------------------------------------------------------
# CORS
# ---------------------------------------------------------------------------

origins = [
    x.strip()
    for x in os.getenv(
        "ALLOWED_ORIGINS",
        "*",
    ).split(",")
    if x.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins or ["*"],
    allow_credentials=False,
    allow_methods=[
        "GET",
        "POST",
        "OPTIONS",
    ],
    allow_headers=["*"],
)


# ---------------------------------------------------------------------------
# Static files
# ---------------------------------------------------------------------------

if (ROOT / "css").is_dir():
    app.mount(
        "/css",
        StaticFiles(directory=ROOT / "css"),
        name="css",
    )

if (ROOT / "js").is_dir():
    app.mount(
        "/js",
        StaticFiles(directory=ROOT / "js"),
        name="js",
    )


# ---------------------------------------------------------------------------
# Request models
# ---------------------------------------------------------------------------

class AdvisoryRequest(BaseModel):
    crop: str = Field(
        min_length=1,
        max_length=100,
    )

    location: str = Field(
        min_length=1,
        max_length=200,
    )

    soilType: str = Field(
        default="Not sure",
        max_length=100,
    )

    notes: str = Field(
        default="",
        max_length=2000,
    )


class IntelligenceRequest(BaseModel):
    location: str = Field(
        min_length=1,
        max_length=200,
    )


class DiseaseRequest(BaseModel):
    imageBase64: str = Field(
        min_length=20,
    )

    crop: str = Field(
        default="",
        max_length=100,
    )


# ---------------------------------------------------------------------------
# Gemini client
# ---------------------------------------------------------------------------

def get_client():
    """
    Create and return a Gemini client.

    The API key is read from GEMINI_API_KEY.
    """

    if genai is None:
        raise HTTPException(
            status_code=503,
            detail="Gemini SDK is not installed.",
        )

    key = os.getenv("GEMINI_API_KEY")

    if not key:
        raise HTTPException(
            status_code=503,
            detail="GEMINI_API_KEY is not configured.",
        )

    return genai.Client(
        api_key=key,
    )


# ---------------------------------------------------------------------------
# Gemini generation
# ---------------------------------------------------------------------------

def generate(
    prompt: str,
    *,
    image_bytes: bytes | None = None,
    mime_type: str | None = None,
) -> str:
    """
    Generate a response from Gemini.

    Gemini is explicitly instructed through response_mime_type to return
    application/json. This prevents the common problem where the model
    returns Markdown or explanatory text around the JSON.
    """

    client = get_client()

    contents: Any = prompt

    if image_bytes is not None:
        contents = [
            prompt,
            types.Part.from_bytes(
                data=image_bytes,
                mime_type=mime_type or "image/jpeg",
            ),
        ]

    response = client.models.generate_content(
        model=MODEL,
        contents=contents,
        config=types.GenerateContentConfig(
            temperature=0.2,
            max_output_tokens=1200,
            response_mime_type="application/json",
        ),
    )

    text = getattr(
        response,
        "text",
        None,
    )

    if not text:
        raise RuntimeError(
            "Gemini returned no text."
        )

    return text.strip()


# ---------------------------------------------------------------------------
# JSON parser
# ---------------------------------------------------------------------------

def json_from_model(
    text: str,
) -> dict[str, Any]:
    """
    Safely parse Gemini's JSON response.

    Supports:
    1. Normal JSON
    2. JSON wrapped in Markdown fences
    3. JSON with accidental text before/after it
    """

    if not text:
        raise ValueError(
            "Gemini returned an empty response."
        )

    text = text.strip()

    # ---------------------------------------------------------------
    # 1. Direct JSON
    # ---------------------------------------------------------------

    try:
        value = json.loads(text)

        if isinstance(value, dict):
            return value

    except json.JSONDecodeError:
        pass

    # ---------------------------------------------------------------
    # 2. Markdown JSON fence
    # ---------------------------------------------------------------

    cleaned = re.sub(
        r"^```(?:json)?\s*",
        "",
        text,
        flags=re.IGNORECASE,
    )

    cleaned = re.sub(
        r"\s*```$",
        "",
        cleaned,
        flags=re.IGNORECASE,
    ).strip()

    try:
        value = json.loads(cleaned)

        if isinstance(value, dict):
            return value

    except json.JSONDecodeError:
        pass

    # ---------------------------------------------------------------
    # 3. Extract JSON object from surrounding text
    # ---------------------------------------------------------------

    start = text.find("{")
    end = text.rfind("}")

    if (
        start != -1
        and end != -1
        and end > start
    ):
        candidate = text[
            start:end + 1
        ]

        try:
            value = json.loads(candidate)

            if isinstance(value, dict):
                return value

        except json.JSONDecodeError:
            pass

    # ---------------------------------------------------------------
    # Nothing worked
    # ---------------------------------------------------------------

    logger.error(
        "Gemini returned non-JSON response: %s",
        text[:2000],
    )

    raise ValueError(
        "Gemini response was not valid JSON."
    )


# ---------------------------------------------------------------------------
# Health check
# ---------------------------------------------------------------------------

@app.get("/health")
def health():
    return {
        "status": "ok",
        "gemini_configured": bool(
            os.getenv("GEMINI_API_KEY")
        ),
        "model": MODEL,
    }


# ---------------------------------------------------------------------------
# Agricultural Advisory
# ---------------------------------------------------------------------------

@app.post("/api/advisory")
def advisory(
    data: AdvisoryRequest,
):
    prompt = f"""
You are an agricultural advisor for farmers in India.

Give practical, conservative and easy-to-understand agricultural advice.

Do not invent live weather, satellite observations, soil sensor data,
market prices, or other real-time information.

Farm location:
{data.location}

Crop:
{data.crop}

Soil type:
{data.soilType}

Additional notes:
{data.notes or "None"}

Return a JSON object only.

The JSON must contain exactly these five keys:

{{
  "summary": "string",
  "irrigation": "string",
  "fertilization": "string",
  "pestRisk": "string",
  "timing": "string"
}}

Requirements:

- Every value must be a string.
- Keep each value concise and actionable.
- Mention uncertainty when the supplied information is insufficient.
- Do not provide unsafe pesticide doses.
- Do not claim live weather or satellite information.
- Do not use Markdown.
- Do not wrap the JSON in a code block.
- Do not add text before or after the JSON.
"""

    try:
        result = json_from_model(
            generate(prompt)
        )

        return {
            "status": "success",
            "demo": False,
            "summary": str(
                result.get(
                    "summary",
                    "",
                )
            ),
            "irrigation": str(
                result.get(
                    "irrigation",
                    "",
                )
            ),
            "fertilization": str(
                result.get(
                    "fertilization",
                    "",
                )
            ),
            "pestRisk": str(
                result.get(
                    "pestRisk",
                    "",
                )
            ),
            "timing": str(
                result.get(
                    "timing",
                    "",
                )
            ),
        }

    except HTTPException:
        raise

    except Exception as exc:
        logger.exception(
            "Advisory failed"
        )

        raise HTTPException(
            status_code=502,
            detail=(
                f"Gemini advisory failed: {exc}"
            ),
        ) from exc


# ---------------------------------------------------------------------------
# Disease Detection
# ---------------------------------------------------------------------------

@app.post("/api/disease")
def disease(
    data: DiseaseRequest,
):
    # Accept PNG, JPEG and JPG data URLs.
    match = re.match(
        r"^data:(image/(?:png|jpeg|jpg));base64,(.+)$",
        data.imageBase64,
        flags=re.IGNORECASE | re.DOTALL,
    )

    if not match:
        raise HTTPException(
            status_code=400,
            detail=(
                "imageBase64 must be a PNG or JPEG data URL."
            ),
        )

    mime = match.group(1).lower()

    if mime == "image/jpg":
        mime = "image/jpeg"

    try:
        image_bytes = base64.b64decode(
            match.group(2),
            validate=True,
        )

    except Exception as exc:
        raise HTTPException(
            status_code=400,
            detail="Invalid base64 image.",
        ) from exc

    if len(image_bytes) > MAX_IMAGE_BYTES:
        raise HTTPException(
            status_code=413,
            detail="Image is too large.",
        )

    prompt = f"""
You are a cautious crop-disease screening assistant.

Analyze the attached plant image.

This is a preliminary assessment, not a definitive diagnosis.

Known crop:
{data.crop or "unknown"}

Return a JSON object only.

The JSON must contain exactly these keys:

{{
  "disease": "string",
  "confidence": 0,
  "description": "string",
  "treatment": "string"
}}

Requirements:

- confidence must be a number from 0 to 1.
- If the image is unclear, say so.
- If the plant cannot be identified, say so.
- Lower confidence when the evidence is weak.
- Do not recommend unsafe pesticide doses.
- Give general treatment and management guidance.
- Recommend confirmation by a local agricultural expert for serious outbreaks.
- Do not use Markdown.
- Do not wrap the JSON in a code block.
- Do not add text before or after the JSON.
"""

    try:
        result = json_from_model(
            generate(
                prompt,
                image_bytes=image_bytes,
                mime_type=mime,
            )
        )

        try:
            confidence = float(
                result.get(
                    "confidence",
                    0,
                )
            )

        except (
            TypeError,
            ValueError,
        ):
            confidence = 0.0

        confidence = max(
            0.0,
            min(
                1.0,
                confidence,
            ),
        )

        return {
            "status": "success",
            "demo": False,
            "disease": str(
                result.get(
                    "disease",
                    "Unable to determine",
                )
            ),
            "confidence": confidence,
            "description": str(
                result.get(
                    "description",
                    "",
                )
            ),
            "treatment": str(
                result.get(
                    "treatment",
                    "",
                )
            ),
        }

    except HTTPException:
        raise

    except Exception as exc:
        logger.exception(
            "Disease analysis failed"
        )

        raise HTTPException(
            status_code=502,
            detail=(
                f"Gemini image analysis failed: {exc}"
            ),
        ) from exc


# ---------------------------------------------------------------------------
# Agricultural Intelligence
# ---------------------------------------------------------------------------

@app.post("/api/intelligence")
def intelligence(
    data: IntelligenceRequest,
):
    prompt = f"""
You are an agricultural field-intelligence assistant for India.

Location supplied by the farmer:
{data.location}

You do NOT have direct satellite, weather-station, or Earth Engine access
in this endpoint.

Therefore, do not claim that these are measured live observations.

Provide a clearly labeled planning estimate based only on the supplied
location and general agronomic reasoning.

Return a JSON object only.

The JSON must contain exactly these keys:

{{
  "ndvi": 0.5,
  "soilMoisture": 50,
  "temperature": 25,
  "rainfall": 0,
  "ndviHistory": [0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
  "note": "short explanation"
}}

Requirements:

- ndvi must be a number between 0 and 1.
- soilMoisture must be an integer from 0 to 100.
- temperature must be a number.
- rainfall must be a number.
- ndviHistory must contain exactly 6 numbers between 0 and 1.
- note must be a short string.
- Clearly state that this is a planning estimate, not a live measurement.
- Do not use Markdown.
- Do not wrap the JSON in a code block.
- Do not add text before or after the JSON.
"""

    try:
        result = json_from_model(
            generate(prompt)
        )

        # ---------------------------------------------------------------
        # NDVI
        # ---------------------------------------------------------------

        try:
            ndvi = float(
                result.get(
                    "ndvi",
                    0.5,
                )
            )

        except (
            TypeError,
            ValueError,
        ):
            ndvi = 0.5

        ndvi = max(
            0.0,
            min(
                1.0,
                ndvi,
            ),
        )

        # ---------------------------------------------------------------
        # Soil moisture
        # ---------------------------------------------------------------

        try:
            soil_moisture = int(
                float(
                    result.get(
                        "soilMoisture",
                        50,
                    )
                )
            )

        except (
            TypeError,
            ValueError,
        ):
            soil_moisture = 50

        soil_moisture = max(
            0,
            min(
                100,
                soil_moisture,
            ),
        )

        # ---------------------------------------------------------------
        # Temperature
        # ---------------------------------------------------------------

        try:
            temperature = float(
                result.get(
                    "temperature",
                    25,
                )
            )

        except (
            TypeError,
            ValueError,
        ):
            temperature = 25.0

        # ---------------------------------------------------------------
        # Rainfall
        # ---------------------------------------------------------------

        try:
            rainfall = float(
                result.get(
                    "rainfall",
                    0,
                )
            )

        except (
            TypeError,
            ValueError,
        ):
            rainfall = 0.0

        # ---------------------------------------------------------------
        # NDVI history
        # ---------------------------------------------------------------

        raw_history = result.get(
            "ndviHistory",
            [],
        )

        if not isinstance(
            raw_history,
            list,
        ):
            raw_history = []

        history = []

        for value in raw_history:
            try:
                number = float(value)

                number = max(
                    0.0,
                    min(
                        1.0,
                        number,
                    ),
                )

                history.append(number)

            except (
                TypeError,
                ValueError,
            ):
                continue

        # Exactly six values are required.
        if len(history) != 6:
            history = [ndvi] * 6

        # ---------------------------------------------------------------
        # Note
        # ---------------------------------------------------------------

        note = str(
            result.get(
                "note",
                (
                    "Planning estimate only; "
                    "no live satellite feed is connected."
                ),
            )
        )

        return {
            "status": "success",
            "demo": True,
            "ndvi": ndvi,
            "soilMoisture": soil_moisture,
            "temperature": temperature,
            "rainfall": rainfall,
            "ndviHistory": history,
            "note": note,
        }

    except HTTPException:
        raise

    except Exception as exc:
        logger.exception(
            "Intelligence failed"
        )

        raise HTTPException(
            status_code=502,
            detail=(
                f"Gemini intelligence failed: {exc}"
            ),
        ) from exc


# ---------------------------------------------------------------------------
# Frontend
# ---------------------------------------------------------------------------

@app.get("/")
def index():
    return FileResponse(
        ROOT / "index.html"
    )


@app.get("/{path:path}")
def frontend(
    path: str,
):
    """
    Serve frontend files while preventing API routes from falling through
    to the frontend handler.
    """

    if (
        path.startswith("api/")
        or path == "health"
    ):
        raise HTTPException(
            status_code=404,
            detail="Not found",
        )

    candidate = ROOT / path

    try:
        resolved_candidate = candidate.resolve()

        # Security check: do not serve files outside ROOT.
        if (
            resolved_candidate.is_file()
            and ROOT in resolved_candidate.parents
        ):
            return FileResponse(
                resolved_candidate
            )

    except Exception:
        pass

    # SPA fallback.
    return FileResponse(
        ROOT / "index.html"
    )
