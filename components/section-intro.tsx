export function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] uppercase tracking-[0.45em] text-white/42">{eyebrow}</p>
      <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 md:text-base">{copy}</p>
    </div>
  );
}
