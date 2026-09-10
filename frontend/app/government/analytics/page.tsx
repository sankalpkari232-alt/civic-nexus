"use client";

import { useState } from "react";

export default function Analytics() {
  const [decision, setDecision] = useState("");

  return (
    <main className="main">

      <div className="section-title">
        <div>
          <div className="eyebrow">EVIDENCE-BASED PROCUREMENT</div>
          <h1>Scale Recommendation</h1>
          <p className="muted">
            Turn verified pilot results into an evidence-based procurement decision.
          </p>
        </div>
      </div>

      <div className="card">

        <div className="eyebrow">PILOT COMPLETION REPORT</div>

        <h2>GreenRoute AI</h2>

        <p className="muted">
          Smart Municipal Waste Optimization · Pilot #CN-2026-014
        </p>

        <div className="grid">

          <div className="card">
            <div className="eyebrow">KPI 01</div>
            <h2>Fuel Usage</h2>
            <div className="stat">76%</div>
            <p className="muted">
              Target ≤ 80%
            </p>
            <span className="badge">
              ACHIEVED
            </span>
          </div>

          <div className="card">
            <div className="eyebrow">KPI 02</div>
            <h2>Missed Collections</h2>
            <div className="stat">11%</div>
            <p className="muted">
              Target ≤ 12%
            </p>
            <span className="badge">
              ACHIEVED
            </span>
          </div>

          <div className="card">
            <div className="eyebrow">KPI 03</div>
            <h2>Route Efficiency</h2>
            <div className="stat">81%</div>
            <p className="muted">
              Target ≥ 77%
            </p>
            <span className="badge">
              ACHIEVED
            </span>
          </div>

          <div className="card">
            <div className="eyebrow">KPI 04</div>
            <h2>User Satisfaction</h2>
            <div className="stat">4.4/5</div>
            <p className="muted">
              Target ≥ 4.0/5
            </p>
            <span className="badge">
              ACHIEVED
            </span>
          </div>

        </div>

      </div>

      <div className="card" style={{ marginTop: "20px" }}>

        <div className="eyebrow">AI EVIDENCE ANALYSIS</div>

        <h2>Pilot Performance Summary</h2>

        <p>
          <b>4 out of 4 key performance indicators were achieved.</b>
        </p>

        <p className="muted">
          The pilot demonstrates measurable improvement in operational
          efficiency, reduced resource consumption and positive field
          feedback. The solution appears suitable for expansion under
          appropriate procurement and governance procedures.
        </p>

        <div
          className="card"
          style={{
            marginTop: "20px",
            textAlign: "center",
          }}
        >

          <div className="eyebrow">
            CIVIC NEXUS RECOMMENDATION
          </div>

          <div className="stat">SCALE</div>

          <h2>Recommend Scale-Up</h2>

          <p className="muted">
            Strong KPI performance + operational feasibility +
            positive pilot evidence.
          </p>

        </div>

      </div>

      <div className="card" style={{ marginTop: "20px" }}>

        <div className="eyebrow">SCALE OPTIONS</div>

        <h2>Where should the solution go next?</h2>

        <div className="grid3">

          <div className="card">
            <h3>🏙 Same Department</h3>
            <p className="muted">
              Expand to additional municipal zones.
            </p>

            <button
              className="btn"
              onClick={() => setDecision("Same Department")}
            >
              Recommend
            </button>
          </div>

          <div className="card">
            <h3>📍 Other Districts</h3>
            <p className="muted">
              Replicate the solution across districts.
            </p>

            <button
              className="btn"
              onClick={() => setDecision("Other Districts")}
            >
              Recommend
            </button>
          </div>

          <div className="card">
            <h3>🏛 Other Departments</h3>
            <p className="muted">
              Explore adoption by other government departments.
            </p>

            <button
              className="btn"
              onClick={() => setDecision("Other Departments")}
            >
              Recommend
            </button>
          </div>

        </div>

        {decision && (
          <div
            className="card"
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >

            <div className="eyebrow">
              DECISION RECORDED
            </div>

            <h2>✓ {decision}</h2>

            <p className="muted">
              Scale recommendation has been recorded for authorized
              government review.
            </p>

          </div>
        )}

      </div>

      <div className="card" style={{ marginTop: "20px" }}>

        <div className="eyebrow">COMPLETE PROCUREMENT JOURNEY</div>

        <div className="grid">

          <div>
            <h3>01 · Identify</h3>
            <p className="muted">
              Government problem identified.
            </p>
          </div>

          <div>
            <h3>02 · Match</h3>
            <p className="muted">
              Relevant startups discovered.
            </p>
          </div>

          <div>
            <h3>03 · Evaluate</h3>
            <p className="muted">
              Transparent evaluation completed.
            </p>
          </div>

          <div>
            <h3>04 · Pilot</h3>
            <p className="muted">
              Controlled real-world testing.
            </p>
          </div>

          <div>
            <h3>05 · Prove</h3>
            <p className="muted">
              KPIs and evidence validated.
            </p>
          </div>

          <div>
            <h3>06 · Scale</h3>
            <p className="muted">
              Evidence-based scale recommendation.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}