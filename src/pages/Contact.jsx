import { useContent } from "../context/useContent.js";
import { Reveal, Section, TextLink } from "../components/ui/Section.jsx";

export function Contact() {
  const { t } = useContent();
  const c = t.contact;

  return (
    <>
      <Section id="contato" title={c.title}>
        <Reveal>
          <p className="max-w-xl text-lg leading-relaxed text-body">{c.text}</p>
          <a
            href={`mailto:${c.email}`}
            className="mt-6 inline-block text-2xl font-semibold tracking-tight underline decoration-rule-strong underline-offset-8 hover:decoration-accent md:text-4xl"
          >
            {c.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <TextLink href={t.links.linkedin}>LinkedIn</TextLink>
            <TextLink href={t.links.github}>GitHub</TextLink>
            <TextLink href={t.links.resume}>{t.resumeLabel}</TextLink>
          </div>
        </Reveal>
      </Section>

      <footer className="mx-auto w-full max-w-6xl px-5 pb-10 md:px-8">
        <p className="border-t border-rule pt-6 text-xs text-soft">{t.footer}</p>
      </footer>
    </>
  );
}

export default Contact; 