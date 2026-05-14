import { siteConfig } from "@/lib/data/site";
import SocialLinks from "@/components/contact/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] glass-subtle">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] bg-clip-text text-transparent">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-xs text-[var(--muted-foreground)]">
              {siteConfig.title}
            </p>
          </div>

          <SocialLinks />

          <p className="text-xs text-[var(--muted-foreground)]">
            &copy; {new Date().getFullYear()}{" "}
            {siteConfig.name}. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
