import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/* seção em duas colunas: título à esquerda, conteúdo à direita */
export function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <div className="grid gap-8 border-t border-rule py-14 md:grid-cols-12 md:gap-10 md:py-20">
        <h2 className="text-sm font-medium text-soft md:col-span-3 md:sticky md:top-24 md:self-start">{title}</h2>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}

export function Stack({ items }) {
  return <p className="font-mono text-[13px] text-soft">{items.join(" / ")}</p>;
}

/* imagem ou vídeo com legenda, como uma figura */
export function Figure({ caption, children, className = "" }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-lg border border-rule-strong bg-card">{children}</div>
      {caption && <figcaption className="mt-2 text-xs text-soft">{caption}</figcaption>}
    </figure>
  );
}

export function TextLink({ href, children, external = true }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-sm font-medium text-accent underline decoration-accent/30 hover:decoration-accent"
    >
      {children}
    </a>
  );
}