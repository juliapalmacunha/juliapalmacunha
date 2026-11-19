import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useContent } from "../context/useContent.js";
import { Reveal } from "../components/ui/Section.jsx";

export function Home() {
  const { t } = useContent();
  const h = t.hero;

  return (
    <section id="inicio" className="mx-auto w-full max-w-6xl px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-40">
      <Reveal className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-8">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{h.name}</h1>
          <p className="mt-3 text-lg text-accent-ink md:text-xl">{h.role}</p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-body">{h.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href="#projetos" className="rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-accent-ink">
              {h.ctaProjects}
            </a>
            <a href="#contato" className="text-sm font-medium text-ink underline decoration-rule-strong hover:decoration-ink">
              {h.ctaContact}
            </a>
            <span className="flex items-center gap-4 text-soft">
              <a href={t.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-ink">
                <FaGithub size={19} />
              </a>
              <a href={t.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-ink">
                <FaLinkedin size={19} />
              </a>
            </span>
          </div>
        </div>

        <dl className="self-end border-t border-rule md:col-span-4">
          {h.facts.map((f) => (
            <div key={f.label} className="flex justify-between gap-4 border-b border-rule py-3 text-sm">
              <dt className="text-soft">{f.label}</dt>
              <dd className="text-right font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

export default Home;