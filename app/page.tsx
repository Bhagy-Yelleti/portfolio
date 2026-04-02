"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { featuredProjects } from "@/data/site";

const selectedProjects = featuredProjects.slice(0, 3);

export default function HomePage() {
  return (
    <main className="pb-36 md:pb-48">
      <section id="hero" className="section-shell hero-shell">
        <Reveal className="hero-clean">
          <div className="hero-kicker">Builder of Things</div>
          <h1 className="hero-title max-w-5xl font-semibold text-white">
            BHAGYA
            <span className="block text-white/94">YELLETI</span>
          </h1>
          <p className="hero-line">Interfaces crafted with a little magic.</p>

          <div className="hero-actions">
            <Link href="#work" className="wizard-button wizard-button-primary" data-magic-hover="true">
              Selected Work <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#contact" className="wizard-button wizard-button-muted" data-magic-hover="true">
              Contact
            </Link>
          </div>

          <SocialLinks className="pt-4" />
        </Reveal>
      </section>

      <section id="work" className="section-shell section-gap">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="section-eyebrow">Selected Work</p>
              <h2 className="section-title max-w-3xl">Three standout builds revealed with restraint.</h2>
            </div>
          </div>
        </Reveal>

        <div className="work-grid">
          {selectedProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.08}
              className={index === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}
            >
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35 }}
                className="work-card group"
                data-magic-hover="true"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-18`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,8,0.22),rgba(7,7,8,0.84))]" />
                <div className="card-reveal-line" />

                <div className="relative flex h-full flex-col justify-between gap-16">
                  <div className="space-y-10">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] uppercase tracking-[0.34em] text-[rgba(238,222,186,0.6)]">{project.category}</span>
                      <span className="text-sm text-white/42">{project.year}</span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-[clamp(2.1rem,3vw,3.8rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-white">
                        {project.title}
                      </h3>
                      <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg md:leading-9">{project.impact}</p>
                    </div>

                    <div className="project-stage project-stage-minimal">
                      <div className="project-stage-pane project-stage-pane-large" />
                      <div className="project-stage-pane project-stage-pane-soft" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 border-t border-[rgba(255,255,255,0.08)] pt-7">
                    <div className="flex flex-wrap gap-2.5">
                      {project.stack.slice(0, 4).map((item) => (
                        <span key={item} className="work-chip">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link href={project.liveUrl} target="_blank" className="wizard-link" data-magic-hover="true">
                        Live <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      <Link href={project.githubUrl} target="_blank" className="wizard-link wizard-link-muted" data-magic-hover="true">
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

            <div className="editorial-card" data-magic-hover="true">
              <p className="editorial-line">I design products with calm spacing, sharp interaction, and just enough wonder.</p>
              <div className="editorial-notes">
                <span>Spell-like reveals</span>
                <span>Quiet luxury</span>
                <span>Product focus</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="section-shell section-gap">
        <Reveal>
          <div className="contact-stage" data-magic-hover="true">
            <div className="contact-fog contact-fog-gold" />
            <div className="contact-fog contact-fog-green" />
            <div className="contact-particles" />

            <div className="relative z-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div className="space-y-6">
                <p className="section-eyebrow">Contact</p>
                <h2 className="section-title max-w-4xl">Let&apos;s make something feel unforgettable.</h2>
              </div>

              <div className="space-y-7 lg:justify-self-end lg:text-right">
                <p className="max-w-lg text-base leading-8 text-white/66">
                  Available for premium frontend builds, product collaborations, and design-minded teams.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                  <Link href="mailto:yelletibhagya@gmail.com" className="wizard-button wizard-button-primary" data-magic-hover="true">
                    Send email <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="https://github.com/Bhagy-Yelleti" target="_blank" className="wizard-button wizard-button-muted" data-magic-hover="true">
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
