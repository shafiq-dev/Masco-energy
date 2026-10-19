"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import type { CSSProperties } from "react";
import { CountUp } from "@/components/metrics/CountUp";
import { useRotatingTabs } from "@/components/home/useRotatingTabs";
import { getKpisByIds } from "@/lib/metrics";

const metrics = getKpisByIds(["portfolio", "workforce", "markets"]);
const scenes = [
  { image: "/images/generated/saudi-energy-hero.webp", label: "Energy at scale", color: "#76d9ff", alt: "Energy and industrial infrastructure" },
  { image: "/images/generated/epc-construction-empty.webp", label: "Built to deliver", color: "#9ce8d5", alt: "Organized industrial construction infrastructure" },
  { image: "/images/generated/coastal-energy.webp", label: "Connected capability", color: "#bdcaff", alt: "Coastal energy and utilities infrastructure" },
] as const;

export function LuminousHeroVisual() {
  const { active, select, rootRef, controlsRef, paused, reduced, running, togglePaused, interactionHandlers } = useRotatingTabs(scenes.length, 6500);
  const Icon = paused || reduced ? Play : Pause;
  return <section ref={rootRef} onFocusCapture={interactionHandlers.onFocusCapture} onBlurCapture={interactionHandlers.onBlurCapture} aria-label="MASCO Energy at a glance" data-scene={active} data-rotating={running} className="luminous-visual relative min-h-[600px] overflow-hidden rounded-[30px] bg-[#071c31] text-white shadow-[0_40px_100px_-45px_rgba(19,72,128,.7)] sm:min-h-[520px] lg:min-h-[680px]" style={{ "--scene-accent": scenes[active].color } as CSSProperties}>
    <div ref={controlsRef} className="pointer-events-none absolute inset-0" aria-hidden="true" />
    {scenes.map((scene, index) => <div key={scene.image} className="luminous-scene absolute inset-0" data-active={active === index} aria-hidden={active !== index}>
      <Image src={scene.image} alt={scene.alt} fill priority={index === 0} loading={index === 0 ? undefined : "eager"} className="object-cover" sizes="(max-width: 1280px) 100vw, 1280px" />
    </div>)}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071c31]/90 via-[#071c31]/5 to-[#071c31]/15" />
    <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-4 p-5 sm:p-7 lg:p-10">
      <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-[#071c31]/25 px-4 py-3 text-[10px] font-bold uppercase tracking-[.14em] backdrop-blur-xl"><span className="h-1.5 w-1.5 rounded-full" style={{ background: scenes[active].color }} aria-hidden="true" /><span>{scenes[active].label}</span></div>
      <button type="button" disabled={reduced} onClick={togglePaused} aria-label={reduced ? "Hero slideshow disabled by your motion preference" : `${paused ? "Resume" : "Pause"} hero slideshow`} aria-pressed={paused || reduced} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-[#071c31]/25 backdrop-blur-xl transition-colors hover:bg-white/20 disabled:opacity-40"><Icon className="h-4 w-4" aria-hidden="true" /></button>
    </div>
    <div onMouseEnter={interactionHandlers.onMouseEnter} onMouseLeave={interactionHandlers.onMouseLeave} role="group" aria-label="Choose a company highlight" className="hero-metrics absolute inset-x-0 bottom-0 grid gap-3 p-5 text-left sm:gap-5 sm:p-7 md:grid-cols-3 lg:p-10">
      {metrics.map((metric, index) => <button key={metric.id} type="button" onClick={() => select(index)} aria-pressed={active === index} aria-label={`${metric.label} — view ${scenes[index].label.toLowerCase()}`} className="hero-metric relative overflow-hidden rounded-[20px] border border-white/20 bg-[#071c31]/40 p-5 text-left backdrop-blur-xl" data-active={active === index}>
        <span className="block text-3xl font-bold"><CountUp metric={metric} duration={1900} minimumDigits={metric.id === "markets" ? 2 : undefined} /></span>
        <span className="mt-1 block text-xs leading-5 text-white/85">{metric.label}</span>
        <svg className="hero-metric-stroke" aria-hidden="true" width="100%" height="100%"><rect x="1" y="1" rx="19" pathLength="100" /></svg>
      </button>)}
    </div>
  </section>;
}
