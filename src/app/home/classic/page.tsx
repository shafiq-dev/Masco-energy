import { ProfileStorySections } from "@/components/home/ProfileStorySections";
import { SiteFooter } from "@/components/brand/SiteFooter";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { AboutSection } from "@/components/home/AboutSection";
import { FAQSection } from "@/components/home/FAQSection";
import { HeroBanner } from "@/components/home/HeroBanner";
import { MetricsDashboardSection } from "@/components/home/MetricsDashboardSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProjectDirectorySection } from "@/components/home/ProjectDirectorySection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { aboutParagraphs } from "@/lib/home-content";

export default function ClassicHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white theme-classic">
      <SiteHeader theme="classic" />

      <main className="flex-1">
      <HeroBanner
        variant="classic"
        subtitle="Engineering Progress. Delivering with Purpose."
        title="Trusted Saudi EPC Partner for Energy & Industry"
        description={aboutParagraphs[0]}
        primaryCta={{ label: "Our Services", href: "#services" }}
        secondaryCta={{ label: "Our Projects", href: "#projects" }}
      />

      <StatsSection variant="bar" theme="classic" />
      <AboutSection layout="centered" />
      <MetricsDashboardSection />
      <ServicesSection layout="cards" showMetrics />
      <ProjectDirectorySection theme="classic" />
      <PillarsSection />
      <ProcessSection />
      <TestimonialsSection layout="cards" />
      <ProfileStorySections theme="classic" />
      <FAQSection variant="classic" />
      </main>

      <SiteFooter theme="classic" />
    </div>
  );
}
