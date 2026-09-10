"use client";

import { useState } from "react";

export default function StartupChallenges() {
  const [applied, setApplied] = useState("");

  const challenges = [
    {
      title: "Smart Municipal Waste Optimization",
      department: "Municipal Corporation",
      sector: "Urban Governance",
      match: "94%",
      deadline: "15 Sept 2026",
      description:
        "Develop an intelligent solution to optimize waste collection routes and improve fleet efficiency.",
    },
    {
      title: "Predictive Flood Risk Monitoring",
      department: "Disaster Management Department",
      sector: "Disaster Management",
      match: "82%",
      deadline: "22 Sept 2026",
      description:
        "Develop a predictive system for identifying flood risks and improving early warning capabilities.",
    },
    {
      title: "AI Public Transport Optimization",
      department: "Urban Transport Authority",
      sector: "Mobility",
      match: "78%",
      deadline: "30 Sept 2026",
      description:
        "Use data and AI to improve public transport routes, fleet utilization and passenger experience.",
    },
  ];

  return (
    <main className="main">

      <div className="section-title">
        <div>
          <div className="eyebrow">STARTUP OPPORTUNITIES</div>

          <h1>Government Challenges</h1>

          <p className="muted">
            Discover innovation opportunities matched to your startup.
          </p>
        </div>
      </div>

      <div className="card">

        <div className="eyebrow">
          AI-POWERED DISCOVERY
        </div>

        <h2>Challenges recommended for you</h2>

        <p className="muted">
          Civic Nexus ranks opportunities using your startup's
          technology, sector, experience and eligibility profile.
        </p>

      </div>

      <div style={{ marginTop: "20px" }}>

        {challenges.map((challenge) => (

          <div
            className="card"
            key={challenge.title}
            style={{ marginBottom: "20px" }}
          >

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >

              <div>

                <div className="eyebrow">
                  {challenge.sector}
                </div>

                <h2>{challenge.title}</h2>

                <p className="muted">
                  {challenge.description}
                </p>

                <p>
                  <b>Government:</b> {challenge.department}
                </p>

                <p className="muted">
                  Application deadline: {challenge.deadline}
                </p>

              </div>

              <div style={{ textAlign: "center", minWidth: "110px" }}>

                <div className="stat">
                  {challenge.match}
                </div>

                <small className="muted">
                  AI MATCH
                </small>

              </div>

            </div>

            <div style={{ marginTop: "15px" }}>

              <span className="badge">
                ELIGIBILITY CHECKED
              </span>

              <span
                className="badge"
                style={{ marginLeft: "8px" }}
              >
                PILOT OPPORTUNITY
              </span>

            </div>

            <button
              className="btn"
              style={{ marginTop: "20px" }}
              onClick={() => setApplied(challenge.title)}
            >
              Apply for Challenge →
            </button>

          </div>

        ))}

      </div>

      {applied && (

        <div className="card" style={{ marginTop: "20px" }}>

          <div className="eyebrow">
            APPLICATION STARTED
          </div>

          <h2>✓ {applied}</h2>

          <p className="muted">
            Your application draft has been created.
            You can now submit your proposal and supporting documents.
          </p>

          <button
            className="btn"
            onClick={() =>
              alert("Application submitted successfully!")
            }
          >
            Submit Application →
          </button>

        </div>

      )}

    </main>
  );
}