import Image from "next/image";
import Link from "next/link";

type MascoLogoProps = {
  href?: string;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  /** Light wordmark for dark surfaces (kinetic / dark headers). */
  variant?: "default" | "light";
};

/** Original stacked brand mark, rendered without filters or decoration. */
const sizes = {
  xs: { width: 72, height: 58, className: "h-[58px] w-[72px]" },
  sm: { width: 90, height: 72, className: "h-[72px] w-[90px]" },
  md: { width: 105, height: 84, className: "h-[84px] w-[105px]" },
  lg: { width: 140, height: 113, className: "h-[113px] w-[140px]" },
} as const;

export function MascoLogo({
  href = "/home/luminous",
  size = "md",
  className = "",
}: MascoLogoProps) {
  const { width, height, className: sizeClass } = sizes[size];
  const src = "/masco-logo-original.png";

  const logo = (
    <Image
      src={src}
      alt="MASCO Energy"
      width={width}
      height={height}
      className={`masco-original-logo object-contain object-left ${sizeClass} ${className}`}
      priority
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex shrink-0 items-center"
        aria-label="MASCO Energy — home"
      >
        {logo}
      </Link>
    );
  }

  return logo;
}
