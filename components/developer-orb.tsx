"use client";

import { motion } from "framer-motion";

export function DeveloperOrb() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(124,140,255,0.18),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-aura backdrop-blur-xl">
      <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-30" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.95),rgba(124,140,255,0.35)_32%,rgba(10,12,24,0.98)_74%)] blur-[1px]"
        animate={{ scale: [1, 1.06, 0.98, 1], y: [0, -12, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7c8cff]/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_36%,rgba(7,9,18,0.82)_80%)]"
        animate={{ opacity: [0.75, 0.95, 0.82] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute bottom-6 left-6 max-w-xs rounded-3xl border border-white/10 bg-black/20 px-4 py-4 backdrop-blur-lg">
        <p className="text-[11px] uppercase tracking-[0.4em] text-white/45">Identity system</p>
        <p className="mt-2 text-sm leading-6 text-white/72">
          The orb represents constant motion: curiosity condensing into craft, then pressure-tested into execution.
        </p>
      </div>
    </div>
  );
}
