import Link from "next/link";

const workflow = [
  {
    number: "01",
    title: "Identify",
    description: "Government departments publish real-world challenges.",
    color: "blue",
    icon: "⌁",
  },
  {
    number: "02",
    title: "Match",
    description: "AI-assisted matching connects challenges with relevant startups.",
    color: "violet",
    icon: "✦",
  },
  {
    number: "03",
    title: "Evaluate",
    description: "Structured scoring makes startup evaluation transparent.",
    color: "pink",
    icon: "◈",
  },
  {
    number: "04",
    title: "Pilot",
    description: "Promising solutions are tested through controlled pilots.",
    color: "orange",
    icon: "↗",
  },
  {
    number: "05",
    title: "Prove",
    description: "KPIs and evidence determine whether the solution works.",
    color: "cyan",
    icon: "✓",
  },
  {
    number: "06",
    title: "Scale",
    description: "Successful innovations move from pilot to wider adoption.",
    color: "green",
    icon: "∞",
  },
];

const governmentFeatures = [
  "Publish innovation challenges",
  "Discover eligible startups",
  "AI-assisted startup matching",
  "Transparent evaluation",
  "Pilot management",
  "Evidence-based scale decisions",
];

const startupFeatures = [
  "Discover government challenges",
  "AI-powered opportunity matching",
  "Submit solution proposals",
  "Track applications",
  "Manage active pilots",
  "Showcase measurable impact",
];

