import { ProjectDirectorySection } from "@/components/home/ProjectDirectorySection";
import { ProfileStorySections } from "@/components/home/ProfileStorySections";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, DraftingCompass, PackageCheck, HardHat, Gauge, ClipboardCheck, Settings2, ShieldCheck, HeartHandshake, Award, CircleUserRound, Lightbulb, Scale } from "lucide-react";
import { MascoLogo } from "@/components/brand/MascoLogo";
import { SiteFooter } from "@/components/brand/SiteFooter";
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

const homeMetrics = getKpisByIds(["portfolio", "workforce", "markets"]);
const serviceIcons = [DraftingCompass, PackageCheck, HardHat, Gauge, ClipboardCheck, Settings2];
const valueIcons = [Scale, ShieldCheck, Award, CircleUserRound, HeartHandshake, Lightbulb];

export default function LuminousHomePage() {
  return (
    <div className="theme-luminous min-h-screen bg-white text-masco-black">
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/75 px-4 backdrop-blur-xl lg:px-12">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          <MascoLogo href="/main" size="xs" />
          <nav className="hidden items-center gap-7 text-xs font-bold text-masco-black/65 md:flex">
            <Link href="#about">About</Link>
            <Link href="#services">Capabilities</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#faq">FAQ</Link>
          </nav>
          <Link href="#contact" className="rounded-full bg-masco-navy px-5 py-2.5 text-xs font-bold text-white transition-transform duration-150 ease-out active:scale-[0.97]">Contact Us</Link>
        </div>
      </header>

      <main>
        <section id="home" className="overflow-hidden px-6 pb-10 pt-20 text-center lg:px-16 lg:pb-16 lg:pt-28">
          <AnimateIn direction="none">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-masco-blue">Engineering Progress. Delivering with Purpose.</p>
            <h1 className="mx-auto mt-7 max-w-6xl text-[clamp(3.5rem,9vw,8.8rem)] font-bold leading-[0.87] tracking-[-0.065em] text-masco-navy">
              Built for what
              <span className="block bg-gradient-to-r from-masco-navy to-masco-blue bg-clip-text text-transparent">comes next.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-masco-black/60 lg:text-xl">Integrated project delivery for the essential energy, industrial, and digital infrastructure shaping the Kingdom&apos;s future.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="#services" className="inline-flex items-center gap-2 rounded-full bg-masco-blue px-7 py-4 text-sm font-bold text-white transition-transform duration-150 ease-out active:scale-[0.97]">Discover MASCO Energy <ChevronRight className="h-4 w-4" /></Link>
              <Link href="#projects" className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-masco-navy">Explore projects <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </AnimateIn>

          <AnimateIn className="mx-auto mt-16 max-w-7xl" delay={0.12}>
            <div className="relative min-h-[440px] overflow-hidden rounded-[30px] bg-masco-navy shadow-[0_40px_100px_-45px_rgba(19,72,128,.7)] lg:min-h-[680px]">
              <Image src="/images/generated/saudi-energy-hero.png" alt="Illustrative energy infrastructure in the Kingdom" fill priority className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071c31]/75 via-transparent to-masco-navy/10" />
              <div className="hero-orbit absolute right-8 top-8 hidden h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm sm:flex" aria-hidden="true"><span className="hero-orbit-core h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_24px_8px_rgba(125,211,252,.55)]" /><span className="hero-orbit-satellite absolute h-2 w-2 rounded-full bg-white" /></div>
              <div className="absolute inset-x-0 bottom-0 grid gap-5 p-7 text-left text-white md:grid-cols-3 lg:p-10">
                {homeMetrics.map((metric) => (
                  <div key={metric.id} className="rounded-[20px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                    <p className="text-3xl font-bold"><CountUp metric={metric} duration={1900} minimumDigits={metric.id === "markets" ? 2 : undefined} /></p><p className="mt-1 text-xs text-white/75">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </section>

        <section id="about" className="px-6 py-28 lg:px-16 lg:py-40">
          <div className="mx-auto max-w-7xl text-center">
            <AnimateIn>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-masco-blue">A trusted Saudi partner</p>
              <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-bold leading-tight tracking-[-0.04em] text-masco-navy lg:text-7xl">Deep experience. Clear accountability. Enduring value.</h2>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-masco-black/55">{aboutParagraphs[1]}</p>
            </AnimateIn>
            <div className="mt-16 grid gap-5 text-left md:grid-cols-2">
              <AnimateIn className="rounded-[28px] bg-[#f3f7fa] p-8 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-masco-blue">Vision</p>
                <p className="mt-6 text-2xl font-bold leading-relaxed text-masco-navy lg:text-3xl">{visionMission.vision}</p>
              </AnimateIn>
              <AnimateIn className="rounded-[28px] bg-masco-navy p-8 text-white lg:p-12" delay={0.07}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-masco-blue">Mission</p>
                <p className="mt-6 text-2xl font-bold leading-relaxed lg:text-3xl">{visionMission.mission}</p>
              </AnimateIn>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#f3f7fa] px-6 py-28 lg:px-16 lg:py-40">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-masco-blue">Integrated capability</p>
              <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-bold leading-tight tracking-[-0.04em] text-masco-navy lg:text-7xl">One team from first decision to reliable operation.</h2>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-masco-black/55">{aboutParagraphs[2]}</p>
            </div>
            <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <AnimateIn key={service.name} delay={(index % 3) * 0.06}>
                  <article className="group flex min-h-[320px] flex-col rounded-[26px] bg-white p-8 shadow-[0_18px_55px_-40px_rgba(19,72,128,.55)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_28px_70px_-40px_rgba(19,72,128,.65)]">
                    <div className="flex items-center justify-between"><span className="text-sm font-bold text-masco-blue">0{index + 1}</span><ChevronRight className="h-5 w-5 text-masco-navy/25 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-masco-blue" /></div>
                    {(() => { const Icon = serviceIcons[index]; return <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-masco-blue/10 text-masco-blue transition-colors group-hover:bg-masco-blue group-hover:text-white"><Icon className="h-7 w-7" aria-hidden="true" /></div>; })()}
                    <div className="mt-auto pt-6"><h3 className="text-2xl font-bold text-masco-navy">{service.name}</h3><p className="mt-4 text-sm leading-7 text-masco-black/55">{service.description}</p><p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-masco-blue">{service.metric}</p></div>
                  </article>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-white px-6 py-28 lg:px-16 lg:py-40">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <AnimateIn>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-masco-blue">Integrated EPC Delivery</p>
                <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.04em] text-masco-navy lg:text-6xl">One integrated approach. From concept to operation.</h2>
                <p className="mt-7 text-lg leading-8 text-masco-black/55">{aboutParagraphs[3]}</p>
                <div className="mt-9 flex flex-wrap gap-3">{["Engineering", "Procurement", "Construction", "Commissioning", "Handover", "O&M"].map((model) => <span key={model} className="rounded-full border border-masco-navy/15 px-5 py-2.5 text-sm font-bold text-masco-navy">{model}</span>)}</div>
              </AnimateIn>
              <AnimateIn direction="left">
                <div className="relative min-h-[560px] overflow-hidden rounded-[30px]">
                  <Image src="/images/generated/pipeline-corridor.png" alt="MASCO Energy project delivery" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-masco-navy/80 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    {processSteps.map((step) => <div key={step.step} className="flex items-center gap-3 border-t border-white/15 py-3"><Check className="h-4 w-4 text-masco-blue" /><span className="text-sm font-bold">{step.title}</span></div>)}
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        <ProjectDirectorySection theme="luminous" />

        <section className="px-6 py-28 lg:px-16 lg:py-40">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-masco-blue">How we work</p>
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-[-0.04em] text-masco-navy lg:text-6xl">Six values behind every decision.</h2>
            <div className="mt-14 grid gap-5 text-left md:grid-cols-2 lg:grid-cols-3">
              {pillars.map((pillar, index) => { const Icon = valueIcons[index]; return <article key={pillar.title} className="group rounded-[24px] border border-masco-navy/10 bg-white p-7 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_-35px_rgba(19,72,128,.65)]"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-masco-blue/10 text-masco-blue transition-colors group-hover:bg-masco-blue group-hover:text-white"><Icon className="h-6 w-6" aria-hidden="true" /></div><h3 className="text-lg font-bold text-masco-navy">{pillar.title}</h3><p className="mt-4 text-sm leading-7 text-masco-black/55">{pillar.text}</p></article>; })}
            </div>
          </div>
        </section>

        <ProfileStorySections theme="luminous" />
      <FAQSection variant="classic" />
      </main>

      <SiteFooter theme="luminous" />
    </div>
  );
}
