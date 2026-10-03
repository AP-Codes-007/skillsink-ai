"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InstitutionNavbar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/institution" },
    { name: "Analytics", href: "/analytics" },
    { name: "Reports", href: "/dept-report" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 font-bold text-white">
            I
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">SkillSink AI</h1>
            <p className="text-xs text-gray-500">Institution Portal</p>
          </div>
        </Link>

        <div className="flex items-center gap-2 rounded-full bg-gray-100 p-1">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                pathname === link.href
                  ? "bg-violet-600 text-white shadow"
                  : "text-gray-600 hover:bg-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          Home
        </Link>
      </nav>
    </header>
  );
}