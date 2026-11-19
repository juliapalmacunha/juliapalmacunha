import { useContent } from "../context/useContent.js";
import { Reveal, Section } from "../components/ui/Section.jsx";

export function About() {
  const { t } = useContent();
  const a = t.about;

  return (
    <Section id="sobre" title={a.title}>
      <Reveal className="grid gap-10 md:grid-cols-9">
        <div className="md:col-span-5">
          {/* para usar uma foto: coloque o arquivo em public/ e preencha about.photo nos dados, ex.: "/julia.jpg" */}
          {a.photo && (
            <img src={a.photo} alt="Julia Palma Cunha" className="mb-6 aspect-[4/5] w-40 rounded-lg border border-rule object-cover" />
          )}
          <div className="space-y-4">
            {a.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-body">{p}</p>
            ))}
          </div>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-sm font-medium text-soft">{a.skillsTitle}</h3>
          <dl className="mt-3 border-t border-rule">
            {a.skills.map((g) => (
              <div key={g.title} className="border-b border-rule py-3">
                <dt className="text-sm font-medium">{g.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-body">{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  );
}

export default About;