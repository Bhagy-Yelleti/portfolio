"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "18%", size: 4, color: "#c99c48", delay: 0.2 },
  { left: "18%", top: "62%", size: 6, color: "#7a1329", delay: 0.8 },
  { left: "29%", top: "28%", size: 5, color: "#0c5b3e", delay: 1.1 },
  { left: "41%", top: "76%", size: 4, color: "#d7b26b", delay: 1.8 },
  { left: "55%", top: "16%", size: 5, color: "#c99c48", delay: 0.4 },
  { left: "66%", top: "54%", size: 7, color: "#0f6b48", delay: 1.5 },
  { left: "78%", top: "26%", size: 4, color: "#8a1f33", delay: 2.2 },
  { left: "88%", top: "68%", size: 5, color: "#d7b26b", delay: 2.8 },
];

export function MagicDust() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full blur-[1px]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            boxShadow: `0 0 20px ${particle.color}`,
          }}
          animate={{
            y: [0, -24, 0],
            x: [0, 8, -6, 0],
            opacity: [0.1, 0.65, 0.14],
            scale: [0.8, 1.2, 0.9],
          }}
          transition={{
            duration: 8 + particle.delay,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
