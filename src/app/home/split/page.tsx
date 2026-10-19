import { ProfileStorySections } from "@/components/home/ProfileStorySections";
import { SiteFooter } from "@/components/brand/SiteFooter";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { AboutSection } from "@/components/home/AboutSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ProjectDirectorySection } from "@/components/home/ProjectDirectorySection";
import { HeroBanner } from "@/components/home/HeroBanner";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SplitMetricsPanel } from "@/components/home/SplitMetricsPanel";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { aboutParagraphs } from "@/lib/home-content";

export default function SplitHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white theme-split">
      <SiteHeader theme="split" />

      <main className="flex-1">
        <HeroBanner
          variant="split"
          subtitle="Narrative left. Evidence right."
          title="A dialogue between story and scale"
          description={aboutParagraphs[2]}
          primaryCta={{ label: "About Us", href: "#about" }}
          secondaryCta={{ label: "Our Projects", href: "#projects" }}
        />

        <SplitMetricsPanel />
        <AboutSection layout="split" />
        <ServicesSection layout="grid" showMetrics />
        <ProjectDirectorySection theme="split" />
        <ProcessSection />
        <TestimonialsSection layout="cards" />
        <ProfileStorySections theme="split" />
        <FAQSection variant="classic" />
      </main>

      <SiteFooter theme="split" />
    </div>
  );
}
