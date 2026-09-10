from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

STARTUPS = [
    {"id":"s1","name":"WasteX","sector":"Waste Management","technologies":["AI","IoT","Analytics"],"dpiit_verified":True,"pilot_ready":True,"previous_deployments":4,"match_score":94},
    {"id":"s2","name":"CivicAI","sector":"GovTech","technologies":["AI","Computer Vision"],"dpiit_verified":True,"pilot_ready":True,"previous_deployments":3,"match_score":89},
    {"id":"s3","name":"UrbanTech","sector":"Smart Cities","technologies":["IoT","Cloud"],"dpiit_verified":True,"pilot_ready":False,"previous_deployments":2,"match_score":82},
]

@router.get("")
def list_startups():
    return STARTUPS

@router.get("/recommendations/{challenge_id}")
def recommendations(challenge_id: str):
    return sorted(STARTUPS, key=lambda x: x["match_score"], reverse=True)

class ApplicationCreate(BaseModel):
    startup_id: str
    proposal: str

@router.post("/applications/{challenge_id}")
def apply(challenge_id: str, data: ApplicationCreate):
    return {
        "id":"app-demo",
        "challenge_id":challenge_id,
        "startup_id":data.startup_id,
        "status":"SUBMITTED",
        "match_score":94
    }
