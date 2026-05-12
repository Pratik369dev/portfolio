import { siteConfig } from "@/lib/data/site";
import { Globe, Mail } from "lucide-react";

const platformLabels: Record<string, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  twitter: "Twitter",
  youtube: "YouTube",
  instagram: "Instagram",
};

export default function SocialLinks() {
  const links = siteConfig.links;

  return (
    <div className="flex items-center gap-4">
      {Object.entries(links).map(([key, url]) => {
        if (!url) return null;

        if (key === "email") {
          return (
            <a
              key={key}
              href={`mailto:${url}`}
              aria-label="Email"
              className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              <Mail className="h-5 w-5" />
            </a>
          );
        }

        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={platformLabels[key] || key}
            className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            <Globe className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
