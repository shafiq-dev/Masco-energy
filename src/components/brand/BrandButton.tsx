import Link from "next/link";
import { type ReactNode } from "react";

type BrandButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "inverse" | "inverse-outline";
  children: ReactNode;
  className?: string;
};

export function BrandButton({
  href = "#",
  variant = "primary",
  children,
  className = "",
}: BrandButtonProps) {
  const base =
    "inline-flex cursor-pointer items-center justify-center rounded-[var(--r)] px-6 py-3 text-sm font-bold transition-all";

  const variants = {
    primary: "masco-gradient text-white hover:opacity-90",
    secondary: "bg-masco-navy text-white hover:opacity-90",
    outline:
      "border-2 border-masco-navy bg-white text-masco-navy hover:bg-masco-navy/5",
    inverse: "bg-white text-masco-navy hover:opacity-90",
    "inverse-outline":
      "border-2 border-white bg-transparent text-white hover:bg-white/10",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
