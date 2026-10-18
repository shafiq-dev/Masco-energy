import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/brand/SiteFooter";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { SectionHeader } from "@/components/home/SectionHeader";
import { ThumbnailPreview } from "@/components/thumbnails/ThumbnailPreview";
import { homeVariants } from "@/lib/brand";

export default function MainPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <section className="masco-surface border-b border-masco-navy/10 px-6 py-12 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Design Exploration"
            title="MASCO Energy Home Page Directions"
            description="Nine distinct corporate art directions using one unified MASCO Energy profile: the same company story, capabilities, sectors, values, delivery models, and contact journey expressed through different visual systems."
          />
        </div>
      </section>

      <main className="flex-1 px-6 py-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {homeVariants.map((variant, index) => (
            <Link
              key={variant.slug}
              href={`/home/${variant.slug}`}
              className="masco-card group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-masco-navy/10 bg-masco-white p-4">
                <div className="pointer-events-none h-full w-full scale-[0.98] overflow-hidden rounded-[12px] border border-masco-navy/5 bg-white shadow-inner">
                  <ThumbnailPreview slug={variant.slug} />
                </div>
                <span className="absolute right-6 top-6 rounded-[20px] bg-masco-navy px-3 py-1 text-xs font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-bold text-masco-navy group-hover:text-masco-blue">
                  {variant.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-masco-black/60">
                  {variant.direction}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-masco-blue">
                  View full page
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
