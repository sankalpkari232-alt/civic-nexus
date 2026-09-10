"use client";

import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function StartupDashboard() {
  return (
    <div className="sidebar-layout">
      <Sidebar startup />

      <main className="main">

        {/* HEADER */}
        <div className="section-title">
          <div>
            <div className="eyebrow">STARTUP PORTAL</div>

            <h1>Welcome, GreenRoute AI</h1>

            <p className="muted">
              Discover government challenges, apply for pilots and track your
              innovation journey.
            </p>
          </div>
        </div>

        {/* PROFILE */}
        <div className="card">
          <div className="eyebrow">STARTUP PROFILE</div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "12px",
            }}
          >
            <div>
              <h2>GreenRoute AI</h2>

              <p className="muted">
                AI-powered urban mobility and route optimization
              </p>

              <p className="muted">
                Stage: Pilot Ready • Location: Indore, Madhya Pradesh
              </p>
            </div>

            <span
              style={{
                background: "#dcfce7",
                color: "#166534",
                padding: "8px 14px",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              VERIFIED STARTUP
            </span>
          </div>
        </div>

        {/* STATS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          <div className="card">
            <div className="eyebrow">MATCHED</div>
            <h2 style={{ marginTop: "8px" }}>12</h2>
            <p className="muted">Government challenges</p>
          </div>

          <div className="card">
            <div className="eyebrow">APPLICATIONS</div>
            <h2 style={{ marginTop: "8px" }}>4</h2>
            <p className="muted">Submitted applications</p>
          </div>

          <div className="card">
            <div className="eyebrow">PILOTS</div>
            <h2 style={{ marginTop: "8px" }}>1</h2>
            <p className="muted">Active pilot</p>
          </div>

          <div className="card">
            <div className="eyebrow">SUCCESS SCORE</div>
            <h2 style={{ marginTop: "8px" }}>82%</h2>
            <p className="muted">Current readiness</p>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="card" style={{ marginTop: "20px" }}>
          <div className="eyebrow">QUICK ACTIONS</div>

          <h2 style={{ marginTop: "8px" }}>
            Continue your innovation journey
          </h2>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "18px",
            }}
          >
            <Link
              href="/startup/challenges"
              className="btn"
            >
              Discover Challenges
            </Link>

            <Link
              href="/startup/applications"
              className="btn"
            >
              My Applications
            </Link>

            <Link
              href="/startup/pilots"
              className="btn"
            >
              Track Pilot
            </Link>
          </div>
        </div>

        {/* AI MATCHED CHALLENGES */}
        <div className="card" style={{ marginTop: "20px" }}>
          <div className="eyebrow">
            AI MATCHED OPPORTUNITIES
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <h2 style={{ marginTop: "8px" }}>
              Recommended Government Challenges
            </h2>

            <Link
              href="/startup/challenges"
              style={{
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              View all →
            </Link>
          </div>

          {/* CHALLENGE 1 */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "18px",
              marginTop: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <h3>
                  Smart Municipal Waste Optimization
                </h3>

                <p className="muted">
                  AI-based route optimization for municipal
                  waste collection.
                </p>

                <p className="muted">
                  Department: Municipal Corporation
                </p>
              </div>

              <span
                style={{
                  background: "#dbeafe",
                  color: "#1d4ed8",
                  padding: "7px 12px",
                  borderRadius: "999px",
                  height: "fit-content",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                94% MATCH
              </span>
            </div>
          </div>

          {/* CHALLENGE 2 */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "18px",
              marginTop: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <h3>
                  Intelligent Traffic Management
                </h3>

                <p className="muted">
                  Predictive analytics to reduce congestion
                  at major intersections.
                </p>

                <p className="muted">
                  Department: Urban Transport Authority
                </p>
              </div>

              <span
                style={{
                  background: "#dbeafe",
                  color: "#1d4ed8",
                  padding: "7px 12px",
                  borderRadius: "999px",
                  height: "fit-content",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                87% MATCH
              </span>
            </div>
          </div>

          {/* CHALLENGE 3 */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "18px",
              marginTop: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <h3>
                  Water Leakage Detection
                </h3>

                <p className="muted">
                  Smart monitoring system for identifying
                  leakage and abnormal water usage.
                </p>

                <p className="muted">
                  Department: Public Utilities
                </p>
              </div>

              <span
                style={{
                  background: "#dbeafe",
                  color: "#1d4ed8",
                  padding: "7px 12px",
                  borderRadius: "999px",
                  height: "fit-content",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                81% MATCH
              </span>
            </div>
          </div>
        </div>

        {/* ACTIVE PILOT */}
        <div
          className="card"
          style={{
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <div className="eyebrow">ACTIVE PILOT</div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "10px",
            }}
          >
            <div>
              <h2>
                Smart Municipal Waste Optimization
              </h2>

              <p className="muted">
                Pilot #CN-2026-014
              </p>

              <p className="muted">
                Week 6 of 8 • KPI validation in progress
              </p>
            </div>

            <Link
              href="/startup/pilots"
              className="btn"
            >
              View Pilot
            </Link>
          </div>

          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                height: "10px",
                background: "#e5e7eb",
                borderRadius: "999px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "75%",
                  height: "100%",
                  background: "#2563eb",
                  borderRadius: "999px",
                }}
              ></div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "8px",
                fontSize: "13px",
              }}
            >
              <span className="muted">
                Pilot progress
              </span>

              <strong>75%</strong>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}