"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrandCrest } from "@/components/brand-crest";
import { SocialLinks } from "@/components/social-links";
import { usePortfolioSound } from "@/components/sound-provider";
import { SoundToggle } from "@/components/sound-toggle";
import { navItems } from "@/data/site";

export function SiteChrome() {
  const { playHover } = usePortfolioSound();

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[rgba(9,10,18,0.7)] px-4 py-3 shadow-aura backdrop-blur-2xl">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <Link href="#hero" className="flex items-center gap-3">
            <BrandCrest size="nav" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.45em] text-white/45">Bhagya Yelleti</p>
              <p className="text-sm text-white">Frontend Engineer and Design-minded Developer</p>
            </div>
          </Link>

          <div className="flex flex-col gap-3 xl:items-end">
            <div className="flex flex-wrap items-center gap-3 xl:justify-end">
              <nav className="flex flex-wrap gap-2 xl:justify-end">
                {navItems.map((item) => (
                  <motion.div key={item.href} whileHover={{ y: -2 }} onHoverStart={playHover}>
                    <Link
                      href={item.href}
                      className="rounded-full border border-[rgba(201,156,72,0.15)] bg-black/20 px-3 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65 transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(114,185,142,0.28)] hover:text-[#e8d9b1]"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <SoundToggle />
            </div>

            <SocialLinks size="sm" className="xl:justify-end" />
          </div>
        </div>
      </div>
    </header>
  );
}
