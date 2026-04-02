"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "6%", top: "12%", size: 3, color: "#d9af58", delay: 0.2 },
  { left: "14%", top: "72%", size: 4, color: "#e17d43", delay: 0.8 },
  { left: "26%", top: "30%", size: 3, color: "#2e9a6d", delay: 1.1 },
  { left: "38%", top: "82%", size: 2, color: "#f0d29a", delay: 1.8 },
  { left: "52%", top: "14%", size: 4, color: "#d9af58", delay: 0.4 },
  { left: "63%", top: "58%", size: 5, color: "#15885c", delay: 1.5 },
  { left: "77%", top: "24%", size: 3, color: "#efb36c", delay: 2.2 },
  { left: "86%", top: "76%", size: 2, color: "#f3e0b5", delay: 2.8 },
  { left: "92%", top: "18%", size: 4, color: "#71caa1", delay: 3.1 },
  { left: "48%", top: "48%", size: 3, color: "#c69a4b", delay: 1.7 },
  { left: "68%", top: "86%", size: 3, color: "#2a9d6d", delay: 2.6 },
  { left: "34%", top: "58%", size: 2, color: "#f7dea7", delay: 3.4 },
];

export function MagicDust() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            boxShadow: `0 0 24px ${particle.color}`,
          }}
          animate={{
            y: [0, -44, 0],
            x: [0, 12, -10, 0],
            opacity: [0.08, 0.58, 0.12],
            scale: [0.7, 1.24, 0.84],
          }}
          transition={{
            duration: 12 + particle.delay,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
