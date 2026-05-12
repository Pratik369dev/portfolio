"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/lib/data/projects";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectFilterBar from "@/components/projects/ProjectFilterBar";
import ProjectGrid from "@/components/projects/ProjectGrid";

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">(
    "all"
  );

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper
      title="My Work"
      subtitle="A showcase of projects across different disciplines"
    >
      <ProjectFilterBar active={activeFilter} onChange={setActiveFilter} />
      <div className="mt-10">
        <ProjectGrid projects={filtered} />
      </div>
    </SectionWrapper>
  );
}
