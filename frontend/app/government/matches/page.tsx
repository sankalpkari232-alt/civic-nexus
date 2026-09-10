"use client";
export default function Matches() {
  const startups = [
    {
      name: "GreenRoute AI",
      score: 94,
      sector: "AI + Waste Management",
      reason: "Strong match for route optimization and municipal operations.",
      tags: ["AI/ML", "Urban Tech", "Pilot Ready"],
    },
    {
      name: "UrbanSense Technologies",
      score: 88,
      sector: "Smart City Solutions",
      reason: "Relevant experience in city-level data and monitoring systems.",
      tags: ["Smart City", "Analytics", "IoT"],
    },
    {
      name: "WasteTech Innovations",
      score: 82,
      sector: "Waste Management",
      reason: "Strong domain expertise with moderate technology alignment.",
      tags: ["Waste Tech", "Operations", "Analytics"],
    },
  ];

  return (
    <main className="main">

      <div className="section-title">
        <div>
          <div className="eyebrow">AI STARTUP DISCOVERY</div>

          <h1>Recommended Startups</h1>

          <p className="muted">
            AI-ranked startups for the selected government challenge.
          </p>
        </div>
      </div>

      <div className="card">

        <div className="eyebrow">SELECTED CHALLENGE</div>

        <h2>Smart Municipal Waste Optimization</h2>

        <p className="muted">
          Optimize waste collection routes, reduce delays and improve
          municipal fleet efficiency.
        </p>

      </div>

      <h2 style={{ marginTop: "30px" }}>
        AI Match Results
      </h2>

      <div className="grid">

        {startups.map((startup) => (
          <div className="card" key={startup.name}>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div className="eyebrow">STARTUP</div>
                <h2>{startup.name}</h2>
              </div>

              <div style={{ textAlign: "right" }}>
                <div className="stat">{startup.score}%</div>
                <small className="muted">AI Match</small>
              </div>
            </div>

            <p>
              <b>Sector:</b> {startup.sector}
            </p>

            <p className="muted">
              {startup.reason}
            </p>

            <div style={{ marginTop: "15px" }}>
              {startup.tags.map((tag) => (
                <span
                  className="badge"
                  key={tag}
                  style={{ marginRight: "8px" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              className="btn"
              style={{ marginTop: "20px" }}
              onClick={() =>
                alert(
                  `${startup.name} selected for detailed evaluation.`
                )
              }
            >
              Evaluate Startup →
            </button>

          </div>
        ))}

      </div>

      <div className="card" style={{ marginTop: "25px" }}>

        <div className="eyebrow">
          HOW THE MATCHING WORKS
        </div>

        <h2>Transparent AI Matching</h2>

        <div className="grid3">

          <div>
            <h3>30%</h3>
            <p className="muted">
              Problem & sector similarity
            </p>
          </div>

          <div>
            <h3>20%</h3>
            <p className="muted">
              Technology capability
            </p>
          </div>

          <div>
            <h3>15%</h3>
            <p className="muted">
              Relevant deployment experience
            </p>
          </div>

          <div>
            <h3>15%</h3>
            <p className="muted">
              Pilot readiness
            </p>
          </div>

          <div>
            <h3>10%</h3>
            <p className="muted">
              Geographic suitability
            </p>
          </div>

          <div>
            <h3>10%</h3>
            <p className="muted">
              Eligibility & compliance
            </p>
          </div>

        </div>

      </div>

      <div
        className="card"
        style={{
          marginTop: "25px",
          borderLeft: "4px solid currentColor",
        }}
      >

        <div className="eyebrow">
          IMPORTANT
        </div>

        <h3>AI recommends. Humans decide.</h3>

        <p className="muted">
          AI ranking is used to support discovery and screening.
          Final eligibility, evaluation and procurement decisions
          remain with authorized government officials.
        </p>

      </div>

    </main>
  );
}