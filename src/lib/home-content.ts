import { getKpisByIds, themeStats, type KpiMetric } from "@/lib/metrics";

export const company = {
  name: "MASCO Energy",
  tagline: "Engineering Progress. Delivering with Purpose.",
  profileYear: "2026",
  website: "https://www.masco.com.sa/",
  email: "info@masco.com.sa",
  social: "@MASCOEnergy_sa",
  headquarters: "Al Khobar",
  city: "Eastern Province",
  country: "Kingdom of Saudi Arabia",
  industry: "Saudi EPC and industrial infrastructure",
  legacy: "Decades of Saudi contracting and infrastructure experience",
  workforce: "+3,000 workforce",
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Our Businesses", href: "#businesses" },
  { label: "Contact", href: "#contact" },
] as const;

export const visionMission = {
  vision: "To be a trusted Saudi partner for integrated energy and industrial solutions, enabling the Kingdom's continued growth and transformation.",
  mission: "To deliver safe, reliable and integrated EPC solutions through technical expertise, disciplined execution, strong partnerships, and continuous development of our people and capabilities.",
} as const;

export const aboutParagraphs = [
  "MASCO Energy is a Saudi EPC and industrial infrastructure company delivering integrated solutions across energy, oil and gas, petrochemicals, utilities, mining and strategic infrastructure.",
  "Evolving from MASCO's established contracting business, formerly known as MASCO General Contracting, the company brings decades of infrastructure and construction experience into a focused energy platform.",
  "Capabilities span engineering, procurement, construction, commissioning, handover, operations and maintenance, supported by local market knowledge, multidisciplinary expertise and large-scale execution capability.",
  "Backed by the wider strength of MASCO Group, MASCO Energy delivers complex projects across the Kingdom while expanding specialized pipeline and digital infrastructure solutions.",
] as const;

export const ceoMessage = {
  name: "Eng. Omar M. Algethaan",
  title: "Chief Executive Officer",
  image: "/images/profile/ceo-omar-algethaan.jpg",
  paragraphs: [
    "MASCO Energy is entering a new chapter built on a strong foundation of contracting experience, technical capability and proven project execution across Saudi Arabia.",
    "As the Kingdom advances its energy and industrial ambitions, MASCO Energy is strengthening integrated EPC capabilities, expanding into specialized areas of the energy value chain, and building the partnerships and expertise required for increasingly complex projects.",
    "Our focus remains clear: deliver safely, execute with discipline, and create lasting value for our clients while investing in national talent, specialized capabilities, technology and strategic partnerships.",
  ],
} as const;

export const heritage = [
  { title: "Foundation", text: "Roads, transportation and construction." },
  { title: "Infrastructure Expansion", text: "Highways, water and major civil works." },
  { title: "National Mega-Projects", text: "Railways and strategic infrastructure." },
  { title: "Industrial & Energy Expansion", text: "Major industrial developments and energy projects." },
  { title: "MASCO Energy", text: "Integrated EPC and specialized energy solutions." },
] as const;

export const services = [
  { name: "Engineering", description: "Concept development, detailed engineering, constructability, multidisciplinary coordination and technical support.", metric: "Engineering for execution" },
  { name: "Procurement", description: "Strategic sourcing, vendor management, logistics, material compliance and supply-chain coordination.", metric: "Strategic supply chain" },
  { name: "Construction", description: "Civil, structural, industrial, MEP and infrastructure execution supported by disciplined site management.", metric: "Complex project environments" },
  { name: "Commissioning", description: "Testing, system verification, performance validation and operational readiness.", metric: "Verified performance" },
  { name: "Handover", description: "Documentation, final acceptance, system turnover and coordinated project closeout.", metric: "Structured turnover" },
  { name: "Operations & Maintenance", description: "Preventive and corrective maintenance, performance support and lifecycle asset services.", metric: "Lifecycle support" },
] as const;

