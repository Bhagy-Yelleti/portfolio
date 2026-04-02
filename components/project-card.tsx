import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectStudy } from "@/data/site";

export function ProjectCard({ project, priority = false }: { project: ProjectStudy; priority?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-aura backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/20 ${
        priority ? "md:col-span-2 md:min-h-[360px]" : ""
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,140,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(82,209,255,0.12),transparent_25%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col justify-between gap-12">
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.38em] text-white/40">{project.category}</span>
            <span className="text-sm text-white/45">{project.year}</span>
          </div>
          <div>
            <h3 className="max-w-xl text-3xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">{project.summary}</p>
          </div>
        </div>
        <div className="flex items-end justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs tracking-[0.2em] text-white/55"
              >
                {item}
              </span>
            ))}
          </div>
          <span className="flex items-center gap-2 text-sm text-white/75 transition group-hover:text-white">
            Open case study <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
