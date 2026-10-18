import Image from "next/image";
import { BrandButton } from "@/components/brand/BrandButton";
import { SectionImage } from "@/components/home/SectionImage";
import { images } from "@/lib/images";

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
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt="Energy and industrial infrastructure"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-masco-navy/95 via-masco-navy/80 to-masco-blue/70" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-12 lg:items-center lg:px-16 lg:py-28">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 rounded-[20px] border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-masco-blue" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/90">
                {subtitle}
              </p>
            </div>
            <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
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
                  <BrandButton
                    href={secondaryCta.href}
                    variant="inverse-outline"
                  >
                    {secondaryCta.label}
                  </BrandButton>
                )}
              </div>
            )}
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative overflow-hidden rounded-[20px] border border-white/15 shadow-2xl">
              <SectionImage
                src={imageSrc}
                alt="MASCO Energy operations"
                aspect="portrait"
                className="rounded-[20px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-masco-navy/90 to-transparent p-6">
                <p className="text-sm font-bold text-white">
                  Building for Better Life
                </p>
                <p className="mt-1 text-xs text-white/75">
                  Al Khobar, Kingdom of Saudi Arabia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section id="home" className="grid lg:min-h-[560px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 lg:px-16 lg:py-24">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-masco-blue" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-masco-blue">
                {subtitle}
              </p>
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-masco-navy md:text-5xl">
              {title}
            </h1>
            <p className="mt-8 text-base leading-relaxed text-masco-black/65">
              {description}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-10 flex flex-wrap gap-4">
                {primaryCta && (
                  <BrandButton href={primaryCta.href}>
                    {primaryCta.label}
                  </BrandButton>
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
        <div className="relative min-h-[300px] lg:min-h-full">
          <Image
            src={imageSrc}
            alt="Industrial energy operations"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-masco-navy/10" />
        </div>
      </section>
    );
  }

  if (variant === "minimal") {
    return (
      <section id="home" className="masco-surface border-b border-masco-navy/10 px-6 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-masco-blue" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-masco-blue">
                {subtitle}
              </p>
            </div>
            <h1 className="mt-8 text-4xl font-bold leading-[1.1] text-masco-black md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <div className="mt-8 h-px max-w-xs bg-gradient-to-r from-masco-blue to-transparent" />
            <p className="mt-8 text-lg leading-relaxed text-masco-black/65">
              {description}
            </p>
            {primaryCta && (
              <div className="mt-10">
                <BrandButton href={primaryCta.href}>{primaryCta.label}</BrandButton>
              </div>
            )}
          </div>
          <SectionImage
            src={imageSrc}
            alt="Renewable energy landscape"
            aspect="portrait"
            priority
            className="shadow-lg"
          />
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="border-b border-masco-navy/10 bg-white px-6 py-16 lg:px-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-masco-blue" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-masco-blue">
              {subtitle}
            </p>
          </div>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-masco-navy md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-masco-black/65">
            {description}
          </p>
          {primaryCta && (
            <div className="mt-8">
              <BrandButton href={primaryCta.href}>{primaryCta.label}</BrandButton>
            </div>
          )}
        </div>
        <SectionImage
          src={imageSrc}
          alt="MASCO Energy sectors"
          aspect="video"
          priority
          overlay="gradient"
          className="shadow-md"
        />
      </div>
    </section>
  );
}
