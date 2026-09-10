"use client";

import { useState } from "react";

export default function NewChallenge() {
  const [problem, setProblem] = useState("");
  const [generated, setGenerated] = useState(false);

  function generateChallenge() {
    if (!problem.trim()) return;
    setGenerated(true);
  }

  return (
    <main className="main">

      <div className="section-title">
        <div>
          <div className="eyebrow">AI-POWERED PROCUREMENT</div>
          <h1>Create Government Challenge</h1>
          <p className="muted">
            Convert a government problem into a measurable innovation challenge.
          </p>
        </div>
      </div>

      <div className="card">

        <div className="eyebrow">STEP 01</div>
        <h2>Describe the problem</h2>

        <p className="muted">
          Describe the problem in simple language. Civic Nexus will structure
          it into an outcome-based challenge.
        </p>

        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="Example: Our city wants to reduce waste collection delays and improve vehicle route efficiency."
          style={{
            width: "100%",
            minHeight: "140px",
            padding: "16px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "16px",
            resize: "vertical",
          }}
        />

        <button
          className="btn"
          onClick={generateChallenge}
          style={{ marginTop: "16px" }}
        >
          ✦ Generate Challenge with AI
        </button>

      </div>

      {generated && (
        <div className="card" style={{ marginTop: "20px" }}>

          <div className="eyebrow">AI GENERATED CHALLENGE</div>

          <h2>Smart Municipal Waste Optimization</h2>

          <p className="muted">
            Develop an intelligent solution to optimize municipal waste
            collection routes, reduce delays and improve operational efficiency.
          </p>

          <div className="grid3" style={{ marginTop: "20px" }}>

            <div className="card">
              <div className="eyebrow">OBJECTIVE</div>
              <h3>Improve Collection Efficiency</h3>
              <p className="muted">
                Optimize vehicle routes and reduce unnecessary travel.
              </p>
            </div>

            <div className="card">
              <div className="eyebrow">PILOT DURATION</div>
              <h3>8 Weeks</h3>
              <p className="muted">
                Controlled pilot with defined milestones.
              </p>
            </div>

            <div className="card">
              <div className="eyebrow">SECTOR</div>
              <h3>Urban Governance</h3>
              <p className="muted">
                Municipal waste management.
              </p>
            </div>

          </div>

          <h3 style={{ marginTop: "30px" }}>Suggested KPIs</h3>

          <div className="grid3">

            <div className="card">
              <h3>20%</h3>
              <p className="muted">Reduction in fuel usage</p>
            </div>

            <div className="card">
              <h3>30%</h3>
              <p className="muted">Reduction in missed collections</p>
            </div>

            <div className="card">
              <h3>15%</h3>
              <p className="muted">Improvement in route efficiency</p>
            </div>

          </div>

          <div style={{ marginTop: "25px" }}>
            <button
              className="btn"
              onClick={() => alert("Challenge published successfully!")}
            >
              Publish Challenge →
            </button>
          </div>

        </div>
      )}

    </main>
  );
}