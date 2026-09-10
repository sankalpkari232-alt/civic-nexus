import Link from "next/link";
import styles from "./dashboard.module.css";

const stats = [
  ["12", "Active Challenges", "+3 this month"],
  ["48", "Startup Matches", "+18% this month"],
  ["06", "Active Pilots", "4 on track"],
  ["02", "Scale Ready", "Decision pending"],
];

const pipeline = [
  ["01", "Identify", "12"],
  ["02", "Match", "48"],
  ["03", "Evaluate", "17"],
  ["04", "Pilot", "06"],
  ["05", "Prove", "04"],
  ["06", "Scale", "02"],
];

const challenges = [
  ["Smart Waste Collection & Route Optimization", "Municipal Waste Department", "Pilot Active", 76, "8 startup matches"],
  ["AI-Based Citizen Grievance Classification", "Urban Administration", "Evaluation", 52, "14 startup matches"],
  ["Intelligent Traffic Flow Management", "Transport Department", "AI Matching", 31, "21 startup matches"],
];

const startups = [
  ["GreenRoute AI", "CleanTech · AI", "94%"],
  ["CivicVision", "GovTech · Computer Vision", "89%"],
  ["UrbanPulse", "Smart Cities · IoT", "84%"],
];

export default function GovernmentDashboard() {
  return (
    <div className={styles.page}>

      <aside className={styles.sidebar}>
        <div className={styles.logo}>Civic Nexus</div>
        <div className={styles.subtitle}>Government Innovation OS</div>

        <div className={styles.portal}>Government Portal</div>

        <nav className={styles.nav}>
          <Link href="/government/dashboard">Dashboard</Link>
          <Link href="/government/challenges/new">Challenges</Link>
          <Link href="/government/matches">Startup Matching</Link>
          <Link href="/government/evaluation">Evaluation</Link>
          <Link href="/government/pilots">Pilot Sandbox</Link>
          <Link href="/government/analytics">Analytics & Scale</Link>
        </nav>

        <div className={styles.back}>
          <Link href="/">← Back to Home</Link>
        </div>
      </aside>

      <main className={styles.main}>

        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div>
              <div className={styles.headerSmall}>Government Portal</div>
              <div className={styles.headerTitle}>Innovation Command Center</div>
            </div>
          </div>

          <div className={styles.admin}>
            <div>
              <div className={styles.adminText}>Government Administrator</div>
              <div className={styles.adminRole}>Government Portal</div>
            </div>
            <div className={styles.avatar}>G</div>
          </div>
        </header>

        <div className={styles.content}>

          <div className={styles.headingRow}>
            <div>
              <div className={styles.eyebrow}>Platform Operational</div>
              <h1 className={styles.heading}>
                From public problems<br />
                to proven solutions.
              </h1>
              <p className={styles.description}>
                Manage challenges, discover startups, run pilots and scale
                validated innovations.
              </p>
            </div>

            <Link className={styles.button} href="/government/challenges/new">
              + New Challenge
            </Link>
          </div>

          <div className={styles.stats}>
            {stats.map(([number, label, note]) => (
              <div className={styles.card} key={label}>
                <div className={styles.statNumber}>{number}</div>
                <div className={styles.statLabel}>{label}</div>
                <div className={styles.statNote}>{note}</div>
              </div>
            ))}
          </div>

          <div className={styles.sectionTitle}>
            Innovation Pipeline
          </div>

          <div className={styles.pipeline}>
            {pipeline.map(([number, name, value]) => (
              <div className={styles.pipelineCard} key={number}>
                <div className={styles.pipelineNumber}>{number}</div>
                <div className={styles.pipelineName}>{name}</div>
                <div className={styles.pipelineValue}>{value}</div>
              </div>
            ))}
          </div>

          <div className={styles.columns}>

            <div className={styles.card}>
              <div className={styles.sectionTitle}>
                Government Challenges
              </div>

              {challenges.map(
                ([title, department, status, progress, matches]) => (
                  <div className={styles.challenge} key={title}>
                    <div className={styles.challengeTop}>
                      <div>
                        <div className={styles.challengeTitle}>{title}</div>
                        <div className={styles.department}>{department}</div>
                      </div>

                      <div className={styles.status}>{status}</div>
                    </div>

                    <div className={styles.progress}>
                      <div
                        className={styles.progressBar}
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className={styles.challengeBottom}>
                      <span>{matches}</span>
                      <span>{progress}% progress</span>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className={styles.card}>
              <div className={styles.sectionTitle}>
                Best Startup Matches
              </div>

              {startups.map(([name, type, score]) => (
                <div className={styles.startup} key={name}>
                  <div>
                    <div className={styles.startupName}>{name}</div>
                    <div className={styles.startupType}>{type}</div>
                  </div>

                  <div className={styles.score}>{score}</div>
                </div>
              ))}

              <div className={styles.startup}>
                <div>
                  <div className={styles.startupName}>
                    GreenRoute AI Scale Review
                  </div>
                  <div className={styles.startupType}>
                    4/4 pilot KPIs achieved
                  </div>
                </div>

                <div className={styles.score}>READY</div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}