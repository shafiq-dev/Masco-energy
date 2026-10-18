import { AnimateIn } from "@/components/metrics/AnimateIn";
import { CountUp } from "@/components/metrics/CountUp";
import { getKpisByIds } from "@/lib/metrics";

export function MinimalMetricRail() {
  const metrics = getKpisByIds(["legacy", "workforce", "capabilities"]);

  return (
    <section className="border-b border-masco-navy/10 bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        {metrics.map((metric, index) => (
          <AnimateIn key={metric.id} delay={index * 0.1}>
            <div className="text-center md:text-left">
              <CountUp
                metric={metric}
                className="text-4xl font-bold text-masco-navy md:text-5xl"
              />
              <p className="mt-3 text-sm text-masco-black/60">{metric.label}</p>
              <div className="mt-4 h-px w-full bg-masco-navy/10">
                <div
                  className="h-px masco-gradient transition-all duration-1000"
                  style={{ width: `${60 + index * 15}%` }}
                />
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
