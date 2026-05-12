import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactForm from "@/components/contact/ContactForm";
import SocialLinks from "@/components/contact/SocialLinks";
import { siteConfig } from "@/lib/data/site";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — I'd love to hear about your project.",
};

export default function ContactPage() {
  return (
    <SectionWrapper title="Get in Touch" subtitle="Let's work together">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="font-semibold mb-4">Connect With Me</h3>
            <SocialLinks />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
              <Mail className="h-5 w-5 text-[var(--accent-from)]" />
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="hover:text-[var(--foreground)] transition-colors"
              >
                {siteConfig.links.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
              <MapPin className="h-5 w-5 text-[var(--accent-from)]" />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/50 p-5">
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              Currently available for freelance projects. Whether you need video
              editing, motion graphics, color grading, or a custom website — I
              would love to hear about it.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
