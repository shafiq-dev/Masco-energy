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
      <SiteHeader gallery />

      <section className="masco-surface border-b border-masco-navy/10 px-6 py-12 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Design Exploration"
            title="MASCO Energy Home Page Directions"
            description="Nine corporate art directions grounded in the 2026 company profile: the same Saudi EPC story, six core markets, integrated capabilities, named projects, specialized businesses, leadership, sustainability commitments and contact journey."
          />
        </div>
      </section>

      <main className="flex-1 px-6 py-12 lg:px-16">
        <div className="mx-auto mb-10 max-w-7xl overflow-hidden rounded-[28px] bg-[#071c31] p-7 text-white sm:p-10 lg:p-14">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-sky-300">Recommended direction · Theme 09</p>
          <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Luminous Precision</h1><p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">A confident, contemporary expression of MASCO Energy. Immersive infrastructure imagery, fluid project discovery and a clear story from expertise to delivery.</p></div><Link href="/home/luminous" className="inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-white px-6 py-4 text-sm font-bold text-masco-navy">Explore the lead direction<ArrowRight className="h-4 w-4" /></Link></div>
        </div>
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

      <SiteFooter gallery />
    </div>
  );
}
