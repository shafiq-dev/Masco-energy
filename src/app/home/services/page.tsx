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
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { aboutParagraphs } from "@/lib/home-content";

export default function ServicesHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white theme-services">
      <SiteHeader theme="services" />

      <main className="flex-1">
      <HeroBanner
        variant="services"
        subtitle="Engineering Progress. Delivering with Purpose."
        title="Integrated EPC Delivery Across the Kingdom"
        description={aboutParagraphs[3]}
        primaryCta={{ label: "View Services", href: "#services" }}
      />

      <StatsSection variant="inline" theme="services" />
      <ServicesSection layout="cards" showMetrics />

      <AboutSection layout="split" />
      <ProjectDirectorySection theme="services" />
      <ProcessSection />
      <MetricsDashboardSection compact />
      <TestimonialsSection layout="cards" />
      <ProfileStorySections theme="services" />
      <FAQSection variant="classic" />
      </main>

      <SiteFooter theme="services" />
    </div>
  );
}