export const projects = [
  { id: "amiral", title: "AMIRAL — Package 6", category: "Petrochemicals / Industrial", location: "Jubail, Saudi Arabia", year: "Ongoing", partner: "EPC package delivery", description: "Multidisciplinary project execution supporting the AMIRAL development and demonstrating energy-sector delivery and quality-management performance.", image: "/images/generated/saudi-energy-hero.webp", featured: true, showPhoto: true },
  { id: "mssd-spark", title: "MSSD — SPARK", category: "Industrial / Energy Infrastructure", location: "King Salman Energy Park, Eastern Province", year: "Project delivery", partner: "Construction & Infrastructure", description: "Multidisciplinary construction and project execution within one of Saudi Arabia's key energy ecosystems, with 99.09% waste diversion reported.", image: "/images/generated/industrial-utilities.webp", featured: true, showPhoto: true },
  { id: "mssd-jeddah", title: "MSSD — Jeddah", category: "Industrial Infrastructure", location: "Jeddah, Saudi Arabia", year: "Project delivery", partner: "Construction & Infrastructure", description: "Construction and infrastructure project within MASCO Energy's portfolio.", image: "/images/generated/jeddah-infrastructure.webp", featured: false, showPhoto: true },
  { id: "ras-tanura", title: "Ras Tanura Project", category: "Oil & Gas / Energy", location: "Ras Tanura, Eastern Province", year: "Project delivery", partner: "Energy infrastructure", description: "Energy infrastructure project within MASCO Energy's portfolio.", image: "/images/generated/coastal-energy.webp", featured: false, showPhoto: true },
  { id: "neom", title: "NEOM Infrastructure", category: "Strategic Infrastructure", location: "Northwestern Saudi Arabia", year: "Strategic development", partner: "Civil & Infrastructure", description: "Civil works, site development, utility infrastructure and associated project execution supporting one of the Kingdom's most significant strategic developments.", image: "/images/generated/northwest-infrastructure.webp", featured: false, showPhoto: true },
  { id: "railway", title: "Railway Infrastructure", category: "Transportation", location: "Saudi Arabia", year: "MASCO heritage", partner: "Major Infrastructure", description: "Railway infrastructure delivery and associated civil works across track engineering, rail laying, signaling systems and infrastructure foundations.", image: "/images/generated/railway-infrastructure.webp", featured: false, showPhoto: true },
] as const;

export const pillars = [
  { title: "Integrity", text: "We act transparently, ethically and responsibly in every commitment." },
  { title: "Safety", text: "We protect our people, partners, communities and assets through disciplined safety practices." },
  { title: "Quality", text: "We maintain rigorous standards across every stage of project delivery." },
  { title: "Accountability", text: "We take ownership of our decisions, commitments and performance." },
  { title: "Partnership", text: "We build lasting relationships through collaboration, trust and shared success." },
  { title: "Innovation", text: "We continuously improve how we engineer, execute and deliver." },
] as const;

export const specializedBusinesses = [
  {
    name: "MASCO Pipelines",
    eyebrow: "Specialized Pipeline Expertise",
    description: "A joint venture between MASCO Energy and CIS Gaz Arabia delivering specialized pipeline solutions for Saudi Arabia's energy and industrial sectors.",
    capabilities: ["Pipeline EPCC", "Specialized construction", "Operations & maintenance"],
    image: "/images/profile/masco-pipelines-logo-white.png",
    photo: "/images/generated/pipeline-corridor.webp",
    metrics: ["+1,500 km pipelines constructed", "+35 years pipeline experience", "4 countries", "+280 projects completed"],
  },
  {
    name: "Lumeron",
    eyebrow: "Digital Infrastructure",
    description: "A MASCO Energy company extending the portfolio into digital infrastructure, connectivity and technology solutions for modern industrial and infrastructure environments.",
    capabilities: ["Digital infrastructure", "Connectivity & fiber", "Systems integration", "Control & intelligent systems"],
    image: "/images/profile/lumeron-logo-white.png",
    photo: "/images/generated/digital-infrastructure.webp",
    metrics: [],
  },
] as const;

