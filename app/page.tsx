"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, Play, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { featuredProjects } from "@/data/site";

const railGradients = [
  "linear-gradient(135deg, rgba(201, 54, 54, 0.92), rgba(245, 125, 53, 0.65) 48%, rgba(68, 17, 20, 0.2) 100%)",
  "linear-gradient(135deg, rgba(86, 34, 156, 0.92), rgba(213, 71, 127, 0.58) 42%, rgba(16, 19, 39, 0.28) 100%)",
  "linear-gradient(135deg, rgba(230, 129, 53, 0.88), rgba(141, 67, 219, 0.6) 45%, rgba(17, 19, 31, 0.32) 100%)",
];

const rails = [
  {
    id: "featured-work",
    eyebrow: "Featured Work",
    title: "Premiere-ready builds presented like titles worth watching.",
    copy: "Large cinematic cards, fast context, and just enough metadata to make each project feel like a featured release.",
    items: featuredProjects,
  },
  {
    id: "case-studies",
    eyebrow: "Case Studies",
    title: "The thinking behind the polish.",
    copy: "Research, interface systems, iteration, and engineering detail sit underneath each build.",
    items: [...featuredProjects].reverse(),
  },
  {
    id: "experiments",
    eyebrow: "Experiments",
    title: "Smaller explorations with premium ambition.",
    copy: "Motion studies, product concepts, and future-facing UI explorations that sharpen range.",
    items: [featuredProjects[1], featuredProjects[2], featuredProjects[0]],
  },
];

const processFlow = [
  {
    title: "Inspiration",
    description: "Mood, references, and product positioning get distilled into a visual tone worth building toward.",
  },
  {
    title: "Wireframes",
    description: "Loose structure comes first so hierarchy and flow earn their place before polish shows up.",
  },
  {
    title: "UI Systems",
    description: "Typography, spacing, surfaces, and interaction rules become a reusable cinematic language.",
  },
  {
    title: "Iteration",
    description: "The strongest ideas survive critique, trimming, testing, and better timing.",
  },
  {
    title: "Final Build",
    description: "Design and code lock together until the interface feels premium in motion, not just in screenshots.",
  },
];

const stack = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"];

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 420], [1, 0.45]);

  return (
    <main className="pb-28 md:pb-40">
      <section id="hero" className="cinema-hero">
        <motion.div className="cinema-hero-media" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="cinema-hero-poster" />
          <div className="cinema-hero-orb cinema-hero-orb-red" />
          <div className="cinema-hero-orb cinema-hero-orb-orange" />
          <div className="cinema-hero-orb cinema-hero-orb-purple" />
        </motion.div>

        <div className="section-shell relative z-10 flex min-h-[100svh] items-end pb-14 pt-24 md:pb-20 md:pt-32">
          <Reveal className="cinema-hero-copy">
            <div className="hero-kicker">Featured Creator</div>
            <p className="cinema-overline">Now Streaming: Premium Interfaces with Storytelling</p>
            <h1 className="hero-title max-w-6xl font-semibold text-white">
              BHAGYA YELLETI
              <span className="block hero-subtitle">Builder of Things</span>
            </h1>
            <p className="hero-line">Designer • Developer • Product Thinker</p>

            <div className="hero-actions">
              <Link href="#featured-work" className="wizard-button wizard-button-primary" data-magic-hover="true">
                <Play className="h-4 w-4 fill-current" />
                View Work
              </Link>
              <Link href="/projects" className="wizard-button wizard-button-muted" data-magic-hover="true">
                Explore Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="metadata-row">
              <span>UI Design</span>
              <span>Full Stack</span>
              <span>Case Studies</span>
              <span>2026</span>
            </div>

            <SocialLinks className="pt-4" />
          </Reveal>
        </div>
      </section>

      {rails.map((rail, railIndex) => (
        <section key={rail.id} id={rail.id} className="section-shell section-gap">
          <Reveal>
            <div className="section-heading section-heading-rail">
              <div>
                <p className="section-eyebrow">{rail.eyebrow}</p>
                <h2 className="section-title max-w-4xl">{rail.title}</h2>
              </div>
              <p className="section-copy max-w-xl">{rail.copy}</p>
            </div>
          </Reveal>

          <div className="content-rail">
            {rail.items.map((project, index) => {
              const gradient = railGradients[(index + railIndex) % railGradients.length];

              return (
                <Reveal key={`${rail.id}-${project.slug}-${index}`} delay={index * 0.06}>
                  <motion.article
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="cinema-card group"
                    data-magic-hover="true"
                  >
                    <div className="cinema-card-image" style={{ background: gradient }} />
                    <div className="cinema-card-noise" />
                    <div className="cinema-card-vignette" />

                    <div className="cinema-card-body">
                      <div className="cinema-card-meta">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="cinema-card-title">{project.title}</h3>
                        <p className="cinema-card-tagline">{project.hero}</p>
                      </div>

                      <div className="cinema-card-footer">
                        <div className="cinema-card-summary">
                          <p>{project.summary}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.slice(0, 3).map((item) => (
                              <span key={item} className="work-chip">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Link href={`/projects/${project.slug}`} className="wizard-link" data-magic-hover="true">
                            Case Study <ArrowUpRight className="h-4 w-4" />
                          </Link>
                          <Link href={project.liveUrl} target="_blank" className="wizard-link wizard-link-muted" data-magic-hover="true">
                            Live
                          </Link>
                          <Link href={project.githubUrl} target="_blank" className="wizard-link wizard-link-muted" data-magic-hover="true">
                            <Github className="h-4 w-4" />
                            Code
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </section>
      ))}

      <section id="behind-the-interface" className="section-shell section-gap">
        <Reveal>
          <div className="section-heading section-heading-rail">
            <div>
              <p className="section-eyebrow">Behind the Interface</p>
              <h2 className="section-title max-w-4xl">Design thinking treated like the making-of, not the footnote.</h2>
            </div>
            <p className="section-copy max-w-xl">
              From mood and structure to system and refinement, the process is built to support immersion as much as usability.
            </p>
          </div>
        </Reveal>

        <div className="process-grid">
          {processFlow.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.07}>
              <div className="process-card" data-magic-hover="true">
                <p className="process-step">0{index + 1}</p>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-copy">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="built-with-precision" className="section-shell section-gap">
        <Reveal>
          <div className="precision-stage" data-magic-hover="true">
            <div className="precision-copy">
              <p className="section-eyebrow">Built with Precision</p>
              <h2 className="section-title max-w-4xl">Product thinking meets code that holds up under pressure.</h2>
              <p className="section-copy max-w-2xl">
                Frontend craft, systems thinking, and cinematic motion come together through a stack chosen for polish, speed, and flexibility.
              </p>
            </div>

            <div className="stack-cloud">
              {stack.map((item) => (
                <span key={item} className="stack-chip">
                  <Sparkles className="h-3.5 w-3.5" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="section-shell section-gap">
        <Reveal>
          <div className="contact-stage" data-magic-hover="true">
            <div className="contact-fog contact-fog-gold" />
            <div className="contact-fog contact-fog-purple" />
            <div className="contact-particles" />

            <div className="relative z-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div className="space-y-6">
                <p className="section-eyebrow">Final Frame</p>
                <h2 className="section-title max-w-4xl">Let&apos;s build the kind of product people remember after the screen goes dark.</h2>
              </div>

              <div className="space-y-7 lg:justify-self-end lg:text-right">
                <p className="max-w-lg text-base leading-8 text-white/66">
                  Available for premium frontend builds, portfolio-grade product work, and teams who care about atmosphere as much as execution.
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
