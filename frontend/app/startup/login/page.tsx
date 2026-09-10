"use client";

import Link from "next/link";
import { useState } from "react";

export default function StartupLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // Demo login
    window.location.href = "/startup/dashboard";
  }

  return (
    <main className="login-page">
      <div className="login-box">

        <Link href="/" className="back-link">
          ← Back to Civic Nexus
        </Link>

        <div className="login-logo">Civic Nexus</div>

        <div className="login-header">
          <div className="eyebrow">STARTUP PORTAL</div>

          <h1>Welcome back</h1>

          <p>
            Discover government challenges, submit solutions
            and participate in innovation pilots.
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <label>Email address</label>

          <input
            type="email"
            placeholder="founder@startup.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">
            Sign in to Startup Portal →
          </button>

        </form>

        <p className="demo-text">
          Demo prototype — authentication will be connected to the backend later.
        </p>

      </div>
    </main>
  );
}