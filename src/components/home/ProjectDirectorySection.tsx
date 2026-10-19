"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, Plus } from "lucide-react";
import { projects } from "@/lib/home-content";
import { homeVariants } from "@/lib/brand";

type Theme = (typeof homeVariants)[number]["slug"];
const filters = ["All projects", "Energy & industrial", "Strategic infrastructure"] as const;

export function ProjectDirectorySection({ theme = "classic" }: { theme?: Theme }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All projects");
  const visible = projects.filter((project) => filter === "All projects" || (filter === "Strategic infrastructure" ? ["neom", "railway"].includes(project.id) : !["neom", "railway"].includes(project.id)));
  return (
    <section id="projects" className={`project-explorer projects-${theme} px-6 py-20 lg:px-16 lg:py-28`}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div><p className="story-eyebrow">Selected project experience</p><h2 className="story-title mt-5">Delivery that reaches<br />across the Kingdom.</h2></div>
          <div><p className="project-copy text-sm leading-7">From energy and industrial facilities in the Eastern Province to strategic infrastructure in the northwest and west.</p><div className="mt-5 flex flex-wrap gap-3 text-xs font-bold"><span className="rounded-full border border-current/15 px-3 py-2">Eastern Province</span><span className="rounded-full border border-current/15 px-3 py-2">Northwestern KSA</span><span className="rounded-full border border-current/15 px-3 py-2">Western Region</span></div></div>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className="project-filter rounded-full border border-current/15 px-4 py-3 text-xs font-bold transition-colors">{item}</button>)}<p aria-live="polite" className="project-copy ml-auto text-xs">{visible.length} projects</p></div>
        <div className="project-grid mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => <article key={project.id} className="project-item flex flex-col overflow-hidden rounded-[var(--theme-radius,16px)] border border-current/10">
            {project.showPhoto ? <div className="project-image relative aspect-[16/10] overflow-hidden"><Image src={project.image} alt={`Illustrative ${project.category.toLowerCase()} infrastructure`} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" /><span className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-[10px] font-bold text-[#134880]">{project.year}</span></div> : <div className="project-identity flex min-h-40 items-end justify-between bg-[#eaf2f7] p-7 text-[#134880]"><div><MapPin className="mb-5 h-6 w-6 text-masco-blue" /><p className="text-sm font-bold">{project.location}</p></div><span className="text-5xl font-bold opacity-15">0{index + 1}</span></div>}
            <div className="flex flex-1 flex-col p-6"><p className="story-eyebrow">{project.category}</p><h3 className="mt-3 text-2xl font-bold leading-tight">{project.title}</h3><p className="project-copy mt-4 text-sm leading-7">{project.description}</p>
              <details className="project-details mt-auto pt-6"><summary className="flex items-center justify-between gap-4 border-t border-current/15 pt-4 text-xs font-bold">Project overview<Plus className="h-4 w-4 shrink-0" /></summary><dl className="mt-5 grid gap-4 text-sm"><div><dt className="project-copy text-xs">Location</dt><dd className="mt-1">{project.location}</dd></div><div><dt className="project-copy text-xs">Capability</dt><dd className="mt-1">{project.partner}</dd></div><div><dt className="project-copy text-xs">Portfolio context</dt><dd className="mt-1">{project.year}</dd></div></dl><a href={`mailto:info@masco.com.sa?subject=${encodeURIComponent(`Project enquiry: ${project.title}`)}`} className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-masco-blue">Discuss a related project<ArrowUpRight className="h-4 w-4" /></a></details>
            </div>
          </article>)}
        </div>
        <p className="project-copy mt-6 text-xs leading-6">AI-generated project images are illustrative. Railway experience forms part of MASCO’s broader contracting heritage.</p>
      </div>
    </section>
  );
}
