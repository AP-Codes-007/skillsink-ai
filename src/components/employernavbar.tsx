"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EmployerNavbar() {
  const pathname = usePathname();

  const links = [
    { name: "Talent", href: "/employer" },
    { name: "Candidate", href: "/candidate" },
    { name: "Hiring", href: "/hiring" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/employer" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-xl font-bold text-white">
            E
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900">
              SkillSink AI
            </h1>
            <p className="text-sm text-gray-500">
              Employer Portal
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
                  ? "bg-emerald-600 text-white shadow"
                  : "text-gray-700 hover:bg-white hover:text-gray-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Home */}
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