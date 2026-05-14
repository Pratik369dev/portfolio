"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="h-9 w-9" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-lg glass-subtle transition-colors hover:bg-[var(--border)]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-yellow-500" />
      ) : (
        <Moon className="h-4 w-4 text-slate-600" />
      )}
    </button>
  );
}
