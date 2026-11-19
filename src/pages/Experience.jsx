import { useContent } from "../context/useContent.js";
import { Reveal, Section, Stack } from "../components/ui/Section.jsx";

export function Experience() {
  const { t } = useContent();
  const e = t.experience;

  return (
    <Section id="experiencia" title={e.title}>
      <div className="space-y-12">
        {e.items.map((it) => (
          <Reveal key={it.org}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-lg font-semibold">{it.role}</h3>
              <p className="font-mono text-[13px] text-soft">{it.period}</p>
            </div>
            <p className="text-accent-ink">{it.org}</p>
            <p className="mt-3 max-w-3xl leading-relaxed text-body">{it.text}</p>
            <div className="mt-3">
              <Stack items={it.stack} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Experience;