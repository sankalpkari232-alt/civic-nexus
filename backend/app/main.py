from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import challenges, startups, evaluations, pilots, ai, auth

app = FastAPI(title="Civic Nexus API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["Auth"])
app.include_router(challenges.router, prefix="/api/challenges", tags=["Challenges"])
app.include_router(startups.router, prefix="/api/startups", tags=["Startups"])
app.include_router(evaluations.router, prefix="/api/evaluations", tags=["Evaluations"])
app.include_router(pilots.router, prefix="/api/pilots", tags=["Pilots"])
app.include_router(ai.router, prefix="/api/ai", tags=["AI"])

@app.get("/api/health")
def health():
    return {"status": "ok", "service": "civic-nexus"}
