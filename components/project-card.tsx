"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProjectStudy } from "@/data/site";

interface ProjectCardProps {
  project: ProjectStudy;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.06, y: -6 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      className="relative flex-shrink-0 w-80 h-48 rounded-2xl overflow-hidden group cursor-pointer"
    >
      {/* Card Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-600/20 group-hover:from-orange-500/30 group-hover:to-purple-600/30 transition-all duration-300" />

      {/* Alternative gradient backgrounds - cycle through them */}
      <div
        className="absolute inset-0 bg-gradient-to-br opacity-60 group-hover:opacity-80 transition-all duration-300"
        style={{
          backgroundImage: [
            "linear-gradient(135deg, rgba(201, 54, 54, 0.92), rgba(245, 125, 53, 0.65))",
            "linear-gradient(135deg, rgba(86, 34, 156, 0.92), rgba(213, 71, 127, 0.58))",
            "linear-gradient(135deg, rgba(230, 129, 53, 0.88), rgba(141, 67, 219, 0.6))",
          ][index % 3],
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl shadow-purple-500/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
        {/* Top Section */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-white/70 uppercase tracking-wider">{project.category}</p>
          <h3 className="text-2xl font-black line-clamp-2">{project.title}</h3>
        </div>

        {/* Bottom Section */}
        <div className="space-y-4">
          <p className="text-sm text-white/80 line-clamp-2">{project.hero}</p>

          {/* Stack Chips */}
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 2).map((tech) => (
              <span key={tech} className="px-2 py-1 rounded text-xs font-medium bg-white/10 text-white/80 backdrop-blur-sm border border-white/20">
                {tech}
              </span>
            ))}
            {project.stack.length > 2 && (
              <span className="px-2 py-1 rounded text-xs font-medium bg-white/10 text-white/80 backdrop-blur-sm border border-white/20">
                +{project.stack.length - 2}
              </span>
            )}
          </div>

          {/* View More Action */}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold text-sm transition-all opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 duration-300"
          >
            View Details
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
