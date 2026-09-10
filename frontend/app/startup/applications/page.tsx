"use client";

import { useState } from "react";

export default function ApplicationsPage() {
  const [selected, setSelected] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            CIVIC NEXUS • STARTUP PORTAL
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            My Applications
          </h1>
          <p className="mt-2 text-slate-500">
            Track your government innovation opportunities from application to pilot.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <div className="rounded-2xl bg-white p-5 shadow-sm border">
            <p className="text-sm text-slate-500">Total Applications</p>
            <p className="mt-2 text-3xl font-bold">4</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm border">
            <p className="text-sm text-slate-500">Under Evaluation</p>
            <p className="mt-2 text-3xl font-bold text-amber-600">1</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm border">
            <p className="text-sm text-slate-500">Selected</p>
            <p className="mt-2 text-3xl font-bold text-green-600">2</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm border">
            <p className="text-sm text-slate-500">Active Pilots</p>
            <p className="mt-2 text-3xl font-bold text-blue-600">1</p>
          </div>
        </div>

        {/* Main Application */}
        <div className="rounded-2xl bg-white border shadow-sm overflow-hidden">

          <div className="p-6 border-b flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-slate-900">
                  Smart Municipal Waste Optimization
                </h2>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Selected for Pilot
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Municipal Corporation • Urban Governance
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Application ID: CN-APP-2026-021
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-slate-500">AI Match</p>
              <p className="text-2xl font-bold text-blue-600">94%</p>
            </div>
          </div>

          {/* Progress */}
          <div className="p-6">
            <h3 className="font-semibold text-slate-900 mb-6">
              Application Journey
            </h3>

            <div className="grid md:grid-cols-4 gap-4">

              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <div className="text-xl mb-2">✓</div>
                <p className="font-semibold text-green-800">
                  Application Submitted
                </p>
                <p className="text-xs text-green-700 mt-1">
                  02 Sept 2026
                </p>
              </div>

              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <div className="text-xl mb-2">✓</div>
                <p className="font-semibold text-green-800">
                  Expert Evaluation
                </p>
                <p className="text-xs text-green-700 mt-1">
                  Score: 88/100
                </p>
              </div>

              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <div className="text-xl mb-2">✓</div>
                <p className="font-semibold text-green-800">
                  Selected for Pilot
                </p>
                <p className="text-xs text-green-700 mt-1">
                  05 Sept 2026
                </p>
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <div className="text-xl mb-2">→</div>
                <p className="font-semibold text-blue-800">
                  Pilot Active
                </p>
                <p className="text-xs text-blue-700 mt-1">
                  Week 6 of 8
                </p>
              </div>

            </div>
          </div>

          {/* Application Details */}
          <div className="grid md:grid-cols-3 gap-4 p-6 border-t bg-slate-50">

            <div>
              <p className="text-xs text-slate-500">Startup</p>
              <p className="font-semibold mt-1">GreenRoute AI</p>
            </div>

            <div>
              <p className="text-xs text-slate-500">Pilot Duration</p>
              <p className="font-semibold mt-1">8 Weeks</p>
            </div>

            <div>
              <p className="text-xs text-slate-500">Pilot Budget</p>
              <p className="font-semibold mt-1">₹10,00,000</p>
            </div>

          </div>

          {/* Actions */}
          <div className="p-6 border-t flex flex-wrap gap-3">

            <button
              onClick={() => setSelected(true)}
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              View Application Details
            </button>

            <a
              href="/startup/pilots"
              className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100"
            >
              Open Pilot
            </a>

          </div>

          {selected && (
            <div className="mx-6 mb-6 rounded-xl border border-blue-200 bg-blue-50 p-5">
              <p className="font-semibold text-blue-900">
                Application Verified
              </p>
              <p className="mt-1 text-sm text-blue-800">
                Your eligibility, technical evaluation and pilot readiness
                have been reviewed by the evaluation panel.
              </p>
            </div>
          )}

        </div>

        {/* Other applications */}
        <div className="mt-8 rounded-2xl bg-white border shadow-sm p-6">
          <h2 className="text-xl font-bold text-slate-900">
            Other Applications
          </h2>

          <div className="mt-5 space-y-3">

            <div className="flex items-center justify-between rounded-xl border p-4">
              <div>
                <p className="font-semibold">
                  Predictive Flood Risk Monitoring
                </p>
                <p className="text-sm text-slate-500">
                  Disaster Management Department
                </p>
              </div>

              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                Under Evaluation
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border p-4">
              <div>
                <p className="font-semibold">
                  AI Public Transport Optimization
                </p>
                <p className="text-sm text-slate-500">
                  Urban Transport Authority
                </p>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Selected
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border p-4">
              <div>
                <p className="font-semibold">
                  Smart Water Leak Detection
                </p>
                <p className="text-sm text-slate-500">
                  Public Utilities Department
                </p>
              </div>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                Submitted
              </span>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}