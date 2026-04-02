"use client";

import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";
import Link from "next/link";
import { NetflixNavbar } from "./netflix-navbar";
import { ProjectRail } from "./netflix-project-rail";
import { Footer } from "./footer";
import { featuredProjects } from "@/data/site";

export function NetflixHome() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <NetflixNavbar />

      {/* Hero Banner */}
      <section className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-black to-black overflow-hidden pt-16 md:pt-20">
        {/* Background gradient mesh */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-r from-red-600/20 via-transparent to-transparent rounded-full filter blur-3xl"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 -right-1/4 w-full h-full bg-gradient-to-l from-purple-600/20 via-transparent to-transparent rounded-full filter blur-3xl"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl space-y-8"
          >
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight"
            >
              BHAGYA
              <br />
              YELLETI
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-4xl font-bold text-red-500"
            >
              Builder of Things
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed"
            >
              Design • Development • Products • Systems
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col md:flex-row gap-4 pt-4"
            >
              {/* Play Button */}
              <Link
                href="#featured"
                className="group w-full md:w-fit px-8 py-4 rounded-lg bg-white hover:bg-white/90 text-black font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-white/30"
              >
                <Play className="h-6 w-6 fill-current" />
                <span>View Projects</span>
              </Link>

              {/* More Info Button */}
              <Link
                href="/about"
                className="group w-full md:w-fit px-8 py-4 rounded-lg bg-white/20 hover:bg-white/30 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 border border-white/40 backdrop-blur-sm"
              >
                <Info className="h-6 w-6" />
                <span>More Info</span>
              </Link>
            </motion.div>

            {/* Info tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-3 pt-6"
            >
              {["Frontend Specialist", "Full Stack Dev", "UI/UX Focused", "2026"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-white/70 border border-white/20 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-white/60 text-xs font-medium">Scroll</span>
              <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-center justify-center">
                <motion.div
                  animate={{ y: [6, 10, 6] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="w-1 h-2 bg-white/60 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Rails */}
      <section id="featured">
        <ProjectRail title="Featured Projects" projects={featuredProjects} />
      </section>

      <section id="design">
        <ProjectRail title="Design Work" projects={[...featuredProjects].reverse()} />
      </section>

      <section id="builds">
        <ProjectRail title="Developer Builds" projects={featuredProjects} />
      </section>

      <section id="experiments">
        <ProjectRail title="Experiments & Explorations" projects={featuredProjects.slice(0, 4)} />
      </section>

      {/* Footer */}
      <FooterSection />
    </main>
  );
}

function FooterSection() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative border-t border-white/10 bg-black/80 backdrop-blur-sm py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-black text-red-600">B</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Bhagya Yelleti — Builder of Things. Crafting premium digital experiences with code, motion, and systems thinking.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Projects</h4>
            <ul className="space-y-2">
              {["Featured", "Case Studies", "Experiments"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Bhagy-Yelleti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-red-500 text-sm transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bhagya-yelleti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-red-500 text-sm transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:yelletibhagya@gmail.com"
                  className="text-white/60 hover:text-red-500 text-sm transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/40 text-xs text-center">
            © 2026 Bhagya Yelleti. All rights reserved. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
