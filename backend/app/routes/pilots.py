from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

class PilotCreate(BaseModel):
    application_id: str
    name: str
    budget: float = 0
    start_date: str = ""
    end_date: str = ""

@router.post("")
def create_pilot(data: PilotCreate):
    return {"id":"pilot-demo","status":"ACTIVE", **data.model_dump()}

@router.get("/{pilot_id}")
def get_pilot(pilot_id: str):
    return {
        "id":pilot_id,
        "name":"AI Waste Optimization",
        "status":"ACTIVE",
        "progress":78,
        "budget":800000,
        "days_elapsed":68,
        "days_total":90,
        "kpis":[
            {"name":"Response Time","target":"-30%","actual":"-34%","score":96},
            {"name":"Resolution Rate","target":"90%","actual":"93%","score":97},
            {"name":"Cost / Complaint","target":"-20%","actual":"-24%","score":95}
        ],
        "milestones":[
            {"title":"Deployment","status":"COMPLETED"},
            {"title":"Data Integration","status":"COMPLETED"},
            {"title":"Performance Evaluation","status":"IN_PROGRESS"},
            {"title":"Final Validation","status":"PENDING"}
        ]
    }

@router.get("/{pilot_id}/scale-recommendation")
def scale_recommendation(pilot_id: str):
    return {
        "pilot_id":pilot_id,
        "outcome_score":91,
        "decision":"SCALE",
        "rationale":"Pilot exceeded KPI targets and demonstrated cost reduction and operational feasibility.",
        "recommended_expansion":"Expand from 3 municipal zones to 15 zones."
    }
