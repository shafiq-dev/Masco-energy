import { HeroScene } from "@/components/home/HeroScene";
import { HeroSignal } from "@/components/home/HeroLoop";
import { ProjectDirectorySection } from "@/components/home/ProjectDirectorySection";
import { ProfileStorySections } from "@/components/home/ProfileStorySections";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/brand/SiteFooter";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { FAQSection } from "@/components/home/FAQSection";
import { SectionKicker } from "@/components/home/SectionKicker";
import { AnimateIn } from "@/components/metrics/AnimateIn";
import { CountUp } from "@/components/metrics/CountUp";
import {
  aboutParagraphs,
  company,
  pillars,
  processSteps,
  services,
  visionMission,
} from "@/lib/home-content";
import { getKpisByIds } from "@/lib/metrics";
import { IconBox, pillarIcons, serviceIcons } from "@/lib/icons";

const dossierMetrics = getKpisByIds(["portfolio", "workforce", "markets"]);

function SectionNumber({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t-2 border-masco-blue pt-4">
      <span className="block text-5xl font-bold tracking-[-0.05em] text-masco-navy">{value}</span>
      <span className="mt-2 block text-xs font-bold uppercase tracking-[0.18em] text-masco-black/45">{label}</span>
    </div>
  );
}

export default function DossierHomePage() {
  return (
    <div className="theme-dossier min-h-screen bg-[#f2f4f6] text-masco-black">
      <SiteHeader theme="dossier" />

      <main>
        <section id="home" className="px-6 py-10 lg:px-16 lg:py-16">
          <div className="mx-auto grid max-w-7xl overflow-hidden border border-masco-navy/15 bg-white lg:grid-cols-[280px_1fr]">
            <aside className="flex flex-col justify-between bg-masco-navy p-7 text-white lg:min-h-[690px] lg:p-10">
              <div>
                <SectionKicker tone="inverse">Corporate dossier</SectionKicker>
                <p className="mt-3 text-sm text-white/55">Energy &amp; industrial infrastructure</p>
              </div>
              <div className="mt-14 grid grid-cols-2 gap-6 lg:mt-0 lg:grid-cols-1">
                {dossierMetrics.map((metric, index) => <div key={metric.id}><p className="text-4xl font-bold"><CountUp metric={metric} minimumDigits={metric.id === "markets" ? 2 : undefined} /></p><p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/70">{["Project value", "Workforce", "Core markets"][index]}</p></div>)}
              </div>
              <p className="mt-14 text-xs leading-6 text-white/45 lg:mt-0">Headquartered in {company.headquarters}, {company.city}<br />{company.country}</p>
            </aside>

            <div className="grid min-h-[690px] lg:grid-rows-[1fr_190px]">
              <AnimateIn className="flex flex-col justify-center px-7 py-16 lg:px-16 xl:px-20">
                <SectionKicker>MASCO Energy / Profile 2026</SectionKicker>
                <h1 className="theme-h1 mt-7 max-w-4xl font-bold leading-[0.93] tracking-[-0.055em] text-masco-navy">
                  A disciplined partner for complex infrastructure.
                </h1>
              <HeroSignal variant="dossier" />
                <p className="mt-8 max-w-2xl text-lg leading-8 text-masco-black/60">{aboutParagraphs[0]}</p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link href="#about" className="inline-flex items-center gap-2 bg-masco-navy px-6 py-3 text-sm font-bold text-white">Read the profile <ArrowUpRight className="h-4 w-4" /></Link>
                  <Link href="#services" className="inline-flex items-center gap-2 border border-masco-navy/20 px-6 py-3 text-sm font-bold text-masco-navy">Review capabilities</Link>
                </div>
              </AnimateIn>
              <div className="relative overflow-hidden border-t border-masco-navy/10">
                <HeroScene src="/images/generated/saudi-energy-hero.webp" alt="MASCO Energy infrastructure" />
                <div className="absolute inset-0 bg-gradient-to-r from-masco-navy/70 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-6 py-24 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
            <SectionNumber value="01" label="Corporate profile" />
            <div>
              <h2 className="max-w-4xl text-4xl font-bold leading-tight text-masco-navy lg:text-6xl">Built on Saudi experience. Organised for the next generation of projects.</h2>
              <div className="mt-12 grid gap-10 lg:grid-cols-2">
                <div className="space-y-6 text-base leading-8 text-masco-black/65"><p>{aboutParagraphs[1]}</p><p>{aboutParagraphs[2]}</p></div>
                <div className="space-y-8 border-l border-masco-navy/15 pl-8">
                  <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-masco-blue">Vision</p><p className="mt-3 text-sm leading-7 text-masco-black/65">{visionMission.vision}</p></div>
                  <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-masco-blue">Mission</p><p className="mt-3 text-sm leading-7 text-masco-black/65">{visionMission.mission}</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-masco-navy/10 px-6 py-24 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
            <SectionNumber value="02" label="Capabilities" />
            <div>
              <div className="flex flex-col justify-between gap-6 border-b border-masco-navy/15 pb-10 md:flex-row md:items-end">
                <h2 className="max-w-3xl text-4xl font-bold leading-tight text-masco-navy lg:text-5xl">Six capabilities managed through one delivery framework.</h2>
                <p className="max-w-sm text-sm leading-7 text-masco-black/55">Engineering, procurement, construction, commissioning, handover and lifecycle support are coordinated through one integrated delivery platform.</p>
              </div>
              <div>
                {services.map((service, index) => (
                  <AnimateIn key={service.name} delay={index * 0.04}>
                    <article className="grid gap-4 border-b border-masco-navy/15 py-7 md:grid-cols-[64px_220px_1fr_150px] md:items-start">
                      <span className="text-sm font-bold text-masco-blue">0{index + 1}</span>
                      {serviceIcons[service.name] && <IconBox icon={serviceIcons[service.name]} variant="blue" size="sm" className="mb-3" />}<h3 className="text-lg font-bold text-masco-navy">{service.name}</h3>
                      <p className="text-sm leading-7 text-masco-black/60">{service.description}</p>
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-masco-black/40 md:text-right">{service.metric}</span>
                    </article>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProjectDirectorySection theme="dossier" />

        <section className="bg-white px-6 py-24 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
            <SectionNumber value="03" label="Governance" />
            <div className="grid gap-14 lg:grid-cols-2">
              <div>
                <SectionKicker index="03.1">Project sequence</SectionKicker>
                <div className="mt-7">
                  {processSteps.map((step) => (
                    <article key={step.step} className="grid grid-cols-[48px_1fr] gap-4 border-t border-masco-navy/15 py-6">
                      <span className="text-sm font-bold text-masco-blue">{step.step}</span>
                      <div><h3 className="font-bold text-masco-navy">{step.title}</h3><p className="mt-2 text-sm leading-7 text-masco-black/60">{step.text}</p></div>
                    </article>
                  ))}
                </div>
              </div>
              <div>
                <SectionKicker index="03.2">Operating principles</SectionKicker>
                <div className="mt-7 border border-masco-navy/15">
                  {pillars.map((pillar, index) => (
                    <article key={pillar.title} className={`flex gap-4 p-6 ${index !== pillars.length - 1 ? "border-b border-masco-navy/15" : ""}`}>
                      {pillarIcons[pillar.title] && <IconBox icon={pillarIcons[pillar.title]} variant="light" size="sm" />}
                      <div><h3 className="font-bold text-masco-navy">{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-masco-black/60">{pillar.text}</p></div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProfileStorySections theme="dossier" />
      <FAQSection variant="minimal" />
      </main>

      <SiteFooter theme="dossier" />
    </div>
  );
}
