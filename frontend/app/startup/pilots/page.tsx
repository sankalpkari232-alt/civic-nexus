"use client";

import { useState } from "react";

export default function StartupPilotsPage() {
  const [uploaded, setUploaded] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            CIVIC NEXUS • STARTUP PORTAL
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Pilot Tracking
          </h1>

          <p className="mt-2 text-slate-500">
            Monitor pilot progress, KPIs, milestones and evidence in one place.
          </p>
        </div>

        {/* Pilot Header */}
        <div className="rounded-2xl bg-white border shadow-sm p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold text-slate-900">
                  Smart Municipal Waste Optimization
                </h2>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  ACTIVE
                </span>
              </div>

              <p className="mt-2 text-slate-500">
                Pilot #CN-2026-014 • Municipal Corporation
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-slate-500">
                Pilot Progress
              </p>

              <p className="text-3xl font-bold text-blue-600">
                75%
              </p>

              <p className="text-xs text-slate-400">
                Week 6 of 8
              </p>
            </div>

          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full w-3/4 rounded-full bg-blue-600"></div>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="mt-6 rounded-2xl bg-white border shadow-sm p-6">

          <h2 className="text-xl font-bold text-slate-900">
            Pilot Milestones
          </h2>

          <div className="mt-6 grid md:grid-cols-4 gap-4">

            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <div className="text-xl">✓</div>
              <p className="mt-3 font-semibold text-green-800">
                Baseline
              </p>
              <p className="mt-1 text-xs text-green-700">
                Completed
              </p>
            </div>

            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <div className="text-xl">✓</div>
              <p className="mt-3 font-semibold text-green-800">
                Prototype
              </p>
              <p className="mt-1 text-xs text-green-700">
                Completed
              </p>
            </div>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <div className="text-xl">→</div>
              <p className="mt-3 font-semibold text-blue-800">
                Field Trial
              </p>
              <p className="mt-1 text-xs text-blue-700">
                In Progress
              </p>
            </div>

            <div className="rounded-xl border bg-slate-50 p-5">
              <div className="text-xl text-slate-400">○</div>
              <p className="mt-3 font-semibold text-slate-700">
                Validation
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Upcoming
              </p>
            </div>

          </div>
        </div>

        {/* KPI Monitoring */}
        <div className="mt-6 rounded-2xl bg-white border shadow-sm p-6">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                KPI Monitoring
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Live pilot performance against agreed targets
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              4 / 4 On Track
            </span>
          </div>

          <div className="mt-6 space-y-5">

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">
                  Fuel Usage Reduction
                </span>

                <span className="font-semibold text-green-600">
                  76% of target
                </span>
              </div>

              <div className="h-3 bg-slate-100 rounded-full">
                <div className="h-full w-[76%] bg-green-500 rounded-full"></div>
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Target: ≤ 80%
              </p>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">
                  Missed Collections
                </span>

                <span className="font-semibold text-green-600">
                  11%
                </span>
              </div>

              <div className="h-3 bg-slate-100 rounded-full">
                <div className="h-full w-[70%] bg-green-500 rounded-full"></div>
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Target: ≤ 12%
              </p>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">
                  Route Efficiency
                </span>

                <span className="font-semibold text-green-600">
                  81%
                </span>
              </div>

              <div className="h-3 bg-slate-100 rounded-full">
                <div className="h-full w-[81%] bg-green-500 rounded-full"></div>
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Target: ≥ 77%
              </p>
            </div>

          </div>
        </div>

        {/* Evidence */}
        <div className="mt-6 rounded-2xl bg-white border shadow-sm p-6">

          <h2 className="text-xl font-bold text-slate-900">
            Evidence & Documentation
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Upload pilot evidence for government evaluation and independent validation.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">

            <button
              onClick={() => setUploaded(true)}
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Upload Evidence
            </button>

            <button
              onClick={() => alert("Evidence Pack opened")}
              className="rounded-xl border px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              View Evidence Pack
            </button>

          </div>

          {uploaded && (
            <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4">
              <p className="font-semibold text-green-800">
                Evidence uploaded successfully
              </p>

              <p className="mt-1 text-sm text-green-700">
                Demo file added to Pilot #CN-2026-014 evidence pack.
              </p>
            </div>
          )}

        </div>

        {/* Payment */}
        <div className="mt-6 rounded-2xl bg-white border shadow-sm p-6">

          <h2 className="text-xl font-bold text-slate-900">
            Milestone Payments
          </h2>

          <div className="mt-5 grid md:grid-cols-3 gap-4">

            <div className="rounded-xl border p-5">
              <p className="text-sm text-slate-500">
                Milestone 1
              </p>
              <p className="mt-2 text-xl font-bold">
                ₹2,00,000
              </p>
              <span className="text-xs text-green-600 font-semibold">
                Paid
              </span>
            </div>

            <div className="rounded-xl border p-5">
              <p className="text-sm text-slate-500">
                Milestone 2
              </p>
              <p className="mt-2 text-xl font-bold">
                ₹3,00,000
              </p>
              <span className="text-xs text-green-600 font-semibold">
                Paid
              </span>
            </div>

            <div className="rounded-xl border p-5">
              <p className="text-sm text-slate-500">
                Final Milestone
              </p>
              <p className="mt-2 text-xl font-bold">
                ₹5,00,000
              </p>
              <span className="text-xs text-amber-600 font-semibold">
                Pending Validation
              </span>
            </div>

          </div>
        </div>

        {/* Scale readiness */}
        <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-white">

          <p className="text-sm font-semibold text-blue-300">
            NEXT STEP
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Pilot Validation → Scale Decision
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Once the pilot completes, Civic Nexus evaluates KPI performance,
            evidence and validation results to generate a transparent
            scale-up recommendation.
          </p>

        </div>

      </div>
    </main>
  );
}