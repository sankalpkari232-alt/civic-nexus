"use client";

import { useState } from "react";

export default function Evaluation() {
  const [submitted, setSubmitted] = useState(false);

  const criteria = [
    ["Technical Capability", 25],
    ["Innovation", 25],
    ["Scalability", 25],
    ["Cost Effectiveness", 25],
  ];

  return (
    <main className="main">

      <div className="section-title">
        <div>
          <div className="eyebrow">TRANSPARENT EVALUATION</div>
          <h1>Startup Evaluation</h1>
          <p className="muted">
            Evaluate shortlisted startups using structured and auditable criteria.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="eyebrow">CHALLENGE</div>

        <h2>Smart Municipal Waste Optimization</h2>

        <p className="muted">
          Shortlisted startup: <b>GreenRoute AI</b>
        </p>
      </div>

      <div className="card" style={{ marginTop: "20px" }}>

        <div className="eyebrow">EVALUATION CRITERIA</div>

        {criteria.map(([name, max]) => (
          <div
            key={name}
            style={{
              padding: "20px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <b>{name}</b>

              <span className="muted">
                Maximum: {max}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max={max}
              defaultValue={Math.round(max * 0.9)}
              style={{ width: "100%", marginTop: "15px" }}
            />
          </div>
        ))}

        <button
          className="btn"
          style={{ marginTop: "20px" }}
          onClick={() => setSubmitted(true)}
        >
          Submit Evaluation
        </button>

      </div>

      {submitted && (
        <div className="card" style={{ marginTop: "20px" }}>

          <div className="eyebrow">EVALUATION RESULT</div>

          <h2>GreenRoute AI</h2>

          <div className="grid3">

            <div>
              <div className="stat">22/25</div>
              <p className="muted">Technical Capability</p>
            </div>

            <div>
              <div className="stat">23/25</div>
              <p className="muted">Innovation</p>
            </div>

            <div>
              <div className="stat">22/25</div>
              <p className="muted">Scalability</p>
            </div>

          </div>

          <div className="grid3" style={{ marginTop: "20px" }}>

            <div>
              <div className="stat">21/25</div>
              <p className="muted">Cost Effectiveness</p>
            </div>

            <div>
              <div className="stat">88/100</div>
              <p className="muted">Overall Score</p>
            </div>

            <div>
              <div className="stat">HIGH</div>
              <p className="muted">Pilot Readiness</p>
            </div>

          </div>

          <div
            className="card"
            style={{
              marginTop: "25px",
              textAlign: "center",
            }}
          >
            <div className="eyebrow">RECOMMENDATION</div>

            <h2>✓ Recommended for Controlled Pilot</h2>

            <p className="muted">
              The startup demonstrates strong technical capability,
              innovation, scalability and pilot readiness.
            </p>

            <button
              className="btn"
              style={{ marginTop: "15px" }}
              onClick={() =>
                alert("Pilot created successfully!")
              }
            >
              Start Pilot →
            </button>
          </div>

        </div>
      )}

      <div className="card" style={{ marginTop: "20px" }}>

        <div className="eyebrow">GOVERNANCE</div>

        <h3>Human-in-the-loop decision making</h3>

        <p className="muted">
          Civic Nexus can assist evaluators with structured scoring and
          recommendations, but final selection remains with authorized
          government officials. Every evaluation can be recorded in the
          audit trail.
        </p>

      </div>

    </main>
  );
}