"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/reveal";
import { capabilities, featuredProjects } from "@/data/site";

const processSteps = [
  {
    step: "01",
    label: "Problem",
    title: "Find the friction that makes good ideas feel ordinary.",
    body: "I isolate the hesitation points first so the redesign has something real to beat.",
  },
  {
    step: "02",
    label: "Research",
    title: "Study user behavior, references, and market taste.",
    body: "I map expectations, references, and where product perception starts slipping.",
  },
  {
    step: "03",
    label: "Design process",
    title: "Shape hierarchy before polishing the surface.",
    body: "Rhythm, sequencing, and contrast get solved before the visuals start getting expensive.",
  },
  {
    step: "04",
    label: "Wireframes",
    title: "Build structure that can carry cinematic moments.",
    body: "I block asymmetry, story flow, and breathing room into the system early.",
  },
  {
    step: "05",
    label: "Final UI",
    title: "Turn visual taste into atmosphere and clarity.",
    body: "Type, glow, surfaces, and motion all serve the product story instead of distracting from it.",
  },
  {
    step: "06",
    label: "Development",
    title: "Translate vision into resilient frontend systems.",
    body: "The frontend has to stay sharp across breakpoints, states, and real constraints.",
  },
  {
    step: "07",
    label: "Optimization",
    title: "Refine until the experience feels effortless.",
    body: "Performance and polish decide whether premium survives contact with reality.",
  },
  {
    step: "08",
    label: "Results",
    title: "Ship products people trust, enjoy, and remember.",
    body: "The outcome is stronger perception, cleaner conversion, and a product people remember.",
  },
];

const aboutPoints = [
  "Ambition that shows up in the details, not just the tagline.",
  "Obsessed with interfaces that feel premium before users can explain why.",
  "Still early in the journey, but already building with elite expectations.",
];

const marqueeSkills = [...capabilities, "Interaction systems", "Creative frontend", "Visual storytelling", "Premium product polish"];

const floatingSnippets = [
  "const delight = precision + motion;",
  "<Interface memory='high' />",
  "if (quality < elite) refine();",
];

