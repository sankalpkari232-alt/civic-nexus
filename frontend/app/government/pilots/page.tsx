"use client";

import { useState } from "react";

export default function Pilots() {
  const [started, setStarted] = useState(false);

  return (
    <main className="main">

      <div className="section-title">
        <div>
          <div className="eyebrow">CONTROLLED INNOVATION PILOT</div>
          <h1>Pilot Sandbox</h1>
          <p className="muted">
            Test, measure and validate startup solutions before scale-up.
          </p>
        </div>
      </div>

      <div className="card">

        <div className="eyebrow">PILOT #CN-2026-014</div>

        <h2>GreenRoute AI × Municipal Waste Department</h2>

        <p className="muted">
          Smart Municipal Waste Optimization
        </p>

        <div className="grid3" style={{ marginTop: "25px" }}>

          <div>
            <div className="eyebrow">DURATION</div>
            <h3>8 Weeks</h3>
          </div>

          <div>
            <div className="eyebrow">PILOT BUDGET</div>
            <h3>₹10,00,000</h3>
          </div>

          <div>
            <div className="eyebrow">STATUS</div>
            <h3>{started ? "IN PROGRESS" : "READY TO START"}</h3>
          </div>

        </div>

        {!started && (
          <button
            className="btn"
            style={{ marginTop: "20px" }}
            onClick={() => setStarted(true)}
          >
            Start Controlled Pilot →
          </button>
        )}

      </div>

      <div className="card" style={{ marginTop: "20px" }}>

        <div className="eyebrow">PILOT ROADMAP</div>

        <h2>Milestones</h2>

        <div className="grid">

          <div className="card">
            <div className="eyebrow">01</div>
            <h3>Baseline</h3>
            <p className="muted">
              Record existing operational performance.
            </p>
            <span className="badge">COMPLETED</span>
          </div>

          <div className="card">
            <div className="eyebrow">02</div>
            <h3>Prototype</h3>
            <p className="muted">
              Deploy the solution in a controlled environment.
            </p>
            <span className="badge">COMPLETED</span>
          </div>

          <div className="card">
            <div className="eyebrow">03</div>
            <h3>Field Trial</h3>
            <p className="muted">
              Test the solution with real municipal operations.
            </p>
            <span className="badge">IN PROGRESS</span>
          </div>

          <div className="card">
            <div className="eyebrow">04</div>
            <h3>Validation</h3>
            <p className="muted">
              Independently verify results and evidence.
            </p>
            <span className="badge">UPCOMING</span>
          </div>

        </div>

      </div>

      <div className="card" style={{ marginTop: "20px" }}>

        <div className="eyebrow">LIVE KPI MONITORING</div>

        <h2>Pilot Performance</h2>

        <div className="grid3">

          <div className="card">
            <div className="eyebrow">FUEL USAGE</div>
            <div className="stat">76%</div>
            <p className="muted">
              Target: 80% or lower
            </p>
            <span className="badge">TARGET ACHIEVED</span>
          </div>

          <div className="card">
            <div className="eyebrow">MISSED COLLECTIONS</div>
            <div className="stat">11%</div>
            <p className="muted">
              Target: 12% or lower
            </p>
            <span className="badge">TARGET ACHIEVED</span>
          </div>

          <div className="card">
            <div className="eyebrow">ROUTE EFFICIENCY</div>
            <div className="stat">81%</div>
            <p className="muted">
              Target: 77% or higher
            </p>
            <span className="badge">TARGET ACHIEVED</span>
          </div>

        </div>

      </div>

      <div className="card" style={{ marginTop: "20px" }}>

        <div className="eyebrow">EVIDENCE PACK</div>

        <h2>Proof before procurement</h2>

        <div className="grid3">

          <div>
            <h3>✓ Baseline Data</h3>
            <p className="muted">
              Existing municipal performance recorded.
            </p>
          </div>

          <div>
            <h3>✓ KPI Results</h3>
            <p className="muted">
              Measured against predefined targets.
            </p>
          </div>

          <div>
            <h3>✓ Field Feedback</h3>
            <p className="muted">
              Feedback collected from pilot users.
            </p>
          </div>

        </div>

      </div>

      <div
        className="card"
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >

        <div className="eyebrow">NEXT DECISION</div>

        <h2>Pilot is showing strong results.</h2>

        <p className="muted">
          The collected evidence can now be used for an evidence-based
          scale-up recommendation.
        </p>

        <a
          className="btn"
          href="/government/analytics"
          style={{
            display: "inline-block",
            marginTop: "15px",
          }}
        >
          View Scale Recommendation →
        </a>

      </div>

    </main>
  );
}