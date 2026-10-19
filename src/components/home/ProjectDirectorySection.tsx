"use client";

import Image from "next/image";
import { ArrowUpRight, MapPin, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/home-content";
import { homeVariants } from "@/lib/brand";
import { useRotatingTabs } from "@/components/home/useRotatingTabs";
import { RotationControl } from "@/components/home/RotationControl";

type Theme = (typeof homeVariants)[number]["slug"];
const filters = ["All projects", "Energy & industrial", "Strategic infrastructure"] as const;

export function ProjectDirectorySection({ theme = "classic" }: { theme?: Theme }) {
  const { active, select, rootRef, controlsRef, paused, reduced, running, interactionHandlers, togglePaused } = useRotatingTabs(filters.length, 10000);
  const filter = filters[active];
  const visible = projects.filter((project) => filter === "All projects" || (filter === "Strategic infrastructure" ? ["neom", "railway"].includes(project.id) : !["neom", "railway"].includes(project.id)));
  return (
    <section ref={rootRef} {...interactionHandlers} id="projects" data-rotating={running} className={`project-explorer projects-${theme} px-6 py-20 lg:px-16 lg:py-28`}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div><p className="story-eyebrow">Selected project experience</p><h2 className="story-title mt-5">Delivery that reaches<br />across the Kingdom.</h2></div>
          <div><p className="project-copy text-sm leading-7">From energy and industrial facilities in the Eastern Province to strategic infrastructure in the northwest and west.</p><div className="mt-5 flex flex-wrap gap-3 text-xs font-bold"><span className="rounded-full border border-current/15 px-3 py-2">Eastern Province</span><span className="rounded-full border border-current/15 px-3 py-2">Northwestern KSA</span><span className="rounded-full border border-current/15 px-3 py-2">Western Region</span></div></div>
        </div>
        <div ref={controlsRef} className="project-toolbar mt-10 flex items-center gap-3"><div className="project-filters flex min-w-0 flex-1 gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter projects">{filters.map((item, index) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => select(index)} className="project-filter timed-tab relative shrink-0 overflow-hidden rounded-full border border-current/15 px-4 py-3 text-xs font-bold transition-colors">{item}{filter === item && <span className="timed-tab-progress" aria-hidden="true" />}</button>)}</div><RotationControl paused={paused} reduced={reduced} onToggle={togglePaused} label="project" /><p className="project-count project-copy shrink-0 text-xs">{visible.length} projects</p></div>
        <motion.div layout transition={{ duration: reduced ? 0 : .4 }} className="project-grid mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false} mode="popLayout">
          {visible.map((project, index) => <motion.article layout initial={{ opacity: 0, y: reduced ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: reduced ? 1 : .98 }} transition={{ duration: reduced ? 0 : .3 }} key={project.id} className="project-item flex flex-col overflow-hidden rounded-[var(--theme-radius,16px)] border border-current/10">
            {project.showPhoto ? <div className="project-image relative aspect-[16/10] overflow-hidden"><Image loading="eager" src={project.image} alt={`${project.category} — infrastructure concept`} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" /><span className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-[10px] font-bold text-[#134880]">{project.year}</span></div> : <div className="project-identity flex min-h-40 items-end justify-between bg-[#eaf2f7] p-7 text-[#134880]"><div><MapPin className="mb-5 h-6 w-6 text-masco-blue" /><p className="text-sm font-bold">{project.location}</p></div><span className="text-5xl font-bold opacity-15">0{index + 1}</span></div>}
            <div className="flex flex-1 flex-col p-6"><p className="story-eyebrow">{project.category}</p><h3 className="mt-3 text-2xl font-bold leading-tight">{project.title}</h3><p className="project-copy mt-4 text-sm leading-7">{project.description}</p>
              <details className="project-details mt-auto pt-6"><summary className="flex items-center justify-between gap-4 border-t border-current/15 pt-4 text-xs font-bold">Project overview<Plus className="h-4 w-4 shrink-0" /></summary><dl className="mt-5 grid gap-4 text-sm"><div><dt className="project-copy text-xs">Location</dt><dd className="mt-1">{project.location}</dd></div><div><dt className="project-copy text-xs">Capability</dt><dd className="mt-1">{project.partner}</dd></div><div><dt className="project-copy text-xs">Portfolio context</dt><dd className="mt-1">{project.year}</dd></div></dl><a href={`mailto:info@masco.com.sa?subject=${encodeURIComponent(`Project enquiry: ${project.title}`)}`} className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-masco-blue">Discuss a related project<ArrowUpRight className="h-4 w-4" /></a></details>
            </div>
          </motion.article>)}
          </AnimatePresence>
        </motion.div>
        <p className="project-copy mt-6 text-xs leading-6">Railway experience forms part of MASCO’s broader contracting heritage.</p>
      </div>
    </section>
  );
}
