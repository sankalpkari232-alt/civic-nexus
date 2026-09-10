from fastapi import APIRouter
from pydantic import BaseModel, Field
from typing import List, Optional
from uuid import UUID, uuid4

router = APIRouter()

class KPI(BaseModel):
    name: str
    target: float
    unit: str = ""

class ChallengeCreate(BaseModel):
    title: str
    problem_statement: str
    desired_outcome: str = ""
    sector: str = ""
    budget: float = 0
    pilot_duration_days: int = 90
    location: str = ""
    technologies: List[str] = []
    eligibility: List[str] = []
    kpis: List[KPI] = []

DEMO_CHALLENGES = [
    {
        "id": str(uuid4()), "title": "AI-Based Municipal Waste Response Optimization",
        "sector": "Waste Management", "status": "PUBLISHED",
        "applications": 12, "budget": 800000, "pilot_duration_days": 90
    },
    {
        "id": str(uuid4()), "title": "Predictive Flood Risk Monitoring",
        "sector": "Disaster Management", "status": "PUBLISHED",
        "applications": 8, "budget": 1200000, "pilot_duration_days": 120
    }
]

@router.get("")
def list_challenges():
    return DEMO_CHALLENGES

@router.post("")
def create_challenge(data: ChallengeCreate):
    item = {"id": str(uuid4()), **data.model_dump(), "status": "DRAFT", "applications": 0}
    DEMO_CHALLENGES.append(item)
    return item

@router.get("/{challenge_id}")
def get_challenge(challenge_id: str):
    return next((x for x in DEMO_CHALLENGES if x["id"] == challenge_id), None)

@router.post("/{challenge_id}/publish")
def publish_challenge(challenge_id: str):
    challenge = next(x for x in DEMO_CHALLENGES if x["id"] == challenge_id)
    challenge["status"] = "PUBLISHED"
    return challenge
