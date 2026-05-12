import { siteConfig } from "@/lib/data/site";
import Button from "@/components/ui/Button";
import { ArrowDown, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-from)]/5 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[var(--accent-from)]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-1.5 text-sm text-[var(--muted-foreground)] mb-8">
          <Play className="h-3.5 w-3.5 text-[var(--accent-from)]" />
          Available for freelance projects
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg sm:text-xl text-[var(--muted-foreground)]">
          <span className="bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] bg-clip-text text-transparent font-semibold">
            {siteConfig.title}
          </span>
          {" — "}
          Video editing, color grading, motion graphics, VFX, 3D, and
          AI-assisted development.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/projects" size="lg">
            View My Work
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Get in Touch
          </Button>
        </div>

        <div className="mt-16">
          <a
            href="#featured"
            className="inline-flex flex-col items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
