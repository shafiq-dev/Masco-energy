import {
  BadgeCheck,
  Briefcase,
  CircleHelp,
  Factory,
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
  Handover: BadgeCheck,
  "Operations & Maintenance": Wrench,
  "Project Management": Briefcase,
};

export const pillarIcons: Record<string, LucideIcon> = {
  Safety: ShieldCheck,
  Quality: BadgeCheck,
  Accountability: Briefcase,
  Partnership: Handshake,
  Innovation: Layers,
  "Quality & Reliability": BadgeCheck,
  Integrity: Handshake,
  "Innovation & Sustainability": Layers,
};

export const processIcons: Record<string, LucideIcon> = {
  Engineering: PenTool,
  Procurement: Search,
  Construction: Factory,
  "Commissioning & Handover": Rocket,
  Commissioning: Rocket,
  Handover: BadgeCheck,
  "Operations & Maintenance": Wrench,
};

export const kpiIcons: Record<string, LucideIcon> = {
  portfolio: TrendingUp,
  lti: ShieldCheck,
  markets: Factory,
  workforce: Users,
};

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
