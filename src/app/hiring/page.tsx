"use client";

import EmployerNavbar from "@/components/employernavbar";

const candidates = [
  {
    name: "Arun Prasath",
    role: "ML Engineer",
    match: 94,
    trust: 96,
  },
  {
    name: "Nisha Verma",
    role: "Data Analyst",
    match: 89,
    trust: 92,
  },
  {
    name: "Rahul Iyer",
    role: "Backend Developer",
    match: 86,
    trust: 90,
  },
];

export default function HiringPage() {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <EmployerNavbar />

      <main className="mx-auto max-w-7xl p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Employer Portal • AI Recruitment
            </p>
            <h1 className="mt-2 text-5xl font-bold text-gray-900">
              Hiring Dashboard
            </h1>
            <p className="mt-3 text-gray-600">
              Discover verified candidates ranked by explainable AI matching.
            </p>
          </div>

          <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            24 Candidates Available
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Open Positions
            </p>
            <h2 className="mt-2 text-4xl font-bold text-gray-900">12</h2>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Verified Talent</p>
            <h2 className="mt-2 text-4xl font-bold text-emerald-600">248</h2>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Avg AI Match</p>
            <h2 className="mt-2 text-4xl font-bold text-violet-600">91%</h2>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Shortlisted</p>
            <h2 className="mt-2 text-4xl font-bold text-blue-600">37</h2>
          </div>
        </div>

        {/* Candidate List */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Top AI Matches
              </h2>
              <p className="mt-1 text-gray-500">
                Ranked using verified academic, project and skill evidence.
              </p>
            </div>

            <button className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700">
              Export List
            </button>
          </div>

          <div className="space-y-4">
            {candidates.map((candidate) => (
              <div
                key={candidate.name}
                className="flex items-center justify-between rounded-2xl border border-gray-200 p-5 transition hover:border-violet-300 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-xl font-bold text-white">
                    {candidate.name[0]}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {candidate.name}
                    </h3>
                    <p className="text-gray-600">{candidate.role}</p>

                    <div className="mt-2 flex gap-2">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        {candidate.match}% Match
                      </span>

                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                        Trust {candidate.trust}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="rounded-xl border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-50">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insight */}
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 p-8 text-white shadow-lg">
          <p className="text-sm uppercase tracking-widest text-emerald-100">
            Explainable AI Hiring Insight
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            8 candidates exceed the 90% hiring threshold
          </h2>

          <p className="mt-4 max-w-3xl text-emerald-100">
            The strongest predictor of successful placement is the combination of
            verified Python proficiency, project evidence and AI-validated skill
            passports rather than CGPA alone.
          </p>
        </div>
      </main>
    </div>
  );
}