"use client";

import Navbar from "@/components/studentnavbar";

const credentials = [
  {
    title: "Python Programming",
    issuer: "IIIT Dharwad",
    level: "Advanced",
    verified: true,
  },
  {
    title: "SQL & Databases",
    issuer: "SkillSink AI",
    level: "Professional",
    verified: true,
  },
  {
    title: "Machine Learning",
    issuer: "NPTEL",
    level: "Intermediate",
    verified: true,
  },
  {
    title: "Hackathon Participation",
    issuer: "Smart India Hackathon",
    level: "National",
    verified: true,
  },
];

export default function PassportPage() {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <Navbar />

      <main className="mx-auto max-w-7xl p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Verified Identity • Blockchain Credentials
            </p>

            <h1 className="mt-2 text-5xl font-bold text-gray-900">
              Skill Passport
            </h1>

            <p className="mt-3 max-w-2xl text-gray-600">
              A portable, tamper-proof record of your verified academic,
              technical and professional competencies.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
              Verification Status
            </p>

            <h2 className="mt-2 text-4xl font-bold text-emerald-600">
              VERIFIED
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Digital credential active
            </p>
          </div>
        </div>

        {/* Profile Card */}
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:col-span-3">
            <div className="flex items-center gap-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-600 text-4xl font-bold text-white">
                A
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Arun Prasath
                </h2>

                <p className="mt-1 text-gray-500">
                  B.Tech Computer Science
                </p>

                <p className="text-gray-500">IIIT Dharwad</p>

                <div className="mt-3 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
                  ML Engineer Track
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-5">
              <Info label="Passport ID" value="SK-2048-ARUN" />
              <Info label="Issue Date" value="23 Sep 2026" />
              <Info label="Verified Skills" value="24" />
              <Info label="Projects Linked" value="8" />
            </div>
          </div>

          {/* QR Card */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900">
              Verify Passport
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Scan to validate credentials
            </p>

            <div className="mt-6 flex justify-center">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <svg width="180" height="180" viewBox="0 0 180 180">
                  <rect width="180" height="180" rx="12" fill="white"/>

                  <rect x="12" y="12" width="42" height="42" fill="#111827"/>
                  <rect x="20" y="20" width="26" height="26" fill="white"/>
                  <rect x="28" y="28" width="10" height="10" fill="#111827"/>

                  <rect x="126" y="12" width="42" height="42" fill="#111827"/>
                  <rect x="134" y="20" width="26" height="26" fill="white"/>
                  <rect x="142" y="28" width="10" height="10" fill="#111827"/>

                  <rect x="12" y="126" width="42" height="42" fill="#111827"/>
                  <rect x="20" y="134" width="26" height="26" fill="white"/>
                  <rect x="28" y="142" width="10" height="10" fill="#111827"/>

                  {[
                    [72,18],[84,18],[96,18],[108,18],
                    [72,30],[96,30],[120,30],
                    [60,42],[84,42],[108,42],
                    [60,54],[72,54],[96,54],[120,54],
                    [60,72],[84,72],[96,72],[108,72],
                    [72,84],[120,84],
                    [60,96],[84,96],[108,96],[120,96],
                    [72,108],[96,108],
                    [60,120],[84,120],[108,120],[120,120],
                    [72,132],[96,132],[108,144],
                  ].map(([x,y],i)=>(
                    <rect key={i} x={x} y={y} width="12" height="12" fill="#111827"/>
                  ))}
                </svg>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-emerald-50 p-4">
              <p className="text-sm font-semibold text-emerald-700">
                Blockchain Hash
              </p>
              <p className="mt-2 break-all font-mono text-xs text-gray-700">
                0x8F3A92D7E1C49B2A...
              </p>
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Verified Credentials
          </h2>

          <p className="mt-2 text-gray-500">
            Every credential is backed by institutional or industry verification.
          </p>

          <div className="mt-8 space-y-4">
            {credentials.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-500">
                    {item.issuer}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
                    {item.level}
                  </span>

                  {item.verified && (
                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                      ✓ Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Trust Score */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              Passport Trust Score
            </h2>

            <div className="mt-8 flex justify-center">
              <div className="relative flex h-44 w-44 items-center justify-center">
                <svg className="absolute h-full w-full -rotate-90">
                  <circle
                    cx="88"
                    cy="88"
                    r="72"
                    stroke="#E5E7EB"
                    strokeWidth="14"
                    fill="none"
                  />

                  <circle
                    cx="88"
                    cy="88"
                    r="72"
                    stroke="#7C3AED"
                    strokeWidth="14"
                    fill="none"
                    strokeDasharray={452}
                    strokeDashoffset={18}
                    strokeLinecap="round"
                  />
                </svg>

                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900">
                    96
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    Trust Index
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              AI Validation Summary
            </h2>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <p className="font-semibold text-emerald-700">
                  Identity Verified
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Academic identity successfully authenticated.
                </p>
              </div>

              <div className="rounded-2xl bg-violet-50 p-4">
                <p className="font-semibold text-violet-700">
                  Portfolio Linked
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  8 verified projects contribute to employability scoring.
                </p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-4">
                <p className="font-semibold text-sky-700">
                  Recruiter Ready
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Employers can validate this passport instantly using the QR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-gray-50 p-4">
      <p className="text-xs uppercase tracking-wider text-gray-400">{label}</p>
      <h3 className="mt-2 text-lg font-bold text-gray-900">{value}</h3>
    </div>
  );
}