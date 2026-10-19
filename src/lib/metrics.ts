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
  { id: "portfolio", value: 4.5, prefix: "+", suffix: "B", decimals: 1, label: "Project value across the portfolio" },
  { id: "workforce", value: 3000, prefix: "+", label: "Workforce supporting delivery and operations" },
  { id: "lti", value: 10, prefix: "+", suffix: "M", label: "LTI-free man-hours across the project portfolio" },
  { id: "markets", value: 6, label: "Core markets served" },
  { id: "pipeline-km", value: 1500, prefix: "+", suffix: " km", label: "Pipelines constructed — combined partner credentials" },
  { id: "pipeline-years", value: 35, prefix: "+", suffix: " years", label: "CIS Gaz pipeline experience" },
  { id: "pipeline-projects", value: 280, prefix: "+", label: "Pipeline projects completed" },
  { id: "waste", value: 99.09, suffix: "%", decimals: 2, label: "Waste diversion reported at MSSD / SPARK" },
  { id: "water", value: 100, suffix: "%", label: "Treated wastewater recycled on site" },
];

export const deliveryModels = [
  { title: "Integrated EPC", text: "Engineering, procurement, construction, commissioning and handover coordinated through one delivery platform." },
  { title: "Delivery Assurance", text: "Quality, HSE, logistics and project controls support disciplined execution in complex project environments." },
  { title: "Lifecycle Support", text: "Operations and maintenance services protect performance, reliability and asset readiness after handover." },
] as const;

export const sectorNames = [
  "Oil & Gas",
  "Petrochemicals",
  "Power & Energy",
  "Mining & Industrial",
  "Utilities",
  "Strategic Infrastructure",
] as const;

export const editorialBandMetrics: Record<string, KpiMetric> = {
  "Our Vision": kpiMetrics.find((metric) => metric.id === "markets")!,
  "Who We Are": kpiMetrics.find((metric) => metric.id === "workforce")!,
  "Our Mission": kpiMetrics.find((metric) => metric.id === "lti")!,
  "Saudi Vision 2030": kpiMetrics.find((metric) => metric.id === "portfolio")!,
};

export const themeStats = {
  classic: ["portfolio", "workforce", "lti", "markets"],
  minimal: ["workforce", "lti", "markets"],
  services: ["portfolio", "workforce", "lti", "markets"],
  split: ["portfolio", "workforce", "lti", "markets"],
  editorial: ["portfolio", "workforce", "lti", "markets"],
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
