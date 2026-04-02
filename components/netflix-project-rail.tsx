"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProjectStudy } from "@/data/site";

interface ProjectRailProps {
  title: string;
  projects: ProjectStudy[];
}

interface ProjectCardProps {
  project: ProjectStudy;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const gradients = [
    "linear-gradient(135deg, rgba(220, 38, 38, 0.9), rgba(245, 158, 11, 0.7))",
    "linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(168, 85, 247, 0.7))",
    "linear-gradient(135deg, rgba(245, 158, 11, 0.9), rgba(139, 92, 246, 0.7))",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative flex-shrink-0 w-[280px] h-[180px] md:w-[340px] md:h-[200px] rounded-2xl overflow-hidden group cursor-pointer"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: gradients[index % gradients.length] }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />

      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl shadow-purple-500/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-6 text-white">
        {/* Top */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-white/70 uppercase tracking-wider">
            {project.category}
          </p>
          <h3 className="text-xl md:text-2xl font-black line-clamp-2">{project.title}</h3>
        </div>

        {/* Bottom */}
        <div className="space-y-3">
          <p className="text-xs md:text-sm text-white/80 line-clamp-2">{project.hero}</p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded text-xs font-medium bg-white/10 text-white/80 backdrop-blur-sm border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Link */}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold text-xs md:text-sm transition-all opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 duration-300"
          >
            View <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectRail({ title, projects }: ProjectRailProps) {
  return (
    <section className="relative py-12 md:py-16 px-6 md:px-12 overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mt-3" />
      </motion.div>

      {/* Scroll Container */}
      <div className="relative">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Scrollable rail */}
        <div className="overflow-x-auto scrollbar-hide pb-4 -mx-6 md:-mx-12 px-6 md:px-12">
          <div className="flex gap-4 md:gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={`${project.slug}-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
