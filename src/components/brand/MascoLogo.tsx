import Image from "next/image";
import Link from "next/link";

type MascoLogoProps = {
  href?: string;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  xs: { width: 148, height: 40, className: "h-10 w-[148px]" },
  sm: { width: 208, height: 56, className: "h-14 w-[208px]" },
  md: { width: 178, height: 48, className: "h-12 w-[178px]" },
  lg: { width: 238, height: 64, className: "h-16 w-[238px]" },
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
