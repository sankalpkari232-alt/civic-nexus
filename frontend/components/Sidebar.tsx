import Link from "next/link";

export default function Sidebar({ startup = false }: { startup?: boolean }) {
  const links = startup
    ? [
        ["Dashboard", "/startup/dashboard"],
        ["Discover Challenges", "/startup/challenges"],
        ["My Applications", "/startup/applications"],
        ["Active Pilots", "/startup/pilots"],
      ]
    : [
        ["Dashboard", "/government/dashboard"],
        ["Challenges", "/government/challenges/new"],
        ["Startup Matching", "/government/matches"],
        ["Evaluation", "/government/evaluation"],
        ["Pilot Sandbox", "/government/pilots"],
        ["Analytics & Scale", "/government/analytics"],
      ];

  return (
    <aside className="sidebar">
      <div className="mb-8">
        <div className="text-xl font-bold">Civic Nexus</div>

        <div className="mt-1 text-xs opacity-70">
          Government Innovation OS
        </div>
      </div>

      <div className="mb-4 text-xs font-semibold uppercase tracking-wider opacity-60">
        {startup ? "Startup Portal" : "Government Portal"}
      </div>

      <nav className="space-y-2">
        {links.map(([name, href]) => (
          <Link
            key={href}
            href={href}
            className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10"
          >
            {name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 border-t border-white/10 pt-6">
        <Link
          href="/"
          className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10"
        >
          ← Back to Home
        </Link>
      </div>
    </aside>
  );
}