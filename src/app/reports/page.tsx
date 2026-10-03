"use client";

import Navbar from "@/components/studentnavbar";

const hiringTrend = [
  { month: "Jan", value: 58 },
  { month: "Feb", value: 64 },
  { month: "Mar", value: 69 },
  { month: "Apr", value: 74 },
  { month: "May", value: 81 },
  { month: "Jun", value: 89 },
];

const roles = [
  { role: "ML Engineer", demand: 94 },
  { role: "Data Scientist", demand: 89 },
  { role: "Backend Developer", demand: 83 },
  { role: "Cloud Engineer", demand: 76 },
];

export default function ReportsPage() {
  const max = Math.max(...hiringTrend.map((d) => d.value));

  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <Navbar />

      <main className="mx-auto max-w-7xl p-8">
        {/* HEADER */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              AI Analytics • Hiring Intelligence
            </p>

            <h1 className="mt-2 text-5xl font-bold text-gray-900">
              Hiring Reports
            </h1>

            <p className="mt-3 max-w-2xl text-gray-600">
              Data-driven insights on employability, recruiter demand and skill
              trends across verified student profiles.
            </p>
          </div>

          <div className="rounded-3xl border border-violet-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-500">
              Report Score
            </p>

            <h2 className="mt-2 text-5xl font-bold text-violet-600">
              89%
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              AI hiring confidence
            </p>
          </div>
        </div>

        {/* KPI */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Card
            icon="📈"
            title="Hiring Growth"
            value="+31%"
            sub="Compared to last semester"
          />

          <Card
            icon="🎯"
            title="Avg Match Score"
            value="87%"
            sub="Across verified candidates"
          />

          <Card
            icon="💼"
            title="Open Opportunities"
            value="428"
            sub="AI indexed internships"
          />

          <Card
            icon="🏆"
            title="Top Industry"
            value="Artificial Intelligence"
            sub="Highest recruiter demand"
          />
        </div>

        {/* Trend + Insights */}
        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          {/* BAR CHART */}
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Hiring Trend
            </h2>

            <p className="mt-2 text-gray-500">
              Recruiter demand over the last six months.
            </p>

            <div className="mt-8 flex h-64 items-end justify-around">
              {hiringTrend.map((item) => (
                <div
                  key={item.month}
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className="w-12 rounded-t-xl bg-gradient-to-t from-violet-600 to-violet-400"
                    style={{
                      height: `${(item.value / max) * 180}px`,
                    }}
                  />

                  <span className="text-sm font-medium text-gray-600">
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI INSIGHT */}
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900">
              AI Insights
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <p className="text-sm font-semibold text-emerald-700">
                  Fastest Growing Role
                </p>

                <h3 className="mt-1 text-xl font-bold text-gray-900">
                  ML Engineer
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Demand increased by 31% this semester.
                </p>
              </div>

              <div className="rounded-2xl bg-violet-50 p-4">
                <p className="text-sm font-semibold text-violet-700">
                  Emerging Skill
                </p>

                <h3 className="mt-1 text-xl font-bold text-gray-900">
                  MLOps
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Appears in 72% of new AI job descriptions.
                </p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-4">
                <p className="text-sm font-semibold text-sky-700">
                  Placement Prediction
                </p>

                <h2 className="mt-2 text-4xl font-bold text-sky-700">
                  91%
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  Expected placement readiness after recommended learning path.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Role Demand */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Role Demand Index
          </h2>

          <p className="mt-2 text-gray-500">
            Current recruiter demand across technology roles.
          </p>

          <div className="mt-8 space-y-6">
            {roles.map((role) => (
              <div key={role.role}>
                <div className="mb-2 flex justify-between">
                  <span className="font-medium text-gray-800">
                    {role.role}
                  </span>

                  <span className="font-semibold text-gray-700">
                    {role.demand}%
                  </span>
                </div>

                <div className="h-3 rounded-full bg-gray-200">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-emerald-400"
                    style={{ width: `${role.demand}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl">📊</div>

            <h3 className="text-xl font-bold text-gray-900">
              Explainable AI
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Every hiring recommendation is backed by transparent competency
              evidence rather than keyword matching.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl">🧠</div>

            <h3 className="text-xl font-bold text-gray-900">
              Skill Forecast
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              AI predicts future high-demand skills using recruiter trends and
              institutional learning data.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl">🚀</div>

            <h3 className="text-xl font-bold text-gray-900">
              Recommendation Engine
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Personalized learning paths increase employability by targeting the
              highest-impact skill gaps first.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function Card({
  icon,
  title,
  value,
  sub,
}: {
  icon: string;
  title: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-3 text-3xl">{icon}</div>

      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-gray-900">
        {value}
      </h3>

      <p className="mt-2 text-sm text-gray-500">{sub}</p>
    </div>
  );
}