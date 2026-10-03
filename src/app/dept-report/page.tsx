"use client";

import InstitutionNavbar from "@/components/institutionnavbar";

const reports = [
  { dept: "CSE", placed: 92, status: "Excellent" },
  { dept: "ECE", placed: 86, status: "Very Good" },
  { dept: "DSAI", placed: 74, status: "Good" },
  { dept: "AIC", placed: 68, status: "Average" },
];

export default function DepartmentReportPage() {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <InstitutionNavbar />

      <main className="mx-auto max-w-7xl p-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-gray-500">
            Institution Portal • Placement Insights
          </p>
          <h1 className="mt-2 text-5xl font-bold text-gray-900">
            Department Reports
          </h1>
          <p className="mt-3 text-gray-600">
            Placement performance across academic departments.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="mb-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Highest Placement</p>
            <h2 className="mt-2 text-4xl font-bold text-emerald-600">92%</h2>
            <p className="mt-1 text-sm text-gray-500">CSE Department</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Average Placement</p>
            <h2 className="mt-2 text-4xl font-bold text-violet-600">80%</h2>
            <p className="mt-1 text-sm text-gray-500">Across 4 departments</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Departments</p>
            <h2 className="mt-2 text-4xl font-bold text-blue-600">4</h2>
            <p className="mt-1 text-sm text-gray-500">Included in report</p>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            Placement Performance
          </h2>

          <p className="mb-8 text-gray-500">
            Department-wise verified placement outcomes for the current academic
            year.
          </p>

          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="pb-4 text-left text-lg font-semibold text-gray-700">
                  Department
                </th>

                <th className="pb-4 text-left text-lg font-semibold text-gray-700">
                  Placement %
                </th>

                <th className="pb-4 text-left text-lg font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {reports.map((r) => (
                <tr
                  key={r.dept}
                  className="border-b border-gray-100 transition hover:bg-gray-50"
                >
                  <td className="py-6 text-lg font-semibold text-gray-900">
                    {r.dept}
                  </td>

                  <td className="py-6">
                    <div className="flex items-center gap-4">
                      <div className="h-3 w-40 rounded-full bg-gray-200">
                        <div
                          className="h-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-500"
                          style={{ width: `${r.placed}%` }}
                        />
                      </div>

                      <span className="font-bold text-violet-700">
                        {r.placed}%
                      </span>
                    </div>
                  </td>

                  <td className="py-6">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        r.status === "Excellent"
                          ? "bg-emerald-100 text-emerald-700"
                          : r.status === "Very Good"
                          ? "bg-blue-100 text-blue-700"
                          : r.status === "Good"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}