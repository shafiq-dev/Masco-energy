import { ProfileStorySections } from "@/components/home/ProfileStorySections";
import { SiteFooter } from "@/components/brand/SiteFooter";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { AboutSection } from "@/components/home/AboutSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ProjectDirectorySection } from "@/components/home/ProjectDirectorySection";
import { HeroBanner } from "@/components/home/HeroBanner";
import { MinimalMetricRail } from "@/components/home/MinimalMetricRail";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { pillars, aboutParagraphs } from "@/lib/home-content";
import { AnimateIn } from "@/components/metrics/AnimateIn";

export default function MinimalHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white theme-minimal">
      <SiteHeader theme="minimal" />

      <main className="flex-1">
        <HeroBanner
          variant="minimal"
          subtitle="Fewer words. Stronger proof."
          title="Saudi EPC written in plain terms"
          description={aboutParagraphs[0]}
          primaryCta={{ label: "Our Story", href: "#about" }}
        />

        <MinimalMetricRail />
        <AboutSection layout="editorial" />
        <ServicesSection layout="list" showMetrics />

        <SectionShell className="border-t border-masco-navy/10 bg-white">
          <SectionHeader
            eyebrow="Principles"
            title="What we refuse to dilute"
            description="Quality, safety, Vision 2030 alignment, and digital discipline — stated without marketing chrome."
          />
          <div className="mt-14">
            {pillars.map((pillar, index) => (
              <AnimateIn key={pillar.title} delay={index * 0.06}>
                <article className="grid gap-3 border-t border-masco-navy/15 py-8 md:grid-cols-[minmax(0,12rem)_1fr] md:gap-10">
                  <h3 className="text-base font-normal tracking-tight text-masco-navy">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-masco-black/65 md:text-base">
                    {pillar.text}
                  </p>
                </article>
              </AnimateIn>
            ))}
            <div className="border-t border-masco-navy/15" aria-hidden="true" />
          </div>
        </SectionShell>

        <ProjectDirectorySection theme="minimal" />
        <ProcessSection />
        <TestimonialsSection layout="quote" />
        <ProfileStorySections theme="minimal" />
        <FAQSection variant="minimal" />
      </main>

      <SiteFooter theme="minimal" />
    </div>
  );
}
