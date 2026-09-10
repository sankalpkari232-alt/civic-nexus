export default function NewChallenge() {
  const steps = [
    ["01", "Define the Problem", "Describe the public-sector problem and the outcome you want to achieve."],
    ["02", "Set Requirements", "Add eligibility, budget, timeline and measurable success criteria."],
    ["03", "AI Structure", "Civic Nexus converts the problem into a clear innovation challenge."],
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

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "45px",
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
              GOVERNMENT PORTAL
            </div>

            <h1 style={{ fontSize: "38px", margin: 0 }}>
              Create Government Challenge
            </h1>

            <p
              style={{
                color: "#6b7280",
                marginTop: "10px",
                fontSize: "15px",
              }}
            >
              Turn a public-sector problem into a measurable innovation opportunity.
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              padding: "12px 18px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            Draft Challenge
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: "25px",
          }}
        >

          <section
            style={{
              background: "#ffffff",
              borderRadius: "18px",
              padding: "30px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 8px 30px rgba(15,23,42,0.05)",
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: "22px" }}>
              Challenge Information
            </h2>

            <label
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 700,
                marginTop: "25px",
                marginBottom: "8px",
              }}
            >
              Challenge Title
            </label>

            <input
              placeholder="e.g. Smart Waste Collection"
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "14px",
                borderRadius: "9px",
                border: "1px solid #d1d5db",
                fontSize: "14px",
              }}
            />

            <label
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 700,
                marginTop: "22px",
                marginBottom: "8px",
              }}
            >
              Problem Statement
            </label>

            <textarea
              placeholder="Describe the problem your department wants startups to solve..."
              rows={6}
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "14px",
                borderRadius: "9px",
                border: "1px solid #d1d5db",
                fontSize: "14px",
                resize: "vertical",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Department
                </label>

                <input
                  placeholder="Municipal Corporation"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "13px",
                    borderRadius: "9px",
                    border: "1px solid #d1d5db",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Estimated Budget
                </label>

                <input
                  placeholder="₹10,00,000"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "13px",
                    borderRadius: "9px",
                    border: "1px solid #d1d5db",
                  }}
                />
              </div>
            </div>

            <button
              style={{
                marginTop: "28px",
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "10px",
                background: "#4f46e5",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Generate Challenge with AI →
            </button>
          </section>

          <section
            style={{
              background: "#111827",
              color: "#ffffff",
              borderRadius: "18px",
              padding: "30px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "1.5px",
                color: "#a5b4fc",
              }}
            >
              CIVIC NEXUS WORKFLOW
            </div>

            <h2 style={{ fontSize: "24px", marginTop: "12px" }}>
              From Problem to Innovation
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "13px",
                lineHeight: 1.6,
              }}
            >
              Create structured challenges that startups can understand,
              evaluate and respond to.
            </p>

            <div style={{ marginTop: "30px" }}>
              {steps.map(([number, title, description]) => (
                <div
                  key={number}
                  style={{
                    display: "flex",
                    gap: "15px",
                    marginBottom: "25px",
                  }}
                >
                  <div
                    style={{
                      minWidth: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      background: "#4f46e5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      fontWeight: 800,
                    }}
                  >
                    {number}
                  </div>

                  <div>
                    <div style={{ fontWeight: 800, fontSize: "14px" }}>
                      {title}
                    </div>

                    <div
                      style={{
                        color: "#94a3b8",
                        fontSize: "12px",
                        lineHeight: 1.5,
                        marginTop: "5px",
                      }}
                    >
                      {description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "20px",
                padding: "16px",
                borderRadius: "12px",
                background: "#1e293b",
                fontSize: "12px",
                color: "#cbd5e1",
              }}
            >
              ✦ AI assists with structuring and matching — final decisions
              remain under government control.
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}