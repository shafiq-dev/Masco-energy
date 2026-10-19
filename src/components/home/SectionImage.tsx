import { HeroScene } from "@/components/home/HeroScene";
import Image from "next/image";

type SectionImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  overlay?: "gradient" | "none";
  aspect?: "video" | "square" | "portrait" | "wide" | "fill";
};

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  wide: "aspect-[21/9]",
  fill: "min-h-[240px]",
};

export function SectionImage({
  src,
  alt,
  className = "",
  priority = false,
  overlay = "none",
  aspect = "video",
}: SectionImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] ${aspectClasses[aspect]} ${className}`}
    >
      {priority ? <HeroScene src={src} alt={alt} /> : <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />}
      {overlay === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-t from-masco-navy/60 via-masco-navy/15 to-transparent" />
      )}
    </div>
  );
}
