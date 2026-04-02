"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { usePortfolioSound } from "@/components/sound-provider";

export function SoundToggle() {
  const { enabled, toggle, playHover } = usePortfolioSound();

  return (
    <motion.button
      type="button"
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onHoverStart={playHover}
      onClick={toggle}
      className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[rgba(212,173,92,0.18)] bg-[rgba(13,11,10,0.7)] text-white shadow-[0_18px_44px_rgba(5,8,20,0.28)] backdrop-blur-2xl transition duration-300 hover:border-[rgba(212,173,92,0.28)]"
      aria-label={enabled ? "Play magical sound again" : "Play magical sound"}
      aria-pressed={enabled}
      data-magic-hover="true"
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,173,92,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(18,112,76,0.16),transparent_30%)] opacity-90 transition duration-300 group-hover:opacity-100" />
      <Sparkles className={`relative h-4.5 w-4.5 ${enabled ? "text-[#efd598]" : "text-white/82"}`} />
    </motion.button>
  );
}
