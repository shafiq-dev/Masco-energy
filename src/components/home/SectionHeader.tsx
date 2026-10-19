import { type ReactNode } from "react";
import { SectionKicker } from "@/components/home/SectionKicker";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
  /** Folio index ("01") for themes that render one. */
  index?: string;
  /** "inverse" when the header sits on a dark panel. */
  kickerTone?: "default" | "inverse";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  action,
  index,
  kickerTone = "default",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "text-center" : "text-left"} ${className}`}
    >
      <div
        className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${
          isCenter ? "lg:flex-col lg:items-center" : ""
        }`}
      >
        <div className={isCenter ? "mx-auto max-w-3xl" : "max-w-3xl"}>
          <SectionKicker
            index={index}
            tone={kickerTone}
            className={isCenter ? "justify-center" : ""}
          >
            {eyebrow}
          </SectionKicker>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-masco-navy md:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-sm leading-relaxed text-masco-black/60 md:text-base">
              {description}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      <div
        className={`mt-8 h-px w-full bg-gradient-to-r from-masco-blue/40 via-masco-navy/10 to-transparent ${
          isCenter ? "max-w-xs mx-auto" : "max-w-xl"
        }`}
      />
    </div>
  );
}
