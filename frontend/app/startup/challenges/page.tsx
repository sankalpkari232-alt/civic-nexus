import Link from "next/link";

export default function StartupChallenges() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        fontFamily: "Arial, sans-serif",
        color: "#172033",
      }}
    >
      <header
        style={{
          height: "72px",
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "21px",
            fontWeight: 800,
            textDecoration: "none",
            color: "#111827",
          }}
        >
          Civic Nexus
        </Link>

        <div style={{ display: "flex", gap: "25px", fontSize: "14px" }}>
          <Link href="/startup/dashboard">Dashboard</Link>
          <Link href="/startup/challenges">Challenges</Link>
          <Link href="/startup/applications">Applications</Link>
          <Link href="/startup/pilots">Pilots</Link>
        </div>
      </header>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "55px 30px",
        }}
      >
        <div
          style={{
            color: "#6366f1",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "1.5px",
            marginBottom: "10px",
          }}
        >
          STARTUP OPPORTUNITIES
        </div>

        <h1
          style={{
            fontSize: "38px",
            margin: 0,
            fontWeight: 800,
          }}
        >
          Discover Government Challenges
        </h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "15px",
            marginTop: "10px",
            maxWidth: "650px",
            lineHeight: 1.6,
          }}
        >
          Find real public-sector problems where your startup's technology
          can create measurable impact.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginTop: "35px",
          }}
        >
          {[
            [
              "Smart Waste Collection",
              "Municipal Corporation",
              "CleanTech · AI",
              "94%",
            ],
            [
              "Citizen Grievance Automation",
              "Urban Administration",
              "GovTech · AI",
              "89%",
            ],
            [
              "Intelligent Traffic Management",
              "Transport Department",
              "Smart City · IoT",
              "84%",
            ],
          ].map(([title, department, category, score]) => (
            <div
              key={title}
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 5px 20px rgba(15,23,42,0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    background: "#ecfdf5",
                    color: "#15803d",
                    padding: "6px 9px",
                    borderRadius: "20px",
                    fontSize: "10px",
                    fontWeight: 800,
                  }}
                >
                  AI MATCH
                </span>

                <strong
                  style={{
                    color: "#4f46e5",
                    fontSize: "18px",
                  }}
                >
                  {score}
                </strong>
              </div>

              <h2
                style={{
                  fontSize: "18px",
                  marginTop: "22px",
                  marginBottom: "8px",
                }}
              >
                {title}
              </h2>

              <p
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                }}
              >
                {department}
              </p>

              <p
                style={{
                  fontSize: "12px",
                  color: "#4f46e5",
                  fontWeight: 700,
                  marginTop: "16px",
                }}
              >
                {category}
              </p>

              <Link
                href="/startup/applications"
                style={{
                  display: "block",
                  marginTop: "20px",
                  background: "#111827",
                  color: "#ffffff",
                  padding: "11px",
                  borderRadius: "8px",
                  textAlign: "center",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                View Challenge →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}