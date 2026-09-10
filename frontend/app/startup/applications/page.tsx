"use client";

import { useState } from "react";

const applications = [
  {
    id: "APP-2026-021",
    challenge: "Smart Waste Collection",
    department: "Municipal Waste Department",
    match: 94,
    status: "Under Evaluation",
    submitted: "28 Aug 2026",
    budget: "₹10,00,000",
  },
  {
    id: "APP-2026-018",
    challenge: "Citizen Grievance Automation",
    department: "Urban Administration Department",
    match: 89,
    status: "Shortlisted",
    submitted: "24 Aug 2026",
    budget: "₹7,50,000",
  },
  {
    id: "APP-2026-012",
    challenge: "Intelligent Traffic Management",
    department: "Transport Department",
    match: 84,
    status: "Submitted",
    submitted: "19 Aug 2026",
    budget: "₹12,00,000",
  },
];

export default function StartupApplications() {
  const [selected, setSelected] = useState(applications[0]);

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
        <div style={{ marginBottom: 34 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#635bff",
              textTransform: "uppercase",
              letterSpacing: 1.2,
              marginBottom: 8,
            }}
          >
            Startup Portal
          </div>

          <h1
            style={{
              fontSize: 34,
              margin: 0,
              fontWeight: 800,
            }}
          >
            My Applications
          </h1>

          <p
            style={{
              marginTop: 10,
              color: "#687386",
              fontSize: 16,
            }}
          >
            Track your government challenge applications and evaluation status.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 18,
            marginBottom: 28,
          }}
        >
          {[
            ["Total Applications", "3", "#635bff"],
            ["Shortlisted", "1", "#16a34a"],
            ["Under Evaluation", "1", "#f59e0b"],
            ["Avg. AI Match", "89%", "#0891b2"],
          ].map(([label, value, color]) => (
            <div
              key={label}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: 22,
                border: "1px solid #e6e9ef",
                boxShadow: "0 6px 18px rgba(20,30,50,0.04)",
              }}
            >
              <div style={{ color: "#778196", fontSize: 13 }}>
                {label}
              </div>

              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color,
                  marginTop: 8,
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.35fr 0.9fr",
            gap: 22,
          }}
        >
          <section
            style={{
              background: "#fff",
              border: "1px solid #e6e9ef",
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: "0 6px 18px rgba(20,30,50,0.04)",
            }}
          >
            <div
              style={{
                padding: 22,
                borderBottom: "1px solid #edf0f4",
              }}
            >
              <h2 style={{ margin: 0, fontSize: 19 }}>
                Submitted Applications
              </h2>
            </div>

            {applications.map((app) => (
              <button
                key={app.id}
                onClick={() => setSelected(app)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  border: "none",
                  borderBottom: "1px solid #edf0f4",
                  background:
                    selected.id === app.id ? "#f5f3ff" : "#fff",
                  padding: 22,
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 15,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 17,
                        fontWeight: 750,
                        color: "#172033",
                      }}
                    >
                      {app.challenge}
                    </div>

                    <div
                      style={{
                        marginTop: 6,
                        color: "#778196",
                        fontSize: 13,
                      }}
                    >
                      {app.department}
                    </div>

                    <div
                      style={{
                        marginTop: 12,
                        color: "#9aa3b2",
                        fontSize: 12,
                      }}
                    >
                      {app.id} • Submitted {app.submitted}
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        display: "inline-block",
                        background: "#ede9fe",
                        color: "#635bff",
                        borderRadius: 999,
                        padding: "5px 10px",
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      {app.match}% AI Match
                    </div>

                    <div
                      style={{
                        marginTop: 10,
                        fontSize: 12,
                        fontWeight: 700,
                        color:
                          app.status === "Shortlisted"
                            ? "#16a34a"
                            : app.status === "Under Evaluation"
                            ? "#d97706"
                            : "#64748b",
                      }}
                    >
                      {app.status}
                    </div>
                  </div>
                </div>
              </button>
            ))}
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
            <div
              style={{
                fontSize: 12,
                color: "#635bff",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Application Details
            </div>

            <h2
              style={{
                fontSize: 23,
                margin: "10px 0 6px",
              }}
            >
              {selected.challenge}
            </h2>

            <p
              style={{
                color: "#778196",
                fontSize: 14,
                marginTop: 0,
              }}
            >
              {selected.department}
            </p>

            <div
              style={{
                marginTop: 24,
                padding: 18,
                background: "#f7f8fc",
                borderRadius: 14,
              }}
            >
              <div style={{ color: "#778196", fontSize: 12 }}>
                AI Compatibility Score
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginTop: 8,
                }}
              >
                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 850,
                    color: "#635bff",
                  }}
                >
                  {selected.match}%
                </div>

                <div
                  style={{
                    flex: 1,
                    height: 8,
                    background: "#e4e7ee",
                    borderRadius: 20,
                  }}
                >
                  <div
                    style={{
                      width: `${selected.match}%`,
                      height: "100%",
                      background: "#635bff",
                      borderRadius: 20,
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{ marginTop: 22 }}>
              {[
                ["Application ID", selected.id],
                ["Status", selected.status],
                ["Submitted", selected.submitted],
                ["Proposed Budget", selected.budget],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "13px 0",
                    borderBottom: "1px solid #edf0f4",
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: "#778196" }}>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 22,
                padding: 16,
                background: "#eefbf3",
                borderRadius: 12,
                color: "#166534",
                fontSize: 13,
                lineHeight: 1.5,
              }}
            >
              <strong>Next Step</strong>
              <br />
              Government evaluators are reviewing your application. You will
              be notified when the evaluation stage is completed.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}