"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/components/metrics/useReducedMotion";

function useHeroPhase(count: number) {
  const ref = useRef<HTMLSpanElement>(null);
  const [phase, setPhase] = useState(0);
  const [inView, setInView] = useState(false);
  const [visible, setVisible] = useState(true);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(ref.current);
    const update = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", update);
    update();
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);
  useEffect(() => {
    if (!inView || !visible || reduced) return;
    const timer = window.setInterval(() => setPhase((value) => (value + 1) % count), 4000);
    return () => window.clearInterval(timer);
  }, [inView, visible, reduced, count]);
  return { ref, phase: reduced ? 0 : phase };
}

/** Overlapping grid cells reserve the longest phrase's space across every cycle. */
export function HeroWords({ words, className = "" }: { words: readonly string[]; className?: string }) {
  const { ref, phase } = useHeroPhase(words.length);
  return <span ref={ref} className={`hero-words ${className}`}>
    <span className="sr-only">{words[0]}</span>
    {words.map((word, index) => <span key={word} aria-hidden="true" className="hero-word" data-active={phase === index}>{word}</span>)}
  </span>;
}

export function HeroGrid({ className = "" }: { className?: string }) {
  const { ref, phase } = useHeroPhase(4);
  return <span ref={ref} aria-hidden="true" className={`hero-swap-grid ${className}`} data-phase={phase}>
    {Array.from({ length: 9 }, (_, index) => <span key={index} className="hero-swap-tile" style={{ transitionDelay: `${index * 45}ms` }} />)}
  </span>;
}

type Direction = "classic" | "minimal" | "services" | "split" | "editorial" | "monumental" | "kinetic" | "dossier";
export function HeroSignal({ variant }: { variant: Direction }) {
  const technical = variant === "services" || variant === "kinetic";
  return <div className={`hero-signal hero-signal-${variant}`}>
    {technical || variant === "split" ? <HeroGrid /> : <span className="hero-signal-rule" aria-hidden="true" />}
    <HeroWords words={technical ? ["Engineering.", "Construction.", "Commissioning.", "Operations."] : ["Energy.", "Industry.", "Infrastructure."]} />
  </div>;
}
