"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface IntroSplashProps {
  onComplete: () => void;
}

export function IntroSplash({ onComplete }: IntroSplashProps) {
  const [showStreaks, setShowStreaks] = useState(false);
  const [audioAttempted, setAudioAttempted] = useState(false);

  useEffect(() => {
    let audioInstance: HTMLAudioElement | null = null;

    const playSound = () => {
      if (audioAttempted) return;
      setAudioAttempted(true);

      try {
        audioInstance = new Audio("/sounds/intro.mp3");
        audioInstance.volume = 0.6;
        audioInstance.play().catch(() => {
          // Autoplay blocked, will retry on user interaction
        });
      } catch (error) {
        // Fallback if audio fails
      }
    };

    // Attempt to play sound immediately
    playSound();

    // Timeline for intro sequence
    const introTimeline = setTimeout(() => {
      setShowStreaks(true);
    }, 400);

    const completeTimeline = setTimeout(() => {
      onComplete();
    }, 2800);

    // Cleanup
    return () => {
      clearTimeout(introTimeline);
      clearTimeout(completeTimeline);
      if (audioInstance) {
        audioInstance.pause();
      }
    };
  }, [onComplete, audioAttempted]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50 overflow-hidden">
      {/* Main B Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        {/* B text with glow */}
        <motion.div
          animate={
            showStreaks
              ? { opacity: 0, scale: 5, filter: "blur(20px)" }
              : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          className="text-9xl font-black text-white drop-shadow-2xl"
          style={{
            textShadow: `
              0 0 10px rgba(220, 38, 38, 0.8),
              0 0 20px rgba(245, 158, 11, 0.6),
              0 0 30px rgba(139, 92, 246, 0.4)
            `,
          }}
        >
          B
        </motion.div>
      </motion.div>

      {/* Animated Streaks */}
      {showStreaks && (
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "12px", opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: "easeOut",
              }}
              className={`h-96 rounded-full ${
                [
                  "bg-red-600",
                  "bg-orange-500",
                  "bg-purple-600",
                  "bg-yellow-500",
                  "bg-red-500",
                ][i]
              }`}
              style={{
                boxShadow: `0 0 20px ${
                  ["rgb(220, 38, 38)", "rgb(245, 158, 11)", "rgb(139, 92, 246)", "rgb(234, 179, 8)", "rgb(239, 68, 68)"][i]
                }`,
              }}
            />
          ))}
        </div>
      )}

      {/* Skip intro on click (fallback for sound) */}
      <motion.button
        onClick={() => onComplete()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        whileHover={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 right-6 px-4 py-2 text-xs text-white/50 hover:text-white border border-white/20 rounded"
      >
        Skip
      </motion.button>
    </div>
  );
}
