import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { experience } from "@/data/site";

export default function ExperiencePage() {
  return (
    <main className="section-shell pb-20 pt-10 md:pt-16">
      <Reveal>
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12">
          <SectionIntro
            eyebrow="Experience"
            title="A fast-moving growth curve shaped by real product work."
            copy="My experience is less about long tenure and more about intensity: learning fast, shipping often, and raising the standard of every interface I touch."
          />
        </div>
      </Reveal>

      <div className="mt-12 space-y-6">
        {experience.map((item, index) => (
          <Reveal key={item.period} delay={index * 0.08}>
            <div className="glass-panel grid gap-6 rounded-[2rem] p-8 md:grid-cols-[0.32fr_0.68fr]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.45em] text-white/42">{item.period}</p>
              </div>
              <div>
                <h2 className="text-3xl text-white">{item.role}</h2>
                <p className="mt-2 text-base text-white/68">{item.company}</p>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/64">{item.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
