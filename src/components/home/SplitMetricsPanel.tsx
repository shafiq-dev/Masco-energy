import { MetricCard } from "@/components/metrics/MetricCard";
import { AnimateIn } from "@/components/metrics/AnimateIn";
import { statsByTheme } from "@/lib/home-content";
import { deliveryModels } from "@/lib/metrics";

export function SplitMetricsPanel() {
  return (
    <section className="border-b border-masco-navy/10 bg-masco-navy/[0.04] px-6 py-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-12">
        <div className="grid grid-cols-2 gap-4 lg:col-span-7">
          {statsByTheme.split.map((stat, index) => (
            <MetricCard key={stat.id} metric={stat.metric} delay={index * 0.06} />
          ))}
        </div>
        <AnimateIn delay={0.1} className="masco-card p-6 lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-masco-blue">Flexible Delivery</p>
          <div className="mt-5 space-y-4">
            {deliveryModels.map((model) => (
              <div key={model.title} className="border-l-2 border-masco-blue/30 pl-4">
                <p className="font-bold text-masco-navy">{model.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-masco-black/55">{model.text}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
