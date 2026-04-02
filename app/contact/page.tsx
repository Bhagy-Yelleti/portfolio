import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

export default function ContactPage() {
  return (
    <main className="section-shell pb-20 pt-10 md:pt-16">
      <Reveal>
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12">
          <SectionIntro
            eyebrow="Contact"
            title="If the bar is high, we&apos;ll probably get along."
            copy="I&apos;m interested in internships, startup opportunities, and ambitious collaborations where product quality actually matters."
          />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Reveal className="glass-panel rounded-[2rem] p-8">
          <p className="text-[11px] uppercase tracking-[0.45em] text-white/42">Reach out</p>
          <div className="mt-8 space-y-4 text-lg text-white/75">
            <p>Email: yelletibhagya@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/bhagya-yelleti</p>
            <p>GitHub: github.com/Bhagy-Yelleti</p>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/62">
            Whether you need a frontend engineer, a UI-minded product builder, or someone who cares deeply about how software feels, I&apos;d love to hear what you&apos;re building.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="glass-panel rounded-[2rem] p-8">
          <p className="text-[11px] uppercase tracking-[0.45em] text-white/42">Fast path</p>
          <h2 className="mt-5 text-3xl text-white">
            The easiest way to start is a simple message with your product, your problem, and what "better" should feel like.
          </h2>
          <Link
            href="mailto:yelletibhagya@gmail.com"
            className="mt-10 inline-flex rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10"
          >
            Send an email
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
