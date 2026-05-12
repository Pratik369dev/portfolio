"use client";

import { categoryLabels, type ProjectCategory } from "@/lib/data/projects";

interface ProjectFilterBarProps {
  active: ProjectCategory | "all";
  onChange: (category: ProjectCategory | "all") => void;
}

export default function ProjectFilterBar({
  active,
  onChange,
}: ProjectFilterBarProps) {
  const categories: (ProjectCategory | "all")[] = [
    "all",
    "video-editing",
    "color-grading",
    "motion-graphics",
    "vfx",
    "3d",
    "web-app",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
            active === cat
              ? "bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white shadow-md"
              : "border border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--accent-from)]/30"
          }`}
        >
          {cat === "all" ? "All" : categoryLabels[cat]}
        </button>
      ))}
    </div>
  );
}
