from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="LANDSLIDEGUARD AI API",
    description="API for Landslide Risk Prediction and Disaster Intelligence",
    version="1.0.0",
)

# Configure CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for dev/prototype
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
async def health_check():
    return {"status": "Operational", "service": "LANDSLIDEGUARD AI Backend"}

@app.get("/api/locations")
async def get_locations():
    return {"data": []}

@app.get("/api/weather")
async def get_weather(lat: float, lng: float):
    return {"status": "Demo", "temperature": 28, "condition": "Heavy Rain"}

@app.post("/api/predict")
async def predict_risk(data: dict):
    return {"risk_probability": 0.91, "risk_level": "CRITICAL", "confidence": 0.87}

@app.get("/api/alerts")
async def get_alerts():
    return {"data": []}

@app.get("/api/reports")
async def get_reports():
    return {"data": []}
