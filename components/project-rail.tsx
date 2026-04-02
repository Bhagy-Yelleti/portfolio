"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import type { ProjectStudy } from "@/data/site";

interface ProjectRailProps {
  title: string;
  projects: ProjectStudy[];
}

export function ProjectRail({ title, projects }: ProjectRailProps) {
  return (
    <section className="relative py-16 px-6 md:px-12 overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black to-black/20" />
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white">{title}</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mt-4" />
      </motion.div>

      {/* Horizontal Scroll Rail */}
      <div className="relative">
        {/* Gradient fade on left */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

        {/* Gradient fade on right */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Scrollable Container */}
        <div className="overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-6 px-6">
            {projects.map((project, index) => (
              <ProjectCard key={`${project.slug}-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
