"use client";

import StudentNavbar from "../../components/studentnavbar";

const student = {
  name: "Arun Prasath",
  department: "CSE",
  targetRole: "ML Engineer",
  readiness: 68,
};

const skills = [
  { name: "Python", score: 96, color: "bg-emerald-500" },
  { name: "SQL", score: 91, color: "bg-violet-600" },
  { name: "Pandas", score: 88, color: "bg-violet-600" },
  { name: "Machine Learning", score: 84, color: "bg-violet-600" },
];

const journey = [
  { step: "Career Goal", done: true },
  { step: "Skill Assessment", done: true },
  { step: "Career Digital Twin", done: true },
  { step: "Skill Gap Analysis", done: false },
  { step: "Next Best Action", done: false },
  { step: "Verified Skill Passport", done: false },
];

export default function StudentPage() {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <StudentNavbar />

      <main className="mx-auto max-w-7xl p-8">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-500">
              B.Tech {student.department} • Employability Journey
            </p>

            <h1 className="mt-2 text-5xl font-bold text-gray-900">
              Welcome back, {student.name}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full border bg-white px-5 py-3 text-gray-700 shadow-sm">
              Target: {student.targetRole}
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-xl font-bold text-white">
              A
            </div>
          </div>
        </div>

        {/* Top Cards */}
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-3xl border bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase text-gray-400">
              TARGET CAREER
            </p>
            <h3 className="mt-4 text-3xl font-bold text-gray-900">
              {student.targetRole}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Selected career goal
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase text-gray-400">
              CAREER READINESS
            </p>
            <h3 className="mt-4 text-3xl font-bold text-violet-600">
              {student.readiness}%
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Based on verified skills
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase text-gray-400">
              TOP SKILL GAP
            </p>
            <h3 className="mt-4 text-3xl font-bold text-gray-900">MLOps</h3>
            <p className="mt-2 text-sm text-gray-500">
              Largest benchmark distance
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase text-gray-400">
              NEXT BEST ACTION
            </p>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              Learn Docker
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Highest AI impact
            </p>
          </div>
        </div>

        {/* Skills + Progress */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">
              Skill Overview
            </h2>

            <p className="mt-2 text-gray-500">
              Current demonstrated level against the ML Engineer benchmark
            </p>

            <div className="mt-8 space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex justify-between">
                    <span className="font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="font-bold text-gray-900">
                      {skill.score}%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-gray-200">
                    <div
                      className={`${skill.color} h-3 rounded-full`}
                      style={{ width: `${skill.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              Career Progress
            </h2>

            <p className="mt-1 text-gray-500">
              3 of 6 journey stages completed
            </p>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span>Overall</span>
                <span className="font-bold">{student.readiness}%</span>
              </div>

              <div className="h-3 rounded-full bg-gray-200">
                <div
                  className="h-3 rounded-full bg-violet-600"
                  style={{ width: `${student.readiness}%` }}
                />
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {journey.map((item, index) => (
                <div key={item.step} className="flex items-start gap-3">
                  <div
                    className={`mt-1 flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold ${
                      item.done
                        ? "bg-emerald-500 text-white"
                        : "border border-violet-400 text-violet-600"
                    }`}
                  >
                    {item.done ? "✓" : index + 1}
                  </div>

                  <div>
                    <p className="font-medium text-gray-800">{item.step}</p>
                    {!item.done && (
                      <p className="text-sm text-violet-600">
                        In Progress
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}