"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePortfolioSound } from "@/components/sound-provider";
import { SoundToggle } from "@/components/sound-toggle";
import { navItems } from "@/data/site";

export function SiteChrome() {
  const { playHover } = usePortfolioSound();

  return (
    <header className="pointer-events-none sticky top-0 z-50 px-4 pt-4 md:px-8">
      <div className="pointer-events-auto mx-auto max-w-[92rem] rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,17,21,0.82),rgba(9,9,12,0.72))] px-4 py-3 shadow-[0_24px_90px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-2xl">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <Link href="/#hero" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,205,156,0.3),rgba(160,34,34,0.24)_38%,rgba(92,38,141,0.22)_100%)] text-xs uppercase tracking-[0.3em] text-[rgba(255,239,216,0.88)] shadow-[0_0_30px_rgba(201,74,47,0.3)]">
              BY
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.45em] text-white/45">Bhagya Yelleti</p>
              <p className="text-sm text-white/72">Builder of Things</p>
            </div>
          </Link>

          <div className="flex flex-wrap items-center gap-3 xl:justify-end">
            <nav className="flex flex-wrap gap-2 xl:justify-end">
              {navItems.map((item) => (
                <motion.div key={item.href} whileHover={{ y: -2 }} onHoverStart={playHover}>
                  <Link
                    href={item.href}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[11px] uppercase tracking-[0.28em] text-white/62 transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(195,72,52,0.45)] hover:bg-white/[0.06] hover:text-white"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <SoundToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
