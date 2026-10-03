"use client";

import Navbar from "@/components/studentnavbar";

const skills = [
  { name: "Python", value: 96 },
  { name: "SQL", value: 91 },
  { name: "Pandas", value: 88 },
  { name: "Machine Learning", value: 84 },
  { name: "Docker", value: 35 },
  { name: "MLOps", value: 42 },
];

export default function GraphPage() {
  const center = 160;
  const radius = 110;
  const angleStep = (Math.PI * 2) / skills.length;

  const points = skills
    .map((skill, i) => {
      const angle = -Math.PI / 2 + i * angleStep;
      const r = (skill.value / 100) * radius;
      const x = center + Math.cos(angle) * r;
      const y = center + Math.sin(angle) * r;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <Navbar />

      <main className="mx-auto max-w-7xl p-8">
        {/* HEADER */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Explainable AI • Skill Intelligence Graph
            </p>

            <h1 className="mt-2 text-5xl font-bold text-gray-900">
              Verified Skill Graph
            </h1>

            <p className="mt-3 max-w-2xl text-gray-600">
              A visual representation of verified competencies generated from
              academic performance, projects and industry assessments.
            </p>
          </div>

          <div className="rounded-3xl border border-violet-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-500">
              Overall Score
            </p>
            <h2 className="mt-2 text-5xl font-bold text-violet-600">89%</h2>
            <p className="mt-2 text-sm text-gray-500">
              AI Confidence Index
            </p>
          </div>
        </div>

        {/* TOP STATS */}
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl">📊</div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Verified Skills
            </p>
            <h3 className="mt-2 text-3xl font-bold text-gray-900">24</h3>
            <p className="mt-2 text-sm text-gray-500">
              University + Industry validated
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl">🏆</div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Strongest Domain
            </p>
            <h3 className="mt-2 text-3xl font-bold text-gray-900">Python</h3>
            <p className="mt-2 text-sm text-emerald-600">96% competency</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl">⚡</div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Growth Potential
            </p>
            <h3 className="mt-2 text-3xl font-bold text-gray-900">+18%</h3>
            <p className="mt-2 text-sm text-gray-500">
              Predicted in 6 months
            </p>
          </div>
        </div>

        {/* RADAR + ANALYSIS */}
        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          {/* RADAR */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Competency Radar
            </h2>

            <p className="mt-2 text-gray-500">
              Higher coverage indicates stronger verified evidence.
            </p>

            <div className="mt-8 flex justify-center">
              <svg width="320" height="320" viewBox="0 0 320 320">
                {[25, 50, 75, 100].map((level) => {
                  const r = (level / 100) * radius;
                  const polygon = skills
                    .map((_, i) => {
                      const angle = -Math.PI / 2 + i * angleStep;
                      const x = center + Math.cos(angle) * r;
                      const y = center + Math.sin(angle) * r;
                      return `${x},${y}`;
                    })
                    .join(" ");

                  return (
                    <polygon
                      key={level}
                      points={polygon}
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="1"
                    />
                  );
                })}

                {skills.map((_, i) => {
                  const angle = -Math.PI / 2 + i * angleStep;
                  const x = center + Math.cos(angle) * radius;
                  const y = center + Math.sin(angle) * radius;

                  return (
                    <line
                      key={i}
                      x1={center}
                      y1={center}
                      x2={x}
                      y2={y}
                      stroke="#E5E7EB"
                    />
                  );
                })}

                <polygon
                  points={points}
                  fill="#7C3AED33"
                  stroke="#7C3AED"
                  strokeWidth="3"
                />

                {skills.map((skill, i) => {
                  const angle = -Math.PI / 2 + i * angleStep;
                  const r = (skill.value / 100) * radius;
                  const x = center + Math.cos(angle) * r;
                  const y = center + Math.sin(angle) * r;

                  return (
                    <circle
                      key={skill.name}
                      cx={x}
                      cy={y}
                      r="5"
                      fill="#7C3AED"
                    />
                  );
                })}

                {skills.map((skill, i) => {
                  const angle = -Math.PI / 2 + i * angleStep;
                  const x = center + Math.cos(angle) * (radius + 22);
                  const y = center + Math.sin(angle) * (radius + 22);

                  return (
                    <text
                      key={skill.name}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="11"
                      fill="#374151"
                    >
                      {skill.name}
                    </text>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* AI INSIGHTS */}
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900">AI Insights</h2>

            <div className="mt-6 space-y-5">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <p className="text-sm font-semibold text-emerald-700">
                  Top Strength
                </p>
                <h3 className="mt-1 text-xl font-bold text-gray-900">Python</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Strong evidence from projects & assessments.
                </p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-4">
                <p className="text-sm font-semibold text-orange-700">
                  Largest Gap
                </p>
                <h3 className="mt-1 text-xl font-bold text-gray-900">Docker</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Industry benchmark requires 80% readiness.
                </p>
              </div>

              <div className="rounded-2xl bg-violet-50 p-4">
                <p className="text-sm font-semibold text-violet-700">
                  Recommendation
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Completing an MLOps + Docker certification is predicted to
                  improve employability by approximately 18%.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SKILL BREAKDOWN */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Detailed Skill Breakdown
          </h2>

          <p className="mt-2 text-gray-500">
            Every score is backed by explainable academic or project evidence.
          </p>

          <div className="mt-8 space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between">
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <span className="font-semibold text-gray-700">
                    {skill.value}%
                  </span>
                </div>

                <div className="h-3 rounded-full bg-gray-200">
                  <div
                    className={`h-3 rounded-full ${
                      skill.value >= 80 ? "bg-emerald-500" : "bg-violet-600"
                    }`}
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}