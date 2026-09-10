CREATE EXTENSION IF NOT EXISTS pgcrypto;
-- Optional if pgvector is installed:
-- CREATE EXTENSION IF NOT EXISTS vector;

CREATE TYPE user_role AS ENUM ('SUPER_ADMIN','DEPARTMENT_OFFICER','STARTUP','EVALUATOR','VALIDATOR','AUDITOR');
CREATE TYPE challenge_status AS ENUM ('DRAFT','PUBLISHED','CLOSED','IN_EVALUATION','PILOTING','COMPLETED');
CREATE TYPE application_status AS ENUM ('SUBMITTED','UNDER_REVIEW','SHORTLISTED','REJECTED','SELECTED');
CREATE TYPE pilot_status AS ENUM ('PLANNED','ACTIVE','VALIDATION','COMPLETED','FAILED');
CREATE TYPE scale_decision AS ENUM ('PENDING','SCALE','NO_SCALE','REVISE');

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(150) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role user_role NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE departments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(200) NOT NULL,
  state VARCHAR(100) DEFAULT 'Maharashtra',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE startups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(200) NOT NULL,
  description TEXT,
  sector VARCHAR(120),
  technologies TEXT[],
  dpiit_verified BOOLEAN DEFAULT false,
  pilot_ready BOOLEAN DEFAULT false,
  previous_deployments INT DEFAULT 0,
  location VARCHAR(150),
  website VARCHAR(300),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  department_id UUID REFERENCES departments(id),
  created_by UUID REFERENCES users(id),
  title VARCHAR(250) NOT NULL,
  problem_statement TEXT NOT NULL,
  desired_outcome TEXT,
  sector VARCHAR(120),
  budget NUMERIC(14,2),
  pilot_duration_days INT,
  location VARCHAR(200),
  technologies TEXT[],
  eligibility TEXT[],
  kpis JSONB DEFAULT '[]',
  status challenge_status DEFAULT 'DRAFT',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  challenge_id UUID NOT NULL REFERENCES challenges(id) ON DELETE CASCADE,
  startup_id UUID NOT NULL REFERENCES startups(id),
  proposal TEXT,
  match_score NUMERIC(5,2),
  status application_status DEFAULT 'SUBMITTED',
  submitted_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(challenge_id,startup_id)
);

CREATE TABLE evaluations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id UUID NOT NULL REFERENCES applications(id) ON DELETE CASCADE,
  evaluator_id UUID NOT NULL REFERENCES users(id),
  problem_relevance NUMERIC(5,2) DEFAULT 0,
  technical_feasibility NUMERIC(5,2) DEFAULT 0,
  innovation NUMERIC(5,2) DEFAULT 0,
  pilot_readiness NUMERIC(5,2) DEFAULT 0,
  cost_effectiveness NUMERIC(5,2) DEFAULT 0,
  scalability NUMERIC(5,2) DEFAULT 0,
  compliance NUMERIC(5,2) DEFAULT 0,
  comments TEXT,
  conflict_declared BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE pilots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id UUID NOT NULL REFERENCES applications(id),
  name VARCHAR(250) NOT NULL,
  status pilot_status DEFAULT 'PLANNED',
  start_date DATE,
  end_date DATE,
  budget NUMERIC(14,2),
  validator_id UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE pilot_kpis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pilot_id UUID NOT NULL REFERENCES pilots(id) ON DELETE CASCADE,
  name VARCHAR(200) NOT NULL,
  unit VARCHAR(80),
  baseline NUMERIC(14,4),
  target NUMERIC(14,4),
  actual NUMERIC(14,4),
  weight NUMERIC(6,2) DEFAULT 0
);

CREATE TABLE milestones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pilot_id UUID NOT NULL REFERENCES pilots(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  due_date DATE,
  percentage NUMERIC(6,2) DEFAULT 0,
  status VARCHAR(40) DEFAULT 'PENDING'
);

CREATE TABLE evidence (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pilot_id UUID NOT NULL REFERENCES pilots(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  file_url TEXT,
  evidence_type VARCHAR(80),
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE scale_decisions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pilot_id UUID UNIQUE NOT NULL REFERENCES pilots(id) ON DELETE CASCADE,
  outcome_score NUMERIC(5,2),
  decision scale_decision DEFAULT 'PENDING',
  rationale TEXT,
  recommended_expansion TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE audit_logs (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  action VARCHAR(120) NOT NULL,
  entity_type VARCHAR(80),
  entity_id UUID,
  old_value JSONB,
  new_value JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_challenges_status ON challenges(status);
CREATE INDEX idx_applications_challenge ON applications(challenge_id);
CREATE INDEX idx_applications_startup ON applications(startup_id);
CREATE INDEX idx_pilots_status ON pilots(status);
