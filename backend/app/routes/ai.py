from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

class ChallengeAIRequest(BaseModel):
    problem: str
    sector: str = ""
    budget: float = 0
    location: str = ""

@router.post("/generate-challenge")
def generate_challenge(data: ChallengeAIRequest):
    return {
        "title":"AI-Enabled Public Service Optimization Challenge",
        "refined_problem":data.problem,
        "desired_outcome":"Reduce response time and improve service quality using a measurable, scalable technology solution.",
        "suggested_kpis":[
            {"name":"Average response time","target":"-30%"},
            {"name":"Resolution rate","target":"+20%"},
            {"name":"Cost per case","target":"-20%"}
        ],
        "pilot_duration_days":90,
        "risks":["Data quality","Integration complexity","User adoption"],
        "eligibility":["Registered startup","Relevant technical capability","Ability to execute a controlled pilot"]
    }

class MatchRequest(BaseModel):
    challenge_text: str
    startup_profiles: List[dict] = []

@router.post("/match")
def match(data: MatchRequest):
    # Demo scoring. Replace with embeddings + pgvector + weighted rules.
    return {"matches":[
        {"startup":"WasteX","score":94,"reasons":["Sector match","AI capability","Pilot ready","Verified profile"]},
        {"startup":"CivicAI","score":89,"reasons":["GovTech experience","AI capability","Previous deployments"]},
        {"startup":"UrbanTech","score":82,"reasons":["Smart-city experience","IoT capability"]}
    ]}
