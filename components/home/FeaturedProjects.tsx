"use client";

import { projects } from "@/lib/data/projects";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/projects/ProjectCard";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <SectionWrapper
      id="featured"
      title="Featured Work"
      subtitle="A selection of recent projects across different disciplines"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href="/projects" variant="outline">
          View All Projects
        </Button>
      </div>
    </SectionWrapper>
  );
}
