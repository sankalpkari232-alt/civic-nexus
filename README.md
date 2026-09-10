# Civic Nexus

Startup-friendly public innovation procurement platform for SIH 26136.

## Stack
- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend: FastAPI + SQLAlchemy
- Database: PostgreSQL + pgvector-ready
- Auth: JWT
- Charts: Recharts

## Quick start

### Backend
```bash
cd backend
python -m venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```

### Database
Create a PostgreSQL database named `civic_nexus`, then run:
```bash
psql civic_nexus < schema.sql
```

### Frontend
```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

Frontend: http://localhost:3000
Backend docs: http://localhost:8000/docs

The AI endpoints use deterministic demo generation by default. Replace the service implementation with your preferred LLM provider for production.
