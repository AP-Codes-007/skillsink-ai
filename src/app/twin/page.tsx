"use client";

import Navbar from "@/components/studentnavbar";

const currentSkills = [
  { name: "Python", current: 96, target: 95 },
  { name: "SQL", current: 91, target: 90 },
  { name: "Machine Learning", current: 84, target: 90 },
  { name: "MLOps", current: 42, target: 85 },
  { name: "Docker", current: 35, target: 80 },
  { name: "System Design", current: 28, target: 75 },
];

export default function TwinPage() {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <Navbar />

      <main className="mx-auto max-w-7xl p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              AI Career Intelligence • Digital Twin
            </p>

            <h1 className="mt-2 text-5xl font-bold text-gray-900">
              Career Digital Twin
            </h1>

            <p className="mt-3 max-w-2xl text-gray-600">
              Your AI twin compares verified abilities against the ideal ML
              Engineer profile and predicts readiness.
            </p>
          </div>

          <div className="rounded-3xl border border-violet-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-500">
              Twin Match
            </p>

            <h2 className="mt-2 text-5xl font-bold text-violet-600">
              87%
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Based on verified evidence
            </p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl">🎯</div>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Target Role
            </p>

            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              ML Engineer
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              AI & Data Systems Track
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl">🧠</div>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Strongest Skill
            </p>

            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              Python
            </h3>

            <p className="mt-2 text-sm text-emerald-600">
              96% Verified Competency
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl">⚡</div>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Biggest Gap
            </p>

            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              MLOps
            </h3>

            <p className="mt-2 text-sm text-orange-500">
              Needs +43 competency points
            </p>
          </div>
        </div>

        {/* Skills Comparison */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900">
            Current vs Target Profile
          </h2>

          <p className="mt-2 text-gray-500">
            Green indicates your verified level. The grey marker shows the
            industry benchmark.
          </p>

          <div className="mt-8 space-y-8">
            {currentSkills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between">
                  <span className="font-semibold text-gray-800">
                    {skill.name}
                  </span>

                  <div className="text-sm">
                    <span className="font-bold text-gray-800">
                      {skill.current}%
                    </span>

                    <span className="text-gray-400">
                      {" "}
                      / {skill.target}% target
                    </span>
                  </div>
                </div>

                <div className="relative h-4 rounded-full bg-gray-200">
                  <div
                    className="h-4 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"
                    style={{ width: `${skill.current}%` }}
                  />

                  <div
                    className="absolute top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-violet-600"
                    style={{ left: `${skill.target}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              AI Recommendation
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Your verified portfolio already exceeds the benchmark in Python and
              SQL. Improving Docker, MLOps and System Design would increase your
              predicted employability score from **87% → 95%**.
            </p>

            <div className="mt-6 rounded-2xl bg-violet-50 p-4">
              <p className="font-semibold text-violet-700">
                Suggested learning path
              </p>

              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Docker Fundamentals</li>
                <li>• Kubernetes Basics</li>
                <li>• CI/CD for ML Pipelines</li>
                <li>• Distributed Model Deployment</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              Career Readiness
            </h2>

            <div className="mt-6 flex justify-center">
              <div className="relative flex h-52 w-52 items-center justify-center">
                <svg className="absolute h-full w-full -rotate-90">
                  <circle
                    cx="104"
                    cy="104"
                    r="88"
                    stroke="#E5E7EB"
                    strokeWidth="16"
                    fill="none"
                  />

                  <circle
                    cx="104"
                    cy="104"
                    r="88"
                    stroke="#7C3AED"
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray={553}
                    strokeDashoffset={72}
                    strokeLinecap="round"
                  />
                </svg>

                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900">87%</div>

                  <div className="mt-2 text-sm text-gray-500">
                    ML Engineer Match
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-xs uppercase text-gray-400">
                  Verified Skills
                </p>

                <p className="mt-2 text-2xl font-bold">24</p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-xs uppercase text-gray-400">Projects</p>

                <p className="mt-2 text-2xl font-bold">8</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}