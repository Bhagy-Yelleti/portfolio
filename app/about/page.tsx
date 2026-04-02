import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

const pillars = [
  {
    title: "Curiosity turned into standards",
    body: "I started with fascination for how products look. Then I realized the real edge lives in how they move, communicate, scale, and make people feel in seconds.",
  },
  {
    title: "Design obsession with engineering backbone",
    body: "I care about grids, rhythm, contrast, and atmosphere, but I care just as much about implementation quality, maintainability, and performance discipline.",
  },
  {
    title: "Still growing, already deliberate",
    body: "This stage of my career is not about pretending to know everything. It is about proving that taste, rigor, and momentum can arrive early and compound fast.",
  },
];

export default function AboutPage() {
  return (
    <main className="section-shell pb-20 pt-10 md:pt-16">
      <Reveal>
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12">
          <SectionIntro
            eyebrow="About"
            title="I&apos;m building a career around interfaces that feel exact."
            copy="The mission is simple: combine product taste, frontend precision, and relentless growth into work that feels premium before anyone asks what stack it uses."
          />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="glass-panel rounded-[2rem] p-8">
          <p className="text-[11px] uppercase tracking-[0.42em] text-white/42">Manifesto</p>
          <p className="mt-5 text-2xl leading-tight text-white">
            I believe early-career work does not need to look early-career. With enough attention, the interface can communicate intent,
            discipline, and standards before a resume ever gets opened.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="grid gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="glass-panel rounded-[2rem] p-8">
              <h2 className="text-2xl text-white">{pillar.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/64">{pillar.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </main>
  );
}
