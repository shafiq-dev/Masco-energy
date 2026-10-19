import { MetricCard } from "@/components/metrics/MetricCard";
import { AnimateIn } from "@/components/metrics/AnimateIn";
import { SectionKicker } from "@/components/home/SectionKicker";
import { statsByTheme } from "@/lib/home-content";
import type { StatItem } from "@/lib/home-content";

type StatsSectionProps = {
  variant?: "bar" | "grid" | "inline";
  theme?: keyof typeof statsByTheme;
  items?: StatItem[];
};

export function StatsSection({
  variant = "grid",
  theme = "classic",
  items,
}: StatsSectionProps) {
  const statItems = items ?? statsByTheme[theme];

  if (variant === "bar") {
    return (
      <section className="masco-gradient masco-kpi-shimmer px-6 py-14 text-white lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/15">
          {statItems.map((stat, index) => (
            <MetricCard
              key={stat.id}
              metric={stat.metric}
              variant="gradient"
              delay={index * 0.08}
            />
          ))}
        </div>
      </section>
    );
  }

  if (variant === "inline") {
    return (
      <section className="border-y border-masco-navy/10 bg-white px-6 py-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
          {statItems.map((stat, index) => (
            <MetricCard
              key={stat.id}
              metric={stat.metric}
              variant="compact"
              delay={index * 0.08}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="masco-surface-tint px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <AnimateIn>
          <SectionKicker>By the Numbers</SectionKicker>
        </AnimateIn>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {statItems.map((stat, index) => (
            <MetricCard
              key={stat.id}
              metric={stat.metric}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
