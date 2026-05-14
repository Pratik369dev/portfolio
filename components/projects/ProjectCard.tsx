"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { categoryLabels } from "@/lib/data/projects";
import Badge from "@/components/ui/Badge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="group">
      <Link
        href={project.url || `/projects`}
        target={project.url ? "_blank" : undefined}
        rel={project.url ? "noopener noreferrer" : undefined}
        className="block overflow-hidden rounded-2xl glass card-lift"
      >
        <div className="relative aspect-video overflow-hidden bg-[var(--muted)]">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {project.url && (
            <div className="absolute top-3 right-3 rounded-full bg-black/50 p-1.5 backdrop-blur-sm">
              <ArrowUpRight className="h-4 w-4 text-white" />
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <Badge>{categoryLabels[project.category]}</Badge>
            <span className="text-xs text-[var(--muted-foreground)]">
              {project.year}
            </span>
          </div>
          <h3 className="font-semibold group-hover:text-[var(--accent-from)] transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-[var(--muted-foreground)] line-clamp-2">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
