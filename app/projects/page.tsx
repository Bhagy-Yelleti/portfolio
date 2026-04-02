import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { featuredProjects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <main className="section-shell pb-20 pt-10 md:pt-16">
      <Reveal>
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12">
          <SectionIntro
            eyebrow="Projects"
            title="Case studies that expose the thinking, not just the finish."
            copy="These projects are structured like product stories: context, friction, iteration, final interface, technical challenges, results, and the lessons that carried forward."
          />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.08}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}
