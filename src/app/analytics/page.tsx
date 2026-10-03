
"use client";

import InstitutionNavbar from "@/components/institutionnavbar";

const departments = [
  { name: "CSE", students: 812, readiness: 78 },
  { name: "ECE", students: 690, readiness: 71 },
  { name: "Mechanical", students: 520, readiness: 59 },
  { name: "Civil", students: 410, readiness: 54 },
];

const topSkills = [
  { skill: "Python", coverage: 91 },
  { skill: "SQL", coverage: 83 },
  { skill: "Machine Learning", coverage: 74 },
  { skill: "Cloud Computing", coverage: 61 },
];

export default function AnalyticsPage() {
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
              Campus Analytics
            </h1>
            <p className="mt-3 text-gray-600">
              Live employability intelligence across departments.
            </p>
          </div>

          <div className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Live Dashboard
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Total Students</p>
            <h2 className="mt-2 text-4xl font-bold text-gray-900">2,432</h2>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Avg Readiness</p>
            <h2 className="mt-2 text-4xl font-bold text-violet-600">68%</h2>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Verified Skills</p>
            <h2 className="mt-2 text-4xl font-bold text-emerald-600">11.8K</h2>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Placement Ready</p>
            <h2 className="mt-2 text-4xl font-bold text-blue-600">1,654</h2>
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

          {/* Skill Coverage */}
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              Top Skill Coverage
            </h2>

            <div className="mt-8 space-y-6">
              {topSkills.map((item) => (
                <div key={item.skill}>
                  <div className="mb-2 flex justify-between">
                    <span className="font-semibold text-gray-800">
                      {item.skill}
                    </span>
                    <span className="font-bold text-emerald-600">
                      {item.coverage}%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-gray-200">
                    <div
                      className="h-3 rounded-full bg-emerald-500"
                      style={{ width: `${item.coverage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* AI Insight */}
            <div className="mt-8 rounded-2xl bg-violet-50 p-5">
              <h3 className="text-lg font-bold text-violet-700">AI Insight</h3>
              <p className="mt-2 leading-7 text-gray-700">
                Mechanical & Civil require targeted upskilling in Python and
                Data Analytics to improve overall placement readiness.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}