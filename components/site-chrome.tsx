"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SocialLinks } from "@/components/social-links";
import { usePortfolioSound } from "@/components/sound-provider";
import { SoundToggle } from "@/components/sound-toggle";
import { navItems } from "@/data/site";

export function SiteChrome() {
  const { playHover } = usePortfolioSound();

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,12,0.58)] px-4 py-3 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <Link href="#hero" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(216,168,75,0.22)] bg-[radial-gradient(circle_at_30%_30%,rgba(255,245,219,0.2),rgba(209,156,69,0.14)_45%,rgba(12,42,28,0.16)_100%)] text-xs uppercase tracking-[0.3em] text-[rgba(244,225,187,0.78)]">
              BY
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.45em] text-white/45">Bhagya Yelleti</p>
              <p className="text-sm text-white/82">Builder of Things</p>
            </div>
          </Link>

          <div className="flex flex-col gap-3 xl:items-end">
            <div className="flex flex-wrap items-center gap-3 xl:justify-end">
              <nav className="flex flex-wrap gap-2 xl:justify-end">
                {navItems.map((item) => (
                  <motion.div key={item.href} whileHover={{ y: -2 }} onHoverStart={playHover}>
                    <Link
                      href={item.href}
                      className="rounded-full border border-[rgba(216,168,75,0.14)] bg-black/20 px-3 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65 transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(216,168,75,0.24)] hover:text-[#f0dfb5]"
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
