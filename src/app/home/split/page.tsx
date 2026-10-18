import { SiteFooter } from "@/components/brand/SiteFooter";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { AboutSection } from "@/components/home/AboutSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ProjectDirectorySection } from "@/components/home/ProjectDirectorySection";
import { HeroBanner } from "@/components/home/HeroBanner";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SplitMetricsPanel } from "@/components/home/SplitMetricsPanel";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { aboutParagraphs } from "@/lib/home-content";

export default function SplitHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <HeroBanner
        variant="split"
        subtitle="Building for Better Life"
        title="Trusted Saudi EPC Partner Across the Kingdom"
        description={aboutParagraphs[2]}
        primaryCta={{ label: "About Us", href: "#about" }}
        secondaryCta={{ label: "Our Sectors", href: "#projects" }}
      />

      <SplitMetricsPanel />
      <AboutSection layout="split" />
      <ServicesSection layout="grid" showMetrics />
      <ProjectDirectorySection />
      <PillarsSection />
      <ProcessSection />
      <TestimonialsSection layout="cards" />
      <FAQSection variant="classic" />
      <SiteFooter />
    </div>
  );
}
