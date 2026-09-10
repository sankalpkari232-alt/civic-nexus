import Link from "next/link";
import styles from "./dashboard.module.css";

const stats = [
  ["07", "Open Applications", "+2 this month"],
  ["14", "AI Matches", "+18% this month"],
  ["02", "Active Pilots", "Both on track"],
  ["03", "New Opportunities", "This week"],
];

const pipeline = [
  ["01", "Discover", "18"],
  ["02", "Apply", "07"],
  ["03", "Evaluate", "04"],
  ["04", "Pilot", "02"],
  ["05", "Scale", "01"],
];

const applications = [
  [
    "Smart Waste Collection & Route Optimization",
    "Municipal Waste Department",
    "Pilot Active",
    76,
  ],
  [
    "AI-Based Citizen Grievance Classification",
    "Urban Administration",
    "Under Evaluation",
    52,
  ],
  [
    "Intelligent Traffic Flow Management",
    "Transport Department",
    "Application Submitted",
    31,
  ],
];

const opportunities = [
  ["Urban Waste Intelligence", "Municipal Corporation", "94% Match"],
  ["Citizen Service Automation", "Urban Administration", "89% Match"],
  ["Smart Traffic Analytics", "Transport Department", "84% Match"],
  ["AI Public Safety Monitoring", "City Operations", "81% Match"],
];

export default function StartupDashboard() {
  return (
    <div className={styles.page}>

      <aside className={styles.sidebar}>
        <div className={styles.logo}>Civic Nexus</div>

        <div className={styles.subtitle}>
          Government Innovation OS
        </div>

        <div className={styles.portal}>
          Startup Portal
        </div>

        <nav className={styles.nav}>
          <Link href="/startup/dashboard">
            Dashboard
          </Link>

          <Link href="/startup/challenges">
            Discover Challenges
          </Link>

          <Link href="/startup/applications">
            My Applications
          </Link>

          <Link href="/startup/pilots">
            Active Pilots
          </Link>
        </nav>

        <div className={styles.back}>
          <Link href="/">
            ← Back to Home
          </Link>
        </div>
      </aside>

      <main className={styles.main}>

        <header className={styles.header}>
          <div>
            <div className={styles.headerSmall}>
              Startup Portal
            </div>

            <div className={styles.headerTitle}>
              Innovation Workspace
            </div>
          </div>

          <div className={styles.profile}>
            <div>
              <div className={styles.profileName}>
                GreenRoute AI
              </div>

              <div className={styles.profileRole}>
                Startup Account
              </div>
            </div>

            <div className={styles.avatar}>
              G
            </div>
          </div>
        </header>

        <div className={styles.content}>

          <div className={styles.headingRow}>
            <div>
              <div className={styles.eyebrow}>
                Startup Workspace
              </div>

              <h1 className={styles.heading}>
                Find problems worth solving.
              </h1>

              <p className={styles.description}>
                Discover government challenges, apply with your solution,
                and move from evaluation to pilot and scale.
              </p>
            </div>

            <Link
              className={styles.button}
              href="/startup/challenges"
            >
              Discover Challenges
            </Link>
          </div>

          <div className={styles.stats}>
            {stats.map(([number, label, note]) => (
              <div className={styles.card} key={label}>
                <div className={styles.statNumber}>
                  {number}
                </div>

                <div className={styles.statLabel}>
                  {label}
                </div>

                <div className={styles.statNote}>
                  {note}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sectionTitle}>
            Your Innovation Pipeline
          </div>

          <div className={styles.pipeline}>
            {pipeline.map(([number, name, value]) => (
              <div
                className={styles.pipelineCard}
                key={number}
              >
                <div className={styles.pipelineNumber}>
                  {number}
                </div>

                <div className={styles.pipelineName}>
                  {name}
                </div>

                <div className={styles.pipelineValue}>
                  {value}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.columns}>

            <div className={styles.card}>
              <div className={styles.sectionTitle}>
                My Applications
              </div>

              {applications.map(
                ([title, department, status, progress]) => (
                  <div
                    className={styles.challenge}
                    key={title}
                  >
                    <div className={styles.challengeTop}>

                      <div>
                        <div className={styles.challengeTitle}>
                          {title}
                        </div>

                        <div className={styles.department}>
                          {department}
                        </div>
                      </div>

                      <div className={styles.status}>
                        {status}
                      </div>

                    </div>

                    <div className={styles.progress}>
                      <div
                        className={styles.progressBar}
                        style={{
                          width: `${progress}%`,
                        }}
                      />
                    </div>

                    <div className={styles.bottom}>
                      <span>
                        Application progress
                      </span>

                      <span>
                        {progress}%
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className={styles.card}>
              <div className={styles.sectionTitle}>
                AI-Matched Opportunities
              </div>

              {opportunities.map(
                ([name, department, score]) => (
                  <div
                    className={styles.opportunity}
                    key={name}
                  >
                    <div className={styles.opportunityTop}>

                      <div>
                        <div className={styles.opportunityName}>
                          {name}
                        </div>

                        <div className={styles.opportunityType}>
                          {department}
                        </div>
                      </div>

                      <div className={styles.aiBadge}>
                        {score}
                      </div>

                    </div>
                  </div>
                )
              )}
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}