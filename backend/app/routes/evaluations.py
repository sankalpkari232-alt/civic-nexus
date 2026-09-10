from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class Evaluation(BaseModel):
    problem_relevance: float
    technical_feasibility: float
    innovation: float
    pilot_readiness: float
    cost_effectiveness: float
    scalability: float
    compliance: float
    comments: str = ""

@router.post("/{application_id}")
def evaluate(application_id: str, data: Evaluation):
    weights = [20,20,15,15,10,10,10]
    scores = [
        data.problem_relevance, data.technical_feasibility, data.innovation,
        data.pilot_readiness, data.cost_effectiveness, data.scalability,
        data.compliance
    ]
    # Each score is expected on a 0-100 scale.
    total = sum(s*w for s,w in zip(scores,weights))/100
    return {"application_id":application_id, "total_score":round(total,2), "evaluation":data.model_dump()}
