import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse my portfolio of video editing, color grading, motion graphics, VFX, 3D, and web/app projects.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
