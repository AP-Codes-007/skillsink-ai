"use client";

import InstitutionNavbar from "@/components/institutionnavbar";

const departments = [
  { name: "CSE", students: 812, readiness: 78 },
  { name: "ECE", students: 690, readiness: 71 },
  { name: "DSAI", students: 520, readiness: 74 },
  { name: "AIC", students: 410, readiness: 68 },
];

export default function InstitutionPage() {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <InstitutionNavbar />

      <main className="mx-auto max-w-7xl p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Institution Portal • Campus Intelligence
            </p>
            <h1 className="mt-2 text-5xl font-bold text-gray-900">
              IIIT Dharwad Dashboard
            </h1>
            <p className="mt-3 text-gray-600">
              Monitor student employability, department readiness and verified
              skills across campus.
            </p>
          </div>

          <div className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Academic Year 2026
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Students</p>
            <h2 className="mt-2 text-4xl font-bold text-gray-900">2,432</h2>
            <p className="mt-1 text-sm text-gray-500">
              Across all departments
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Avg Readiness
            </p>
            <h2 className="mt-2 text-4xl font-bold text-violet-600">68%</h2>
            <p className="mt-1 text-sm text-gray-500">
              Verified employability score
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Verified Skills
            </p>
            <h2 className="mt-2 text-4xl font-bold text-emerald-600">
              11.8K
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              AI validated competencies
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Placement Ready
            </p>
            <h2 className="mt-2 text-4xl font-bold text-blue-600">1,654</h2>
            <p className="mt-1 text-sm text-gray-500">
              Students above 70%
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Department Readiness */}
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">
              Department Readiness
            </h2>
            <p className="mt-2 text-gray-500">
              Current employability readiness across departments
            </p>

            <div className="mt-8 space-y-8">
              {departments.map((dept) => (
                <div key={dept.name}>
                  <div className="mb-3 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {dept.name}
                      </h3>
                      <p className="text-base text-gray-600">
                        {dept.students} students
                      </p>
                    </div>

                    <span className="text-lg font-bold text-violet-700">
                      {dept.readiness}%
                    </span>
                  </div>

                  <div className="h-4 rounded-full bg-gray-200">
                    <div
                      className="h-4 rounded-full bg-gradient-to-r from-violet-600 to-blue-500"
                      style={{ width: `${dept.readiness}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Campus Summary */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">
                Top Performing Dept.
              </h3>

              <div className="mt-5 rounded-2xl bg-violet-50 p-5">
                <p className="text-sm text-violet-700">Highest Readiness</p>
                <h2 className="mt-1 text-3xl font-bold text-gray-900">
                  CSE
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  812 students • 78% readiness
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">
                AI Recommendation
              </h3>

              <div className="mt-5 rounded-2xl bg-emerald-50 p-5">
                <p className="font-semibold text-emerald-700">
                  Increase Python Labs
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Mechanical and AIC departments would benefit the most from
                  additional Python + Data Analytics training, improving
                  projected placement readiness by approximately 8–12%.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">
                Campus Health
              </h3>

              <div className="mt-5 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Assessment Completed</span>
                  <span className="font-bold text-gray-900">94%</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Skill Verified</span>
                  <span className="font-bold text-gray-900">89%</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Placement Eligible</span>
                  <span className="font-bold text-gray-900">68%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom AI Banner */}
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-violet-600 to-blue-600 p-8 text-white shadow-lg">
          <p className="text-sm uppercase tracking-widest text-violet-100">
            Explainable AI Insight
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Campus readiness has improved by 11% this semester
          </h2>

          <p className="mt-4 max-w-3xl text-violet-100">
            The strongest contributors are verified project-based learning and
            AI-backed skill validation. The next institutional focus should be
            cloud computing and MLOps adoption across non-CSE departments.
          </p>
        </div>
      </main>
    </div>
  );
}