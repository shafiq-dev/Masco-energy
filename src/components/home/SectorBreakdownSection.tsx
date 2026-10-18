import { AnimateIn } from "@/components/metrics/AnimateIn";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";
import { projects } from "@/lib/home-content";

export function SectorBreakdownSection() {
  return (
    <SectionShell className="border-t border-masco-navy/10 masco-surface-tint">
      <SectionHeader eyebrow="Market Coverage" title="Experience across critical sectors" description="A diversified sector platform supports conventional energy, essential utilities, industrial growth, and the Kingdom's expanding digital economy." />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((sector, index) => (
          <AnimateIn key={sector.id} delay={index * 0.06}>
            <article className="masco-card h-full p-6">
              <span className="text-xs font-bold text-masco-blue">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-bold text-masco-navy">{sector.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-masco-black/60">{sector.description}</p>
            </article>
          </AnimateIn>
        ))}
      </div>
    </SectionShell>
  );
}
