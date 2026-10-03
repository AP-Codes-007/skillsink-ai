"use client";

import Navbar from "@/components/employernavbar";

const candidates = [
  {
    name: "Arun Prasath",
    role: "ML Engineer",
    match: 94,
    status: "Available",
    skills: ["Python", "SQL", "ML"],
  },
  {
    name: "Priya Sharma",
    role: "Data Analyst",
    match: 91,
    status: "Interviewing",
    skills: ["Power BI", "SQL", "Excel"],
  },
  {
    name: "Rahul Verma",
    role: "Backend Developer",
    match: 88,
    status: "Available",
    skills: ["Java", "Docker", "Spring"],
  },
];

const breakdown = [
  { label: "Technical Skills", value: 96 },
  { label: "Projects", value: 91 },
  { label: "Problem Solving", value: 88 },
  { label: "Communication", value: 81 },
];

export default function EmployerPage() {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <Navbar />

      <main className="mx-auto max-w-7xl p-8">
        {/* HEADER */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Employer Workspace • AI Talent Intelligence
            </p>

            <h1 className="mt-2 text-5xl font-bold text-gray-900">
              Discover Verified Talent
            </h1>

            <p className="mt-3 max-w-2xl text-gray-600">
              Search candidates using explainable AI instead of traditional
              resume screening.
            </p>
          </div>

          <div className="rounded-3xl border border-violet-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-500">
              Candidates Indexed
            </p>

            <h2 className="mt-2 text-5xl font-bold text-violet-600">
              12.4K
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Verified student profiles
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            AI Candidate Search
          </h2>

          <p className="mt-2 text-gray-500">
            Find candidates by role, skills or technologies.
          </p>

          <div className="mt-6 flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Search ML Engineer, Python, React..."
              className="flex-1 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none focus:border-violet-500"
            />

            <button className="rounded-2xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700">
              Search
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {["Python", "Machine Learning", "SQL", "React", "Docker"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* KPI */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl">🎯</div>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              AI Matches Today
            </p>

            <h3 className="mt-2 text-3xl font-bold text-gray-900">
              126
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              High confidence candidates
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl">🏆</div>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Best Match
            </p>

            <h3 className="mt-2 text-3xl font-bold text-gray-900">
              94%
            </h3>

            <p className="mt-2 text-sm text-emerald-600">
              ML Engineer profile
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl">⚡</div>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Hiring Accuracy
            </p>

            <h3 className="mt-2 text-3xl font-bold text-gray-900">
              89%
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Explainable AI confidence
            </p>
          </div>
        </div>

        {/* CANDIDATES */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-7 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Top Recommended Candidates
            </h2>

            <span className="text-sm font-medium text-violet-600">
              Updated 2 mins ago
            </span>
          </div>

          <div className="space-y-5">
            {candidates.map((candidate) => (
              <div
                key={candidate.name}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-violet-300 hover:bg-white"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-600 text-2xl font-bold text-white">
                      {candidate.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {candidate.name}
                      </h3>

                      <p className="text-gray-500">
                        {candidate.role}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {candidate.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-violet-600">
                        {candidate.match}%
                      </p>
                      <p className="text-xs text-gray-500">
                        AI Match
                      </p>
                    </div>

                    <div
                      className={`rounded-full px-4 py-2 text-sm font-medium ${
                        candidate.status === "Available"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {candidate.status}
                    </div>

                    <button className="rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI BREAKDOWN */}
        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Explainable Match Breakdown
            </h2>

            <p className="mt-2 text-gray-500">
              Why the AI recommended this candidate.
            </p>

            <div className="mt-8 space-y-6">
              {breakdown.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex justify-between">
                    <span className="font-medium text-gray-800">
                      {item.label}
                    </span>

                    <span className="font-semibold text-gray-700">
                      {item.value}%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-gray-200">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-emerald-400"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI INSIGHT */}
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900">
              AI Hiring Insight
            </h2>

            <div className="mt-6 rounded-2xl bg-violet-50 p-5">
              <p className="text-sm font-semibold text-violet-700">
                Recommended Candidate
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Arun Prasath
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-700">
                Verified projects, strong ML portfolio and exceptional Python
                competency make this profile the highest confidence recommendation.
              </p>
            </div>

            <div className="mt-6 rounded-2xl bg-emerald-50 p-5">
              <p className="text-sm font-semibold text-emerald-700">
                Confidence Score
              </p>

              <h2 className="mt-2 text-4xl font-bold text-emerald-600">
                94%
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                Explainable AI recommendation
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}