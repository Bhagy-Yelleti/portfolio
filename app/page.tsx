"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PhoenixSerpentScene } from "@/components/phoenix-serpent-scene";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { featuredProjects } from "@/data/site";

const selectedProjects = featuredProjects.slice(0, 3);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.4]);

  return (
    <main className="pb-28 md:pb-40">
      <section id="hero" ref={heroRef} className="section-shell relative min-h-screen pt-14 md:pt-24">
        <motion.div
          className="hero-grid relative grid min-h-[86vh] gap-14 lg:items-center"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <Reveal className="relative z-10 max-w-2xl self-center">
            <div className="space-y-8 md:space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(212,173,92,0.2)] bg-[rgba(13,11,8,0.42)] px-4 py-2 text-[11px] uppercase tracking-[0.38em] text-[rgba(242,220,164,0.72)] backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d8a84b]" />
                Builder of Things
              </div>

              <div className="space-y-6">
                <h1 className="hero-title max-w-4xl font-semibold text-white">
                  BHAGYA
                  <span className="block text-white/88">YELLETI</span>
                </h1>
                <p className="max-w-xl text-lg leading-8 text-[rgba(246,235,209,0.78)] md:text-[1.45rem] md:leading-9">
                  I build things people remember.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(213,174,90,0.28)] bg-[linear-gradient(135deg,rgba(243,223,179,0.95),rgba(205,159,70,0.92))] px-6 py-3 text-sm font-semibold text-[#140f08] shadow-[0_22px_60px_rgba(201,156,72,0.28)] transition duration-300 hover:-translate-y-1"
                >
                  Selected work <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-white/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[rgba(213,174,90,0.24)] hover:text-white"
                >
                  Contact
                </Link>
              </div>

              <SocialLinks className="pt-2" />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative z-10">
            <PhoenixSerpentScene />
          </Reveal>
        </motion.div>
      </section>

      <section id="work" className="section-shell section-gap">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Selected Work</p>
              <h2 className="section-title max-w-3xl">Three premium product stories with room to breathe.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/56 md:text-base md:leading-8">
              Large canvases, lighter copy, stronger presence.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid auto-rows-[minmax(360px,auto)] gap-6 lg:grid-cols-12 lg:gap-8">
          {selectedProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.08}
              className={index === 0 ? "lg:col-span-7 lg:row-span-2" : index === 1 ? "lg:col-span-5" : "lg:col-span-5"}
            >
              <motion.article
                whileHover={{ y: -10, scale: 1.01 }}
                transition={{ duration: 0.35 }}
                className="premium-card group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.4rem] p-6 md:p-8"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-50`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,12,0.04),rgba(5,6,10,0.7)_54%,rgba(5,6,10,0.94))]" />
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(252,229,177,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(31,132,93,0.14),transparent_24%)]" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] uppercase tracking-[0.34em] text-white/58">{project.category}</span>
                    <span className="text-sm text-white/46">{project.year}</span>
                  </div>

                  <div className="mt-8 space-y-4">
                    <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">{project.title}</h3>
                    <p className="max-w-xl text-base leading-7 text-white/72 md:text-lg md:leading-8">{project.impact}</p>
                  </div>
                </div>

                <div className="relative my-10">
                  <div className="project-mockup relative overflow-hidden rounded-[2rem] border border-[rgba(255,255,255,0.1)] p-4 md:p-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_24%),linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01))]" />
                    <div className="relative aspect-[1.2/0.92] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[rgba(6,7,12,0.62)] p-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/14" />
                      </div>
                      <div className={`mt-4 grid h-[calc(100%-1.5rem)] gap-3 ${index === 0 ? "md:grid-cols-[1.2fr_0.8fr]" : "grid-cols-1"}`}>
                        <div className="grid gap-3">
                          <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.05] p-3">
                            <div className="h-24 rounded-[1rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02))]" />
                          </div>
                          <div className="grid flex-1 gap-3 sm:grid-cols-2">
                            <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-3">
                              <div className="h-full min-h-[7rem] rounded-[1rem] bg-white/[0.08]" />
                            </div>
                            <div className="grid gap-3">
                              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-3">
                                <div className="h-10 rounded-full bg-white/[0.08]" />
                              </div>
                              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-3">
                                <div className="h-16 rounded-[1rem] bg-white/[0.08]" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {index === 0 && (
                          <div className="hidden md:grid gap-3">
                            <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.05] p-3">
                              <div className="h-full min-h-[8rem] rounded-[1rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))]" />
                            </div>
                            <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.05] p-3">
                              <div className="h-20 rounded-[1rem] bg-white/[0.08]" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col gap-5 border-t border-white/10 pt-5">
                  <div className="flex flex-wrap gap-2.5">
                    {project.stack.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[rgba(218,182,104,0.18)] bg-[rgba(255,255,255,0.04)] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[rgba(245,230,196,0.7)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-4 py-2.5 text-sm text-white transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(213,174,90,0.28)]"
                    >
                      Live <ArrowUpRight className="h-4 w-4" />
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
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell section-gap">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="space-y-5">
              <p className="section-eyebrow">About</p>
              <h2 className="section-title max-w-2xl">Quiet luxury in layout. Precision in build.</h2>
            </div>

            <div className="premium-card rounded-[2.5rem] p-7 md:p-10">
              <p className="max-w-2xl text-lg leading-8 text-white/72 md:text-[1.35rem] md:leading-9">
                I design and build polished digital experiences with a bias for atmosphere, clarity, and restraint.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {[
                  { label: "Focus", value: "Premium frontend systems" },
                  { label: "Strength", value: "Motion with restraint" },
                  { label: "Approach", value: "High taste, shipped well" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[10px] uppercase tracking-[0.34em] text-[#d7b26b]">{item.label}</p>
                    <p className="mt-4 text-base leading-7 text-white/80">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="section-shell section-gap">
        <Reveal>
          <div className="premium-card relative overflow-hidden rounded-[2.8rem] px-7 py-10 md:px-12 md:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(224,189,108,0.18),transparent_28%),radial-gradient(circle_at_78%_28%,rgba(25,117,81,0.12),transparent_22%),linear-gradient(180deg,rgba(8,8,11,0.06),rgba(7,7,10,0.76))]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-white/58">
                  <Sparkles className="h-3.5 w-3.5" />
                  Contact
                </div>
                <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.06em] text-white md:text-6xl">
                  Let&apos;s build something unforgettable.
                </h2>
              </div>

              <div className="space-y-6 lg:justify-self-end lg:text-right">
                <p className="max-w-lg text-base leading-8 text-white/68">
                  Available for premium product work, frontend builds, and design-minded collaborations.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                  <Link
                    href="mailto:yelletibhagya@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(213,174,90,0.28)] bg-[linear-gradient(135deg,rgba(243,223,179,0.95),rgba(205,159,70,0.92))] px-6 py-3 text-sm font-semibold text-[#140f08] transition duration-300 hover:-translate-y-1"
                  >
                    Send email <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="https://github.com/Bhagy-Yelleti"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 text-sm text-white/82 transition duration-300 hover:-translate-y-1 hover:border-[rgba(213,174,90,0.24)]"
                  >
                    View GitHub <Github className="h-4 w-4" />
                  </Link>
                </div>
                <div className="lg:flex lg:justify-end">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
