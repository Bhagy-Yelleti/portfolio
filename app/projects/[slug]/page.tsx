import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { featuredProjects } from "@/data/site";

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="section-shell pb-20 pt-10 md:pt-16">
      <Reveal>
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12">
          <p className="text-[11px] uppercase tracking-[0.45em] text-white/42">{project.category}</p>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">{project.title}</h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/66">{project.hero}</p>
            </div>
            <div className="grid gap-4">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/38">{metric.label}</p>
                  <p className="mt-3 text-3xl text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal className="glass-panel rounded-[2rem] p-8">
          <p className="text-[11px] uppercase tracking-[0.45em] text-white/42">Overview</p>
          <p className="mt-5 text-sm leading-7 text-white/64">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/54"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
        <div className="grid gap-6">
          {project.sections.map((section, index) => (
            <Reveal key={section.label} delay={index * 0.04}>
              <section className="glass-panel rounded-[2rem] p-8">
                <p className="text-[11px] uppercase tracking-[0.45em] text-white/42">{section.label}</p>
                <h2 className="mt-4 text-3xl text-white">{section.title}</h2>
                <p className="mt-4 max-w-3xl text-sm leading-8 text-white/64">{section.body}</p>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
