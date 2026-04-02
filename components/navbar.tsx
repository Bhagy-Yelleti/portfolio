"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full bg-black/70 backdrop-blur-md border-b border-white/10"
    >
      <div className="px-6 md:px-12 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Left: Logo */}
        <Link href="/" className="text-xl font-black tracking-tighter text-white hover:text-red-400 transition-colors">
          BHAGYA
        </Link>

        {/* Center: Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#featured" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Work
          </Link>
          <Link href="/about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Design
          </Link>
          <Link href="/projects" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Build
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* Right: Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-md bg-red-600/80 hover:bg-red-500 text-white font-semibold text-sm transition-all duration-300 border border-red-500/30 hover:border-red-400/50"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
