"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StudentNavbar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/student" },
    { name: "Twin", href: "/twin" },
    { name: "Graph", href: "/graph" },
    { name: "Passport", href: "/passport" },
    { name: "Reports", href: "/reports" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/student" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-xl font-bold text-white">
            S
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900">
              SkillSink AI
            </h1>
            <p className="text-sm text-gray-500">
              Student Portal
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2 rounded-full bg-gray-100 p-1">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                pathname === link.href
                  ? "bg-violet-600 text-white shadow"
                  : "text-gray-700 hover:bg-white hover:text-gray-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Home Button */}
        <Link
          href="/"
          className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          Home
        </Link>
      </nav>
    </header>
  );
}