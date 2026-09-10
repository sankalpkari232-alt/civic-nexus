export default function GovernmentEvaluation() {
  const criteria = [
    ["Technical Capability", 25, 23],
    ["Innovation", 25, 24],
    ["Scalability", 25, 22],
    ["Cost Effectiveness", 25, 21],
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
        <div style={{ marginBottom: "30px" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "2px",
              color: "#4f46e5",
              marginBottom: "8px",
            }}
          >
            GOVERNMENT PROCUREMENT
          </div>

          <h1 style={{ fontSize: "38px", margin: 0 }}>
            Startup Evaluation
          </h1>

          <p
            style={{
              color: "#6b7280",
              fontSize: "15px",
              marginTop: "10px",
            }}
          >
            Evaluate shortlisted startups using transparent and measurable
            criteria.
          </p>
        </div>

        {/* Startup summary */}
        <section
          style={{
            background: "#111827",
            color: "#ffffff",
            borderRadius: "18px",
            padding: "25px 30px",
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
              SELECTED STARTUP
            </div>

            <h2 style={{ margin: "8px 0 5px", fontSize: "24px" }}>
              GreenRoute AI
            </h2>

            <p
              style={{
                margin: 0,
                color: "#cbd5e1",
                fontSize: "13px",
              }}
            >
              CleanTech · AI · Waste Management
            </p>
          </div>

          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontSize: "11px",
                color: "#94a3b8",
              }}
            >
              AI MATCH SCORE
            </div>

            <div
              style={{
                fontSize: "34px",
                fontWeight: 800,
                marginTop: "4px",
              }}
            >
              94%
            </div>
          </div>
        </section>

        {/* Main content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.35fr 0.85fr",
            gap: "25px",
          }}
        >
          {/* Evaluation criteria */}
          <section
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "21px",
              }}
            >
              Evaluation Scorecard
            </h2>

            <p
              style={{
                color: "#6b7280",
                fontSize: "13px",
                marginTop: "7px",
                marginBottom: "28px",
              }}
            >
              Review each criterion before making a procurement decision.
            </p>

            {criteria.map(([name, weight, score]) => (
              <div
                key={name}
                style={{
                  padding: "20px 0",
                  borderTop: "1px solid #eef0f3",
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
                        fontSize: "14px",
                        fontWeight: 800,
                      }}
                    >
                      {name}
                    </div>

                    <div
                      style={{
                        color: "#9ca3af",
                        fontSize: "11px",
                        marginTop: "4px",
                      }}
                    >
                      Weight: {weight}%
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: "#4f46e5",
                    }}
                  >
                    {score}/25
                  </div>
                </div>

                <div
                  style={{
                    height: "8px",
                    background: "#e5e7eb",
                    borderRadius: "10px",
                    marginTop: "12px",
                  }}
                >
                  <div
                    style={{
                      width: `${(Number(score) / 25) * 100}%`,
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
                marginTop: "20px",
                padding: "20px",
                borderRadius: "12px",
                background: "#f8f7ff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#6b7280",
                    fontWeight: 700,
                  }}
                >
                  FINAL SCORE
                </div>

                <div
                  style={{
                    fontSize: "13px",
                    color: "#4b5563",
                    marginTop: "4px",
                  }}
                >
                  Weighted evaluation
                </div>
              </div>

              <div
                style={{
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "#4f46e5",
                }}
              >
                90/100
              </div>
            </div>
          </section>

          {/* AI recommendation */}
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
              AI ASSESSMENT
            </div>

            <h2
              style={{
                fontSize: "23px",
                margin: "10px 0",
              }}
            >
              Strong Candidate
            </h2>

            <p
              style={{
                color: "#6b7280",
                fontSize: "13px",
                lineHeight: 1.6,
              }}
            >
              GreenRoute AI demonstrates strong technical capability,
              innovation potential and suitability for a controlled
              government pilot.
            </p>

            <div
              style={{
                marginTop: "25px",
                padding: "20px",
                borderRadius: "14px",
                background: "#ecfdf5",
                border: "1px solid #bbf7d0",
              }}
            >
              <div
                style={{
                  color: "#15803d",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "1px",
                }}
              >
                RECOMMENDATION
              </div>

              <div
                style={{
                  color: "#166534",
                  fontSize: "24px",
                  fontWeight: 800,
                  marginTop: "7px",
                }}
              >
                CONTROLLED PILOT
              </div>

              <p
                style={{
                  color: "#166534",
                  fontSize: "12px",
                  lineHeight: 1.5,
                }}
              >
                Proceed with a measurable pilot before full-scale procurement.
              </p>
            </div>

            <div
              style={{
                marginTop: "25px",
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
                Key Strengths
              </div>

              {[
                "Strong AI capability",
                "High problem alignment",
                "Scalable technology",
                "Clear measurable KPIs",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    fontSize: "12px",
                    color: "#4b5563",
                    padding: "6px 0",
                  }}
                >
                  ✓ {item}
                </div>
              ))}
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
              Approve for Pilot →
            </button>

            <p
              style={{
                textAlign: "center",
                fontSize: "10px",
                color: "#9ca3af",
                marginTop: "12px",
              }}
            >
              AI provides recommendations. Final approval remains with the
              government department.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}