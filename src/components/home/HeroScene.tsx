"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import type { CSSProperties } from "react";
import { useRotatingTabs } from "@/components/home/useRotatingTabs";

/** Keeps each theme's framing while sharing the hero's photo/progress clock. */
export function HeroScene({ src, alt, sizes = "100vw" }: { src: string; alt: string; sizes?: string }) {
  const scenes = [...new Set([src, "/images/generated/coastal-energy.webp", "/images/generated/epc-construction-empty.webp"])];
  const { active, select, rootRef, controlsRef, paused, reduced, running, togglePaused, interactionHandlers } = useRotatingTabs(scenes.length, 6500);
  const Icon = paused || reduced ? Play : Pause;
  return <section ref={rootRef} aria-label="Energy infrastructure highlights" className="theme-hero-scenes absolute inset-0" data-scene={active} data-rotating={running} style={{ "--scene-accent": ["#76d9ff", "#9ce8d5", "#bdcaff"][active] } as CSSProperties}>
    <div ref={controlsRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />
    {scenes.map((image, index) => <div key={image} className="luminous-scene absolute inset-0" data-active={active === index} aria-hidden={active !== index}><Image src={image} alt={index === 0 ? alt : index === 1 ? "Coastal energy infrastructure" : "Industrial construction infrastructure"} fill priority={index === 0} loading={index === 0 ? undefined : "eager"} className="object-cover" sizes={sizes} /></div>)}
    <div className="theme-scene-controls" {...interactionHandlers}>
      {scenes.map((image, index) => <button key={image} onClick={() => select(index)} aria-label={`View hero image ${index + 1}`} aria-pressed={active === index} className="theme-scene-step"><span /></button>)}
      <button onClick={togglePaused} disabled={reduced} aria-label={`${paused ? "Resume" : "Pause"} hero images`} className="theme-scene-pause"><Icon size={13} /></button>
    </div>
    <span className="theme-scene-edge" aria-hidden="true" />
  </section>;
}
