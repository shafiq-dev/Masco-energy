"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { capabilityDetails } from "@/lib/capabilities";

export function CapabilityExplorer() {
  const [active, setActive] = useState(0);
  const capability = capabilityDetails[active];
  return (
    <section id="expertise" className="capability-section px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div><p className="story-eyebrow">Technical depth</p><h2 className="story-title mt-4">The capability behind the commitment.</h2></div>
          <p className="story-copy max-w-xl lg:justify-self-end">Explore the disciplines, systems and specialist support behind integrated project delivery.</p>
        </div>
        <div role="tablist" aria-label="Technical capabilities" className="capability-tabs flex gap-2 overflow-x-auto border-b pb-4">
          {capabilityDetails.map((item, index) => <button key={item.name} type="button" role="tab" id={`capability-tab-${index}`} aria-selected={active === index} aria-controls="capability-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => {
            if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
              event.preventDefault();
              const next = event.key === "Home" ? 0 : event.key === "End" ? capabilityDetails.length - 1 : (active + (event.key === "ArrowRight" ? 1 : -1) + capabilityDetails.length) % capabilityDetails.length;
              setActive(next);
              document.getElementById(`capability-tab-${next}`)?.focus();
            }
          }} className={`shrink-0 rounded-full px-5 py-3 text-sm font-bold transition-colors ${active === index ? "bg-masco-navy text-white" : "bg-masco-navy/5 text-masco-navy"}`}>{item.name}</button>)}
        </div>
        <div role="tabpanel" id="capability-panel" aria-labelledby={`capability-tab-${active}`} className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="relative min-h-72 overflow-hidden rounded-[var(--theme-radius,20px)] lg:min-h-[440px]">
            <Image key={capability.image} src={capability.image} alt={`${capability.name} delivery capabilities`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071c31] via-[#071c31]/10 to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-7 text-xl font-bold leading-relaxed text-white">{capability.intro}</p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {capability.groups.map((group) => <article key={group.title} className="border-t border-current/15 pt-5"><Check className="mb-4 h-5 w-5 text-masco-blue" aria-hidden="true" /><h3 className="font-bold">{group.title}</h3><p className="story-copy mt-3 text-sm">{group.text}</p></article>)}
            </div>
            <a href="#contact" className="mt-8 inline-flex w-fit items-center gap-3 border-b border-masco-blue pb-2 text-sm font-bold text-masco-blue">Discuss your project <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
