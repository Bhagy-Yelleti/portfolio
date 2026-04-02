"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface IntroSplashProps {
  onComplete: () => void;
}

export function IntroSplash({ onComplete }: IntroSplashProps) {
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    let audioPlayed = false;
    let soundFallback: HTMLAudioElement | null = null;

    // Play intro sound
    const playSound = () => {
      if (audioPlayed) return;
      audioPlayed = true;

      try {
        soundFallback = new Audio("/sounds/intro.mp3");
        soundFallback.volume = 0.5;
        soundFallback.play().catch(() => {});
      } catch (error) {}
    };

    // Attempt immediate play
    playSound();

    // Allow skip after 1.5s
    const skipTimer = setTimeout(() => setCanSkip(true), 1500);

    // Complete sequence at 2.8s
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    // Handle click anywhere to play sound (fallback)
    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("button")) return;
      playSound();
    };

    window.addEventListener("click", handleClick);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(completeTimer);
      window.removeEventListener("click", handleClick);
      if (soundFallback) soundFallback.pause();
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50 overflow-hidden">
      {/* Cinematic B Logo */}
      <div className="relative">
        {/* Main B - Fade in phase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <div
            className="text-9xl md:text-10xl font-black text-red-600 tracking-tighter"
            style={{
              textShadow: `
                0 0 60px rgba(220, 38, 38, 0.9),
                0 0 120px rgba(220, 38, 38, 0.6),
                0 0 180px rgba(220, 38, 38, 0.3)
              `,
            }}
          >
            B
          </div>
        </motion.div>

        {/* Expanding blur phase */}
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 5, filter: "blur(30px)" }}
          transition={{ duration: 1, delay: 0.9, ease: "easeIn" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className="text-9xl md:text-10xl font-black text-red-600 tracking-tighter"
            style={{
              textShadow: `0 0 40px rgba(220, 38, 38, 0.4)`,
            }}
          >
            B
          </div>
        </motion.div>

        {/* Vertical streaks - Netflix style */}
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          {[
            { color: "from-red-600 to-red-700", delay: 1 },
            { color: "from-orange-500 to-orange-600", delay: 1.05 },
            { color: "from-slate-700 to-slate-800", delay: 1.1 },
            { color: "from-purple-600 to-purple-700", delay: 1.15 },
            { color: "from-red-500 to-red-600", delay: 1.2 },
          ].map((streak, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: streak.delay, ease: "easeInOut" }}
              className={`w-3 md:w-5 h-80 md:h-96 rounded-full bg-gradient-to-b ${streak.color}`}
              style={{
                boxShadow: `0 0 40px currentColor inset`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Skip button - appears after 1.5s */}
      <motion.button
        onClick={onComplete}
        initial={{ opacity: 0 }}
        animate={canSkip ? { opacity: 0.5 } : { opacity: 0 }}
        whileHover={canSkip ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        disabled={!canSkip}
        className="absolute top-8 right-8 px-3 py-1.5 text-xs font-medium text-white/60 hover:text-white border border-white/30 hover:border-white/60 rounded transition-all disabled:cursor-not-allowed"
      >
        Skip Intro
      </motion.button>
    </div>
  );
}
