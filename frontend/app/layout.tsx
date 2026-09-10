import "./globals.css";
import Link from "next/link";

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>
    <header className="topbar"><Link href="/" className="brand">Civic Nexus</Link><nav><Link href="/government/dashboard">Government</Link><Link href="/startup/dashboard">Startup</Link></nav></header>
    {children}
  </body></html>
}
