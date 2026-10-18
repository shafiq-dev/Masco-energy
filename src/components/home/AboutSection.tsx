import { SectionImage } from "@/components/home/SectionImage";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";
import { aboutParagraphs, visionMission } from "@/lib/home-content";
import { images } from "@/lib/images";

type AboutSectionProps = {
  layout?: "centered" | "split" | "editorial";
};

export function AboutSection({ layout = "centered" }: AboutSectionProps) {
  if (layout === "split") {
    return (
      <SectionShell
        id="about"
        className="masco-surface-tint border-t border-masco-navy/10"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionImage
            src={images.about}
            alt="MASCO Energy engineering team"
            aspect="portrait"
            className="shadow-md"
          />
          <div>
            <SectionHeader
              eyebrow="About Us"
              title="A focused Saudi energy platform"
              description={aboutParagraphs[0]}
            />
            <div className="mt-10 space-y-5">
              {aboutParagraphs.slice(1).map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="border-l-2 border-masco-blue/30 pl-5 text-sm leading-relaxed text-masco-black/65 md:text-base"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
    );
  }

  if (layout === "editorial") {
    return (
      <SectionShell id="about">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader eyebrow="About Us" title="Who We Are" />
            <div className="mt-10 space-y-8">
              {aboutParagraphs.map((para, i) => (
                <div key={para.slice(0, 40)}>
                  <p className="text-base leading-relaxed text-masco-black/65 md:text-lg">
                    {para}
                  </p>
                  {i < aboutParagraphs.length - 1 && (
                    <div className="mt-8 h-px bg-masco-navy/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <SectionImage
              src={images.about}
              alt="Corporate team at work"
              aspect="portrait"
              className="sticky top-24 shadow-lg"
            />
          </div>
        </div>
      </SectionShell>
    );
  }

  return (
    <SectionShell id="about" className="masco-grid-bg">
      <SectionHeader
        eyebrow="About Us"
        title="Saudi EPC & Integrated Energy Contracting"
        description={visionMission.mission}
      />

      <div className="mt-14 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionImage
            src={images.about}
            alt="MASCO Energy professionals"
            aspect="portrait"
            overlay="gradient"
            className="shadow-lg"
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {aboutParagraphs.map((para, index) => (
            <article
              key={para.slice(0, 40)}
              className={`masco-card p-6 ${index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              <span className="text-xs font-bold text-masco-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-masco-black/65">
                {para}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
