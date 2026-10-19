import { CircleHelp } from "lucide-react";
import { faqs } from "@/lib/home-content";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";

type FAQSectionProps = {
  variant?: "classic" | "minimal" | "accordion";
};

export function FAQSection({ variant = "classic" }: FAQSectionProps) {
  return (
    <SectionShell
      id="faq"
      className="masco-surface-tint border-t border-masco-navy/10"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Common questions about MASCO Energy's integrated capabilities, markets, projects and specialized businesses."
          />
        </div>

        <div className="space-y-4 lg:col-span-8">
          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className={
                variant === "minimal"
                  ? "masco-card flex gap-4 p-6"
                  : "masco-card p-6 md:p-8"
              }
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-masco-navy/8">
                  <CircleHelp
                    className="h-5 w-5 text-masco-blue"
                    strokeWidth={1.75}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  {variant !== "minimal" && (
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-masco-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                  <h3 className="mt-1 text-lg font-bold text-masco-navy md:text-xl">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-masco-black/65 md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
