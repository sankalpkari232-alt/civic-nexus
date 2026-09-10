"use client";

import Link from "next/link";
import { useState } from "react";

export default function GovernmentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // Demo login
    window.location.href = "/government/dashboard";
  }

  return (
    <main className="login-page">
      <div className="login-box">

        <Link href="/" className="back-link">
          ← Back to Civic Nexus
        </Link>

        <div className="login-logo">Civic Nexus</div>

        <div className="login-header">
          <div className="eyebrow">GOVERNMENT PORTAL</div>

          <h1>Welcome back</h1>

          <p>
            Sign in to manage government challenges,
            startups and innovation pilots.
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <label>Email address</label>

          <input
            type="email"
            placeholder="official@gov.in"
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
            Sign in to Government Portal →
          </button>

        </form>

        <p className="demo-text">
          Demo prototype — authentication will be connected to the backend later.
        </p>

      </div>
    </main>
  );
}