function HeroIdentity() {
  return (
    <div className="relative min-h-[620px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 shadow-aura backdrop-blur-2xl md:p-8">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <motion.div
        className="absolute left-[8%] top-[12%] h-20 w-20 rounded-[1.75rem] border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(124,140,255,0.1))] backdrop-blur-xl"
        animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[18%] h-14 w-14 rounded-full border border-[#95a7ff]/30 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.95),rgba(116,131,255,0.55)_35%,rgba(10,12,22,0.92)_78%)] shadow-[0_0_40px_rgba(116,131,255,0.55)]"
        animate={{ x: [0, 10, 0], y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.98),rgba(120,96,255,0.72)_18%,rgba(69,198,255,0.45)_38%,rgba(8,10,18,0.98)_76%)] shadow-[0_0_120px_rgba(102,116,255,0.45)]"
        animate={{ scale: [1, 1.08, 0.96, 1], y: [0, -20, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 rounded-[1.6rem] border border-white/15 bg-[linear-gradient(160deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] shadow-[0_0_50px_rgba(110,127,255,0.3)] backdrop-blur-xl"
        animate={{ rotate: [0, 45, 90, 45, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {floatingSnippets.map((snippet, index) => (
        <motion.div
          key={snippet}
          className={`absolute rounded-[1.5rem] border border-white/10 bg-[rgba(8,10,18,0.72)] px-4 py-3 font-mono text-[11px] text-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl ${
            index === 0
              ? "left-4 top-12 md:left-8"
              : index === 1
                ? "bottom-24 left-8 md:left-12"
                : "right-4 top-28 md:right-10"
          }`}
          animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0], x: [0, index === 1 ? 8 : -8, 0] }}
          transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          {snippet}
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-8 right-6 w-[180px] rounded-[1.75rem] border border-white/10 bg-[rgba(8,10,18,0.68)] p-4 backdrop-blur-xl md:w-[220px]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/42">Identity signal</p>
        <p className="mt-3 text-sm leading-6 text-white/74">
          Abstract geometry, atmospheric motion, and code fragments standing in for a personal portrait.
        </p>
      </motion.div>
    </div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <main className="pb-24">
      <section id="hero" ref={heroRef} className="section-shell relative min-h-screen pt-10 md:pt-20">
        <motion.div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center" style={{ y: heroY, opacity: heroOpacity }}>
          <Reveal className="relative">
            <div className="glass-panel glow-border overflow-hidden rounded-[2.8rem] p-7 md:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,107,255,0.16),transparent_28%),radial-gradient(circle_at_75%_30%,rgba(86,170,255,0.12),transparent_24%)]" />
              <div className="relative">
                <motion.p
                  className="text-[11px] uppercase tracking-[0.55em] text-white/50"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  Frontend engineering with cinematic intent
                </motion.p>
                <motion.h1
                  className="hero-title mt-7 max-w-5xl font-semibold text-white"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  I BUILD
                  <span className="block text-white/86">INTERFACES</span>
                  <span className="display-serif block font-medium italic text-[#d9deff]">PEOPLE REMEMBER</span>
                </motion.h1>
                <motion.div
                  className="mt-10 grid gap-8 md:grid-cols-[1.12fr_0.88fr]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.24 }}
                >
                  <p className="max-w-lg text-lg leading-8 text-white/68 md:text-xl">
                    Frontend engineer with a design obsession, a product brain, and very little patience for forgettable interfaces.
                  </p>
                  <div className="grid gap-5">
                    <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5 md:p-6">
                      <p className="text-[10px] uppercase tracking-[0.35em] text-white/42">Frontend</p>
                      <p className="mt-3 text-xl leading-8 text-white">Premium systems. Intentional motion. Product-grade implementation.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Taste", value: "High" },
                        { label: "Motion", value: "Intentional" },
                      ].map((item) => (
                        <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                          <p className="text-[10px] uppercase tracking-[0.35em] text-white/42">{item.label}</p>
                          <p className="mt-3 text-lg text-white">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.32 }}
                >
                  <Link
                    href="#work"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5"
                  >
                    Explore selected work <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                  >
                    Let&apos;s build something sharp
                  </Link>
                </motion.div>
                <motion.div
                  className="mt-16 flex items-center gap-3 text-[11px] uppercase tracking-[0.45em] text-white/38"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.1, delay: 0.55 }}
                >
                  <span className="h-px w-12 bg-white/20" />
                  Scroll for the story
                  <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                    <ArrowDown className="h-4 w-4" />
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <HeroIdentity />
          </Reveal>
        </motion.div>
      </section>

      <section className="section-shell mt-24 md:mt-36">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="glass-panel rounded-[2.4rem] p-8 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.45em] text-white/42">Editorial note</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                Designed for memory,
                <span className="display-serif block font-medium italic text-[#dce0ff]">not just usability.</span>
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Cinematic interfaces with product-level discipline.",
                "Less dashboard energy. More brand presence and momentum.",
              ].map((note, index) => (
                <motion.div
                  key={note}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 text-base leading-8 text-white/68 shadow-aura backdrop-blur-xl"
                >
                  {note}
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="work" className="section-shell mt-24 md:mt-40">
        <Reveal>
          <div className="max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.5em] text-white/42">Selected work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Bento-built project stories with premium tension, not generic thumbnails.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/62">
              Three projects. Bigger presence. Less filler.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid auto-rows-[minmax(320px,auto)] gap-6 lg:grid-cols-12">
          {featuredProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.08}
              className={index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-12"}
            >
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35 }}
                className="group relative h-full overflow-hidden rounded-[2.3rem] border border-white/10 bg-[rgba(255,255,255,0.045)] p-6 shadow-aura backdrop-blur-2xl md:p-7"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_26%),linear-gradient(180deg,rgba(4,5,11,0.06),rgba(5,7,15,0.72)_58%,rgba(5,7,15,0.94))]" />
                <motion.div
                  className="absolute right-[-8%] top-[-8%] h-48 w-48 rounded-full bg-white/10 blur-3xl"
                  animate={{ scale: [1, 1.16, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative flex h-full flex-col justify-between gap-10">
                  <div className={`grid gap-6 ${index === 2 ? "lg:grid-cols-[0.9fr_1.1fr] lg:items-end" : ""}`}>
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[11px] uppercase tracking-[0.38em] text-white/58">{project.category}</span>
                        <span className="text-sm text-white/52">{project.year}</span>
                      </div>
                      <h3 className="mt-5 text-3xl font-semibold text-white md:text-4xl">{project.title}</h3>
                      <p className="mt-4 max-w-xl text-base leading-8 text-white/72">{project.impact}</p>
                    </div>

                    <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[rgba(9,11,22,0.68)] p-4 md:p-5">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_20%)]" />
                      <div className="relative aspect-[1.08/1] rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        </div>
                        <div className="mt-5 grid h-[calc(100%-2.5rem)] gap-3">
                          <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                            <div className="h-24 rounded-[0.9rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.02))]" />
                          </div>
                          <div className="grid flex-1 gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                            <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                              <div className="h-full rounded-[0.9rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]" />
                            </div>
                            <div className="grid gap-3">
                              <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                                <div className="h-10 rounded-full bg-white/10" />
                              </div>
                              <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                                <div className="h-14 rounded-[0.9rem] bg-white/10" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex flex-col gap-5 border-t border-white/10 pt-5 md:flex-row md:items-end md:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/60"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-4 py-2.5 text-sm text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.22]"
                      >
                        Live demo <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-white/76 transition duration-300 hover:-translate-y-0.5 hover:text-white"
                      >
                        GitHub <Github className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="process" className="section-shell mt-28 md:mt-40">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.5em] text-white/42">Case study flow</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                Visual storytelling for how I move from friction to finished product.
              </h2>
            </div>
            <p className="max-w-xl self-end text-base leading-8 text-white/62">
              Built as a visual sequence, not a methodology dump.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {processSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.035)] p-6 shadow-aura backdrop-blur-xl md:p-7"
              >
                <div className="absolute inset-y-0 left-0 w-px bg-[linear-gradient(180deg,transparent,rgba(124,140,255,0.7),transparent)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,140,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(82,209,255,0.08),transparent_20%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.2rem] border border-white/10 bg-white/5 text-sm text-white/76">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.38em] text-white/42">{item.label}</p>
                    <h3 className="mt-3 text-2xl text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">{item.body}</p>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell mt-28 md:mt-40">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass-panel rounded-[2.5rem] p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.5em] text-white/42">About me</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Young in years.
              <span className="display-serif block font-medium italic text-[#dce0ff]">Elite in standards.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="glass-panel rounded-[2.5rem] p-8 md:p-10">
            <p className="max-w-xl text-xl leading-9 text-white/68">
              I want to build products that feel ahead of the market the moment they load.
            </p>
            <div className="mt-8 grid gap-4">
              {aboutPoints.map((point) => (
                <div key={point} className="rounded-[1.6rem] border border-white/10 bg-black/20 px-5 py-4 text-sm leading-7 text-white/70">
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: "3+", label: "Years deep in learning and building" },
                { value: "Infinite", label: "Iterations before I call it polished" },
                { value: "100%", label: "Bias toward better visual standards" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                  <p className="display-serif text-4xl italic text-white">{stat.value}</p>
                  <p className="mt-3 text-sm leading-6 text-white/56">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="skills" className="section-shell mt-28 overflow-hidden md:mt-40">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.5em] text-white/42">Skills</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                Technical range with a visual point of view.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/62">
              The stack matters. The point of view matters more.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-4">
          {[0, 1].map((row) => (
            <div key={row} className="marquee-row">
              <div className={`marquee-track ${row === 1 ? "marquee-track-reverse" : ""}`}>
                {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
                  <div
                    key={`${row}-${skill}-${index}`}
                    className="rounded-full border border-white/12 bg-[rgba(255,255,255,0.05)] px-5 py-3 text-sm text-white/72 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell mt-28 md:mt-40">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-[rgba(255,255,255,0.045)] px-7 py-10 shadow-aura backdrop-blur-2xl md:px-12 md:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,140,255,0.22),transparent_26%),radial-gradient(circle_at_75%_35%,rgba(82,209,255,0.14),transparent_22%),linear-gradient(180deg,rgba(6,7,13,0.15),rgba(6,7,13,0.78))]" />
            <motion.div
              className="absolute right-[-6rem] top-[-4rem] h-64 w-64 rounded-full bg-[#7c8cff]/20 blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/52">
                <Sparkles className="h-3.5 w-3.5" />
                Contact
              </div>
              <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-7xl">
                If your product deserves better interfaces,
                <span className="display-serif block font-medium italic text-[#dce0ff]">let&apos;s build it.</span>
              </h2>
              <p className="mt-6 max-w-xl text-xl leading-9 text-white/68">
                If the interface needs sharper taste, stronger execution, and more presence, I&apos;m in.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="mailto:hello@bhagyayelleti.dev"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5"
                >
                  Send an email <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="https://github.com/bhagyayelleti"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-white/20"
                >
                  View GitHub <Github className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
