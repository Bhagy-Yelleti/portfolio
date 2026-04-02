"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { featuredProjects } from "@/data/site";

const PhoenixSerpentScene = dynamic(
  () => import("@/components/phoenix-serpent-scene").then((module) => module.PhoenixSerpentScene),
  { ssr: false },
);

const selectedProjects = featuredProjects.slice(0, 3);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.25]);

  return (
    <main className="pb-32 md:pb-44">
      <section id="hero" ref={heroRef} className="section-shell hero-shell">
        <motion.div className="hero-layout" style={{ y: heroY, opacity: heroOpacity }}>
          <Reveal className="hero-copy relative z-10">
            <div className="space-y-7 md:space-y-10">
              <div className="hero-kicker">Builder of Things</div>

              <div className="space-y-5">
                <h1 className="hero-title max-w-4xl font-semibold text-white">
                  BHAGYA
                  <span className="block text-white/92">YELLETI</span>
                </h1>
                <p className="max-w-lg text-lg leading-8 text-[rgba(241,230,203,0.78)] md:text-[1.3rem] md:leading-9">
                  Crafting products with cinematic precision.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="#work" className="wizard-button wizard-button-primary">
                  Selected Work <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#contact" className="wizard-button wizard-button-muted">
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
          <div className="section-heading">
            <div>
              <p className="section-eyebrow">Selected Work</p>
              <h2 className="section-title max-w-3xl">Three crafted builds. Nothing noisy. Nothing generic.</h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid auto-rows-[minmax(320px,auto)] gap-8 lg:grid-cols-12 lg:gap-12">
          {selectedProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.08}
              className={index === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}
            >
              <motion.article
                whileHover={{ y: -12 }}
                transition={{ duration: 0.35 }}
                className="work-card group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-30`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,239,205,0.12),transparent_26%),linear-gradient(180deg,rgba(8,8,10,0.08),rgba(6,6,8,0.72)_55%,rgba(5,5,7,0.96))]" />
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_80%_18%,rgba(234,198,118,0.16),transparent_22%),radial-gradient(circle_at_22%_82%,rgba(27,115,78,0.14),transparent_24%)]" />

                <div className="relative flex h-full flex-col justify-between gap-12">
                  <div className="space-y-10">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] uppercase tracking-[0.34em] text-[rgba(238,222,186,0.62)]">{project.category}</span>
                      <span className="text-sm text-white/42">{project.year}</span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-[clamp(2rem,3vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-white">
                        {project.title}
                      </h3>
                      <p className="max-w-xl text-base leading-7 text-white/72 md:text-lg md:leading-8">{project.impact}</p>
                    </div>

                    <div className="project-stage">
                      <div className="project-stage-pane project-stage-pane-large" />
                      <div className="project-stage-grid">
                        <div className="project-stage-pane" />
                        <div className="project-stage-pane project-stage-pane-short" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 border-t border-[rgba(255,255,255,0.08)] pt-6">
                    <div className="flex flex-wrap gap-2.5">
                      {project.stack.slice(0, 4).map((item) => (
                        <span key={item} className="work-chip">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link href={project.liveUrl} target="_blank" className="wizard-link">
                        Live <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      <Link href={project.githubUrl} target="_blank" className="wizard-link wizard-link-muted">
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

      <section id="about" className="section-shell section-gap">
        <Reveal>
          <div className="about-grid">
            <div className="space-y-5">
              <p className="section-eyebrow">About / Process</p>
              <h2 className="section-title max-w-3xl">
                Young in years.
                <span className="block text-[rgba(242,228,191,0.88)]">Obsessive in standards.</span>
              </h2>
            </div>

            <div className="editorial-card">
              <p className="editorial-line">I shape interfaces with restraint, atmosphere, and product clarity.</p>
              <div className="editorial-notes">
                <span>Intentional motion</span>
                <span>Luxury spacing</span>
                <span>Frontend discipline</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="section-shell section-gap">
        <Reveal>
          <div className="contact-stage">
            <div className="contact-fog contact-fog-gold" />
            <div className="contact-fog contact-fog-green" />
            <div className="contact-particles" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div className="space-y-6">
                <p className="section-eyebrow">Contact</p>
                <h2 className="section-title max-w-4xl">Let&apos;s build something with presence.</h2>
              </div>

              <div className="space-y-7 lg:justify-self-end lg:text-right">
                <p className="max-w-lg text-base leading-8 text-white/66">
                  Open to frontend roles, selective collaborations, and product work that deserves craft.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                  <Link href="mailto:yelletibhagya@gmail.com" className="wizard-button wizard-button-primary">
                    Send email <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="https://github.com/Bhagy-Yelleti" target="_blank" className="wizard-button wizard-button-muted">
                    View GitHub
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
