import type { Metadata } from "next";
import BioSection from "@/components/about/BioSection";
import SkillsGrid from "@/components/about/SkillsGrid";
import ExperienceSection from "@/components/about/ExperienceSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about my background in video editing, color grading, motion graphics, VFX, 3D, and AI-assisted development.",
};

export default function AboutPage() {
  return (
    <>
      <BioSection />
      <SkillsGrid />
      <ExperienceSection />
    </>
  );
}
