import Image from "next/image";
import { AnimateIn } from "@/components/metrics/AnimateIn";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";
import { sectorNames } from "@/lib/metrics";

const descriptions = [
  "Engineering, construction, utilities and infrastructure supporting upstream and downstream developments.",
  "Industrial facilities, infrastructure, utilities and associated systems for complex petrochemical developments.",
  "Generation, transmission, distribution, substations and associated energy infrastructure.",
  "Civil, structural and utility infrastructure for mining, processing, manufacturing and industrial facilities.",
  "Water, power, drainage and utility networks supporting industrial facilities and major developments.",
  "Infrastructure supporting giga-projects, industrial zones, transportation networks and national developments.",
];

const marketImages = ["pipeline-corridor", "saudi-energy-hero", "industrial-utilities", "epc-construction-empty", "water-recycling", "northwest-infrastructure"];

export function SectorBreakdownSection() {
  return (
    <SectionShell id="markets" className="border-t border-masco-navy/10 masco-surface-tint">
      <SectionHeader eyebrow="Six Core Markets" title="Expertise across Saudi Arabia’s critical industries" description="Integrated capabilities serving energy, industry, essential utilities and strategic infrastructure." />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sectorNames.map((sector, index) => (
          <AnimateIn key={sector} delay={index * 0.06}>
            <article className="masco-card h-full overflow-hidden">
              <div className="relative aspect-[16/9]"><Image src={`/images/generated/${marketImages[index]}.webp`} alt={`${sector.toLowerCase()} infrastructure`} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></div><div className="p-6">
              <span className="text-xs font-bold text-masco-blue">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-bold text-masco-navy">{sector}</h3>
              <p className="mt-3 text-sm leading-relaxed text-masco-black/60">{descriptions[index]}</p>
            </div></article>
          </AnimateIn>
        ))}
      </div>
    </SectionShell>
  );
}
