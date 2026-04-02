"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface IntroSplashProps {
  onComplete: () => void;
}

export function IntroSplash({ onComplete }: IntroSplashProps) {
  useEffect(() => {
    // Play intro sound
    try {
      const audio = new Audio("/sounds/intro.mp3");
      audio.volume = 0.7;
      audio.play().catch(() => {
        // Autoplay blocked, silently fail
      });
    } catch (error) {
      // Fallback
    }

    // Timeline for intro sequence
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50 overflow-hidden">
      {/* Main animated B */}
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Phase 1: B glows in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className="text-8xl md:text-9xl font-black text-red-600"
            style={{
              textShadow: `
                0 0 40px rgba(220, 38, 38, 1),
                0 0 80px rgba(220, 38, 38, 0.8),
                0 0 120px rgba(220, 38, 38, 0.6)
              `,
              letterSpacing: "-0.05em",
            }}
          >
            B
          </div>
        </motion.div>

        {/* Phase 2: B expands and fades, streaks appear */}
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 4 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeIn" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className="text-8xl md:text-9xl font-black text-red-600"
            style={{
              textShadow: `
                0 0 40px rgba(220, 38, 38, 0.5),
                0 0 80px rgba(220, 38, 38, 0.3)
              `,
              letterSpacing: "-0.05em",
            }}
          />
        </motion.div>

        {/* Animated streaks */}
        <div className="absolute inset-0 flex items-center justify-center gap-3">
          {[
            { color: "bg-red-600", delay: 0.9 },
            { color: "bg-orange-500", delay: 0.95 },
            { color: "bg-yellow-400", delay: 1 },
            { color: "bg-purple-600", delay: 1.05 },
            { color: "bg-red-500", delay: 1.1 },
          ].map((streak, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: streak.delay }}
              className={`w-4 md:w-6 h-64 md:h-80 rounded-full ${streak.color}`}
              style={{
                boxShadow: `0 0 30px currentColor`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Skip button */}
      <motion.button
        onClick={onComplete}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        whileHover={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute top-6 right-6 px-4 py-2 text-xs text-white/70 hover:text-white border border-white/30 rounded transition-colors"
      >
        Skip
      </motion.button>
    </div>
  );
}
