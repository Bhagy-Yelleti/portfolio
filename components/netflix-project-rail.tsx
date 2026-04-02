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
    "from-red-900 via-red-800 to-red-700",
    "from-slate-900 via-purple-900 to-purple-800",
    "from-orange-900 via-red-900 to-red-800",
    "from-purple-900 via-slate-900 to-slate-800",
    "from-red-900 via-slate-900 to-purple-900",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative flex-shrink-0 w-[280px] h-[160px] md:w-[340px] md:h-[200px] rounded-xl overflow-hidden cursor-pointer"
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]}`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 group-hover:via-black/20 transition-all duration-300" />

      {/* Accent glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl shadow-red-500/50 rounded-xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-6 text-white">
        {/* Top */}
        <div className="space-y-2">
          <p className="text-xs font-bold text-red-400 uppercase tracking-wider">
            {project.category}
          </p>
          <h3 className="text-lg md:text-2xl font-black line-clamp-2">{project.title}</h3>
        </div>

        {/* Bottom */}
        <div className="space-y-3">
          <p className="text-xs md:text-sm text-white/80 line-clamp-2">{project.hero}</p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.stack.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded text-xs font-medium bg-white/10 text-white/80 backdrop-blur-sm border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Link */}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-red-400 font-semibold text-xs md:text-sm transition-all opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 duration-300"
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
    <section className="relative py-10 md:py-14 px-6 md:px-16 overflow-hidden bg-black">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-6 md:mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-black text-white">{title}</h2>
        <div className="w-10 h-1 bg-red-600 mt-3 rounded-full" />
      </motion.div>

      {/* Scroll Container */}
      <div className="relative group">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none rounded-l-lg" />

        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none rounded-r-lg" />

        {/* Scrollable rail */}
        <div className="overflow-x-auto scrollbar-hide pb-2 -mx-6 md:-mx-16 px-6 md:px-16">
          <div className="flex gap-4 md:gap-6">
            {projects.slice(0, 6).map((project, index) => (
              <ProjectCard key={`${project.slug}-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hidden md:block pointer-events-none text-xs font-medium"
        >
          ↳
        </motion.div>
      </div>
    </section>
  );
}
