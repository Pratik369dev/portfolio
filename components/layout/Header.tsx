"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] bg-clip-text text-transparent"
        >
          Pratik Shrestha
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-[var(--muted)] text-[var(--foreground)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-3">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile hamburger + theme toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav className="border-t border-[var(--border)] glass-strong md:hidden animate-[slideDown_0.2s_ease-out]">
          <div className="flex flex-col px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[var(--muted)] text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
