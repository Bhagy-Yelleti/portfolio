"use client";

import { Navbar } from "@/components/navbar";
import { HeroBanner } from "@/components/hero-banner";
import { ProjectRail } from "@/components/project-rail";
import { Footer } from "@/components/footer";
import { featuredProjects } from "@/data/site";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroBanner />

      {/* Featured Projects Rail */}
      <ProjectRail title="Featured Projects" projects={featuredProjects} />

      {/* Design Case Studies Rail */}
      <ProjectRail title="Design Case Studies" projects={[...featuredProjects].reverse()} />

      {/* Developer Builds Rail */}
      <ProjectRail title="Developer Builds" projects={featuredProjects.slice(0, 4)} />

      <Footer />
    </main>
  );
}
