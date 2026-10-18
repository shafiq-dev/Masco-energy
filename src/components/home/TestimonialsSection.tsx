import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/home-content";
import { images } from "@/lib/images";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";

type TestimonialsSectionProps = {
  layout?: "cards" | "quote";
};

export function TestimonialsSection({
  layout = "cards",
}: TestimonialsSectionProps) {
  if (layout === "quote") {
    return (
      <SectionShell className="border-t border-masco-navy/10 bg-white">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Delivery Principles"
              title="How MASCO Energy creates value"
              description="A consistent operating approach connects technical expertise, governance, execution, and long-term asset performance."
            />
          </div>
          <article className="masco-card relative overflow-hidden p-8 lg:col-span-7 lg:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[80px] bg-masco-navy/5" />
            <Quote
              className="h-10 w-10 text-masco-blue/35"
              strokeWidth={1.5}
            />
            <blockquote className="mt-6 text-xl font-bold leading-snug text-masco-navy md:text-2xl">
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4 border-t border-masco-navy/10 pt-6">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[20px]">
                <Image
                  src={images.testimonials[0]}
                  alt={testimonials[0].author}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-masco-blue">
                  {testimonials[0].author}
                </p>
                <p className="text-xs text-masco-black/50">
                  {testimonials[0].company}
                </p>
              </div>
            </div>
          </article>
        </div>
      </SectionShell>
    );
  }

  const [featured, ...others] = testimonials;

  return (
    <SectionShell className="border-t border-masco-navy/10 masco-surface">
      <SectionHeader
        eyebrow="Delivery Principles"
        title="How MASCO Energy creates value"
        description="A consistent operating approach connects technical expertise, governance, execution, and long-term asset performance."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-12">
        <article className="masco-card relative overflow-hidden p-8 lg:col-span-7 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1 masco-gradient" />
          <Quote className="h-9 w-9 text-masco-blue/30" strokeWidth={1.5} />
          <p className="mt-6 text-base leading-relaxed text-masco-black/70 md:text-lg">
            &ldquo;{featured.quote}&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-[20px]">
              <Image
                src={images.testimonials[0]}
                alt={featured.author}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="font-bold text-masco-navy">{featured.author}</p>
              <p className="text-xs text-masco-black/50">{featured.company}</p>
            </div>
          </div>
        </article>

        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {others.map((item, index) => (
            <article key={item.author} className="masco-card p-6">
              <p className="text-sm leading-relaxed text-masco-black/65">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-masco-navy/10 pt-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-[20px]">
                  <Image
                    src={images.testimonials[index + 1]}
                    alt={item.author}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-masco-navy">
                    {item.author}
                  </p>
                  <p className="text-xs text-masco-black/50">{item.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
