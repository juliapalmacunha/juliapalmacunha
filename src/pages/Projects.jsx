import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlay, FiX } from "react-icons/fi";
import { useContent } from "../context/useContent.js";
import { Figure, Reveal, Section, Stack, TextLink } from "../components/ui/Section.jsx";

function Endpoints({ lines }) {
  return (
    <pre className="h-[236px] overflow-x-auto bg-card p-5 font-mono md:h-[252px] text-[13px] leading-7 md:p-7">
      {lines.map((line) => {
        const [method, ...rest] = line.split(/\s+/);
        return (
          <div key={line}>
            <span className="inline-block w-16 font-medium text-accent">{method}</span>
            <span className="text-body">{rest.join(" ")}</span>
          </div>
        );
      })}
    </pre>
  );
}

function ProjectMedia({ project }) {
  if (project.media.type === "code") {
    return (
      <Figure caption="finance-app-api · endpoints">
        <Endpoints lines={project.media.lines} />
      </Figure>
    );
  }
  return (
    <Figure caption="keychain-erp.vercel.app">
      <video
        src={project.media.src}
        poster={project.media.poster}
        autoPlay
        muted
        loop
        playsInline
        className="block h-[236px] w-full object-cover md:h-[252px]"
      />
    </Figure>
  );
}

function useEscape(onClose, lockScroll) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    if (lockScroll) document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      if (lockScroll) document.body.style.overflow = "";
    };
  }, [onClose, lockScroll]);
}

function Drawer({ project, labels, onClose, onPlay }) {
  useEscape(onClose, true);
  return (
    <motion.div className="fixed inset-0 z-[60] flex justify-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <button type="button" aria-label={labels.closeLabel} className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.aside
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
        className="relative h-full w-full max-w-xl overflow-y-auto bg-paper px-6 py-8 md:px-10"
      >
        <div className="flex items-start justify-between gap-4 border-b border-rule pb-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
            <p className="mt-1 text-sm text-soft">{project.badge}</p>
          </div>
          <button type="button" onClick={onClose} aria-label={labels.closeLabel} className="p-1 text-soft hover:text-ink">
            <FiX size={22} />
          </button>
        </div>

        <div className="divide-y divide-rule">
          {project.details.map((d) => (
            <div key={d.title} className="py-6">
              <h4 className="font-medium">{d.title}</h4>
              <p className="mt-2 leading-relaxed text-body">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-rule pt-6">
          <Stack items={project.stack ?? []} />
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            {project.video && (
              <button type="button" onClick={onPlay} className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                <FiPlay /> {labels.videoLabel}
              </button>
            )}
            {(project.links ?? []).map((l) => <TextLink key={l.url} href={l.url}>{l.label}</TextLink>)}
          </div>
        </div>
      </motion.aside>
    </motion.div>
  );
}

function VideoModal({ src, poster, label, onClose }) {
  useEscape(onClose, false);
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-2 flex justify-end">
          <button type="button" onClick={onClose} aria-label={label} className="p-2 text-white/70 hover:text-white">
            <FiX size={22} />
          </button>
        </div>
        <video src={src} poster={poster} controls autoPlay playsInline className="w-full rounded-lg" />
      </div>
    </motion.div>
  );
}

function ProjectItem({ project, labels, onOpen, onPlay }) {
  return (
    <Reveal>
      <ProjectMedia project={project} />

      <div className="mt-8 grid gap-6 md:grid-cols-9">
        <div className="md:col-span-5">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
            <span className="text-sm text-soft">{project.badge}</span>
          </div>
          <p className="mt-3 leading-relaxed text-body">{project.summary}</p>
          <div className="mt-4">
            <Stack items={project.stack ?? []} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <button type="button" onClick={onOpen} className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-accent-ink">
              {labels.detailsLabel}
            </button>
            {project.video && (
              <button type="button" onClick={onPlay} className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                <FiPlay /> {labels.videoLabel}
              </button>
            )}
            {(project.links ?? [])
              .filter((l) => !l.url.includes("github.com"))
              .map((l) => <TextLink key={l.url} href={l.url}>{l.label}</TextLink>)}
          </div>
        </div>

        <dl className="border-t border-rule md:col-span-3 md:col-start-7">
          {project.highlights.map((m) => (
            <div key={m.label} className="flex items-baseline justify-between gap-4 border-b border-rule py-3">
              <dt className="text-sm text-soft">{m.label}</dt>
              <dd className="text-lg font-semibold">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const { t } = useContent();
  const p = t.projects;
  const [openId, setOpenId] = useState(null);
  const [video, setVideo] = useState(null);
  const openProject = p.items.find((it) => it.id === openId);

  return (
    <Section id="projetos" title={p.title}>
      <div className="space-y-20 md:space-y-28">
        {p.items.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            labels={p}
            onOpen={() => setOpenId(project.id)}
            onPlay={() => setVideo(project)}
          />
        ))}
      </div>

      <Reveal className="mt-20 border-t border-rule pt-8 md:mt-28">
        <h3 className="text-sm font-medium text-soft">{p.early.title}</h3>
        {p.early.items.map((it) => (
          <div key={it.name} className="mt-5 flex items-center gap-5">
            <img src={it.image} alt={it.name} loading="lazy" className="h-16 w-24 shrink-0 rounded border border-rule object-cover" />
            <div>
              <p className="font-medium">{it.name}</p>
              <p className="text-sm text-body">{it.text}</p>
              <div className="mt-1 flex gap-4">
                <TextLink href={it.siteUrl}>{p.early.siteLabel}</TextLink>
                <TextLink href={it.githubUrl}>{p.early.codeLabel}</TextLink>
              </div>
            </div>
          </div>
        ))}
      </Reveal>

      <AnimatePresence>
        {openProject && (
          <Drawer project={openProject} labels={p} onClose={() => setOpenId(null)} onPlay={() => setVideo(openProject)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {video && <VideoModal src={video.video} poster={video.media.poster} label={p.closeLabel} onClose={() => setVideo(null)} />}
      </AnimatePresence>
    </Section>
  );
}

export default Projects;