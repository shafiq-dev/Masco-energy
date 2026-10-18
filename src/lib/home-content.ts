import { getKpisByIds, themeStats, type KpiMetric } from "@/lib/metrics";

export const company = {
  name: "MASCO Energy",
  tagline: "Building for Better Life",
  website: "https://www.masco.com.sa/",
  email: "info@masco.com.sa",
  headquarters: "Alfardan Tower, Prince Turki Bin Abdulaziz Street",
  city: "Al Khobar, Eastern Province",
  country: "Kingdom of Saudi Arabia",
  legacy: "More than six decades of contracting experience",
  workforce: "3,000+ professionals",
  industry: "EPC and integrated energy contracting",
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#services" },
  { label: "Sectors", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
] as const;

export const visionMission = {
  vision: "To be a trusted Saudi partner in delivering resilient and sustainable energy infrastructure that supports national development and economic growth.",
  mission: "To execute high-quality energy and industrial projects through professionalism, innovation, and operational excellence.",
} as const;

export const aboutParagraphs = [
  "MASCO Energy is a Saudi EPC and integrated energy contracting company serving the power, oil and gas, petrochemical, utilities, mining, industrial, and digital infrastructure markets.",
  "The company builds on more than six decades of contracting experience in the Kingdom, supported by over 3,000 professionals and a culture of disciplined project execution.",
  "From engineering and procurement through construction, commissioning, operations, and maintenance, MASCO Energy brings one accountable delivery platform to complex assets and programmes.",
  "EPC, EPCM, and hybrid delivery models are tailored to each client's priorities, with safety, quality, reliability, innovation, and sustainability embedded throughout the project lifecycle.",
] as const;

export const services = [
  { name: "Engineering", description: "Multidisciplinary design, technical studies, constructability, value engineering, and project controls aligned with client requirements and Saudi standards.", metric: "Concept to detailed design" },
  { name: "Procurement", description: "Strategic sourcing, vendor qualification, expediting, inspection, logistics, and materials management through a controlled global supply chain.", metric: "Integrated supply chain" },
  { name: "Construction", description: "Safe, quality-led civil, mechanical, electrical, and instrumentation execution for complex energy and industrial facilities.", metric: "Field execution" },
  { name: "Commissioning", description: "System completion, testing, start-up support, performance verification, and structured handover for operational readiness.", metric: "Ready for operation" },
  { name: "Operations & Maintenance", description: "Lifecycle support that protects asset availability, reliability, performance, and long-term value after handover.", metric: "Lifecycle performance" },
  { name: "Project Management", description: "EPC, EPCM, and hybrid delivery with integrated planning, cost, risk, quality, HSE, and stakeholder management.", metric: "EPC / EPCM / Hybrid" },
] as const;

export const projects = [
  { id: "oil-gas", title: "Oil & Gas", category: "Energy", location: "Upstream and downstream", year: "EPC / EPCM", partner: "Integrated project delivery", description: "Engineering and construction capability for production, processing, storage, pipeline, and supporting facilities across the oil and gas value chain.", image: "/images/gallery-4.jpg", featured: true },
  { id: "power", title: "Power", category: "Energy Infrastructure", location: "Generation and networks", year: "Full lifecycle", partner: "Reliable critical assets", description: "Delivery support for power generation, substations, transmission, distribution, and the infrastructure required for resilient energy systems.", image: "/images/gallery-1.jpg", featured: true },
  { id: "petrochemical", title: "Petrochemical", category: "Process Industries", location: "Complex process facilities", year: "EPC / EPCM", partner: "Quality-led execution", description: "Integrated delivery for process plants and associated utilities, with close control of interfaces, quality, safety, and commissioning.", image: "/images/service-energy.jpg", featured: false },
  { id: "utilities", title: "Utilities", category: "Essential Infrastructure", location: "Water and utility systems", year: "Lifecycle services", partner: "Resilient operations", description: "Infrastructure for essential utility systems, combining engineering discipline with dependable construction and operational support.", image: "/images/gallery-3.jpg", featured: false },
  { id: "mining-industrial", title: "Mining & Industrial", category: "Industrial Development", location: "Production facilities", year: "Integrated delivery", partner: "National growth sectors", description: "Project delivery for mining, manufacturing, and industrial facilities that support the Kingdom's economic diversification agenda.", image: "/images/service-industrial.jpg", featured: false },
  { id: "digital", title: "Digital Infrastructure", category: "Future Infrastructure", location: "Mission-critical facilities", year: "EPC solutions", partner: "Scalable and resilient", description: "Engineering, project management, and EPC solutions for data centres and other mission-critical infrastructure supporting digital growth.", image: "/images/gallery-2.jpg", featured: false },
] as const;

export const pillars = [
  { title: "Safety", text: "Every task is planned and executed with care for people, assets, communities, and the environment." },
  { title: "Quality & Reliability", text: "Strong governance, controlled processes, and disciplined assurance protect delivery quality and dependable outcomes." },
  { title: "Integrity", text: "Professional conduct, accountability, and transparent communication guide relationships with clients, partners, and teams." },
  { title: "Innovation & Sustainability", text: "Practical innovation and responsible delivery improve performance while supporting the Kingdom's long-term development priorities." },
] as const;

export type StatItem = { id: string; value: string; label: string; metric: KpiMetric };

function toStatItems(ids: readonly string[]): StatItem[] {
  return getKpisByIds(ids).map((metric) => ({
    id: metric.id,
    value: `${metric.prefix ?? ""}${metric.decimals !== undefined ? metric.value.toFixed(metric.decimals) : metric.value.toLocaleString()}${metric.suffix ?? ""}`,
    label: metric.label,
    metric,
  }));
}

export const stats = toStatItems(themeStats.classic);
export const statsByTheme = {
  classic: toStatItems(themeStats.classic),
  minimal: toStatItems(themeStats.minimal),
  services: toStatItems(themeStats.services),
  split: toStatItems(themeStats.split),
  editorial: toStatItems(themeStats.editorial),
} as const;

export const faqs = [
  { question: "What does MASCO Energy do?", answer: "MASCO Energy provides integrated engineering, procurement, construction, commissioning, operations, and maintenance services for energy and industrial infrastructure." },
  { question: "Which sectors does MASCO Energy serve?", answer: "The company serves power, oil and gas, petrochemical, utilities, mining, industrial facilities, and digital infrastructure across the Kingdom of Saudi Arabia." },
  { question: "Which delivery models are available?", answer: "MASCO Energy delivers through EPC, EPCM, and hybrid models selected around project scope, risk allocation, schedule, and client governance requirements." },
  { question: "What guides project delivery?", answer: "Safety, quality, reliability, integrity, innovation, sustainability, and operational excellence guide decisions throughout the project lifecycle." },
  { question: "How can I contact MASCO Energy?", answer: "Use the contact details in the footer or visit masco.com.sa for corporate, partnership, project, and career enquiries." },
] as const;

export const highlights = [
  { quote: "One integrated team connects engineering decisions, procurement control, field execution, commissioning, and lifecycle support.", author: "Integrated Delivery", company: "End-to-end project accountability" },
  { quote: "Safety and quality are built into planning, governance, assurance, and execution at every stage of the project.", author: "Responsible Execution", company: "People, assets, and performance" },
  { quote: "Saudi market knowledge and global supply-chain reach are combined to deliver resilient infrastructure and long-term value.", author: "Local Strength", company: "Built for the Kingdom's priorities" },
] as const;

export const processSteps = [
  { step: "01", title: "Engineering", text: "Define the technical solution, execution basis, interfaces, constructability, and controls required for safe and efficient delivery." },
  { step: "02", title: "Procurement", text: "Qualify suppliers, manage technical and commercial packages, inspect equipment, expedite manufacture, and coordinate logistics." },
  { step: "03", title: "Construction", text: "Execute field works through disciplined planning, HSE leadership, quality assurance, schedule control, and transparent reporting." },
  { step: "04", title: "Commissioning & Handover", text: "Complete systems, verify performance, prepare operations, transfer knowledge, and support a controlled transition into service." },
] as const;

export const testimonials = highlights;
