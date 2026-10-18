import Image from "next/image";
import { AnimateIn } from "@/components/metrics/AnimateIn";
import { services } from "@/lib/home-content";
import { images, type ServiceName } from "@/lib/images";
import { IconBox, serviceIcons } from "@/lib/icons";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";

type ServicesSectionProps = {
  layout?: "grid" | "list" | "cards";
  showMetrics?: boolean;
};

export function ServicesSection({
  layout = "grid",
  showMetrics = true,
}: ServicesSectionProps) {
  if (layout === "list") {
    return (
      <SectionShell
        id="services"
        className="border-t border-masco-navy/10 bg-white"
      >
        <SectionHeader
          eyebrow="Services"
          title="Integrated lifecycle capabilities"
          description="End-to-end services from early engineering through operations and maintenance."
        />
        <div className="mt-12 divide-y divide-masco-navy/10">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.name];
            return (
              <AnimateIn key={service.name} delay={index * 0.06}>
                <article className="grid gap-6 py-8 md:grid-cols-[auto_1fr_1fr] md:items-center">
                  <div className="flex items-center gap-4">
                    {Icon && <IconBox icon={Icon} variant="light" />}
                    <span className="text-sm font-bold text-masco-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-masco-navy">
                    {service.name}
                  </h3>
                  <div className="flex flex-col gap-3 md:items-end">
                    <p className="text-sm leading-relaxed text-masco-black/60 md:text-right">
                      {service.description}
                    </p>
                    {showMetrics && (
                      <span className="rounded-[20px] bg-masco-navy/5 px-3 py-1 text-xs font-bold text-masco-navy">
                        {service.metric}
                      </span>
                    )}
                  </div>
                </article>
              </AnimateIn>
            );
          })}
        </div>
      </SectionShell>
    );
  }

  const showCardImages = layout === "cards";

  return (
    <SectionShell id="services" className="bg-white">
      <SectionHeader
        eyebrow="Services"
        title="Our Core Capabilities"
        description="Six connected capabilities covering the full asset lifecycle, delivered through EPC, EPCM, and hybrid models."
      />

      <div
        className={`mt-14 grid gap-6 ${
          layout === "cards"
            ? "sm:grid-cols-2 xl:grid-cols-3"
            : "md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {services.map((service, index) => {
          const Icon = serviceIcons[service.name];
          const imageSrc =
            images.services[service.name as ServiceName] ??
            images.services.Engineering;

          return (
            <AnimateIn key={service.name} delay={index * 0.06}>
              <article className="masco-card group h-full overflow-hidden">
                {showCardImages && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-masco-navy/50 to-transparent" />
                  </div>
                )}
                <div className="p-6 md:p-8">
                  {Icon && (
                    <IconBox
                      icon={Icon}
                      variant={showCardImages ? "blue" : "navy"}
                    />
                  )}
                  <h3 className="mt-5 text-xl font-bold text-masco-navy">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-masco-black/60">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-masco-navy/10 pt-4">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-masco-blue">
                      {service.metric}
                    </p>
                    <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-masco-navy to-masco-blue" />
                  </div>
                </div>
              </article>
            </AnimateIn>
          );
        })}
      </div>
    </SectionShell>
  );
}
