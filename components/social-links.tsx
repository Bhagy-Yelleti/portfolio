"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { usePortfolioSound } from "@/components/sound-provider";

const socialLinks = [
  {
    href: "https://github.com/Bhagy-Yelleti",
    label: "GitHub",
    icon: Github,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/bhagya-yelleti/",
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
  {
    href: "mailto:yelletibhagya@gmail.com",
    label: "Email",
    icon: Mail,
    external: false,
  },
];

export function SocialLinks({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md";
  className?: string;
}) {
  const isSmall = size === "sm";
  const { playHover } = usePortfolioSound();

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socialLinks.map(({ href, label, icon: Icon, external }) => (
        <motion.div
          key={label}
          whileHover={{ y: -4, scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onHoverStart={playHover}
        >
          <Link
            href={href}
            aria-label={label}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#94a3ff]/20 bg-[rgba(9,12,22,0.72)] text-white shadow-[0_18px_50px_rgba(5,8,20,0.34)] backdrop-blur-2xl transition duration-300 hover:border-[#b4bdff]/35 ${
              isSmall ? "px-3.5 py-3" : "px-4.5 py-3.5"
            }`}
          >
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,140,255,0.24),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] opacity-80 transition duration-300 group-hover:opacity-100" />
            <span className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(122,105,255,0.16),transparent_55%)]" />
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <Icon className={`${isSmall ? "h-4.5 w-4.5" : "h-5 w-5"} text-white/88`} />
            </span>
            {!isSmall && (
              <span className="relative pr-1 text-xs uppercase tracking-[0.28em] text-white/72">
                {label}
              </span>
            )}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
