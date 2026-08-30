const AGRIT_LANG_KEY = "agrit_lang";

const TRANSLATIONS = {
  en: {
    "nav.home": "Home",
    "nav.advisory": "Farm Advisory",
    "nav.disease": "Disease Detect",
    "nav.intelligence": "Farm Intelligence",

    "footer.tagline": "AI-powered agricultural intelligence for a climate-resilient India.",
    "footer.navigate": "Navigate",
    "footer.technology": "Technology",
    "footer.disease": "Disease Detection",
    "footer.copyright": "© 2026 AgriT AI",
    "footer.madefor": "Made for farmers, powered by open agri-data.",

    "home.title": "AgriT — AI-powered agricultural guidance",
    "home.metaDescription": "AgriT brings weather, soil, and satellite data together with AI to give farmers clear, local advisory.",
    "home.heroKicker": "AI-powered agricultural intelligence",
    "home.heroTitle1": "Farm decisions,",
    "home.heroTitle2": "backed by data.",
    "home.heroSub": "AgriT combines weather, soil, and satellite data with Google Gemini to turn scattered signals into one clear recommendation for your farm.",
    "home.btnAdvisory": "Get Farm Advisory",
    "home.btnDiagnose": "Diagnose a Crop",

    "home.problemEyebrow": "The problem",
    "home.problemTitle": "Farm decisions shouldn't depend on guesswork.",
    "home.problemSub": "Weather, soil, satellite imagery, and crop knowledge usually live in separate places. AgriT brings those signals together into one localised, actionable answer.",
    "home.problem1Title": "Changing weather",
    "home.problem1Desc": "Unexpected rainfall, heat, and shifting seasons complicate everyday crop decisions.",
    "home.problem2Title": "Soil uncertainty",
    "home.problem2Desc": "Farmers need clear, actionable information about soil health and crop requirements.",
    "home.problem3Title": "Crop diseases",
    "home.problem3Desc": "Disease identification often happens too late to prevent yield loss.",
    "home.problem4Title": "Fragmented data",
    "home.problem4Desc": "Weather, soil, satellite, and agronomic information usually exist in separate systems.",

    "home.howEyebrow": "How it works",
    "home.howTitle": "From raw signal to a plain recommendation.",
    "home.step1Title": "Farm information",
    "home.step1Desc": "You share location, crop, and soil type.",
    "home.step2Title": "Soil + weather + satellite",
    "home.step2Desc": "AgriT pulls current conditions for that exact location.",
    "home.step3Title": "Gemini AI analysis",
    "home.step3Desc": "The signals are combined and reasoned over together.",
    "home.step4Title": "Actionable advisory",
    "home.step4Desc": "You get one clear recommendation, not raw data.",

    "home.mainEyebrow": "Main features",
    "home.mainTitle": "Three tools. One farm.",
    "home.feature1Title": "AI Farm Advisory",
    "home.feature1Desc": "Get recommendations based on your farm's location, crop, soil, and current environmental conditions.",
    "home.feature1Btn": "Explore Advisory →",
    "home.feature2Title": "Disease Detection",
    "home.feature2Desc": "Upload a crop photo for an AI-powered preliminary disease assessment and treatment guidance.",
    "home.feature2Btn": "Check Crop →",
    "home.feature3Title": "Farm Intelligence",
    "home.feature3Desc": "Explore satellite-derived crop-health indicators and environmental conditions for your fields.",
    "home.feature3Btn": "View Intelligence →",

    "home.techEyebrow": "Technology",
    "home.techTitle": "Built on infrastructure that scales with a season.",
    "home.techGeminiDesc": "AI advisory & multimodal analysis",
    "home.techEarthEngineDesc": "Satellite intelligence",
    "home.techFirebaseDesc": "Data & authentication",
    "home.techMapsDesc": "Location intelligence",
    "home.techCloudRunDesc": "Scalable backend",

    "home.ctaTitle1": "Better data. Better decisions.",
    "home.ctaTitle2": "Better farming.",

    "advisory.title": "Farm Advisory — AgriT",
    "advisory.eyebrow": "Farm Advisory",
    "advisory.heroTitle": "Tell us about your field. We'll tell you what to do next.",
    "advisory.heroSub": "AgriT reads your location's weather and soil conditions alongside your crop stage, then asks Gemini for one clear recommendation — not raw numbers.",
    "advisory.formTitle": "Farm details",
    "advisory.locationLabel": "Farm location",
    "advisory.locationPlaceholder": "Village, district or lat, long",
    "advisory.locationHint": "Used to pull local weather and satellite data.",
    "advisory.cropLabel": "Crop",
    "advisory.selectCrop": "Select crop",
    "advisory.soilLabel": "Soil type",
    "advisory.selectSoil": "Select soil type",
    "advisory.notesLabel": "Anything else worth knowing?",
    "advisory.notesOptional": "(optional)",
    "advisory.notesPlaceholder": "e.g. sown 3 weeks ago, irrigated by canal, noticed yellowing on lower leaves…",
    "advisory.submitBtn": "Get Advisory",
    "advisory.apiNote1": "This form calls",
    "advisory.apiNote2": ", which posts to",
    "advisory.apiNote3": "on your backend. Connected to the production backend.",
    "advisory.resultEmpty": "Fill in your farm details and get your first advisory.",
    "advisory.loading": "Reading soil, weather and satellite data…",
    "advisory.badge": "Advisory",
    "advisory.badgeDemo": "Demo advisory — connect a backend for live data",
    "advisory.irrigation": "Irrigation",
    "advisory.fertilization": "Fertilization",
    "advisory.pestRisk": "Pest risk",
    "advisory.timing": "Timing",
    "advisory.errorMsg": "Couldn't generate an advisory right now. Please try again in a moment.",

    "disease.title": "Disease Detection — AgriT",
    "disease.eyebrow": "Disease Detection",
    "disease.heroTitle": "Photograph the leaf. Get a preliminary read in seconds.",
    "disease.heroSub": "Upload a clear photo of the affected leaf or plant. Gemini's multimodal analysis compares it against known crop-disease patterns and suggests next steps.",
    "disease.formTitle": "Crop photo",
    "disease.cropLabel": "Crop",
    "disease.cropOptionalHint": "(optional, improves accuracy)",
    "disease.notSureSkip": "Not sure / skip",
    "disease.photoLabel": "Leaf or plant photo",
    "disease.dropzoneStrong": "Click to upload",
    "disease.dropzoneRest": "or drag a photo here",
    "disease.dropzoneHint": "JPG or PNG, close-up of the affected area works best",
    "disease.submitBtn": "Diagnose Crop",
    "disease.apiNote1": "This form calls",
    "disease.apiNote2": ", which posts the image to",
    "disease.apiNote3": "on your backend. Connected to the production backend.",
    "disease.resultEmpty": "Upload a photo to run a preliminary assessment.",
    "disease.loading": "Analysing image with Gemini…",
    "disease.badge": "Assessment",
    "disease.badgeDemo": "Demo assessment — connect a backend for live data",
    "disease.confidenceLabel": "Confidence",
    "disease.whatWeSee": "What we see",
    "disease.suggestedTreatment": "Suggested treatment",
    "disease.disclaimer": "Preliminary AI assessment only — for anything spreading fast or affecting most of the field, confirm with your local agricultural officer.",
    "disease.errorMsg": "Couldn't analyse this image right now. Please try again in a moment.",

    "intelligence.title": "Farm Intelligence — AgriT",
    "intelligence.eyebrow": "Farm Intelligence",
    "intelligence.heroTitle": "See your field the way a satellite does.",
    "intelligence.heroSub": "Pull vegetation health, soil moisture, and short-term conditions for any location, and track how crop health has trended over the last few passes.",
    "intelligence.formTitle": "Location",
    "intelligence.locationLabel": "Farm location",
    "intelligence.locationPlaceholder": "Village, district or lat, long",
    "intelligence.locationHint": "We'll fetch the latest satellite pass and weather station data for this point.",
    "intelligence.submitBtn": "Load Field Data",
    "intelligence.apiNote1": "This form calls",
    "intelligence.apiNote2": ", which posts to",
    "intelligence.apiNote3": "on your backend. Connected to the production backend.",
    "intelligence.resultEmpty": "Enter a location to load current field indicators.",
    "intelligence.loading": "Pulling satellite and weather data…",
    "intelligence.badge": "Field data",
    "intelligence.badgeDemo": "Demo data — connect a backend for live data",
    "intelligence.ndviLabel": "NDVI",
    "intelligence.moistureLabel": "Soil moisture",
    "intelligence.tempLabel": "Air temp",
    "intelligence.ndviTrend": "NDVI trend · last 6 passes",
    "intelligence.rainfallTitle": "Rainfall (7 days)",
    "intelligence.rainfallText": "{mm}mm recorded in the past week for this location.",
    "intelligence.errorMsg": "Couldn't load field data right now. Please try again in a moment.",

    "crop.wheat": "Wheat", "crop.rice": "Rice", "crop.cotton": "Cotton",
    "crop.sugarcane": "Sugarcane", "crop.maize": "Maize", "crop.soybean": "Soybean",
    "crop.tomato": "Tomato", "crop.other": "Other",

    "soil.alluvial": "Alluvial", "soil.black": "Black (regur)", "soil.redLaterite": "Red & laterite",
    "soil.sandyLoam": "Sandy loam", "soil.clay": "Clay", "soil.notSure": "Not sure",

    "ticker.moisture": "Soil moisture", "ticker.ndvi": "NDVI", "ticker.rainfall": "Rainfall (7d)",
    "ticker.temp": "Air temp", "ticker.humidity": "Humidity", "ticker.wind": "Wind",
    "ticker.confidence": "Advisory confidence · high", "ticker.pass": "Satellite pass · 6h ago"
  },

  hi: {
    "nav.home": "होम",
    "nav.advisory": "कृषि सलाह",
    "nav.disease": "रोग पहचान",
    "nav.intelligence": "कृषि इंटेलिजेंस",

    "footer.tagline": "जलवायु के अनुकूल भारत के लिए एआई-संचालित कृषि इंटेलिजेंस।",
    "footer.navigate": "नेविगेट करें",
    "footer.technology": "तकनीक",
    "footer.disease": "रोग पहचान",
    "footer.copyright": "© 2026 AgriT AI",
    "footer.madefor": "किसानों के लिए बनाया गया, खुले कृषि-डेटा द्वारा संचालित।",

    "home.title": "AgriT — एआई-संचालित कृषि मार्गदर्शन",
    "home.metaDescription": "AgriT मौसम, मिट्टी और सैटेलाइट डेटा को एआई के साथ जोड़कर किसानों को स्पष्ट, स्थानीय सलाह देता है।",
    "home.heroKicker": "एआई-संचालित कृषि इंटेलिजेंस",
    "home.heroTitle1": "खेती के फैसले,",
    "home.heroTitle2": "डेटा के भरोसे।",
    "home.heroSub": "AgriT मौसम, मिट्टी और सैटेलाइट डेटा को Google Gemini के साथ जोड़कर बिखरे संकेतों को आपके खेत के लिए एक स्पष्ट सिफारिश में बदल देता है।",
    "home.btnAdvisory": "कृषि सलाह लें",
    "home.btnDiagnose": "फसल की जांच करें",

    "home.problemEyebrow": "समस्या",
    "home.problemTitle": "खेती के फैसले अंदाजे पर आधारित नहीं होने चाहिए।",
    "home.problemSub": "मौसम, मिट्टी, सैटेलाइट इमेजरी और फसल की जानकारी आमतौर पर अलग-अलग जगहों पर होती है। AgriT इन संकेतों को जोड़कर एक स्थानीय, कार्रवाई योग्य जवाब देता है।",
    "home.problem1Title": "बदलता मौसम",
    "home.problem1Desc": "अचानक बारिश, गर्मी और बदलते मौसम रोज़ के फसल फैसलों को मुश्किल बनाते हैं।",
    "home.problem2Title": "मिट्टी की अनिश्चितता",
    "home.problem2Desc": "किसानों को मिट्टी की सेहत और फसल की जरूरतों के बारे में स्पष्ट, कार्रवाई योग्य जानकारी चाहिए।",
    "home.problem3Title": "फसल रोग",
    "home.problem3Desc": "रोग की पहचान अक्सर उपज नुकसान रोकने के लिए बहुत देर से होती है।",
    "home.problem4Title": "बिखरा हुआ डेटा",
    "home.problem4Desc": "मौसम, मिट्टी, सैटेलाइट और कृषि जानकारी आमतौर पर अलग-अलग सिस्टम में होती है।",

    "home.howEyebrow": "यह कैसे काम करता है",
    "home.howTitle": "कच्चे संकेत से एक स्पष्ट सिफारिश तक।",
    "home.step1Title": "खेत की जानकारी",
    "home.step1Desc": "आप स्थान, फसल और मिट्टी का प्रकार साझा करते हैं।",
    "home.step2Title": "मिट्टी + मौसम + सैटेलाइट",
    "home.step2Desc": "AgriT उस स्थान की मौजूदा स्थितियां प्राप्त करता है।",
    "home.step3Title": "Gemini एआई विश्लेषण",
    "home.step3Desc": "सभी संकेतों को मिलाकर एक साथ विश्लेषण किया जाता है।",
    "home.step4Title": "कार्रवाई योग्य सलाह",
    "home.step4Desc": "आपको एक स्पष्ट सिफारिश मिलती है, कच्चा डेटा नहीं।",

    "home.mainEyebrow": "मुख्य सुविधाएं",
    "home.mainTitle": "तीन उपकरण। एक खेत।",
    "home.feature1Title": "एआई कृषि सलाह",
    "home.feature1Desc": "अपने खेत के स्थान, फसल, मिट्टी और मौजूदा पर्यावरणीय स्थितियों के आधार पर सिफारिशें पाएं।",
    "home.feature1Btn": "सलाह देखें →",
    "home.feature2Title": "रोग पहचान",
    "home.feature2Desc": "एआई-संचालित प्रारंभिक रोग आकलन और उपचार मार्गदर्शन के लिए फसल की फोटो अपलोड करें।",
    "home.feature2Btn": "फसल जांचें →",
    "home.feature3Title": "कृषि इंटेलिजेंस",
    "home.feature3Desc": "अपने खेतों के लिए सैटेलाइट-आधारित फसल-स्वास्थ्य संकेतक और पर्यावरणीय स्थितियां देखें।",
    "home.feature3Btn": "इंटेलिजेंस देखें →",

    "home.techEyebrow": "तकनीक",
    "home.techTitle": "ऐसे इंफ्रास्ट्रक्चर पर बना जो पूरे सीज़न के साथ बढ़ता है।",
    "home.techGeminiDesc": "एआई सलाह और मल्टीमॉडल विश्लेषण",
    "home.techEarthEngineDesc": "सैटेलाइट इंटेलिजेंस",
    "home.techFirebaseDesc": "डेटा और प्रमाणीकरण",
    "home.techMapsDesc": "स्थान इंटेलिजेंस",
    "home.techCloudRunDesc": "स्केलेबल बैकएंड",

    "home.ctaTitle1": "बेहतर डेटा। बेहतर फैसले।",
    "home.ctaTitle2": "बेहतर खेती।",

    "advisory.title": "कृषि सलाह — AgriT",
    "advisory.eyebrow": "कृषि सलाह",
    "advisory.heroTitle": "अपने खेत के बारे में बताएं। हम बताएंगे आगे क्या करना है।",
    "advisory.heroSub": "AgriT आपके स्थान का मौसम और मिट्टी की स्थिति आपकी फसल की अवस्था के साथ पढ़ता है, फिर Gemini से एक स्पष्ट सिफारिश मांगता है — कच्चे आंकड़े नहीं।",
    "advisory.formTitle": "खेत का विवरण",
    "advisory.locationLabel": "खेत का स्थान",
    "advisory.locationPlaceholder": "गांव, जिला या अक्षांश, देशांतर",
    "advisory.locationHint": "स्थानीय मौसम और सैटेलाइट डेटा प्राप्त करने के लिए उपयोग किया जाता है।",
    "advisory.cropLabel": "फसल",
    "advisory.selectCrop": "फसल चुनें",
    "advisory.soilLabel": "मिट्टी का प्रकार",
    "advisory.selectSoil": "मिट्टी का प्रकार चुनें",
    "advisory.notesLabel": "और कुछ बताना चाहेंगे?",
    "advisory.notesOptional": "(वैकल्पिक)",
    "advisory.notesPlaceholder": "जैसे 3 हफ्ते पहले बोई गई, नहर से सिंचाई, निचली पत्तियों पर पीलापन देखा…",
    "advisory.submitBtn": "सलाह लें",
    "advisory.apiNote1": "यह फॉर्म",
    "advisory.apiNote2": "को कॉल करता है, जो आपके बैकएंड पर",
    "advisory.apiNote3": "पर भेजता है। अभी कोई बैकएंड जुड़ा नहीं है — डेमो डेटा दिखाया जा रहा है।",
    "advisory.resultEmpty": "अपने खेत का विवरण भरें और अपनी पहली सलाह पाएं।",
    "advisory.loading": "मिट्टी, मौसम और सैटेलाइट डेटा पढ़ा जा रहा है…",
    "advisory.badge": "सलाह",
    "advisory.badgeDemo": "डेमो सलाह — लाइव डेटा के लिए बैकएंड जोड़ें",
    "advisory.irrigation": "सिंचाई",
    "advisory.fertilization": "उर्वरक",
    "advisory.pestRisk": "कीट जोखिम",
    "advisory.timing": "समय",
    "advisory.errorMsg": "अभी सलाह तैयार नहीं हो सकी। कृपया थोड़ी देर बाद फिर से कोशिश करें।",

    "disease.title": "रोग पहचान — AgriT",
    "disease.eyebrow": "रोग पहचान",
    "disease.heroTitle": "पत्ती की फोटो लें। कुछ सेकंड में प्रारंभिक जानकारी पाएं।",
    "disease.heroSub": "प्रभावित पत्ती या पौधे की साफ फोटो अपलोड करें। Gemini का मल्टीमॉडल विश्लेषण इसे ज्ञात फसल-रोग पैटर्न से मिलाकर अगले कदम सुझाता है।",
    "disease.formTitle": "फसल की फोटो",
    "disease.cropLabel": "फसल",
    "disease.cropOptionalHint": "(वैकल्पिक, सटीकता बढ़ाता है)",
    "disease.notSureSkip": "पता नहीं / छोड़ें",
    "disease.photoLabel": "पत्ती या पौधे की फोटो",
    "disease.dropzoneStrong": "अपलोड करने के लिए क्लिक करें",
    "disease.dropzoneRest": "या यहां फोटो खींचकर छोड़ें",
    "disease.dropzoneHint": "JPG या PNG, प्रभावित हिस्से का क्लोज़-अप सबसे अच्छा रहता है",
    "disease.submitBtn": "फसल की जांच करें",
    "disease.apiNote1": "यह फॉर्म",
    "disease.apiNote2": "को कॉल करता है, जो फोटो को आपके बैकएंड पर",
    "disease.apiNote3": "पर भेजता है। अभी कोई बैकएंड जुड़ा नहीं है — डेमो डेटा दिखाया जा रहा है।",
    "disease.resultEmpty": "प्रारंभिक आकलन के लिए एक फोटो अपलोड करें।",
    "disease.loading": "Gemini से छवि का विश्लेषण किया जा रहा है…",
    "disease.badge": "आकलन",
    "disease.badgeDemo": "डेमो आकलन — लाइव डेटा के लिए बैकएंड जोड़ें",
    "disease.confidenceLabel": "विश्वास स्तर",
    "disease.whatWeSee": "हमें क्या दिखा",
    "disease.suggestedTreatment": "सुझाया गया उपचार",
    "disease.disclaimer": "यह केवल प्रारंभिक एआई आकलन है — तेज़ी से फैलने वाली या अधिकतर खेत को प्रभावित करने वाली किसी भी समस्या के लिए अपने स्थानीय कृषि अधिकारी से पुष्टि करें।",
    "disease.errorMsg": "अभी इस फोटो का विश्लेषण नहीं हो सका। कृपया थोड़ी देर बाद फिर से कोशिश करें।",

    "intelligence.title": "कृषि इंटेलिजेंस — AgriT",
    "intelligence.eyebrow": "कृषि इंटेलिजेंस",
    "intelligence.heroTitle": "अपने खेत को वैसे देखें जैसे एक सैटेलाइट देखता है।",
    "intelligence.heroSub": "किसी भी स्थान के लिए वनस्पति स्वास्थ्य, मिट्टी की नमी और तत्काल स्थितियां प्राप्त करें, और पिछले कुछ पासों में फसल स्वास्थ्य के रुझान को ट्रैक करें।",
    "intelligence.formTitle": "स्थान",
    "intelligence.locationLabel": "खेत का स्थान",
    "intelligence.locationPlaceholder": "गांव, जिला या अक्षांश, देशांतर",
    "intelligence.locationHint": "हम इस स्थान के लिए नवीनतम सैटेलाइट पास और मौसम स्टेशन डेटा प्राप्त करेंगे।",
    "intelligence.submitBtn": "फील्ड डेटा लोड करें",
    "intelligence.apiNote1": "यह फॉर्म",
    "intelligence.apiNote2": "को कॉल करता है, जो आपके बैकएंड पर",
    "intelligence.apiNote3": "पर भेजता है। अभी कोई बैकएंड जुड़ा नहीं है — डेमो डेटा दिखाया जा रहा है।",
    "intelligence.resultEmpty": "मौजूदा फील्ड संकेतक लोड करने के लिए एक स्थान दर्ज करें।",
    "intelligence.loading": "सैटेलाइट और मौसम डेटा प्राप्त किया जा रहा है…",
    "intelligence.badge": "फील्ड डेटा",
    "intelligence.badgeDemo": "डेमो डेटा — लाइव डेटा के लिए बैकएंड जोड़ें",
    "intelligence.ndviLabel": "NDVI",
    "intelligence.moistureLabel": "मिट्टी की नमी",
    "intelligence.tempLabel": "हवा का तापमान",
    "intelligence.ndviTrend": "NDVI रुझान · पिछले 6 पास",
    "intelligence.rainfallTitle": "वर्षा (7 दिन)",
    "intelligence.rainfallText": "इस स्थान के लिए पिछले सप्ताह {mm}मिमी वर्षा दर्ज की गई।",
    "intelligence.errorMsg": "अभी फील्ड डेटा लोड नहीं हो सका। कृपया थोड़ी देर बाद फिर से कोशिश करें।",

    "crop.wheat": "गेहूं", "crop.rice": "धान", "crop.cotton": "कपास",
    "crop.sugarcane": "गन्ना", "crop.maize": "मक्का", "crop.soybean": "सोयाबीन",
    "crop.tomato": "टमाटर", "crop.other": "अन्य",

    "soil.alluvial": "जलोढ़", "soil.black": "काली मिट्टी (रेगुर)", "soil.redLaterite": "लाल व लैटेराइट",
    "soil.sandyLoam": "बलुई दोमट", "soil.clay": "चिकनी मिट्टी", "soil.notSure": "पता नहीं",

    "ticker.moisture": "मिट्टी की नमी", "ticker.ndvi": "NDVI", "ticker.rainfall": "वर्षा (7दिन)",
    "ticker.temp": "हवा का तापमान", "ticker.humidity": "आर्द्रता", "ticker.wind": "हवा",
    "ticker.confidence": "सलाह विश्वास · उच्च", "ticker.pass": "सैटेलाइट पास · 6घं पहले"
  },

  mr: {
    "nav.home": "मुख्यपृष्ठ",
    "nav.advisory": "शेती सल्ला",
    "nav.disease": "रोग ओळख",
    "nav.intelligence": "शेती इंटेलिजन्स",

    "footer.tagline": "हवामान-सक्षम भारतासाठी एआय-चालित कृषी इंटेलिजन्स.",
    "footer.navigate": "नेव्हिगेट करा",
    "footer.technology": "तंत्रज्ञान",
    "footer.disease": "रोग ओळख",
    "footer.copyright": "© 2026 AgriT AI",
    "footer.madefor": "शेतकऱ्यांसाठी बनवलेले, खुल्या कृषी-डेटावर आधारित.",

    "home.title": "AgriT — एआय-चालित कृषी मार्गदर्शन",
    "home.metaDescription": "AgriT हवामान, माती आणि उपग्रह डेटा एआयसह एकत्र करून शेतकऱ्यांना स्पष्ट, स्थानिक सल्ला देते.",
    "home.heroKicker": "एआय-चालित कृषी इंटेलिजन्स",
    "home.heroTitle1": "शेतीचे निर्णय,",
    "home.heroTitle2": "डेटावर आधारित.",
    "home.heroSub": "AgriT हवामान, माती आणि उपग्रह डेटा Google Gemini सोबत जोडून विखुरलेल्या संकेतांचे रूपांतर तुमच्या शेतासाठी एका स्पष्ट शिफारशीत करते.",
    "home.btnAdvisory": "शेती सल्ला घ्या",
    "home.btnDiagnose": "पिकाची तपासणी करा",

    "home.problemEyebrow": "समस्या",
    "home.problemTitle": "शेतीचे निर्णय अंदाजावर अवलंबून नसावेत.",
    "home.problemSub": "हवामान, माती, उपग्रह प्रतिमा आणि पीक ज्ञान सहसा वेगवेगळ्या ठिकाणी असते. AgriT हे संकेत एकत्र आणून एक स्थानिक, कृतीयोग्य उत्तर देते.",
    "home.problem1Title": "बदलते हवामान",
    "home.problem1Desc": "अनपेक्षित पाऊस, उष्णता आणि बदलते ऋतू रोजच्या पीक निर्णयांना गुंतागुंतीचे बनवतात.",
    "home.problem2Title": "मातीबद्दल अनिश्चितता",
    "home.problem2Desc": "शेतकऱ्यांना माती आरोग्य आणि पिकाच्या गरजांबद्दल स्पष्ट, कृतीयोग्य माहिती हवी असते.",
    "home.problem3Title": "पीक रोग",
    "home.problem3Desc": "उत्पन्न नुकसान रोखण्यासाठी रोग ओळख अनेकदा खूप उशिरा होते.",
    "home.problem4Title": "विखुरलेला डेटा",
    "home.problem4Desc": "हवामान, माती, उपग्रह आणि कृषी माहिती सहसा वेगवेगळ्या प्रणालींमध्ये असते.",

    "home.howEyebrow": "हे कसे काम करते",
    "home.howTitle": "कच्च्या संकेतांपासून एका स्पष्ट शिफारशीपर्यंत.",
    "home.step1Title": "शेताची माहिती",
    "home.step1Desc": "तुम्ही स्थान, पीक आणि मातीचा प्रकार सांगता.",
    "home.step2Title": "माती + हवामान + उपग्रह",
    "home.step2Desc": "AgriT त्या नेमक्या स्थानाची सद्यस्थिती मिळवते.",
    "home.step3Title": "Gemini एआय विश्लेषण",
    "home.step3Desc": "सर्व संकेत एकत्र करून त्यावर विश्लेषण केले जाते.",
    "home.step4Title": "कृतीयोग्य सल्ला",
    "home.step4Desc": "तुम्हाला एक स्पष्ट शिफारस मिळते, कच्चा डेटा नाही.",

    "home.mainEyebrow": "मुख्य वैशिष्ट्ये",
    "home.mainTitle": "तीन साधने. एक शेत.",
    "home.feature1Title": "एआय शेती सल्ला",
    "home.feature1Desc": "तुमच्या शेताचे स्थान, पीक, माती आणि सध्याच्या पर्यावरणीय स्थितीवर आधारित शिफारसी मिळवा.",
    "home.feature1Btn": "सल्ला पहा →",
    "home.feature2Title": "रोग ओळख",
    "home.feature2Desc": "एआय-चालित प्राथमिक रोग मूल्यांकन आणि उपचार मार्गदर्शनासाठी पिकाचा फोटो अपलोड करा.",
    "home.feature2Btn": "पीक तपासा →",
    "home.feature3Title": "शेती इंटेलिजन्स",
    "home.feature3Desc": "तुमच्या शेतांसाठी उपग्रह-आधारित पीक-आरोग्य निर्देशक आणि पर्यावरणीय स्थिती पहा.",
    "home.feature3Btn": "इंटेलिजन्स पहा →",

    "home.techEyebrow": "तंत्रज्ञान",
    "home.techTitle": "संपूर्ण हंगामासोबत वाढणाऱ्या पायाभूत सुविधांवर आधारित.",
    "home.techGeminiDesc": "एआय सल्ला आणि मल्टीमॉडल विश्लेषण",
    "home.techEarthEngineDesc": "उपग्रह इंटेलिजन्स",
    "home.techFirebaseDesc": "डेटा आणि प्रमाणीकरण",
    "home.techMapsDesc": "स्थान इंटेलिजन्स",
    "home.techCloudRunDesc": "स्केलेबल बॅकएंड",

    "home.ctaTitle1": "अधिक चांगला डेटा. अधिक चांगले निर्णय.",
    "home.ctaTitle2": "अधिक चांगली शेती.",

    "advisory.title": "शेती सल्ला — AgriT",
    "advisory.eyebrow": "शेती सल्ला",
    "advisory.heroTitle": "तुमच्या शेताबद्दल सांगा. पुढे काय करायचे ते आम्ही सांगू.",
    "advisory.heroSub": "AgriT तुमच्या स्थानाचे हवामान आणि मातीची स्थिती तुमच्या पिकाच्या अवस्थेसोबत वाचते, नंतर Gemini कडून एक स्पष्ट शिफारस मागते — कच्चे आकडे नाहीत.",
    "advisory.formTitle": "शेताचा तपशील",
    "advisory.locationLabel": "शेताचे स्थान",
    "advisory.locationPlaceholder": "गाव, जिल्हा किंवा अक्षांश, रेखांश",
    "advisory.locationHint": "स्थानिक हवामान आणि उपग्रह डेटा मिळवण्यासाठी वापरले जाते.",
    "advisory.cropLabel": "पीक",
    "advisory.selectCrop": "पीक निवडा",
    "advisory.soilLabel": "मातीचा प्रकार",
    "advisory.selectSoil": "मातीचा प्रकार निवडा",
    "advisory.notesLabel": "आणखी काही सांगायचे आहे का?",
    "advisory.notesOptional": "(ऐच्छिक)",
    "advisory.notesPlaceholder": "उदा. 3 आठवड्यांपूर्वी पेरणी केली, कालव्याने सिंचन, खालच्या पानांवर पिवळेपणा दिसला…",
    "advisory.submitBtn": "सल्ला घ्या",
    "advisory.apiNote1": "हा फॉर्म",
    "advisory.apiNote2": "ला कॉल करतो, जो तुमच्या बॅकएंडवरील",
    "advisory.apiNote3": "वर पाठवतो. अजून कोणतेही बॅकएंड जोडलेले नाही — डेमो डेटा दाखवला जात आहे.",
    "advisory.resultEmpty": "तुमच्या शेताचा तपशील भरा आणि पहिला सल्ला मिळवा.",
    "advisory.loading": "माती, हवामान आणि उपग्रह डेटा वाचला जात आहे…",
    "advisory.badge": "सल्ला",
    "advisory.badgeDemo": "डेमो सल्ला — थेट डेटासाठी बॅकएंड जोडा",
    "advisory.irrigation": "सिंचन",
    "advisory.fertilization": "खतव्यवस्थापन",
    "advisory.pestRisk": "कीड धोका",
    "advisory.timing": "वेळ",
    "advisory.errorMsg": "सध्या सल्ला तयार करता आला नाही. कृपया थोड्या वेळाने पुन्हा प्रयत्न करा.",

    "disease.title": "रोग ओळख — AgriT",
    "disease.eyebrow": "रोग ओळख",
    "disease.heroTitle": "पानाचा फोटो काढा. काही सेकंदात प्राथमिक माहिती मिळवा.",
    "disease.heroSub": "प्रभावित पान किंवा रोपाचा स्पष्ट फोटो अपलोड करा. Gemini चे मल्टीमॉडल विश्लेषण ते ज्ञात पीक-रोग पद्धतींशी जुळवून पुढील पावले सुचवते.",
    "disease.formTitle": "पिकाचा फोटो",
    "disease.cropLabel": "पीक",
    "disease.cropOptionalHint": "(ऐच्छिक, अचूकता वाढवते)",
    "disease.notSureSkip": "माहीत नाही / वगळा",
    "disease.photoLabel": "पान किंवा रोपाचा फोटो",
    "disease.dropzoneStrong": "अपलोड करण्यासाठी क्लिक करा",
    "disease.dropzoneRest": "किंवा फोटो इथे ड्रॅग करा",
    "disease.dropzoneHint": "JPG किंवा PNG, प्रभावित भागाचा क्लोज-अप सर्वोत्तम असतो",
    "disease.submitBtn": "पीक तपासा",
    "disease.apiNote1": "हा फॉर्म",
    "disease.apiNote2": "ला कॉल करतो, जो फोटो तुमच्या बॅकएंडवरील",
    "disease.apiNote3": "वर पाठवतो. अजून कोणतेही बॅकएंड जोडलेले नाही — डेमो डेटा दाखवला जात आहे.",
    "disease.resultEmpty": "प्राथमिक मूल्यांकनासाठी फोटो अपलोड करा.",
    "disease.loading": "Gemini द्वारे प्रतिमेचे विश्लेषण केले जात आहे…",
    "disease.badge": "मूल्यांकन",
    "disease.badgeDemo": "डेमो मूल्यांकन — थेट डेटासाठी बॅकएंड जोडा",
    "disease.confidenceLabel": "विश्वासार्हता",
    "disease.whatWeSee": "आम्हाला काय दिसले",
    "disease.suggestedTreatment": "सुचवलेला उपचार",
    "disease.disclaimer": "हे केवळ प्राथमिक एआय मूल्यांकन आहे — वेगाने पसरणाऱ्या किंवा बहुतांश शेतावर परिणाम करणाऱ्या कोणत्याही गोष्टीसाठी तुमच्या स्थानिक कृषी अधिकाऱ्याकडून खात्री करा.",
    "disease.errorMsg": "सध्या हा फोटो तपासता आला नाही. कृपया थोड्या वेळाने पुन्हा प्रयत्न करा.",

    "intelligence.title": "शेती इंटेलिजन्स — AgriT",
    "intelligence.eyebrow": "शेती इंटेलिजन्स",
    "intelligence.heroTitle": "तुमचे शेत उपग्रहाच्या नजरेतून पहा.",
    "intelligence.heroSub": "कोणत्याही स्थानासाठी वनस्पती आरोग्य, मातीतील ओलावा आणि तात्कालिक स्थिती मिळवा, आणि गेल्या काही पासमध्ये पीक आरोग्याचा कल कसा बदलला ते पहा.",
    "intelligence.formTitle": "स्थान",
    "intelligence.locationLabel": "शेताचे स्थान",
    "intelligence.locationPlaceholder": "गाव, जिल्हा किंवा अक्षांश, रेखांश",
    "intelligence.locationHint": "आम्ही या स्थानासाठी नवीनतम उपग्रह पास आणि हवामान केंद्र डेटा मिळवू.",
    "intelligence.submitBtn": "फील्ड डेटा लोड करा",
    "intelligence.apiNote1": "हा फॉर्म",
    "intelligence.apiNote2": "ला कॉल करतो, जो तुमच्या बॅकएंडवरील",
    "intelligence.apiNote3": "वर पाठवतो. अजून कोणतेही बॅकएंड जोडलेले नाही — डेमो डेटा दाखवला जात आहे.",
    "intelligence.resultEmpty": "सद्य फील्ड निर्देशक लोड करण्यासाठी एक स्थान टाका.",
    "intelligence.loading": "उपग्रह आणि हवामान डेटा मिळवला जात आहे…",
    "intelligence.badge": "फील्ड डेटा",
    "intelligence.badgeDemo": "डेमो डेटा — थेट डेटासाठी बॅकएंड जोडा",
    "intelligence.ndviLabel": "NDVI",
    "intelligence.moistureLabel": "मातीतील ओलावा",
    "intelligence.tempLabel": "हवेचे तापमान",
    "intelligence.ndviTrend": "NDVI कल · मागील 6 पास",
    "intelligence.rainfallTitle": "पाऊस (7 दिवस)",
    "intelligence.rainfallText": "या स्थानासाठी मागील आठवड्यात {mm}मिमी पाऊस नोंदवला गेला.",
    "intelligence.errorMsg": "सध्या फील्ड डेटा लोड करता आला नाही. कृपया थोड्या वेळाने पुन्हा प्रयत्न करा.",

    "crop.wheat": "गहू", "crop.rice": "भात", "crop.cotton": "कापूस",
    "crop.sugarcane": "ऊस", "crop.maize": "मका", "crop.soybean": "सोयाबीन",
    "crop.tomato": "टोमॅटो", "crop.other": "इतर",

    "soil.alluvial": "गाळाची माती", "soil.black": "काळी माती (रेगूर)", "soil.redLaterite": "लाल व जांभी माती",
    "soil.sandyLoam": "वाळूमिश्रित पोयट्याची माती", "soil.clay": "चिकण माती", "soil.notSure": "माहीत नाही",

    "ticker.moisture": "मातीतील ओलावा", "ticker.ndvi": "NDVI", "ticker.rainfall": "पाऊस (7दि)",
    "ticker.temp": "हवेचे तापमान", "ticker.humidity": "आर्द्रता", "ticker.wind": "वारा",
    "ticker.confidence": "सल्ला विश्वासार्हता · उच्च", "ticker.pass": "उपग्रह पास · 6तास आधी"
  }
};

