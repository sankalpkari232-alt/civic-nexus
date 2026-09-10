import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Civic Nexus</div>

        <div className="nav-links">
          <Link href="/government/login">Government</Link>
          <Link href="/startup/login">Startup</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="eyebrow">
          GOVERNMENT × STARTUP INNOVATION
        </div>

        <h1>
          From Government
          <br />
          Problems to Proven
          <br />
          Innovation.
        </h1>

        <p>
          Civic Nexus connects government departments with innovative
          startups to identify challenges, run pilots, procure solutions,
          and scale proven innovations.
        </p>

        {/* LOGIN OPTIONS */}
        <div className="login-section">
          <h2>Choose your portal</h2>

          <div className="portal-grid">

            {/* GOVERNMENT */}
            <Link
              href="/government/dashboard"
              className="portal-card"
            >
              <div className="portal-icon">G</div>

              <div>
                <h3>Government Portal</h3>
                <p>
                  Create challenges, discover startups,
                  evaluate solutions and manage pilots.
                </p>
              </div>

              <span className="arrow">→</span>
            </Link>

            {/* STARTUP */}
            <Link
              href="/startup/dashboard"
              className="portal-card"
            >
              <div className="portal-icon">S</div>

              <div>
                <h3>Startup Portal</h3>
                <p>
                  Discover government challenges,
                  submit solutions and apply for pilots.
                </p>
              </div>

              <span className="arrow">→</span>
            </Link>

          </div>
        </div>

        {/* FEATURES */}
        <div className="features">

          <div>
            <strong>01</strong>
            <h3>Identify</h3>
            <p>Government departments publish real-world challenges.</p>
          </div>

          <div>
            <strong>02</strong>
            <h3>Discover</h3>
            <p>Find eligible startups and innovative solutions.</p>
          </div>

          <div>
            <strong>03</strong>
            <h3>Pilot</h3>
            <p>Test promising solutions through controlled pilots.</p>
          </div>

          <div>
            <strong>04</strong>
            <h3>Scale</h3>
            <p>Procure and scale solutions that prove their value.</p>
          </div>

        </div>
      </section>
    </main>
  );
}