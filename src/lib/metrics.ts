export type KpiMetric = {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  trend?: string;
};

export const kpiMetrics: KpiMetric[] = [
  { id: "legacy", value: 60, suffix: "+", label: "Years of contracting experience" },
  { id: "workforce", value: 3000, suffix: "+", label: "Professionals" },
  { id: "sectors", value: 7, label: "Core sectors served" },
  { id: "capabilities", value: 6, label: "Integrated lifecycle capabilities" },
  { id: "models", value: 3, label: "Delivery models: EPC, EPCM, hybrid" },
  { id: "kingdom", value: 1, label: "Saudi delivery platform" },
];

export const deliveryModels = [
  { title: "EPC", text: "Single-point responsibility across engineering, procurement, construction, and commissioning." },
  { title: "EPCM", text: "Integrated management of engineering, procurement, construction, controls, and interfaces." },
  { title: "Hybrid", text: "A tailored model that aligns scope, risk, schedule, and governance with client priorities." },
] as const;

export const sectorNames = [
  "Power",
  "Oil & Gas",
  "Petrochemical",
  "Utilities",
  "Mining",
  "Industrial Facilities",
  "Digital Infrastructure",
] as const;

export const editorialBandMetrics: Record<string, KpiMetric> = {
  "Our Vision": kpiMetrics.find((metric) => metric.id === "legacy")!,
  "Who We Are": kpiMetrics.find((metric) => metric.id === "workforce")!,
  "Our Mission": kpiMetrics.find((metric) => metric.id === "capabilities")!,
  "Saudi Vision 2030": kpiMetrics.find((metric) => metric.id === "sectors")!,
};

export const themeStats = {
  classic: ["legacy", "workforce", "sectors", "models"],
  minimal: ["legacy", "workforce", "capabilities"],
  services: ["capabilities", "sectors", "models", "workforce"],
  split: ["legacy", "workforce", "sectors", "models"],
  editorial: ["legacy", "workforce", "capabilities", "sectors"],
} as const;

export function getKpisByIds(ids: readonly string[]): KpiMetric[] {
  return ids
    .map((id) => kpiMetrics.find((metric) => metric.id === id))
    .filter((metric): metric is KpiMetric => Boolean(metric));
}

export function formatMetricValue(metric: KpiMetric, value?: number): string {
  const currentValue = value ?? metric.value;
  const formatted = metric.decimals !== undefined
    ? currentValue.toFixed(metric.decimals)
    : Math.round(currentValue).toLocaleString();
  return `${metric.prefix ?? ""}${formatted}${metric.suffix ?? ""}`;
}