function agritGetLang() {
  const saved = localStorage.getItem(AGRIT_LANG_KEY);
  return TRANSLATIONS[saved] ? saved : "en";
}

function agritSetLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  localStorage.setItem(AGRIT_LANG_KEY, lang);
  agritApplyTranslations();
  document.dispatchEvent(new CustomEvent("agrit:langchange", { detail: { lang } }));
}

function agritT(key, vars) {
  const lang = agritGetLang();
  let text = (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.en[key] || key;
  if (vars) {
    Object.keys(vars).forEach((k) => {
      text = text.replace(`{${k}}`, vars[k]);
    });
  }
  return text;
}

function agritApplyTranslations(root) {
  const lang = agritGetLang();
  const scope = root || document;

  document.documentElement.lang = lang;

  scope.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = agritT(el.getAttribute("data-i18n"));
  });
  scope.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", agritT(el.getAttribute("data-i18n-placeholder")));
  });
  scope.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", agritT(el.getAttribute("data-i18n-title")));
  });
  scope.querySelectorAll("[data-i18n-meta-description]").forEach((el) => {
    el.setAttribute("content", agritT(el.getAttribute("data-i18n-meta-description")));
  });

  const pageTitleKey = document.body.getAttribute("data-i18n-page-title");
  if (pageTitleKey) document.title = agritT(pageTitleKey);

  const switcher = document.getElementById("langSwitch");
  if (switcher) switcher.value = lang;
}

function agritInitLanguageSwitcher() {
  const switcher = document.getElementById("langSwitch");
  if (!switcher) return;
  switcher.value = agritGetLang();
  switcher.addEventListener("change", (e) => agritSetLang(e.target.value));
}

document.addEventListener("DOMContentLoaded", () => {
  agritInitLanguageSwitcher();
  agritApplyTranslations();
});
