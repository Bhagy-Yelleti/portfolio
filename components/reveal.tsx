"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
import { usePortfolioSound } from "@/components/sound-provider";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const hasPlayedRef = useRef(false);
  const { enabled, playSectionChime } = usePortfolioSound();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      onViewportEnter={() => {
        if (enabled && !hasPlayedRef.current) {
          hasPlayedRef.current = true;
          playSectionChime();
        }
      }}
    >
      {children}
    </motion.div>
  );
}
