import Link from "next/link";
import { navItems } from "@/data/site";

export function SiteChrome() {
  return (
    <>
      <header className="sticky top-0 z-40 px-4 pt-4 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 px-4 py-3 shadow-aura backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-white/15 to-white/5 text-xs font-semibold uppercase tracking-[0.35em] text-white/90">
                AB
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.45em] text-white/45">Digital identity</p>
                <p className="text-sm text-white">Ambition in motion</p>
              </div>
            </Link>
            <p className="hidden text-[10px] uppercase tracking-[0.45em] text-white/35 md:block">
              Frontend engineer portfolio
            </p>
          </div>
          <nav className="mt-4 flex flex-wrap gap-3 border-t border-white/10 pt-4 md:mt-3 md:justify-end md:border-t-0 md:pt-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.28em] text-white/65 transition hover:border-white/20 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <footer className="px-4 pb-8 pt-16 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-8 shadow-aura backdrop-blur-xl md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.45em] text-white/45">Built for momentum</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Young in years. Serious in standards.</h2>
            <p className="mt-3 text-sm leading-7 text-white/62">
              This portfolio is designed as a living proof-of-taste system: cinematic storytelling, frontend precision,
              and a product mindset that keeps getting sharper.
            </p>
          </div>
          <div className="flex gap-4 text-sm text-white/65">
            <Link href="/projects" className="transition hover:text-white">
              Explore work
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Start a conversation
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