export default function Home() {
  return (
    <main className="cn-home">
      {/* BACKGROUND */}
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      {/* NAVBAR */}
      <nav className="cn-nav">
        <Link href="/" className="cn-brand">
          <span className="brand-mark">
            <span>C</span>
            <i />
          </span>

          <span>
            <strong>Civic</strong> Nexus
            <small>Government Innovation OS</small>
          </span>
        </Link>

        <div className="cn-nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#platform">Platform</a>
          <a href="#governance">Governance</a>
        </div>

        <div className="cn-nav-actions">
          <Link href="/government/login" className="nav-login">
            Government
          </Link>

          <Link href="/startup/login" className="nav-cta">
            Startup Portal
            <span>→</span>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-grid" />

        <div className="hero-copy">
          <div className="hero-badge">
            <span className="live-dot" />
            GOVERNMENT × STARTUP INNOVATION
          </div>

          <h1>
            Turn public
            <span className="gradient-text"> challenges </span>
            into
            <span className="gradient-text"> proven innovation.</span>
          </h1>

          <p className="hero-description">
            Civic Nexus creates a structured pathway for government
            departments to identify problems, discover startups, run pilots,
            measure outcomes and scale solutions that work.
          </p>

          <div className="hero-buttons">
            <Link href="/government/login" className="primary-button">
              Enter Government Portal
              <span>→</span>
            </Link>

            <Link href="/startup/login" className="secondary-button">
              Explore Startup Portal
            </Link>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <strong>01</strong>
              <span>Challenge discovery</span>
            </div>

            <div className="trust-item">
              <strong>02</strong>
              <span>AI-assisted matching</span>
            </div>

            <div className="trust-item">
              <strong>03</strong>
              <span>Evidence-led scale</span>
            </div>
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="hero-visual">
          <div className="visual-glow" />

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="floating-card card-government">
            <div className="mini-icon blue-icon">G</div>
            <div>
              <strong>Government</strong>
              <span>Challenge published</span>
            </div>
            <b>01</b>
          </div>

          <div className="floating-card card-ai">
            <div className="mini-icon violet-icon">✦</div>
            <div>
              <strong>AI Matching</strong>
              <span>94% relevance</span>
            </div>
            <b>AI</b>
          </div>

          <div className="floating-card card-startup">
            <div className="mini-icon pink-icon">S</div>
            <div>
              <strong>GreenRoute AI</strong>
              <span>Startup matched</span>
            </div>
            <b>✓</b>
          </div>

          <div className="network-core">
            <div className="core-ring ring-one" />
            <div className="core-ring ring-two" />

            <div className="core-center">
              <div className="core-logo">CN</div>
              <strong>Civic Nexus</strong>
              <span>Innovation Network</span>
            </div>

            <div className="node node-top">
              <span>G</span>
            </div>

            <div className="node node-right">
              <span>AI</span>
            </div>

            <div className="node node-bottom">
              <span>✓</span>
            </div>

            <div className="node node-left">
              <span>S</span>
            </div>

            <div className="connection connection-a" />
            <div className="connection connection-b" />
            <div className="connection connection-c" />
            <div className="connection connection-d" />
          </div>

          <div className="floating-pill pill-one">
            <span />
            Pilot active
          </div>

          <div className="floating-pill pill-two">
            <span />
            KPI validated
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats-strip">
        <div>
          <strong>01</strong>
          <span>Unified innovation pathway</span>
        </div>

        <div>
          <strong>06</strong>
          <span>Connected decision stages</span>
        </div>

        <div>
          <strong>AI</strong>
          <span>Assisted discovery & matching</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Human-controlled decisions</span>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="how-it-works" className="content-section workflow-section">
        <div className="section-heading">
          <div>
            <span className="section-label">THE CIVIC NEXUS MODEL</span>

            <h2>
              From problem
              <span> to impact.</span>
            </h2>
          </div>

          <p>
            One connected workflow that replaces fragmented innovation
            processes with a measurable journey from challenge identification
            to scale.
          </p>
        </div>

        <div className="workflow-grid">
          {workflow.map((item) => (
            <div
              key={item.number}
              className={`workflow-card workflow-${item.color}`}
            >
              <div className="workflow-top">
                <span className="workflow-number">{item.number}</span>
                <span className="workflow-icon">{item.icon}</span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="workflow-line" />
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" className="content-section platform-section">
        <div className="section-heading centered">
          <span className="section-label">ONE PLATFORM · TWO ECOSYSTEMS</span>

          <h2>
            Built for
            <span> both sides.</span>
          </h2>

          <p>
            Government gets a structured innovation pipeline. Startups get a
            clear path from opportunity to real-world deployment.
          </p>
        </div>

        <div className="portal-grid">
          {/* GOVERNMENT */}
          <div className="portal-large government-panel">
            <div className="portal-glow" />

            <div className="portal-header">
              <div className="large-icon government-icon">G</div>

              <div>
                <span>GOVERNMENT PORTAL</span>
                <h3>Turn public problems into opportunities.</h3>
              </div>
            </div>

            <p>
              Give departments the tools to discover startups, evaluate
              solutions and make evidence-based pilot and procurement
              decisions.
            </p>

            <div className="feature-list">
              {governmentFeatures.map((feature, index) => (
                <div key={feature}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{feature}</p>
                  <b>✓</b>
                </div>
              ))}
            </div>

            <Link href="/government/login" className="panel-button">
              Open Government Portal
              <span>→</span>
            </Link>
          </div>

          {/* STARTUP */}
          <div className="portal-large startup-panel">
            <div className="portal-glow" />

            <div className="portal-header">
              <div className="large-icon startup-icon">S</div>

              <div>
                <span>STARTUP PORTAL</span>
                <h3>Bring innovation where it matters.</h3>
              </div>
            </div>

            <p>
              Discover relevant government challenges, submit your solution,
              track evaluation and prove your impact through pilots.
            </p>

            <div className="feature-list">
              {startupFeatures.map((feature, index) => (
                <div key={feature}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{feature}</p>
                  <b>✓</b>
                </div>
              ))}
            </div>

            <Link href="/startup/login" className="panel-button">
              Open Startup Portal
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* AI / GOVERNANCE */}
      <section id="governance" className="governance-section">
        <div className="governance-glow" />

        <div className="governance-content">
          <span className="section-label light-label">
            AI-ASSISTED · HUMAN-CONTROLLED
          </span>

          <h2>
            AI helps
            <span> discover.</span>
            <br />
            Humans decide.
          </h2>

          <p>
            Civic Nexus uses AI to reduce discovery and evaluation effort
            while keeping important government decisions transparent,
            explainable and under authorized human control.
          </p>

          <div className="governance-points">
            <div>
              <span className="point-icon">✦</span>
              <div>
                <strong>AI-assisted matching</strong>
                <p>Identify relevant startups faster.</p>
              </div>
            </div>

            <div>
              <span className="point-icon">◈</span>
              <div>
                <strong>Structured evaluation</strong>
                <p>Compare solutions using consistent criteria.</p>
              </div>
            </div>

            <div>
              <span className="point-icon">✓</span>
              <div>
                <strong>Evidence-based decisions</strong>
                <p>Use pilot KPIs before recommending scale.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="governance-visual">
          <div className="decision-card">
            <div className="decision-top">
              <span>DECISION ENGINE</span>
              <span className="status-badge">HUMAN CONTROLLED</span>
            </div>

            <div className="score-circle">
              <strong>88</strong>
              <span>/100</span>
            </div>

            <h3>GreenRoute AI</h3>

            <p>
              Strong pilot readiness based on evaluation criteria and
              validated KPIs.
            </p>

            <div className="decision-bars">
              <div>
                <span>Technical Capability</span>
                <i>
                  <b style={{ width: "88%" }} />
                </i>
              </div>

              <div>
                <span>Innovation</span>
                <i>
                  <b style={{ width: "92%" }} />
                </i>
              </div>

              <div>
                <span>Scalability</span>
                <i>
                  <b style={{ width: "86%" }} />
                </i>
              </div>
            </div>

            <div className="recommendation">
              <span>✓</span>
              <div>
                <strong>Recommended</strong>
                <small>Controlled Pilot</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cta-orb orb-left" />
        <div className="cta-orb orb-right" />

        <span className="section-label">THE NEXT STEP</span>

        <h2>
          Better public services
          <br />
          start with <span>better innovation.</span>
        </h2>

        <p>
          Connect government challenges with the startups building tomorrow's
          solutions.
        </p>

        <div className="cta-buttons">
          <Link href="/government/login" className="primary-button">
            Enter Government Portal
            <span>→</span>
          </Link>

          <Link href="/startup/login" className="secondary-button">
            I'm a Startup
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="cn-footer">
        <div className="footer-brand">
          <span className="brand-mark small-mark">
            <span>C</span>
            <i />
          </span>

          <div>
            <strong>Civic Nexus</strong>
            <span>Government Innovation OS</span>
          </div>
        </div>

        <div className="footer-center">
          Identify · Match · Evaluate · Pilot · Prove · Scale
        </div>

        <div className="footer-right">
          <span>SIH 2026 Prototype</span>
          <span className="footer-dot" />
          <span>Built for public innovation</span>
        </div>
      </footer>
    </main>
  );
}