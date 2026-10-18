export const images = {
  hero: {
    classic: "/images/hero-classic.jpg",
    minimal: "/images/hero-minimal.jpg",
    services: "/images/hero-services.jpg",
    split: "/images/hero-split.jpg",
    editorial: "/images/hero-editorial.jpg",
  },
  about: "/images/about.jpg",
  process: "/images/process.jpg",
  services: {
    Engineering: "/images/service-energy.jpg",
    Procurement: "/images/service-partnerships.jpg",
    Construction: "/images/service-industrial.jpg",
    Commissioning: "/images/service-power.jpg",
    "Operations & Maintenance": "/images/service-infrastructure.jpg",
    "Project Management": "/images/gallery-2.jpg",
  },
  testimonials: [
    "/images/testimonial-1.jpg",
    "/images/testimonial-2.jpg",
    "/images/testimonial-3.jpg",
  ],
} as const;

export type ServiceName = keyof typeof images.services;
