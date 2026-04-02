import Link from "next/link";
import { navItems } from "@/data/site";

export function SiteChrome() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[rgba(9,10,18,0.7)] px-4 py-3 shadow-aura backdrop-blur-2xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="#hero" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),rgba(108,92,255,0.28)_45%,rgba(8,9,15,0.9)_78%)] text-xs font-semibold uppercase tracking-[0.35em] text-white/90">
              BY
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.45em] text-white/45">Frontend engineer</p>
              <p className="text-sm text-white">BhagyaYelleti</p>
            </div>
          </Link>
          <nav className="flex flex-wrap gap-2 lg:justify-end">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="rounded-full border border-[#94a3ff]/30 bg-[linear-gradient(135deg,rgba(125,141,255,0.22),rgba(255,255,255,0.08))] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#b2bdff]/40"
            >
              Let&apos;s build
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