export const sustainability = [
  { value: "99.09%", title: "Waste Diversion", text: "Reported at MSSD / SPARK through controlled waste segregation and recovery practices." },
  { value: "100%", title: "Treated Wastewater Recycled", text: "On-site recycling supporting zero-discharge practices within the referenced project." },
  { value: "Measured", title: "Energy & Carbon", text: "Project-level monitoring of energy consumption and carbon emissions." },
  { value: "Integrated", title: "Renewable Energy", text: "Renewable energy applications incorporated where relevant to project environments." },
] as const;

export const peopleCommitments = [
  { title: "National Talent Development", text: "Developing Saudi engineers, specialists, project professionals and future leaders." },
  { title: "Learning & Development", text: "On-the-job training, cooperative training, Tamheer, technical apprenticeships and professional certification." },
  { title: "Local Supply Chain", text: "Supporting qualified Saudi manufacturers, suppliers and subcontractors where appropriate." },
  { title: "Knowledge Transfer", text: "Project exposure, technical mentoring and specialized training for long-term national capability." },
] as const;

export const clientLogos = [
  { name: "Saudi Aramco", image: "/images/profile/client-saudi-aramco.png" },
  { name: "SATORP", image: "/images/profile/client-satorp.png" },
  { name: "Ma'aden", image: "/images/profile/client-maaden.png" },
  { name: "NEOM", image: "/images/profile/client-neom.png" },
  { name: "Royal Commission for Jubail & Yanbu", image: "/images/profile/client-royal-commission.png" },
] as const;

export type StatItem = { id: string; value: string; label: string; metric: KpiMetric };

function toStatItems(ids: readonly string[]): StatItem[] {
  return getKpisByIds(ids).map((metric) => ({
    id: metric.id,
    value: (metric.prefix ?? "") + (metric.decimals !== undefined ? metric.value.toFixed(metric.decimals) : metric.value.toLocaleString()) + (metric.suffix ?? ""),
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
  { question: "What does MASCO Energy do?", answer: "MASCO Energy delivers integrated EPC solutions spanning engineering, procurement, construction, commissioning, handover, operations and maintenance." },
  { question: "Which markets does MASCO Energy serve?", answer: "The company serves oil and gas, petrochemicals, power and energy, mining and industrial, utilities, and strategic infrastructure markets." },
  { question: "Where does MASCO Energy operate?", answer: "Its project footprint spans major developments across Saudi Arabia, including Jubail, Ras Tanura, SPARK, Al Khobar, Jeddah and NEOM." },
  { question: "What specialized businesses are part of the platform?", answer: "MASCO Pipelines provides specialized pipeline expertise, while Lumeron extends the group into digital infrastructure and technology solutions." },
  { question: "How can I contact MASCO Energy?", answer: "Email info@masco.com.sa or visit masco.com.sa. The company is based in Al Khobar, Eastern Province, Kingdom of Saudi Arabia." },
] as const;

export const highlights = [
  { quote: "Deliver safely, execute with discipline, and create lasting value for our clients.", author: "Eng. Omar M. Algethaan", company: "Chief Executive Officer" },
  { quote: "One integrated approach from concept to operation.", author: "Integrated EPC Delivery", company: "Engineering through operations and maintenance" },
  { quote: "Built on experience. Focused on energy.", author: "MASCO Energy", company: "Engineering progress. Delivering with purpose." },
] as const;

export const processSteps = [
  { step: "01", title: "Engineering", text: "Concept development, detailed engineering, constructability, multidisciplinary coordination and technical support." },
  { step: "02", title: "Procurement", text: "Strategic sourcing, vendor management, logistics, material compliance and supply-chain coordination." },
  { step: "03", title: "Construction", text: "Civil, structural, industrial, MEP and infrastructure execution supported by disciplined site management." },
  { step: "04", title: "Commissioning", text: "Testing, system verification, performance validation and operational readiness." },
  { step: "05", title: "Handover", text: "Documentation, final acceptance, system turnover and coordinated project closeout." },
  { step: "06", title: "Operations & Maintenance", text: "Preventive and corrective maintenance, performance support and lifecycle asset services." },
] as const;

export const testimonials = highlights;
