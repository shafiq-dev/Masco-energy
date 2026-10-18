import { AnimateIn } from "@/components/metrics/AnimateIn";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";

const milestones = [
  { title: "Contracting Legacy", text: "More than six decades of experience delivering complex infrastructure in Saudi Arabia." },
  { title: "Energy Focus", text: "A specialised platform serving power, oil and gas, petrochemical, utility, mining, industrial, and digital markets." },
  { title: "Integrated Delivery", text: "Engineering, procurement, construction, commissioning, operations, and maintenance under one accountable team." },
  { title: "Future Direction", text: "Resilient, sustainable infrastructure aligned with national development and long-term client value." },
] as const;

export function GrowthTimelineSection() {
  return (
    <SectionShell className="border-t border-masco-navy/10 masco-surface-tint">
      <SectionHeader eyebrow="Company Evolution" title="Built on experience, focused on energy" description="MASCO Energy carries a long Saudi contracting legacy into a focused platform for today's energy and industrial priorities." />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {milestones.map((milestone, index) => (
          <AnimateIn key={milestone.title} delay={index * 0.08}>
            <article className="masco-card h-full p-6">
              <span className="text-3xl font-bold text-masco-navy/15">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-lg font-bold text-masco-navy">{milestone.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-masco-black/60">{milestone.text}</p>
            </article>
          </AnimateIn>
        ))}
      </div>
    </SectionShell>
  );
}
