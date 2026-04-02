"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function NetflixNavbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-40 w-full bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-white hover:text-red-500 transition-colors">
          B
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#featured" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Featured
          </Link>
          <Link href="#design" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Design
          </Link>
          <Link href="#builds" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Builds
          </Link>
          <Link href="#experiments" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Experiments
          </Link>
        </div>

        {/* Right: Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-md bg-red-600/80 hover:bg-red-500 text-white font-semibold text-sm transition-all duration-300 border border-red-500/30 hover:border-red-400/50"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
