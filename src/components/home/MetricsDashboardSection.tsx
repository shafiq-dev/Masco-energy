import { AnimateIn } from "@/components/metrics/AnimateIn";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";
import { deliveryModels, sectorNames } from "@/lib/metrics";

type MetricsDashboardSectionProps = { compact?: boolean };

export function MetricsDashboardSection({ compact = false }: MetricsDashboardSectionProps) {
  if (compact) {
    return (
      <SectionShell className="border-t border-masco-navy/10 masco-surface-tint">
        <SectionHeader eyebrow="Integrated EPC" title="One coordinated delivery framework" description="Engineering, procurement, construction, commissioning, handover and lifecycle support are connected through disciplined execution and delivery assurance." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {deliveryModels.map((model, index) => (
            <AnimateIn key={model.title} delay={index * 0.08}>
              <article className="masco-card h-full p-6">
                <p className="text-2xl font-bold text-masco-blue">{model.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-masco-black/65">{model.text}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </SectionShell>
    );
  }

  return (
    <SectionShell className="border-t border-masco-navy/10 bg-white">
      <SectionHeader eyebrow="Integrated Platform" title="One team across the asset lifecycle" description="The profile presents a connected platform spanning six lifecycle capabilities and six core markets." />
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <AnimateIn>
          <article className="masco-card h-full p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-masco-blue">Delivery Framework</p>
            <div className="mt-6 space-y-6">
              {deliveryModels.map((model) => (
                <div key={model.title} className="border-l-2 border-masco-blue/30 pl-5">
                  <h3 className="font-bold text-masco-navy">{model.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-masco-black/60">{model.text}</p>
                </div>
              ))}
            </div>
          </article>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <article className="masco-card h-full p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-masco-blue">Core Markets</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {sectorNames.map((sector, index) => (
                <span key={sector} className="rounded-[20px] border border-masco-navy/10 bg-masco-navy/[0.03] px-4 py-3 text-sm font-bold text-masco-navy">
                  <span className="mr-2 text-masco-blue">{String(index + 1).padStart(2, "0")}</span>{sector}
                </span>
              ))}
            </div>
          </article>
        </AnimateIn>
      </div>
    </SectionShell>
  );
}
