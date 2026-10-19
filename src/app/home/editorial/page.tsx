import { ProfileStorySections } from "@/components/home/ProfileStorySections";
import Link from "next/link";
import { SectionImage } from "@/components/home/SectionImage";
import { SiteFooter } from "@/components/brand/SiteFooter";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { EditorialMetricCallout } from "@/components/home/EditorialMetricCallout";
import { FAQSection } from "@/components/home/FAQSection";
import { GrowthTimelineSection } from "@/components/home/GrowthTimelineSection";
import { HeroBanner } from "@/components/home/HeroBanner";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProjectDirectorySection } from "@/components/home/ProjectDirectorySection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import {
  aboutParagraphs,
  pillars,
  visionMission,
} from "@/lib/home-content";
import { IconBox, pillarIcons } from "@/lib/icons";

const bands = [
  {
    tone: "gradient" as const,
    title: "Our Vision",
    text: visionMission.vision,
    image: "/images/generated/pipeline-corridor.png",
  },
  {
    tone: "white" as const,
    title: "Who We Are",
    text: aboutParagraphs[0],
    image: "/images/generated/technical-training-empty.png",
  },
  {
    tone: "tint" as const,
    title: "Our Mission",
    text: visionMission.mission,
    image: "/images/generated/engineering-design-empty.png",
  },
  {
    tone: "white" as const,
    title: "Saudi Vision 2030",
    text: aboutParagraphs[3],
    image: "/images/generated/epc-construction-empty.png",
  },
];

export default function EditorialHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white theme-editorial">
      <SiteHeader theme="editorial" />

      <main className="flex-1">
      <HeroBanner
        variant="editorial"
        title="Saudi EPC excellence for energy & industry"
        subtitle="Engineering Progress. Delivering with Purpose."
        description={aboutParagraphs[1]}
        primaryCta={{ label: "Explore Projects", href: "#projects" }}
      />

      {bands.map((band, index) => (
        <section
          key={band.title}
          id={index === 1 ? "about" : undefined}
          className={
            band.tone === "gradient"
              ? "masco-gradient px-6 py-20 text-white lg:px-16 lg:py-28"
              : band.tone === "tint"
                ? "masco-surface-tint px-6 py-20 lg:px-16 lg:py-28"
                : "bg-white px-6 py-20 lg:px-16 lg:py-28"
          }
        >
          <div
            className={`mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <div className="flex items-center gap-3">
                <span
                  className={`h-2 w-2 rounded-full ${
                    band.tone === "gradient" ? "bg-white" : "bg-masco-blue"
                  }`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-[0.25em] ${
                    band.tone === "gradient"
                      ? "text-white/70"
                      : "text-masco-blue"
                  }`}
                >
                  Section {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2
                className={`mt-4 text-3xl font-bold md:text-4xl ${
                  band.tone === "gradient" ? "text-white" : "text-masco-navy"
                }`}
              >
                {band.title}
              </h2>
              <p
                className={`mt-6 text-base leading-relaxed md:text-lg ${
                  band.tone === "gradient"
                    ? "text-white/85"
                    : "text-masco-black/65"
                }`}
              >
                {band.text}
              </p>
              <EditorialMetricCallout
                bandTitle={band.title}
                variant={band.tone === "gradient" ? "gradient" : "light"}
              />
            </div>
            <SectionImage
              src={band.image}
              alt={band.title}
              aspect="video"
              overlay={band.tone === "gradient" ? "none" : "gradient"}
              className={
                band.tone === "gradient" ? "ring-2 ring-white/20 shadow-xl" : "shadow-md"
              }
            />
          </div>
        </section>
      ))}

      <section className="px-6 py-20 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-masco-blue" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-masco-blue">
              Core Pillars
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.title];
              return (
                <article
                  key={pillar.title}
                  className="masco-card flex gap-4 p-8"
                >
                  {Icon && <IconBox icon={Icon} variant="light" size="lg" />}
                  <div>
                    <h3 className="text-xl font-bold text-masco-navy">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-masco-black/65">
                      {pillar.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <GrowthTimelineSection />
      <ServicesSection layout="grid" showMetrics />
      <ProjectDirectorySection theme="editorial" />
      <StatsSection variant="bar" theme="editorial" />
      <ProcessSection />
      <TestimonialsSection layout="quote" />
      <ProfileStorySections theme="editorial" />
      <FAQSection variant="minimal" />

      <section className="border-t border-masco-navy/10 px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-masco-navy">
            Compare all homepage directions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-masco-black/60">
            Return to the main gallery to review all nine corporate concepts.
          </p>
          <Link
            href="/main"
            className="mt-8 inline-flex rounded-[20px] border-2 border-masco-navy px-8 py-3 text-sm font-bold text-masco-navy transition-opacity hover:opacity-80"
          >
            Back to Gallery
          </Link>
        </div>
      </section>

      </main>

      <SiteFooter theme="editorial" />
    </div>
  );
}
