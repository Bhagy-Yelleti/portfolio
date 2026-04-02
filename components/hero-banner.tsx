"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";

export function HeroBanner() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-red-950 via-black to-purple-950 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-screen flex items-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Big Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-7xl md:text-8xl font-black text-white mb-4 tracking-tight"
          >
            BHAGYA YELLETI
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white/80 mb-6"
          >
            Builder of Things
          </motion.h2>

          {/* Description Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/60 mb-8 font-light tracking-wide"
          >
            Design • Code • Systems • Products
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 mb-12"
          >
            {/* Play Button */}
            <Link
              href="#featured"
              className="group px-8 py-4 rounded-md bg-red-600 hover:bg-red-500 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 border border-red-500/30 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/30"
            >
              <Play className="h-5 w-5 fill-current" />
              <span>View Projects</span>
            </Link>

            {/* More Info Button */}
            <Link
              href="/about"
              className="group px-8 py-4 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm"
            >
              <Info className="h-5 w-5" />
              <span>About Me</span>
            </Link>
          </motion.div>

          {/* Metadata Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {["Frontend", "Full Stack", "Product Design", "2026"].map((tag, idx) => (
              <div key={idx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 backdrop-blur-sm">
                {tag}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
