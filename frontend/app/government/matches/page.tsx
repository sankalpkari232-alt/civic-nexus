"use client";

import { useState } from "react";

export default function StartupMatching() {
  const [selected, setSelected] = useState("GreenRoute AI");

  const startups = [
    {
      name: "GreenRoute AI",
      category: "CleanTech · AI",
      score: 94,
      description:
        "AI-powered waste collection optimization using route intelligence and predictive analytics.",
      strengths: ["AI / ML", "Scalable", "Urban Solutions"],
      budget: "₹10L",
    },
    {
      name: "CivicFlow Technologies",
      category: "GovTech · SaaS",
      score: 89,
      description:
        "Digital platform for optimizing municipal workflows and citizen service delivery.",
      strengths: ["GovTech", "SaaS", "Analytics"],
      budget: "₹8L",
    },
    {
      name: "UrbanSense Labs",
      category: "IoT · Smart City",
      score: 84,
      description:
        "IoT-based monitoring platform for connected urban infrastructure and operations.",
      strengths: ["IoT", "Sensors", "Smart City"],
      budget: "₹12L",
    },
  ];

  const current = startups.find((s) => s.name === selected) || startups[0];

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
      <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "35px" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "2px",
              color: "#4f46e5",
              marginBottom: "8px",
            }}
          >
            AI-ASSISTED PROCUREMENT
          </div>

          <h1
            style={{
              fontSize: "38px",
              margin: 0,
              fontWeight: 800,
            }}
          >
            Startup Matching
          </h1>

          <p
            style={{
              color: "#6b7280",
              fontSize: "15px",
              marginTop: "10px",
            }}
          >
            Find startups whose capabilities align with your government
            challenge.
          </p>
        </div>

        {/* Challenge banner */}
        <div
          style={{
            background: "#111827",
            color: "#fff",
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
              ACTIVE CHALLENGE
            </div>

            <h2 style={{ margin: "8px 0 5px", fontSize: "22px" }}>
              Smart Waste Collection
            </h2>

            <p
              style={{
                margin: 0,
                color: "#cbd5e1",
                fontSize: "13px",
              }}
            >
              Municipal Corporation · CleanTech · AI
            </p>
          </div>

          <div style={{ textAlign: "right" }}>
            <div
              style={{
                color: "#94a3b8",
                fontSize: "11px",
              }}
            >
              MATCHES FOUND
            </div>

            <div
              style={{
                fontSize: "32px",
                fontWeight: 800,
                marginTop: "4px",
              }}
            >
              12
            </div>
          </div>
        </div>

        {/* Main layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 0.9fr",
            gap: "25px",
          }}
        >
          {/* Startup list */}
          <section
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "18px",
              padding: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h2 style={{ margin: 0, fontSize: "20px" }}>
                Recommended Startups
              </h2>

              <span
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                }}
              >
                Ranked by AI compatibility
              </span>
            </div>

            {startups.map((startup, index) => (
              <div
                key={startup.name}
                onClick={() => setSelected(startup.name)}
                style={{
                  padding: "20px",
                  marginBottom: "14px",
                  borderRadius: "14px",
                  border:
                    selected === startup.name
                      ? "2px solid #4f46e5"
                      : "1px solid #e5e7eb",
                  background:
                    selected === startup.name ? "#f8f7ff" : "#ffffff",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", gap: "15px" }}>
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        background: "#eef2ff",
                        color: "#4f46e5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                      }}
                    >
                      {index + 1}
                    </div>

                    <div>
                      <h3
                        style={{
                          margin: 0,
                          fontSize: "16px",
                        }}
                      >
                        {startup.name}
                      </h3>

                      <div
                        style={{
                          color: "#6b7280",
                          fontSize: "12px",
                          marginTop: "5px",
                        }}
                      >
                        {startup.category}
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontSize: "26px",
                        fontWeight: 800,
                        color: "#4f46e5",
                      }}
                    >
                      {startup.score}%
                    </div>

                    <div
                      style={{
                        fontSize: "10px",
                        color: "#6b7280",
                      }}
                    >
                      AI MATCH
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.5,
                    color: "#4b5563",
                    margin: "16px 0",
                  }}
                >
                  {startup.description}
                </p>

                <div style={{ display: "flex", gap: "8px" }}>
                  {startup.strengths.map((strength) => (
                    <span
                      key={strength}
                      style={{
                        background: "#f3f4f6",
                        padding: "6px 9px",
                        borderRadius: "6px",
                        fontSize: "10px",
                        fontWeight: 700,
                      }}
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Match analysis */}
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
              MATCH ANALYSIS
            </div>

            <h2
              style={{
                fontSize: "23px",
                margin: "10px 0 5px",
              }}
            >
              {current.name}
            </h2>

            <p
              style={{
                color: "#6b7280",
                fontSize: "12px",
              }}
            >
              AI compatibility assessment
            </p>

            <div
              style={{
                margin: "25px 0",
                padding: "25px",
                borderRadius: "15px",
                background: "#f8f7ff",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: 800,
                  color: "#4f46e5",
                }}
              >
                {current.score}%
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                }}
              >
                Overall Match Score
              </div>
            </div>

            {[
              ["Technical Capability", 96],
              ["Problem Fit", 94],
              ["Scalability", 91],
              ["Cost Compatibility", 88],
            ].map(([label, value]) => (
              <div key={label} style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    fontWeight: 700,
                    marginBottom: "7px",
                  }}
                >
                  <span>{label}</span>
                  <span>{value}%</span>
                </div>

                <div
                  style={{
                    height: "7px",
                    background: "#e5e7eb",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      width: `${value}%`,
                      height: "100%",
                      background: "#4f46e5",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            ))}

            <button
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "14px",
                border: "none",
                borderRadius: "9px",
                background: "#111827",
                color: "#fff",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Shortlist Startup →
            </button>

            <p
              style={{
                textAlign: "center",
                fontSize: "10px",
                color: "#9ca3af",
                marginTop: "15px",
              }}
            >
              AI recommends. Government decides.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}