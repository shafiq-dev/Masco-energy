import Image from "next/image";
import Link from "next/link";

type MascoLogoProps = {
  href?: string;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  xs: { width: 92, height: 74, className: "h-[74px] w-[92px]" },
  sm: { width: 120, height: 96, className: "h-24 w-[120px]" },
  md: { width: 66, height: 68, className: "h-[68px] w-[66px]" },
  lg: { width: 92, height: 96, className: "h-24 w-[92px]" },
};

export function MascoLogo({
  href = "/main",
  size = "md",
  className = "",
}: MascoLogoProps) {
  const { width, height, className: sizeClass } = sizes[size];

  const logo = (
    <Image
      src="/masco-logo.png"
      alt="MASCO Energy"
      width={width}
      height={height}
      className={`object-contain ${sizeClass} ${className}`}
      priority
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0 items-center">
        {logo}
      </Link>
    );
  }

  return logo;
}
