"use client";

import EmployerNavbar from "@/components/employernavbar";

const skills = [
  { name: "Python", score: 96, color: "bg-emerald-500" },
  { name: "SQL", score: 91, color: "bg-violet-600" },
  { name: "Pandas", score: 88, color: "bg-violet-600" },
  { name: "Machine Learning", score: 84, color: "bg-violet-600" },
];

const credentials = [
  "JEE Advanced Qualified",
  "IIIT Dharwad • B.Tech CSE",
  "AI Verified Skill Passport",
  "Python & SQL Certified",
];

export default function CandidatePage() {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <EmployerNavbar />

      <main className="mx-auto max-w-7xl p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Employer Portal • Verified Talent
            </p>
            <h1 className="mt-2 text-5xl font-bold text-gray-900">
              Candidate Profile
            </h1>
          </div>

          <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            ✓ Verified Identity
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile */}
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm lg:col-span-2">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-600 text-3xl font-bold text-white">
                A
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Arun Prasath
                </h2>

                <p className="mt-1 text-lg text-gray-600">
                  B.Tech Computer Science • IIIT Dharwad
                </p>

                <div className="mt-3 flex gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    ML Engineer
                  </span>

                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                    96 Trust Score
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-gray-50 p-5 text-center">
                <p className="text-sm text-gray-500">AI Match</p>
                <h3 className="mt-2 text-4xl font-bold text-violet-600">
                  94%
                </h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5 text-center">
                <p className="text-sm text-gray-500">Projects</p>
                <h3 className="mt-2 text-4xl font-bold text-blue-600">18</h3>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5 text-center">
                <p className="text-sm text-gray-500">Verified Skills</p>
                <h3 className="mt-2 text-4xl font-bold text-emerald-600">
                  24
                </h3>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">
              Credentials
            </h3>

            <div className="mt-6 space-y-3">
              {credentials.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-gray-50 p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-600">
                    ✓
                  </div>

                  <p className="text-base font-semibold text-gray-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900">
            Verified Skill Evidence
          </h2>

          <p className="mt-2 text-gray-500">
            AI-generated competency scores from verified academic and project
            evidence.
          </p>

          <div className="mt-8 space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">
                    {skill.name}
                  </span>

                  <span className="font-bold text-gray-700">
                    {skill.score}%
                  </span>
                </div>

                <div className="h-3 rounded-full bg-gray-200">
                  <div
                    className={`h-3 rounded-full ${skill.color}`}
                    style={{ width: `${skill.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Recommendation */}
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-violet-600 to-blue-600 p-8 text-white shadow-lg">
          <p className="text-sm uppercase tracking-widest text-violet-100">
            Explainable AI Recommendation
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Strong Match for ML Engineer
          </h2>

          <p className="mt-4 max-w-3xl text-violet-100">
            The candidate demonstrates exceptional Python and SQL proficiency,
            verified academic performance, and strong machine learning project
            evidence. Overall hiring confidence: 94%.
          </p>
        </div>
      </main>
    </div>
  );
}