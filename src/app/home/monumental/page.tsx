import { ProjectDirectorySection } from "@/components/home/ProjectDirectorySection";
import { ProfileStorySections } from "@/components/home/ProfileStorySections";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/brand/SiteFooter";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { FAQSection } from "@/components/home/FAQSection";
import { AnimateIn } from "@/components/metrics/AnimateIn";
import { CountUp } from "@/components/metrics/CountUp";
import {
  aboutParagraphs,
  pillars,
  processSteps,
  services,
  visionMission,
} from "@/lib/home-content";
import { getKpisByIds } from "@/lib/metrics";
import { IconBox, pillarIcons } from "@/lib/icons";

const portfolioMetric = getKpisByIds(["portfolio"])[0];

export default function MonumentalHomePage() {
  return (
    <div className="theme-monumental min-h-screen bg-[#f4f7fa] text-masco-black">
      <SiteHeader theme="monumental" />

      <main>
        <section id="home" className="px-6 pb-16 pt-10 lg:px-16 lg:pb-24 lg:pt-16">
          <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <AnimateIn className="lg:col-span-7">
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-masco-blue">
                <span className="hero-live-dot h-2 w-2 rounded-full bg-masco-blue" />
                Saudi EPC &amp; integrated contracting
              </p>
              <h1 className="mt-8 max-w-4xl text-[clamp(3.25rem,8vw,7.6rem)] font-bold leading-[0.88] tracking-[-0.055em] text-masco-navy">
                Energy built at national scale.
              </h1>
              <p className="mt-9 max-w-2xl text-lg leading-8 text-masco-black/65 lg:text-xl">
                MASCO Energy brings engineering, procurement, construction,
                commissioning, and lifecycle support into one accountable
                delivery platform.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-3 rounded-full bg-masco-navy px-7 py-4 text-sm font-bold text-white transition-transform duration-150 ease-out active:scale-[0.97]"
                >
                  Explore our capabilities
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#about" className="text-sm font-bold text-masco-navy">
                  Company profile
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn direction="left" className="lg:col-span-5">
              <div className="relative min-h-[440px] overflow-hidden rounded-[28px] lg:min-h-[620px]">
                <Image
                  src="/images/generated/epc-construction-empty.png"
                  alt="Energy infrastructure delivered by MASCO Energy"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071c31]/85 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="text-4xl font-bold"><CountUp metric={portfolioMetric} /></p>
                  <p className="mt-1 text-sm text-white/75">project value</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        <section className="border-y border-masco-navy/10 bg-white px-6 py-7 lg:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              ["3,000+", "Workforce"],
              ["06", "Core markets"],
              ["06", "Integrated capabilities"],
              ["+10M", "LTI-free hours"],
            ].map(([value, label]) => (
              <div key={label} className="border-l-2 border-masco-blue pl-4">
                <p className="text-2xl font-bold text-masco-navy md:text-3xl">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-masco-black/50">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white px-6 py-24 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <AnimateIn className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-masco-blue">01 / Company</p>
                <h2 className="mt-5 text-3xl font-bold leading-tight text-masco-navy lg:text-5xl">A Saudi partner built for complex delivery.</h2>
              </div>
              <div className="space-y-6 text-base leading-8 text-masco-black/65 lg:col-span-7 lg:col-start-6 lg:text-lg">
                <p>{aboutParagraphs[0]}</p>
                <p>{aboutParagraphs[1]}</p>
                <div className="grid gap-6 border-t border-masco-navy/10 pt-8 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-masco-blue">Vision</p>
                    <p className="mt-3 text-sm leading-7">{visionMission.vision}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-masco-blue">Mission</p>
                    <p className="mt-3 text-sm leading-7">{visionMission.mission}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        <section id="services" className="bg-[#071c31] px-6 py-24 text-white lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-masco-blue">02 / Capabilities</p>
                <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-6xl">One platform. Every critical stage.</h2>
                <p className="mt-6 max-w-sm leading-7 text-white/65">{aboutParagraphs[2]}</p>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                {services.map((service, index) => (
                  <AnimateIn key={service.name} delay={index * 0.05}>
                    <article className="grid gap-4 border-t border-white/15 py-7 sm:grid-cols-[52px_1fr]">
                      <span className="text-sm font-bold text-masco-blue">0{index + 1}</span>
                      <div>
                        <h3 className="text-xl font-bold md:text-2xl">{service.name}</h3>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">{service.description}</p>
                      </div>
                    </article>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProjectDirectorySection theme="monumental" />

        <section className="px-6 py-24 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-masco-blue">04 / Delivery discipline</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-masco-navy lg:text-5xl">Control from definition to handover.</h2>
              <p className="mt-6 max-w-lg leading-7 text-masco-black/60">{aboutParagraphs[3]}</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              {processSteps.map((step) => (
                <div key={step.step} className="flex gap-5 border-t border-masco-navy/15 py-6">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-masco-blue" />
                  <div>
                    <h3 className="font-bold text-masco-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-masco-black/60">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-20 grid max-w-7xl gap-px overflow-hidden rounded-[24px] bg-masco-navy/10 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="bg-white p-7">
                {pillarIcons[pillar.title] && <IconBox icon={pillarIcons[pillar.title]} variant="light" size="sm" className="mb-5 rounded-xl" />}
                <h3 className="font-bold text-masco-navy">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-masco-black/60">{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <ProfileStorySections theme="monumental" />
      <FAQSection variant="minimal" />
      </main>

      <SiteFooter theme="monumental" />
    </div>
  );
}
