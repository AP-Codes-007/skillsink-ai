import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-black" />
      <div className="absolute -top-32 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-16">
        {/* Badge */}
        <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur">
          🚀 Explainable AI • Blockchain • Digital Twin
        </div>

        {/* Hero */}
        <h1 className="mt-8 max-w-5xl text-center text-6xl font-extrabold leading-tight md:text-7xl">
          Build Your{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Employability
          </span>{" "}
          Identity
        </h1>

        <p className="mt-8 max-w-3xl text-center text-xl leading-8 text-slate-300">
          SkillSink AI unifies students, institutions and employers into one
          explainable talent ecosystem powered by AI, verified credentials and
          digital career intelligence.
        </p>

        {/* PORTALS */}
        <div className="mt-16 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {/* Student */}
          <Link href="/student">
            <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-3xl shadow-lg shadow-cyan-500/20">
                🎓
              </div>

              <h2 className="text-2xl font-bold">Student Portal</h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Digital Twin, Skill Graph, Next Best Action and your verified
                Skill Passport.
              </p>

              <div className="mt-6 flex items-center font-semibold text-cyan-300 group-hover:text-cyan-200">
                Enter Portal
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>

          {/* Employer */}
          <Link href="/employer">
            <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-white/10">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 text-3xl shadow-lg shadow-emerald-500/20">
                💼
              </div>

              <h2 className="text-2xl font-bold">Employer Portal</h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Search verified talent, evaluate AI match scores and hire with
                explainable recommendations.
              </p>

              <div className="mt-6 flex items-center font-semibold text-emerald-300 group-hover:text-emerald-200">
                Enter Portal
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>

          {/* Institution */}
          <Link href="/institution">
            <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-white/10">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-400 text-3xl shadow-lg shadow-violet-500/20">
                🏛️
              </div>

              <h2 className="text-2xl font-bold">Institution Portal</h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Campus analytics, department insights and institution-wide
                employability intelligence.
              </p>

              <div className="mt-6 flex items-center font-semibold text-violet-300 group-hover:text-violet-200">
                Enter Portal
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-cyan-300">12K+</h3>
            <p className="mt-2 text-sm text-slate-400">Verified Students</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-emerald-300">430+</h3>
            <p className="mt-2 text-sm text-slate-400">Hiring Partners</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-violet-300">96%</h3>
            <p className="mt-2 text-sm text-slate-400">Trust Score</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-orange-300">24</h3>
            <p className="mt-2 text-sm text-slate-400">Verified Skills</p>
          </div>
        </div>
      </div>
    </main>
  );
}