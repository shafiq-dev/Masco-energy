import { CountUp } from "@/components/metrics/CountUp";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Leaf, Users } from "lucide-react";
import { CapabilityExplorer } from "@/components/home/CapabilityExplorer";
import { SectorBreakdownSection } from "@/components/home/SectorBreakdownSection";
import { groupStrengths } from "@/lib/capabilities";
import { ceoMessage, clientLogos, heritage, peopleCommitments, specializedBusinesses, sustainability } from "@/lib/home-content";
import { homeVariants } from "@/lib/brand";
import { AnimatedHeritageTimeline } from "@/components/home/AnimatedHeritageTimeline";

function AnimatedFigure({ text }: { text: string }) {
  const match = text.match(/^(\+?)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return <>{text}</>;
  return <CountUp metric={{ id: text, value: Number(match[2].replaceAll(",", "")), prefix: match[1], suffix: match[3], decimals: match[2].includes(".") ? match[2].split(".")[1].length : undefined, label: text }} />;
}

type Theme = (typeof homeVariants)[number]["slug"];
const sequences: Record<Theme, readonly string[]> = {
  classic: ["markets", "expertise", "group", "leadership", "businesses", "assurance", "impact", "clients"],
  minimal: ["expertise", "markets", "leadership", "group", "businesses", "impact", "assurance", "clients"],
  services: ["expertise", "markets", "assurance", "businesses", "group", "impact", "leadership", "clients"],
  split: ["markets", "expertise", "group", "businesses", "leadership", "assurance", "impact", "clients"],
  editorial: ["leadership", "expertise", "markets", "group", "impact", "businesses", "assurance", "clients"],
  monumental: ["group", "markets", "expertise", "leadership", "businesses", "assurance", "impact", "clients"],
  kinetic: ["expertise", "markets", "assurance", "businesses", "impact", "group", "leadership", "clients"],
  dossier: ["markets", "expertise", "group", "assurance", "businesses", "leadership", "impact", "clients"],
  luminous: ["leadership", "markets", "expertise", "businesses", "impact", "group", "assurance", "clients"],
};

export function ProfileStorySections({ theme = "classic" }: { theme?: Theme }) {
  const sections: Record<string, React.ReactNode> = {
    markets: <SectorBreakdownSection />,
    expertise: <CapabilityExplorer />,
    leadership: <section id="leadership" className="story-section story-leadership">
      <div className="story-container">
        <div className="leadership-layout grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="story-portrait relative min-h-[420px] overflow-hidden lg:min-h-[570px]">
            <Image src={ceoMessage.image} alt={ceoMessage.name} fill className="object-cover object-[28%_top]" sizes="(max-width: 1024px) 100vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071c31]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 p-7 text-white"><p className="font-bold">{ceoMessage.name}</p><p className="mt-2 text-sm text-white/75">{ceoMessage.title}</p></div>
          </div>
          <div><p className="story-eyebrow">A message from our CEO</p><h2 className="story-title mt-5">Built on experience.<br />Focused on energy.</h2>
            <blockquote className="story-quote my-8 border-l-2 border-masco-blue pl-6 text-xl leading-relaxed">“Our focus remains clear: deliver safely, execute with discipline, and create lasting value for our clients.”</blockquote>
            <div className="story-copy space-y-5">{ceoMessage.paragraphs.filter((_, index) => index !== 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
        </div>
      </div>
    </section>,
    group: <section id="heritage" className="story-section story-group">
      <div className="story-container">
        <div className="grid gap-12 lg:grid-cols-2"><div><p className="story-eyebrow">The strength of MASCO Group</p><h2 className="story-title mt-5">A broader foundation.<br />A focused energy future.</h2><p className="story-copy mt-7 max-w-xl">Part of a diversified Saudi group with established experience across contracting, infrastructure, industry and real estate. This foundation supports mobilization, operational continuity and complex project execution.</p></div>
          <div className="group-strengths grid gap-6 sm:grid-cols-2">{groupStrengths.map((item, index) => <article key={item.title} className="story-panel border-t border-current/15 pt-5"><span className="story-eyebrow">0{index + 1}</span><h3 className="mt-5 text-lg font-bold">{item.title}</h3><p className="story-copy mt-3 text-sm">{item.text}</p></article>)}</div>
        </div>
        <AnimatedHeritageTimeline items={heritage} icons={["landmark", "route", "rail", "factory", "energy"]} />
      </div>
    </section>,
    businesses: <section id="businesses" className="story-section story-businesses">
      <div className="story-container"><p className="story-eyebrow">Our specialized businesses</p><h2 className="story-title mt-5 max-w-4xl">Connected expertise.<br />Wider possibilities.</h2><p className="story-copy mt-6 max-w-2xl">Specialized platforms complement core EPC delivery with pipeline expertise and digital infrastructure.</p>
        <div className="business-layout mt-12 grid gap-6 lg:grid-cols-2">{specializedBusinesses.map((business, index) => <article key={business.name} className="story-business-card story-panel overflow-hidden p-7 lg:p-10">
          <div className="business-photo relative aspect-[9/16] overflow-hidden"><Image src={business.photo} alt={`${index === 0 ? "pipeline engineering" : "digital infrastructure"} capability`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 20vw" /></div>
          <div className="business-card-content"><div className="flex items-start justify-between gap-4"><div className="business-logo-panel flex h-24 w-full max-w-[280px] items-center rounded-lg bg-[#071c31] px-6 py-4"><Image src={business.image} alt={business.name} width={300} height={100} className="max-h-16 w-full object-contain" /></div><span className="story-eyebrow">0{index + 1}</span></div>
          <p className="story-eyebrow mt-8">{business.eyebrow}</p><h3 className="mt-3 text-3xl font-bold">{business.name}</h3><p className="story-copy mt-5">{business.description}</p>
          <ul className="mt-7 space-y-3">{business.capabilities.map((capability) => <li key={capability} className="flex items-center gap-3 border-t border-current/15 pt-3 text-sm"><ArrowUpRight className="h-4 w-4 text-masco-blue" />{capability}</li>)}</ul>
          {business.metrics.length > 0 && <div className="mt-8 border-t border-current/15 pt-6"><p className="story-eyebrow">Combined partner credentials</p><div className="mt-4 grid grid-cols-2 gap-5">{business.metrics.map((metric) => <p key={metric} className="text-sm font-bold leading-relaxed"><AnimatedFigure text={metric} /></p>)}</div></div>}
          <a href={`mailto:info@masco.com.sa?subject=${encodeURIComponent(`${business.name} enquiry`)}`} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-masco-blue">Enquire about {business.name}<ArrowUpRight className="h-4 w-4" /></a></div>
        </article>)}</div>
      </div>
    </section>,
    assurance: <section id="assurance" className="story-section story-assurance">
      <div className="story-container">
        <div className="grid items-center gap-12 lg:grid-cols-2"><div><p className="story-eyebrow">HSE, quality & governance</p><h2 className="story-title mt-5">Safety and quality.<br />Built into delivery.</h2><p className="story-copy mt-6">Structured systems connect planning, mobilization, site execution and handover. Workforce protection, quality assurance and continuous improvement are part of every stage.</p><div className="mt-8 flex items-center gap-5 border-y border-current/20 py-7"><ShieldCheck className="h-12 w-12 shrink-0 text-masco-blue" /><div><p className="text-4xl font-bold"><AnimatedFigure text="10M+" /></p><p className="story-copy mt-2 text-sm">LTI-free man-hours reported across the project portfolio</p></div></div></div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[var(--theme-radius,20px)]"><Image src="/images/generated/epc-construction-empty.webp" alt="organized industrial construction site" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" /></div>
        </div>
        <div className="assurance-grid mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{[
          ["Quality in execution", "Assurance and control across design, procurement, construction, inspection, testing, documentation and turnover."],
          ["Risk & accountability", "Defined responsibilities and structured risk assessment, monitoring and mitigation planning."],
          ["Coordinated controls", "Engineering, procurement, construction, quality, HSE and project controls aligned through shared workflows."],
          ["Continuous improvement", "Audits, quality walkthroughs, training, lessons learned and regular performance evaluation."],
        ].map(([title, text]) => <article key={title} className="story-panel border-t border-current/20 pt-6"><h3 className="font-bold">{title}</h3><p className="story-copy mt-3 text-sm">{text}</p></article>)}</div>
      </div>
    </section>,
    impact: <section id="impact" className="story-section story-impact">
      <div className="story-container"><div className="impact-layout grid gap-14 lg:grid-cols-2">
        <div><div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[var(--theme-radius,20px)]"><Image src="/images/generated/water-recycling.webp" alt="industrial water recycling installation" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" /></div><Leaf className="mb-5 h-7 w-7 text-masco-blue" /><p className="story-eyebrow">Responsible project delivery</p><h2 className="story-title mt-5">Progress with purpose.</h2><p className="story-copy mt-6">Resource management, water stewardship and responsible site practices translate environmental commitments into project action.</p><div className="mt-8">{sustainability.map((item) => <article key={item.title} className="grid gap-3 border-t border-current/15 py-6 sm:grid-cols-[120px_1fr]"><p className="text-2xl font-bold text-masco-blue"><AnimatedFigure text={item.value} /></p><div><h3 className="font-bold">{item.title}</h3><p className="story-copy mt-2 text-sm">{item.text}</p></div></article>)}</div></div>
        <div><div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[var(--theme-radius,20px)]"><Image src="/images/generated/technical-training-empty.webp" alt="technical training laboratory" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" /></div><Users className="mb-5 h-7 w-7 text-masco-blue" /><p className="story-eyebrow">People & localization</p><h2 className="mt-4 text-3xl font-bold">Investing in national capability.</h2><div className="people-grid mt-8 grid gap-6 sm:grid-cols-2">{peopleCommitments.map((item) => <article key={item.title} className="story-panel border-t border-current/15 pt-5"><h3 className="font-bold">{item.title}</h3><p className="story-copy mt-3 text-sm">{item.text}</p></article>)}</div></div>
      </div></div>
    </section>,
    clients: <section id="clients" className="story-section story-clients">
      <div className="story-container"><p className="story-eyebrow">Clients & strategic relationships</p><h2 className="story-title mt-5 max-w-4xl">Experience across the Kingdom’s defining developments.</h2><p className="story-copy mt-6">Selected organizations and relationships featured in the company profile.</p><div className="client-grid mt-10 grid grid-cols-2 gap-px overflow-hidden border border-masco-navy/10 bg-masco-navy/10 sm:grid-cols-3 lg:grid-cols-5">{clientLogos.map((client) => <div key={client.name} className="flex min-h-40 flex-col items-center justify-center gap-5 bg-white p-6"><div className="client-logo-frame flex h-16 w-full max-w-[170px] items-center justify-center overflow-hidden">{client.name === "NEOM" ? <Image src={client.image} alt={client.name} width={300} height={169} className="client-neom-mark h-full w-full object-contain" /> : <Image src={client.image} alt={client.name} width={190} height={80} className="h-16 w-full object-contain" />}</div><p className="text-center text-xs leading-5 text-masco-navy/70">{client.name}</p></div>)}</div></div>
    </section>,
  };
  return <div className={`profile-story profile-${theme}`}>{sequences[theme].map((key) => <div key={key}>{sections[key]}</div>)}</div>;
}
