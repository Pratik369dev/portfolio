import { experiences } from "@/lib/data/experience";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  return (
    <SectionWrapper title="Experience" subtitle="My professional journey">
      <div className="relative mx-auto max-w-2xl">
        {/* Timeline line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-[var(--border)] md:left-1/2 md:-translate-x-px" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row gap-4 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-2 md:left-1/2 md:-translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[var(--accent-from)] bg-[var(--card)]">
                {exp.type === "education" ? (
                  <GraduationCap className="h-3 w-3 text-[var(--accent-from)]" />
                ) : (
                  <Briefcase className="h-3 w-3 text-[var(--accent-from)]" />
                )}
              </div>

              <div
                className={`ml-10 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"
                }`}
              >
                <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
                  <span className="text-xs font-medium text-[var(--accent-from)]">
                    {exp.startDate} — {exp.endDate}
                  </span>
                  <h3 className="mt-1 font-semibold">{exp.role}</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {exp.organization}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
