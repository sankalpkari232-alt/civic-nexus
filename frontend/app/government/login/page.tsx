"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GovernmentLogin() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setMessage("Demo login successful. Redirecting...");

    setTimeout(() => {
      router.push("/government/dashboard");
    }, 500);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 10% 15%, #5146e5 0%, transparent 30%), radial-gradient(circle at 90% 85%, #06b6d4 0%, transparent 28%), #0b1024",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 28,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 450,
          height: 450,
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "50%",
          top: -220,
          right: -120,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "50%",
          bottom: -180,
          left: -120,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 1080,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          background: "#fff",
          borderRadius: 26,
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LEFT SIDE */}
        <section
          style={{
            padding: "52px 48px",
            background:
              "linear-gradient(145deg, #171b3d 0%, #29245a 55%, #4338ca 100%)",
            color: "#fff",
            minHeight: 600,
          }}
        >
          <div
            style={{
              fontSize: 25,
              fontWeight: 850,
              letterSpacing: "-0.7px",
            }}
          >
            Civic Nexus
          </div>

          <div
            style={{
              marginTop: 6,
              color: "#b9bbd8",
              fontSize: 12,
            }}
          >
            Government Innovation OS
          </div>

          <div style={{ marginTop: 90 }}>
            <span
              style={{
                display: "inline-block",
                padding: "7px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.14)",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: 1,
              }}
            >
              GOVERNMENT PORTAL
            </span>

            <h1
              style={{
                fontSize: 42,
                lineHeight: 1.08,
                margin: "20px 0 16px",
                letterSpacing: "-1.5px",
              }}
            >
              Turn public
              <br />
              challenges into
              <br />
              <span style={{ color: "#a5b4fc" }}>real innovation.</span>
            </h1>

            <p
              style={{
                color: "#c8c9dc",
                fontSize: 15,
                lineHeight: 1.7,
                maxWidth: 420,
              }}
            >
              Identify promising startups, evaluate solutions, run controlled
              pilots, and scale what actually works.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 38,
              flexWrap: "wrap",
            }}
          >
            {["AI Matching", "Pilot Sandbox", "Evidence-Based Scale"].map(
              (item) => (
                <span
                  key={item}
                  style={{
                    padding: "8px 11px",
                    borderRadius: 9,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#d8d9e8",
                    fontSize: 11,
                  }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section
          style={{
            padding: "52px 48px",
            background: "#fff",
          }}
        >
          <div style={{ maxWidth: 390, margin: "0 auto" }}>
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 14,
                background: "#ede9fe",
                color: "#635bff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 21,
                fontWeight: 900,
                marginBottom: 22,
              }}
            >
              G
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: "-0.8px",
              }}
            >
              Welcome back
            </h2>

            <p
              style={{
                marginTop: 8,
                color: "#778196",
                fontSize: 14,
              }}
            >
              Sign in to your government workspace.
            </p>

            <form onSubmit={handleLogin} style={{ marginTop: 30 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                Official Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@department.gov.in"
                required
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "13px 14px",
                  border: "1px solid #dfe3ea",
                  borderRadius: 10,
                  outline: "none",
                  fontSize: 14,
                  marginBottom: 19,
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <label
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  Password
                </label>

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    border: "none",
                    background: "none",
                    color: "#635bff",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "13px 14px",
                  border: "1px solid #dfe3ea",
                  borderRadius: 10,
                  outline: "none",
                  fontSize: 14,
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 15,
                  marginBottom: 22,
                }}
              >
                <label
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                    fontSize: 12,
                    color: "#687386",
                  }}
                >
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  style={{
                    border: "none",
                    background: "none",
                    color: "#635bff",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "none",
                  borderRadius: 11,
                  background:
                    "linear-gradient(135deg, #635bff, #4f46e5)",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 14,
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(99,91,255,0.25)",
                }}
              >
                Sign in to Government Portal →
              </button>

              {message && (
                <div
                  style={{
                    marginTop: 15,
                    padding: 12,
                    borderRadius: 10,
                    background: "#f5f3ff",
                    color: "#5146c7",
                    fontSize: 12,
                    lineHeight: 1.5,
                  }}
                >
                  {message}
                </div>
              )}
            </form>

            <div
              style={{
                margin: "28px 0",
                borderTop: "1px solid #edf0f4",
              }}
            />

            <div
              style={{
                padding: 15,
                background: "#f8fafc",
                borderRadius: 11,
                fontSize: 12,
                color: "#687386",
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: "#172033" }}>
                AI-assisted. Human-controlled.
              </strong>
              <br />
              Civic Nexus supports government decision-making while keeping
              final authority with authorized officials.
            </div>

            <div
              style={{
                textAlign: "center",
                marginTop: 24,
                fontSize: 13,
                color: "#778196",
              }}
            >
              Are you a startup?{" "}
              <Link
                href="/startup/login"
                style={{
                  color: "#635bff",
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                Startup Portal →
              </Link>
            </div>

            <div
              style={{
                textAlign: "center",
                marginTop: 16,
                fontSize: 12,
              }}
            >
              <Link
                href="/"
                style={{
                  color: "#9aa3b2",
                  textDecoration: "none",
                }}
              >
                ← Back to Civic Nexus
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}