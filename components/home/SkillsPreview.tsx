import { skills } from "@/lib/data/skills";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
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

export default function SkillsPreview() {
  return (
    <SectionWrapper
      title="What I Do"
      subtitle="A multidisciplinary creative skillset"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          const Icon = iconMap[skill.icon] || Code;
          return (
            <Link
              key={skill.name}
              href="/about#skills"
              className="group rounded-2xl glass card-lift surface-glow p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-from)]/10 to-[var(--accent-to)]/10 group-hover:from-[var(--accent-from)]/20 group-hover:to-[var(--accent-to)]/20 transition-colors">
                <Icon className="h-6 w-6 text-[var(--accent-from)]" />
              </div>
              <h3 className="mt-4 font-semibold">{skill.name}</h3>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                {skill.items.slice(0, 3).join(", ")}
              </p>
            </Link>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
