import { skills } from "@/lib/data/skills";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  Clapperboard,
  Palette,
  Sparkles,
  Zap,
  Box,
  Code,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clapperboard,
  Palette,
  Sparkles,
  Zap,
  Box,
  Code,
};

export default function SkillsGrid() {
  return (
    <SectionWrapper id="skills" title="Skills & Tools">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          const Icon = iconMap[skill.icon] || Code;
          return (
            <div
              key={skill.name}
              className="rounded-2xl glass card-lift p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-from)]/10 to-[var(--accent-to)]/10">
                  <Icon className="h-5 w-5 text-[var(--accent-from)]" />
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>

              {/* Proficiency bar */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-[var(--muted-foreground)] mb-1">
                  <span>Proficiency</span>
                  <span>{skill.proficiency}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[var(--muted)]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] transition-all"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block rounded-md bg-[var(--muted)] px-2 py-1 text-xs text-[var(--muted-foreground)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
