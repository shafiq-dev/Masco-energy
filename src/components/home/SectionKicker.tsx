import { type ReactNode } from "react";

type SectionKickerProps = {
  children: ReactNode;
  /**
   * Optional folio index ("01"). Themes that render an index — services
   * chip, editorial folio, monumental numeral, kinetic [SYS-01], dossier
   * tab — show it when passed; the rest ignore it.
   */
  index?: string;
  /**
   * "inverse" for kickers on dark photography or navy panels, so the
   * voice stays legible against the theme's dark surfaces.
   */
  tone?: "default" | "inverse";
  className?: string;
};

/**
 * One kicker component, nine renderings.
 *
 * The markup is identical for every direction; the visual voice comes
 * entirely from the `.theme-*` wrapper on the page root (see the
 * SectionKicker block in `globals.css`). That means this component can be
 * dropped into any shared section without knowing the theme — the wrapper
 * already carries it.
 */
export function SectionKicker({
  children,
  index,
  tone = "default",
  className = "",
}: SectionKickerProps) {
  const classes = ["sk", className].filter(Boolean).join(" ");

  return (
    <p className={classes} data-tone={tone === "inverse" ? "inverse" : undefined}>
      {index ? <span className="sk__idx">{index}</span> : null}
      <span className="sk__dot" aria-hidden="true" />
      <span className="sk__label">{children}</span>
    </p>
  );
}
