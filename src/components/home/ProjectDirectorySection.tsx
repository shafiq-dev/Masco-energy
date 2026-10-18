import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/home-content";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";

export function ProjectDirectorySection() {
  const featured = projects.filter((p) => p.featured);
  const directory = projects.filter((p) => !p.featured);

  return (
    <SectionShell
      id="projects"
      className="border-t border-masco-navy/10 masco-surface-tint"
    >
      <SectionHeader
        eyebrow="Sectors"
        title="Delivering Across Critical Markets"
        description="MASCO Energy brings integrated project delivery to established energy markets, essential infrastructure, industrial growth sectors, and mission-critical digital facilities."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} featured />
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {directory.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionShell>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article className="masco-card group flex h-full flex-col overflow-hidden">
      <div
        className={`relative overflow-hidden ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, 25vw"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-masco-navy/80 via-masco-navy/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-[20px] bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-masco-navy">
          {project.category}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <h3
            className={`font-bold leading-snug ${featured ? "text-xl md:text-2xl" : "text-base"}`}
          >
            {project.title}
          </h3>
          {featured && (
            <p className="mt-2 line-clamp-2 text-sm text-white/80">
              {project.description}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        {!featured && (
          <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-masco-black/65">
            {project.description}
          </p>
        )}
        <div
          className={`flex flex-wrap items-center justify-between gap-2 text-xs text-masco-black/50 ${featured ? "" : "mt-4 border-t border-masco-navy/10 pt-4"}`}
        >
          <span>{project.location}</span>
          <span className="font-bold text-masco-blue">{project.year}</span>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-xs font-bold text-masco-navy/70">
            {project.partner}
          </span>
          <ArrowUpRight
            className="h-4 w-4 text-masco-blue opacity-0 transition-opacity group-hover:opacity-100"
            strokeWidth={1.75}
          />
        </div>
      </div>
    </article>
  );
}
