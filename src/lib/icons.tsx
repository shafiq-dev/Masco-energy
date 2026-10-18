import {
  BadgeCheck,
  Briefcase,
  CircleHelp,
  Factory,
  Globe2,
  Handshake,
  Home,
  Info,
  Layers,
  Mail,
  MapPin,
  PenTool,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  Engineering: PenTool,
  Procurement: Search,
  Construction: Factory,
  Commissioning: Rocket,
  "Operations & Maintenance": Wrench,
  "Project Management": Briefcase,
};

export const pillarIcons: Record<string, LucideIcon> = {
  Safety: ShieldCheck,
  "Quality & Reliability": BadgeCheck,
  Integrity: Handshake,
  "Innovation & Sustainability": Layers,
};

export const processIcons: Record<string, LucideIcon> = {
  Engineering: PenTool,
  Procurement: Search,
  Construction: Factory,
  "Commissioning & Handover": Rocket,
};

export const kpiIcons: Record<string, LucideIcon> = {
  legacy: TrendingUp,
  workforce: Users,
  sectors: Factory,
  capabilities: Wrench,
  models: Layers,
  kingdom: Globe2,
};

/** @deprecated Use kpiIcons with stat.id */
export const statIcons: Record<string, LucideIcon> = kpiIcons;

export const navIcons: Record<string, LucideIcon> = {
  Home,
  About: Info,
  Services: Wrench,
  Contact: Mail,
  FAQ: CircleHelp,
};

type IconBoxProps = {
  icon: LucideIcon;
  variant?: "navy" | "blue" | "light" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const boxVariants = {
  navy: "bg-masco-navy text-white",
  blue: "bg-masco-blue text-white",
  light: "bg-masco-navy/8 text-masco-navy",
  white: "bg-white text-masco-navy",
};

const boxSizes = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-14 w-14",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function IconBox({
  icon: Icon,
  variant = "navy",
  size = "md",
  className = "",
}: IconBoxProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-[20px] ${boxVariants[variant]} ${boxSizes[size]} ${className}`}
    >
      <Icon className={iconSizes[size]} strokeWidth={1.75} />
    </div>
  );
}

export { Mail, MapPin, Phone, CircleHelp as HelpCircle };
