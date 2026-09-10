from fastapi import APIRouter
from pydantic import BaseModel, EmailStr

router = APIRouter()

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

@router.post("/login")
def login(data: LoginRequest):
    # Demo auth. Replace with DB lookup + bcrypt + JWT before production.
    role = "DEPARTMENT_OFFICER" if "gov" in data.email.lower() else "STARTUP"
    return {
        "access_token": "demo-token",
        "token_type": "bearer",
        "user": {"name": "Demo User", "email": data.email, "role": role}
    }
