import { AnimateIn } from "@/components/metrics/AnimateIn";
import { pillars } from "@/lib/home-content";
import { IconBox, pillarIcons } from "@/lib/icons";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";

export function PillarsSection() {
  return (
    <SectionShell className="border-t border-masco-navy/10 bg-white">
      <SectionHeader
        eyebrow="Our Foundation"
        title="Core Pillars of MASCO Energy"
        description="The principles driving MASCO Energy's commitment to quality, safety, Saudi Vision 2030, and digital innovation."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, index) => {
          const Icon = pillarIcons[pillar.title];
          return (
            <AnimateIn key={pillar.title} delay={index * 0.08}>
              <article className="masco-card relative h-full overflow-hidden p-8">
                <div className="absolute inset-x-0 top-0 h-1 masco-gradient" />
                <div className="flex items-start justify-between gap-4">
                  {Icon && <IconBox icon={Icon} variant="light" />}
                  <span className="text-3xl font-bold text-masco-navy/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-masco-navy">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-masco-black/60">
                  {pillar.text}
                </p>
              </article>
            </AnimateIn>
          );
        })}
      </div>
    </SectionShell>
  );
}
