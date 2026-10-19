export const brand = {
  colors: {
    navy: "#134880",
    blue: "#1691CF",
    black: "#111111",
    white: "#FFFFFF",
  },
  radius: "20px",
  gradient: "linear-gradient(to right, #134880 0%, #134880 10%, #1691CF 90%, #1691CF 100%)",
  gradientVertical:
    "linear-gradient(to top, #134880 0%, #134880 10%, #1691CF 90%, #1691CF 100%)",
} as const;

export const homeVariants = [
  {
    slug: "classic",
    title: "Classic Hero",
    direction: "Centered gradient hero with corporate statement and dual CTAs",
  },
  {
    slug: "minimal",
    title: "Minimal Editorial",
    direction: "Whitespace-led typography with subtle dividers and restrained accents",
  },
  {
    slug: "services",
    title: "Services Grid",
    direction: "Capability-led layouts with technical detail, project filters and delivery assurance",
  },
  {
    slug: "split",
    title: "Split Narrative",
    direction: "Asymmetric layout pairing narrative copy with a data sidebar",
  },
  {
    slug: "editorial",
    title: "Editorial Bands",
    direction: "Horizontal content bands alternating white and soft brand tints",
  },
  {
    slug: "monumental",
    title: "Monumental Executive",
    direction: "Large-scale corporate statements, cinematic infrastructure, and disciplined whitespace",
  },
  {
    slug: "kinetic",
    title: "Kinetic Systems",
    direction: "A motion-led project journey with precise transitions and connected delivery stages",
  },
  {
    slug: "dossier",
    title: "Institutional Dossier",
    direction: "Structured corporate reporting with numbered sections, data rails, and formal hierarchy",
  },
  {
    slug: "luminous",
    title: "Luminous Precision",
    direction: "Immersive imagery, generous type, soft depth, and a highly refined brand experience",
  },
] as const;
