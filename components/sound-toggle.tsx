"use client";

import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
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
      className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[rgba(201,156,72,0.22)] bg-[rgba(9,12,22,0.78)] text-white shadow-[0_18px_44px_rgba(5,8,20,0.35)] backdrop-blur-2xl transition duration-300 hover:border-[rgba(121,194,149,0.32)]"
      aria-label={enabled ? "Turn sound off" : "Turn sound on"}
      aria-pressed={enabled}
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,156,72,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(12,91,62,0.18),transparent_30%)] opacity-90 transition duration-300 group-hover:opacity-100" />
      {enabled ? <Volume2 className="relative h-5 w-5 text-[#e6cf9c]" /> : <VolumeX className="relative h-5 w-5 text-white/82" />}
    </motion.button>
  );
}
