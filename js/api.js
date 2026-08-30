const API_BASE = ""; // Same-origin in production and local Docker/uvicorn.

async function apiPost(path, payload) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data = null;
  try { data = await response.json(); } catch (_) {}

  if (!response.ok) {
    throw new Error(data?.detail || `Request failed (${response.status})`);
  }
  return data;
}

async function getFarmAdvisory({ crop, location, soilType = "Not sure", notes = "" }) {
  return apiPost("/api/advisory", { crop, location, soilType, notes });
}

async function diagnoseCrop({ imageBase64, crop = "" }) {
  return apiPost("/api/disease", { imageBase64, crop });
}

async function getFarmIntelligence({ location }) {
  return apiPost("/api/intelligence", { location });
}
