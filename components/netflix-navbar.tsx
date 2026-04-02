"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function NetflixNavbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-40 w-full bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-3xl font-black tracking-tight text-red-600 hover:text-red-500 transition-colors"
        >
          B
        </Link>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {[
            {
              icon: Github,
              href: "https://github.com/Bhagy-Yelleti",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/bhagya-yelleti/",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:yelletibhagya@gmail.com",
              label: "Email",
            },
          ].map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={idx}
                href={social.icon === Mail ? social.href : social.href}
                target={social.icon === Mail ? undefined : "_blank"}
                rel={social.icon === Mail ? undefined : "noopener noreferrer"}
                whileHover={{ scale: 1.15, color: "#ef4444" }}
                className="text-white/60 hover:text-red-500 transition-colors"
                aria-label={social.label}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
