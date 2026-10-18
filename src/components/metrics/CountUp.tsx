"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/components/metrics/useReducedMotion";
import { formatMetricValue, type KpiMetric } from "@/lib/metrics";

type CountUpProps = {
  metric: KpiMetric;
  className?: string;
  duration?: number;
};

export function CountUp({ metric, className = "", duration = 1600 }: CountUpProps) {
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? metric.value : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (reduced) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now();
        const from = 0;
        const to = metric.value;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(from + (to - from) * eased);
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [metric.value, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {formatMetricValue(metric, reduced ? metric.value : display)}
    </span>
  );
}
