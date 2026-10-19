import { HeroSignal } from "@/components/home/HeroLoop";
import { HeroScene } from "@/components/home/HeroScene";
import { BrandButton } from "@/components/brand/BrandButton";
import { SectionImage } from "@/components/home/SectionImage";
import { SectionKicker } from "@/components/home/SectionKicker";
import { images } from "@/lib/images";
import { services } from "@/lib/home-content";

type HeroBannerProps = {
  variant: "classic" | "minimal" | "services" | "split" | "editorial";
  title: string;
  subtitle?: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function HeroBanner({
  variant,
  title,
  subtitle = "MASCO Energy",
  description,
  primaryCta,
  secondaryCta,
}: HeroBannerProps) {
  const imageSrc = images.hero[variant];

  if (variant === "classic") {
    return (
      <section id="home" className="relative min-h-[min(88vh,820px)] overflow-hidden">
        <div className="absolute inset-0">
          <HeroScene src={imageSrc} alt="Saudi energy and industrial infrastructure" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071c31]/95 via-masco-navy/85 to-masco-navy/35" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071c31]/40 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-6 pb-16 pt-28 lg:min-h-[min(88vh,820px)] lg:justify-center lg:px-16 lg:pb-28 lg:pt-32">
          <div className="max-w-3xl">
            <SectionKicker tone="inverse">{subtitle}</SectionKicker>
            <h1 className="theme-h1 mt-8 font-bold leading-[1.02] tracking-[-0.04em] text-white">
              {title}
            </h1>
            <HeroSignal variant={variant} />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              {description}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-10 flex flex-wrap gap-4">
                {primaryCta && (
                  <BrandButton href={primaryCta.href} variant="inverse">
                    {primaryCta.label}
                  </BrandButton>
                )}
                {secondaryCta && (
                  <BrandButton href={secondaryCta.href} variant="inverse-outline">
                    {secondaryCta.label}
                  </BrandButton>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section id="home" className="grid lg:min-h-[640px] lg:grid-cols-2">
        <div className="flex flex-col justify-center border-b border-masco-navy/10 bg-[#f7fafc] px-6 py-20 lg:border-b-0 lg:border-r lg:px-16 lg:py-24">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <SectionKicker>{subtitle}</SectionKicker>
            <h1 className="theme-h1 mt-6 font-bold leading-[1.05] tracking-[-0.04em] text-masco-navy">
              {title}
            </h1>
            <HeroSignal variant={variant} />
            <p className="mt-8 text-base leading-relaxed text-masco-black/65">
              {description}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-10 flex flex-wrap gap-4">
                {primaryCta && (
                  <BrandButton href={primaryCta.href}>{primaryCta.label}</BrandButton>
                )}
                {secondaryCta && (
                  <BrandButton href={secondaryCta.href} variant="outline">
                    {secondaryCta.label}
                  </BrandButton>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="relative min-h-[340px] lg:min-h-full">
          <HeroScene src={imageSrc} alt="Saudi energy and industrial infrastructure" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-masco-navy/15" />
        </div>
      </section>
    );
  }

  if (variant === "minimal") {
    return (
      <section
        id="home"
        className="border-b border-masco-navy/10 bg-white px-6 lg:px-16"
      >
        <div className="mx-auto max-w-3xl py-24 text-left lg:py-36">
          <p className="text-[11px] font-normal uppercase tracking-[0.28em] text-masco-black/40">
            {subtitle}
          </p>
          <h1 className="theme-h1 mt-10 font-normal leading-[1.08] tracking-[-0.055em] text-masco-black">
            {title}
          </h1>
            <HeroSignal variant={variant} />
          <div className="mt-10 h-px w-24 bg-masco-blue" />
          <p className="mt-10 max-w-xl text-lg font-normal leading-8 text-masco-black/60">
            {description}
          </p>
          {primaryCta && (
            <div className="mt-12">
              <a
                href={primaryCta.href}
                className="inline-flex items-center gap-3 border-b border-masco-navy pb-1 text-sm font-bold text-masco-navy transition-opacity hover:opacity-70"
              >
                {primaryCta.label}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          )}
        </div>
      </section>
    );
  }

  if (variant === "services") {
    return (
      <section
        id="home"
        className="border-b border-masco-navy/10 bg-[#0b2947] text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-12 lg:items-end lg:gap-12 lg:px-16 lg:py-20">
          <div className="lg:col-span-5">
            <SectionKicker tone="inverse">{subtitle}</SectionKicker>
            <h1 className="theme-h1 mt-5 font-bold leading-[1.05] tracking-[-0.04em]">
              {title}
            </h1>
            <HeroSignal variant={variant} />
            <p className="mt-6 max-w-md text-sm leading-7 text-white/65">
              {description}
            </p>
            {primaryCta && (
              <div className="mt-8">
                <BrandButton href={primaryCta.href} variant="inverse">
                  {primaryCta.label}
                </BrandButton>
              </div>
            )}
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[12px] border border-white/10 bg-white/[0.04]">
              <div className="grid grid-cols-[48px_1fr_auto] border-b border-white/10 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                <span>#</span>
                <span>Capability</span>
                <span className="hidden sm:block">Signal</span>
              </div>
              {services.slice(0, 4).map((service, index) => (
                <a
                  key={service.name}
                  href="#services"
                  className="grid grid-cols-[48px_1fr_auto] items-center border-b border-white/10 px-4 py-4 transition-colors last:border-b-0 hover:bg-white/[0.06]"
                >
                  <span className="font-mono text-xs text-masco-blue">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-bold">{service.name}</span>
                  <span className="hidden text-[10px] font-bold uppercase tracking-[0.12em] text-white/35 sm:block">
                    {service.metric}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // editorial — magazine masthead
  return (
    <section
      id="home"
      className="border-b border-masco-navy/15 bg-[#fbf8f2] px-6 py-16 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-masco-navy pb-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-masco-navy">
            MASCO Energy · Profile 2026
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-masco-black/40">
            {subtitle}
          </p>
        </div>
        <div className="mt-10 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="theme-h1 font-bold leading-[0.95] tracking-[-0.05em] text-masco-navy">
              {title}
            </h1>
            <HeroSignal variant={variant} />
            <p className="mt-8 max-w-xl text-base leading-8 text-masco-black/65 md:text-lg">
              {description}
            </p>
            {primaryCta && (
              <div className="mt-10">
                <BrandButton href={primaryCta.href}>{primaryCta.label}</BrandButton>
              </div>
            )}
          </div>
          <div className="lg:col-span-5">
            <SectionImage
              src={imageSrc}
              alt="MASCO Energy sectors"
              aspect="video"
              priority
              overlay="gradient"
              className="shadow-none ring-1 ring-masco-navy/15"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
