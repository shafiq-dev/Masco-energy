export const images = {
  hero: {
    classic: "/images/generated/saudi-energy-hero.png",
    minimal: "/images/generated/pipeline-corridor.png",
    services: "/images/generated/epc-construction-empty.png",
    split: "/images/generated/coastal-energy.png",
    editorial: "/images/generated/engineering-design-empty.png",
  },
  about: "/images/generated/technical-training-empty.png",
  process: "/images/generated/pipeline-corridor.png",
  services: {
    Engineering: "/images/generated/engineering-design-empty.png",
    Procurement: "/images/generated/procurement-logistics-empty.png",
    Construction: "/images/generated/epc-construction-empty.png",
    Commissioning: "/images/generated/commissioning-systems.png",
    Handover: "/images/generated/industrial-utilities.png",
    "Operations & Maintenance": "/images/generated/commissioning-systems.png",
  },
  testimonials: [
    "/images/profile/ceo-omar-algethaan.jpg",
    "/images/generated/pipeline-corridor.png",
    "/images/generated/saudi-energy-hero.png",
  ],
} as const;

export type ServiceName = keyof typeof images.services;
