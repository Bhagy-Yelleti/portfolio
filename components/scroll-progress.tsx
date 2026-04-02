"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-50 h-px origin-left bg-[linear-gradient(90deg,#c99c48_0%,#8a1f33_45%,#0c5b3e_78%,#f0d28e_100%)] shadow-[0_0_18px_rgba(201,156,72,0.35)]"
      style={{ scaleX }}
    />
  );
}
