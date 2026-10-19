export const images = {
  hero: {
    classic: "/images/generated/saudi-energy-hero.webp",
    minimal: "/images/generated/pipeline-corridor.webp",
    services: "/images/generated/industrial-utilities.webp",
    split: "/images/generated/coastal-energy.webp",
    editorial: "/images/generated/jeddah-infrastructure.webp",
  },
  about: "/images/generated/digital-infrastructure.webp",
  process: "/images/generated/pipeline-corridor.webp",
  services: {
    Engineering: "/images/generated/engineering-design-empty.webp",
    Procurement: "/images/generated/procurement-logistics-empty.webp",
    Construction: "/images/generated/epc-construction-empty.webp",
    Commissioning: "/images/generated/commissioning-systems.webp",
    Handover: "/images/generated/industrial-utilities.webp",
    "Operations & Maintenance": "/images/generated/commissioning-systems.webp",
  },
  testimonials: [
    "/images/profile/ceo-omar-algethaan.jpg",
    "/images/generated/pipeline-corridor.webp",
    "/images/generated/saudi-energy-hero.webp",
  ],
} as const;

export type ServiceName = keyof typeof images.services;
