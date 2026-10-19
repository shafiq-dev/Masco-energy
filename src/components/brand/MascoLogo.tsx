import Image from "next/image";
import Link from "next/link";

type MascoLogoProps = {
  href?: string;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  /** Light wordmark for dark surfaces (kinetic / dark headers). */
  variant?: "default" | "light";
};

/** Wordmark aspect ≈ 994×228 (≈4.36:1). Heights tuned for sticky headers. */
const sizes = {
  xs: { width: 168, height: 38, className: "h-[38px] w-[168px]" },
  sm: { width: 200, height: 46, className: "h-[46px] w-[200px]" },
  md: { width: 240, height: 55, className: "h-[55px] w-[240px]" },
  lg: { width: 320, height: 73, className: "h-[73px] w-[320px]" },
} as const;

export function MascoLogo({
  href = "/home/luminous",
  size = "md",
  className = "",
  variant = "default",
}: MascoLogoProps) {
  const { width, height, className: sizeClass } = sizes[size];
  const src =
    variant === "light" ? "/masco-logo-light.png" : "/masco-logo.png";

  const logo = (
    <Image
      src={src}
      alt="MASCO Energy"
      width={width}
      height={height}
      className={`object-contain object-left ${sizeClass} ${className}`}
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
