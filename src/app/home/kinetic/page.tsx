import { ProjectDirectorySection } from "@/components/home/ProjectDirectorySection";
import { ProfileStorySections } from "@/components/home/ProfileStorySections";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
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

const marketsMetric = getKpisByIds(["markets"])[0];

export default function KineticHomePage() {
  return (
    <div className="theme-kinetic min-h-screen bg-[#071c31] text-white">
      <SiteHeader theme="kinetic" />

      <main>
        <section
          id="home"
          className="relative overflow-hidden px-6 py-20 lg:min-h-[760px] lg:px-16 lg:py-28"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(22,145,207,.22), transparent 32%), linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
            backgroundSize: "auto, 64px 64px, 64px 64px",
          }}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12">
            <AnimateIn className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
                <span className="hero-live-dot h-2 w-2 rounded-full bg-masco-blue" />
                Integrated project delivery
              </div>
              <h1 className="mt-8 text-[clamp(3.4rem,8.5vw,8rem)] font-bold leading-[0.88] tracking-[-0.06em]">
                One connected
                <span className="block text-masco-blue">delivery system.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">{aboutParagraphs[2]}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-3 rounded-full bg-masco-blue px-7 py-4 text-sm font-bold text-white transition-transform duration-150 ease-out active:scale-[0.97]"
                >
                  Follow the delivery flow
                  <ArrowDownRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-bold transition-colors duration-200 hover:bg-white/8"
                >
                  Explore projects
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn direction="left" className="lg:col-span-5">
              <div className="relative mx-auto aspect-square max-w-[520px]">
                <div className="absolute inset-[6%] rounded-full border border-white/10" />
                <div className="absolute inset-[18%] rounded-full border border-masco-blue/35" />
                <div className="absolute inset-[31%] rounded-full bg-masco-blue/10 shadow-[0_0_90px_rgba(22,145,207,.24)] backdrop-blur-md" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <p className="text-6xl font-bold"><CountUp metric={marketsMetric} minimumDigits={2} /></p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">connected capabilities</p>
                  </div>
                </div>
                {services.slice(0, 4).map((service, index) => {
                  const positions = ["left-0 top-[45%]", "right-[8%] top-0", "right-0 bottom-[24%]", "bottom-0 left-[16%]"];
                  return (
                    <div key={service.name} className={`absolute ${positions[index]} rounded-full border border-white/15 bg-[#0b2947]/90 px-4 py-2 text-xs font-bold shadow-lg backdrop-blur-md`}>
                      {service.name}
                    </div>
                  );
                })}
              </div>
            </AnimateIn>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.035] px-6 py-6 lg:px-16">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 text-xs font-bold uppercase tracking-[0.18em] text-white/55">
            <span>+4.5B project value</span>
            <span>3,000+ workforce</span>
            <span>6 core markets</span>
            <span>Integrated EPC delivery</span>
          </div>
        </section>

        <section id="services" className="px-6 py-24 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-masco-blue">Delivery engine</p>
                <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">Momentum with control at every handoff.</h2>
                <p className="mt-6 leading-7 text-white/55">Six capabilities operate as one system, aligning scope, supply, execution, readiness, and long-term asset performance.</p>
              </div>
              <div className="relative lg:col-span-7 lg:col-start-6">
                <div className="absolute bottom-5 left-[23px] top-5 w-px bg-gradient-to-b from-masco-blue via-masco-blue/40 to-transparent" />
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <AnimateIn key={service.name} delay={index * 0.06} direction="left">
                      <article className="group relative grid gap-4 rounded-[20px] border border-white/10 bg-white/[0.045] p-6 pl-16 transition-[transform,border-color,background-color] duration-200 ease-out hover:translate-x-1 hover:border-masco-blue/45 hover:bg-white/[0.07]">
                        <span className="absolute left-[15px] top-7 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-masco-blue ring-8 ring-[#071c31]" />
                        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                          <div>
                            <span className="text-xs font-bold text-masco-blue">0{index + 1}</span>
                            <h3 className="mt-1 text-xl font-bold">{service.name}</h3>
                            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55">{service.description}</p>
                          </div>
                          <ArrowRight className="h-5 w-5 shrink-0 text-white/30 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-masco-blue" />
                        </div>
                      </article>
                    </AnimateIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#0b2947] px-6 py-24 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
            <AnimateIn className="lg:col-span-6">
              <div className="relative min-h-[520px] overflow-hidden rounded-[28px]">
                <Image src="/images/generated/commissioning-systems.png" alt="Illustrative industrial commissioning systems" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071c31]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-masco-blue">Built for the Kingdom</p>
                  <p className="mt-3 max-w-lg text-2xl font-bold leading-tight">Saudi market knowledge connected to disciplined project governance.</p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn direction="left" className="lg:col-span-5 lg:col-start-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-masco-blue">Company platform</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">Experience that moves projects forward.</h2>
              <p className="mt-7 leading-8 text-white/60">{aboutParagraphs[1]}</p>
              <div className="mt-8 space-y-5 border-t border-white/10 pt-8">
                <div><p className="text-sm font-bold">Vision</p><p className="mt-2 text-sm leading-7 text-white/55">{visionMission.vision}</p></div>
                <div><p className="text-sm font-bold">Mission</p><p className="mt-2 text-sm leading-7 text-white/55">{visionMission.mission}</p></div>
              </div>
            </AnimateIn>
          </div>
        </section>

        <ProjectDirectorySection theme="kinetic" />

        <section className="bg-white px-6 py-24 text-masco-black lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-masco-blue">Project sequence</p>
              <h2 className="mt-5 text-4xl font-bold text-masco-navy lg:text-5xl">A clear route from definition to operation.</h2>
              <div className="mt-10 space-y-7">
                {processSteps.map((step) => (
                  <div key={step.step} className="flex gap-5">
                    <span className="text-sm font-bold text-masco-blue">{step.step}</span>
                    <div><h3 className="font-bold text-masco-navy">{step.title}</h3><p className="mt-2 text-sm leading-7 text-masco-black/60">{step.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] bg-masco-navy p-8 text-white lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-masco-blue">Operating principles</p>
              <div className="mt-8 space-y-6">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="flex gap-4 border-t border-white/10 pt-6">
                    {pillarIcons[pillar.title] && <IconBox icon={pillarIcons[pillar.title]} variant="blue" size="sm" className="rounded-xl" />}
                    <div><h3 className="font-bold">{pillar.title}</h3><p className="mt-2 text-sm leading-7 text-white/55">{pillar.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProfileStorySections theme="kinetic" />
        <div className="bg-white text-masco-black"><FAQSection variant="classic" /></div>
      </main>

      <SiteFooter theme="kinetic" />
    </div>
  );
}
