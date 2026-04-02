import Link from "next/link";
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import { DeveloperOrb } from "@/components/developer-orb";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { capabilities, featuredProjects } from "@/data/site";

const process = [
  {
    step: "01",
    title: "Raw curiosity",
    body: "Every product starts with obsession: what makes people stay, feel, trust, and remember?",
  },
  {
    step: "02",
    title: "Design discipline",
    body: "I translate energy into hierarchy, rhythm, motion, and interfaces that feel expensive before a single word is read.",
  },
  {
    step: "03",
    title: "Engineering excellence",
    body: "Then I build it properly: responsive systems, clean architecture, performance intent, and details that hold up under pressure.",
  },
];

export default function HomePage() {
  return (
    <main className="pb-20">
      <section className="section-shell pt-10 md:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal className="relative">
            <div className="glass-panel glow-border rounded-[2.5rem] p-6 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.5em] text-white/45">Raw curiosity to refined systems</p>
              <h1 className="hero-title mt-6 max-w-5xl font-semibold text-white">
                I build interfaces
                <span className="display-serif ml-3 font-medium italic text-white/82">people remember.</span>
              </h1>
              <div className="mt-8 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
                <p className="max-w-md text-sm leading-7 text-white/64 md:text-base">
                  I&apos;m a frontend engineer chasing elite standards through cinematic UI, product thinking, and the kind of implementation
                  discipline that makes polished experiences feel inevitable.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">Focus</p>
                    <p className="mt-4 text-xl text-white">Premium interfaces with motion, clarity, and edge.</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">Mindset</p>
                    <p className="mt-4 text-xl text-white">Early in the journey. Ruthless about standards.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
                >
                  Explore selected work <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm text-white/78 transition hover:border-white/20 hover:bg-white/10"
                >
                  Let&apos;s build something sharp
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <DeveloperOrb />
          </Reveal>
        </div>
      </section>

      <section className="section-shell mt-16 md:mt-24">
        <div className="grid gap-6 md:grid-cols-[0.65fr_1.35fr]">
          <Reveal className="glass-panel rounded-[2rem] p-6 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/45">Who I am</p>
            <p className="mt-6 text-2xl leading-tight text-white">
              A young builder turning ambition into a design language that feels cinematic, precise, and impossible to ignore.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Sparkles, label: "Taste", copy: "Obsessed with premium UI systems, hierarchy, lighting, and interaction detail." },
              { icon: Target, label: "Standards", copy: "I care how it feels, how it performs, and whether the craft survives real use." },
              { icon: Zap, label: "Growth", copy: "Still early, still hungry, and building with the urgency of someone who knows the ceiling is far away." },
            ].map(({ icon: Icon, label, copy }) => (
              <div key={label} className="glass-panel rounded-[2rem] p-6">
                <Icon className="h-5 w-5 text-white/72" />
                <p className="mt-8 text-[11px] uppercase tracking-[0.35em] text-white/42">{label}</p>
                <p className="mt-3 text-sm leading-7 text-white/68">{copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-shell mt-24">
        <Reveal>
          <SectionIntro
            eyebrow="Selected work"
            title="Case studies designed like product stories, not gallery thumbnails."
            copy="Each project goes beyond the final screen. I break down the problem, the friction, the iterations, the engineering decisions, and the lessons that sharpened my process."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} priority={index === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-24">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Skills"
              title="My stack is technical. My edge is taste translated into code."
              copy="I use engineering as the medium for product quality: layouts with tension, interfaces with atmosphere, motion with intent, and systems that hold together across breakpoints."
            />
          </Reveal>
          <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="glass-panel rounded-[1.75rem] px-5 py-6 text-sm text-white/72">
                {item}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-shell mt-24">
        <Reveal>
          <SectionIntro
            eyebrow="Process"
            title="A transformation arc from instinct to execution."
            copy="The work gets stronger when curiosity, visual judgment, and frontend engineering stop competing and start reinforcing each other."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {process.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.08}>
              <div className="glass-panel rounded-[2rem] p-6 md:p-8">
                <p className="display-serif text-5xl italic text-white/30">{item.step}</p>
                <h3 className="mt-8 text-2xl text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/64">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-24">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="glass-panel rounded-[2.25rem] p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.45em] text-white/42">Future vision</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              I want to build products that feel a year ahead the moment they load.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/64 md:text-base">
              Startups and product teams move fast. I want to bring the same intensity to design systems, interfaces, and product surfaces that make a company feel sharper than its size.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="glass-panel rounded-[2.25rem] p-8">
            <p className="text-[11px] uppercase tracking-[0.45em] text-white/42">Contact CTA</p>
            <p className="mt-5 text-2xl text-white">If your product needs craft with hunger, let&apos;s talk.</p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10"
            >
              Start the conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
