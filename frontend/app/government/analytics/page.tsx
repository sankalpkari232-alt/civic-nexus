export default function GovernmentAnalytics() {
  const kpis = [
    ["Collection Efficiency", "87%", "Target: 80%", "+18%"],
    ["Fuel Consumption", "72%", "Target: 75%", "-14%"],
    ["Missed Collections", "8%", "Target: <10%", "-32%"],
    ["Citizen Satisfaction", "91%", "Target: 85%", "+12%"],
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        color: "#172033",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "30px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#4f46e5",
                marginBottom: "8px",
              }}
            >
              EVIDENCE-BASED PROCUREMENT
            </div>

            <h1 style={{ fontSize: "38px", margin: 0 }}>
              Analytics & Scale
            </h1>

            <p
              style={{
                color: "#6b7280",
                fontSize: "15px",
                marginTop: "10px",
              }}
            >
              Use pilot evidence to determine whether an innovation is ready
              for wider deployment.
            </p>
          </div>

          <div
            style={{
              background: "#ecfdf5",
              color: "#15803d",
              padding: "10px 16px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 800,
            }}
          >
            ● PILOT SUCCESSFUL
          </div>
        </div>

        {/* Pilot summary */}
        <section
          style={{
            background: "#111827",
            color: "#ffffff",
            borderRadius: "18px",
            padding: "28px 30px",
            marginBottom: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "11px",
                color: "#a5b4fc",
                fontWeight: 800,
                letterSpacing: "1px",
              }}
            >
              PILOT #CN-2026-014
            </div>

            <h2
              style={{
                fontSize: "24px",
                margin: "8px 0 5px",
              }}
            >
              GreenRoute AI
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "13px",
                margin: 0,
              }}
            >
              AI-powered waste collection optimization
            </p>
          </div>

          <div style={{ textAlign: "right" }}>
            <div
              style={{
                color: "#94a3b8",
                fontSize: "11px",
              }}
            >
              SCALE READINESS
            </div>

            <div
              style={{
                fontSize: "38px",
                fontWeight: 800,
                color: "#a5b4fc",
                marginTop: "3px",
              }}
            >
              92%
            </div>
          </div>
        </section>

        {/* KPI cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginBottom: "25px",
          }}
        >
          {kpis.map(([name, value, target, change]) => (
            <div
              key={name}
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "#6b7280",
                  fontWeight: 700,
                  lineHeight: 1.4,
                }}
              >
                {name}
              </div>

              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  marginTop: "12px",
                }}
              >
                {value}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "7px",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    color: "#9ca3af",
                  }}
                >
                  {target}
                </span>

                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 800,
                    color: "#15803d",
                  }}
                >
                  {change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Main analytics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 0.75fr",
            gap: "25px",
          }}
        >
          {/* Evidence analysis */}
          <section
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                color: "#4f46e5",
                fontWeight: 800,
                letterSpacing: "1.5px",
              }}
            >
              AI EVIDENCE ANALYSIS
            </div>

            <h2
              style={{
                fontSize: "22px",
                margin: "10px 0 5px",
              }}
            >
              Pilot Performance
            </h2>

            <p
              style={{
                color: "#6b7280",
                fontSize: "13px",
                marginBottom: "25px",
              }}
            >
              Performance against agreed pilot success criteria.
            </p>

            {[
              ["Technical Performance", 94],
              ["Operational Impact", 91],
              ["Cost Efficiency", 88],
              ["User Acceptance", 93],
            ].map(([label, score]) => (
              <div key={label} style={{ marginBottom: "22px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  <span>{label}</span>
                  <span>{score}%</span>
                </div>

                <div
                  style={{
                    height: "9px",
                    background: "#e5e7eb",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      width: `${score}%`,
                      height: "100%",
                      background: "#4f46e5",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            ))}

            <div
              style={{
                marginTop: "25px",
                padding: "20px",
                background: "#f8f7ff",
                borderRadius: "13px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "#4f46e5",
                  fontWeight: 800,
                  letterSpacing: "1px",
                }}
              >
                AI INSIGHT
              </div>

              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "#4b5563",
                  marginBottom: 0,
                }}
              >
                All primary pilot KPIs have exceeded their target thresholds.
                Evidence indicates that the solution can be considered for
                controlled scale-up.
              </p>
            </div>
          </section>

          {/* Scale decision */}
          <section
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                color: "#4f46e5",
                fontWeight: 800,
                letterSpacing: "1.5px",
              }}
            >
              SCALE DECISION
            </div>

            <h2
              style={{
                fontSize: "23px",
                margin: "10px 0",
              }}
            >
              Ready for Scale
            </h2>

            <div
              style={{
                marginTop: "20px",
                padding: "25px",
                borderRadius: "15px",
                background: "#ecfdf5",
                border: "1px solid #bbf7d0",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  fontWeight: 800,
                  color: "#15803d",
                }}
              >
                4/4
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "#166534",
                  fontWeight: 700,
                }}
              >
                PRIMARY KPIs ACHIEVED
              </div>
            </div>

            <div
              style={{
                marginTop: "22px",
                padding: "18px",
                background: "#f9fafb",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  marginBottom: "10px",
                }}
              >
                Recommended Action
              </div>

              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#15803d",
                }}
              >
                SCALE
              </div>

              <p
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  lineHeight: 1.5,
                  marginBottom: 0,
                }}
              >
                Expand deployment while maintaining KPI monitoring and
                periodic governance reviews.
              </p>
            </div>

            <button
              style={{
                width: "100%",
                marginTop: "22px",
                padding: "14px",
                border: "none",
                borderRadius: "9px",
                background: "#111827",
                color: "#ffffff",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Recommend Scale-Up →
            </button>

            <p
              style={{
                textAlign: "center",
                fontSize: "10px",
                color: "#9ca3af",
                marginTop: "12px",
                lineHeight: 1.5,
              }}
            >
              AI analyzes evidence. Government authorities make the final
              procurement decision.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}