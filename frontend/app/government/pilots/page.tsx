export default function GovernmentPilots() {
  const milestones = [
    ["01", "Baseline Assessment", "Measure current waste collection performance.", "Completed"],
    ["02", "AI Route Deployment", "Deploy optimized collection routes.", "Completed"],
    ["03", "Live Pilot Monitoring", "Track performance against KPIs.", "In Progress"],
    ["04", "Pilot Review", "Evaluate results and decide next steps.", "Upcoming"],
  ];

  const kpis = [
    ["Collection Efficiency", "87%", "+18%"],
    ["Fuel Consumption", "72%", "-14%"],
    ["Missed Collections", "8%", "-32%"],
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
              GOVERNMENT PILOT SANDBOX
            </div>

            <h1 style={{ fontSize: "38px", margin: 0 }}>
              Pilot Monitoring
            </h1>

            <p
              style={{
                color: "#6b7280",
                fontSize: "15px",
                marginTop: "10px",
              }}
            >
              Monitor startup solutions in a controlled real-world environment.
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
            ● PILOT ACTIVE
          </div>
        </div>

        {/* Pilot overview */}
        <section
          style={{
            background: "#111827",
            color: "#fff",
            borderRadius: "18px",
            padding: "28px 30px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
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
                  margin: "8px 0",
                }}
              >
                GreenRoute AI × Municipal Waste Department
              </h2>

              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "13px",
                  margin: 0,
                }}
              >
                AI-powered waste collection route optimization
              </p>
            </div>

            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  color: "#94a3b8",
                  fontSize: "11px",
                }}
              >
                PILOT PROGRESS
              </div>

              <div
                style={{
                  fontSize: "34px",
                  fontWeight: 800,
                  marginTop: "4px",
                }}
              >
                62%
              </div>
            </div>
          </div>

          <div
            style={{
              height: "8px",
              background: "#334155",
              borderRadius: "10px",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                width: "62%",
                height: "100%",
                background: "#818cf8",
                borderRadius: "10px",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              fontSize: "11px",
              color: "#94a3b8",
            }}
          >
            <span>Week 5 of 8</span>
            <span>₹10,00,000 Pilot Budget</span>
          </div>
        </section>

        {/* KPI cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
            marginBottom: "25px",
          }}
        >
          {kpis.map(([name, value, change]) => (
            <div
              key={name}
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "22px",
              }}
            >
              <div
                style={{
                  color: "#6b7280",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                {name}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "end",
                  marginTop: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: 800,
                  }}
                >
                  {value}
                </div>

                <div
                  style={{
                    color: "#15803d",
                    background: "#ecfdf5",
                    padding: "5px 8px",
                    borderRadius: "6px",
                    fontSize: "11px",
                    fontWeight: 800,
                  }}
                >
                  {change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "25px",
          }}
        >
          {/* Milestones */}
          <section
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            <h2
              style={{
                fontSize: "21px",
                margin: 0,
              }}
            >
              Pilot Milestones
            </h2>

            <p
              style={{
                color: "#6b7280",
                fontSize: "13px",
                marginTop: "7px",
              }}
            >
              Track implementation and evidence throughout the pilot.
            </p>

            <div style={{ marginTop: "25px" }}>
              {milestones.map(([number, title, description, status]) => (
                <div
                  key={number}
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "18px 0",
                    borderTop: "1px solid #eef0f3",
                  }}
                >
                  <div
                    style={{
                      minWidth: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background:
                        status === "Completed"
                          ? "#dcfce7"
                          : status === "In Progress"
                          ? "#eef2ff"
                          : "#f3f4f6",
                      color:
                        status === "Completed"
                          ? "#15803d"
                          : status === "In Progress"
                          ? "#4f46e5"
                          : "#6b7280",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      fontWeight: 800,
                    }}
                  >
                    {number}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <strong style={{ fontSize: "14px" }}>
                        {title}
                      </strong>

                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 800,
                          color:
                            status === "Completed"
                              ? "#15803d"
                              : status === "In Progress"
                              ? "#4f46e5"
                              : "#6b7280",
                        }}
                      >
                        {status}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: "12px",
                        color: "#6b7280",
                        marginTop: "5px",
                        lineHeight: 1.5,
                      }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pilot control panel */}
          <section
            style={{
              background: "#fff",
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
              PILOT CONTROL
            </div>

            <h2
              style={{
                fontSize: "22px",
                margin: "10px 0",
              }}
            >
              Evidence & Governance
            </h2>

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
                }}
              >
                Evidence Collected
              </div>

              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  marginTop: "8px",
                }}
              >
                18
              </div>

              <div
                style={{
                  color: "#6b7280",
                  fontSize: "11px",
                }}
              >
                KPI reports, field observations and system logs
              </div>
            </div>

            <div
              style={{
                marginTop: "15px",
                padding: "18px",
                background: "#f8f7ff",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 800,
                }}
              >
                Next Review
              </div>

              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  marginTop: "8px",
                  color: "#4f46e5",
                }}
              >
                Week 6 Review
              </div>

              <div
                style={{
                  color: "#6b7280",
                  fontSize: "11px",
                  marginTop: "4px",
                }}
              >
                Review KPI performance and pilot evidence.
              </div>
            </div>

            <button
              style={{
                width: "100%",
                marginTop: "22px",
                padding: "14px",
                border: "none",
                borderRadius: "9px",
                background: "#111827",
                color: "#fff",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              View Pilot Evidence →
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
              Pilot evidence is used to support transparent scale-up decisions.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}