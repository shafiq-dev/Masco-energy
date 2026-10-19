import { ProfileStorySections } from "@/components/home/ProfileStorySections";
import { SiteFooter } from "@/components/brand/SiteFooter";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { AboutSection } from "@/components/home/AboutSection";
import { FAQSection } from "@/components/home/FAQSection";
import { HeroBanner } from "@/components/home/HeroBanner";
import { MetricsDashboardSection } from "@/components/home/MetricsDashboardSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProjectDirectorySection } from "@/components/home/ProjectDirectorySection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { aboutParagraphs } from "@/lib/home-content";

export default function ServicesHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white theme-services">
      <SiteHeader theme="services" />

      <main className="flex-1">
        <HeroBanner
          variant="services"
          subtitle="Capability console · EPC index"
          title="Integrated delivery across the Kingdom"
          description={aboutParagraphs[3]}
          primaryCta={{ label: "View Services", href: "#services" }}
        />

        <StatsSection variant="inline" theme="services" />
        <ServicesSection layout="cards" showMetrics index="01" />
        <AboutSection layout="split" />
        <ProjectDirectorySection theme="services" />
        <ProcessSection />
        <MetricsDashboardSection compact />
        <ProfileStorySections theme="services" />
        <FAQSection variant="classic" />
      </main>

      <SiteFooter theme="services" />
    </div>
  );
}
