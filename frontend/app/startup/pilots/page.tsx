"use client";

import { useState } from "react";

const milestones = [
  ["Baseline Assessment", "Completed", "100%"],
  ["AI Route Deployment", "Completed", "100%"],
  ["Live Pilot Monitoring", "In Progress", "65%"],
  ["Government Pilot Review", "Upcoming", "0%"],
];

export default function StartupPilots() {
  const [evidence, setEvidence] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        color: "#172033",
        padding: "42px 50px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 30,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 13,
                color: "#635bff",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1.2,
              }}
            >
              Startup Portal
            </div>

            <h1
              style={{
                fontSize: 34,
                margin: "8px 0 8px",
                fontWeight: 800,
              }}
            >
              Active Pilot
            </h1>

            <p style={{ margin: 0, color: "#687386", fontSize: 16 }}>
              Monitor your government pilot and demonstrate real-world impact.
            </p>
          </div>

          <div
            style={{
              background: "#ecfdf3",
              color: "#15803d",
              padding: "9px 15px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 800,
            }}
          >
            ● PILOT ACTIVE
          </div>
        </div>

        <section
          style={{
            background: "#fff",
            border: "1px solid #e6e9ef",
            borderRadius: 18,
            padding: 28,
            boxShadow: "0 6px 18px rgba(20,30,50,0.04)",
            marginBottom: 22,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  color: "#8a93a3",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                PILOT #CN-2026-014
              </div>

              <h2
                style={{
                  fontSize: 25,
                  margin: "7px 0",
                }}
              >
                GreenRoute AI × Municipal Waste Department
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#687386",
                  fontSize: 14,
                }}
              >
                AI-powered waste collection route optimization
              </p>
            </div>

            <div style={{ minWidth: 190 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 13,
                  marginBottom: 8,
                }}
              >
                <span style={{ color: "#778196" }}>Pilot Progress</span>
                <strong>62%</strong>
              </div>

              <div
                style={{
                  height: 9,
                  background: "#e8eaf0",
                  borderRadius: 20,
                }}
              >
                <div
                  style={{
                    width: "62%",
                    height: "100%",
                    background: "#635bff",
                    borderRadius: 20,
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: 7,
                  fontSize: 12,
                  color: "#8a93a3",
                }}
              >
                Week 5 of 8
              </div>
            </div>
          </div>
        </section>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18,
            marginBottom: 22,
          }}
        >
          {[
            ["Collection Efficiency", "87%", "+18%", "#16a34a"],
            ["Fuel Consumption", "72%", "-14%", "#0891b2"],
            ["Missed Collections", "8%", "-32%", "#16a34a"],
          ].map(([title, value, change, color]) => (
            <div
              key={title}
              style={{
                background: "#fff",
                border: "1px solid #e6e9ef",
                borderRadius: 16,
                padding: 22,
                boxShadow: "0 6px 18px rgba(20,30,50,0.04)",
              }}
            >
              <div style={{ color: "#778196", fontSize: 13 }}>
                {title}
              </div>

              <div
                style={{
                  fontSize: 30,
                  fontWeight: 850,
                  marginTop: 9,
                }}
              >
                {value}
              </div>

              <div
                style={{
                  color,
                  fontSize: 13,
                  fontWeight: 750,
                  marginTop: 5,
                }}
              >
                {change} vs baseline
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 22,
          }}
        >
          <section
            style={{
              background: "#fff",
              border: "1px solid #e6e9ef",
              borderRadius: 18,
              padding: 26,
              boxShadow: "0 6px 18px rgba(20,30,50,0.04)",
            }}
          >
            <h2 style={{ margin: 0, fontSize: 19 }}>
              Pilot Milestones
            </h2>

            <p
              style={{
                color: "#778196",
                fontSize: 13,
                marginTop: 7,
              }}
            >
              Track implementation progress and government checkpoints.
            </p>

            <div style={{ marginTop: 22 }}>
              {milestones.map(([name, status, progress], index) => (
                <div
                  key={name}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: "17px 0",
                    borderBottom:
                      index === milestones.length - 1
                        ? "none"
                        : "1px solid #edf0f4",
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      background:
                        status === "Completed"
                          ? "#dcfce7"
                          : status === "In Progress"
                          ? "#ede9fe"
                          : "#f1f5f9",
                      color:
                        status === "Completed"
                          ? "#15803d"
                          : status === "In Progress"
                          ? "#635bff"
                          : "#64748b",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {status === "Completed"
                      ? "✓"
                      : status === "In Progress"
                      ? "→"
                      : "○"}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <strong style={{ fontSize: 14 }}>{name}</strong>

                      <span
                        style={{
                          fontSize: 12,
                          color:
                            status === "Completed"
                              ? "#15803d"
                              : status === "In Progress"
                              ? "#635bff"
                              : "#64748b",
                          fontWeight: 700,
                        }}
                      >
                        {status}
                      </span>
                    </div>

                    <div
                      style={{
                        marginTop: 9,
                        height: 6,
                        background: "#edf0f4",
                        borderRadius: 20,
                      }}
                    >
                      <div
                        style={{
                          width: progress,
                          height: "100%",
                          background:
                            status === "Completed"
                              ? "#22c55e"
                              : "#635bff",
                          borderRadius: 20,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            style={{
              background: "#fff",
              border: "1px solid #e6e9ef",
              borderRadius: 18,
              padding: 26,
              boxShadow: "0 6px 18px rgba(20,30,50,0.04)",
              height: "fit-content",
            }}
          >
            <h2 style={{ margin: 0, fontSize: 19 }}>
              Pilot Information
            </h2>

            <div style={{ marginTop: 18 }}>
              {[
                ["Government Department", "Municipal Waste Department"],
                ["Pilot Budget", "₹10,00,000"],
                ["Duration", "8 Weeks"],
                ["Current Week", "Week 5"],
                ["Evidence Collected", "18 Items"],
                ["Next Review", "Week 6"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 15,
                    padding: "12px 0",
                    borderBottom: "1px solid #edf0f4",
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: "#778196" }}>{label}</span>
                  <strong style={{ textAlign: "right" }}>{value}</strong>
                </div>
              ))}
            </div>

            <button
              onClick={() => setEvidence(!evidence)}
              style={{
                width: "100%",
                marginTop: 20,
                padding: "12px 15px",
                border: "none",
                borderRadius: 10,
                background: "#635bff",
                color: "#fff",
                fontWeight: 750,
                cursor: "pointer",
              }}
            >
              {evidence ? "Evidence Submitted ✓" : "Submit Pilot Evidence"}
            </button>

            {evidence && (
              <div
                style={{
                  marginTop: 12,
                  padding: 13,
                  borderRadius: 10,
                  background: "#ecfdf3",
                  color: "#166534",
                  fontSize: 12,
                }}
              >
                Evidence package submitted successfully for government
                review.
              </div>
            )}
          </section>
        </div>

        <section
          style={{
            marginTop: 22,
            background: "linear-gradient(135deg, #171b35, #29245a)",
            color: "#fff",
            borderRadius: 18,
            padding: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  color: "#b8b3ff",
                  fontSize: 12,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Scale Opportunity
              </div>

              <h2
                style={{
                  margin: "8px 0 6px",
                  fontSize: 22,
                }}
              >
                Demonstrate impact. Prepare for scale.
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#c7cad9",
                  fontSize: 14,
                }}
              >
                Strong pilot results can unlock wider government deployment.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 14,
                padding: "15px 22px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 12, color: "#c7cad9" }}>
                Current Readiness
              </div>

              <div
                style={{
                  fontSize: 28,
                  fontWeight: 850,
                  marginTop: 3,
                }}
              >
                92%
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}