"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { FocusEvent } from "react";
import { useReducedMotion } from "@/components/metrics/useReducedMotion";

/** Rotation follows the visible controls, never a visitor reading further down. */
export function useRotatingTabs(count: number, duration = 8000) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const elapsed = useRef(0);
  const reduced = useReducedMotion();
  const running = inView && visible && !paused && !hovered && !focused && !reduced;

  useEffect(() => {
    const button = controlsRef.current?.querySelector<HTMLElement>('[role="tab"][aria-selected="true"], .project-filter[aria-pressed="true"]');
    const rail = button?.parentElement;
    if (button && rail && rail.scrollWidth > rail.clientWidth) {
      rail.scrollTo({ left: button.offsetLeft - rail.clientWidth / 2 + button.clientWidth / 2, behavior: reduced ? "instant" : "smooth" });
    }
  }, [active, reduced]);

  useEffect(() => {
    const element = controlsRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "-80px 0px 0px 0px" });
    observer.observe(element);
    const updateVisibility = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", updateVisibility);
    updateVisibility();
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", updateVisibility); };
  }, []);

  useEffect(() => {
    if (!running || count < 2) return;
    let frame = 0;
    let last = 0;
    const tick = (now: number) => {
      if (!rootRef.current?.querySelector("details[open]")) {
        if (last) elapsed.current += now - last;
        if (elapsed.current >= duration) {
          elapsed.current = 0;
          setActive((value) => (value + 1) % count);
        }
        rootRef.current?.style.setProperty("--tab-progress", String(elapsed.current / duration));
      }
      last = now;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running, count, duration]);

  const select = useCallback((index: number) => {
    elapsed.current = 0;
    rootRef.current?.style.setProperty("--tab-progress", "0");
    setActive(index);
  }, []);

  const interactionHandlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocusCapture: (event: FocusEvent<HTMLElement>) => {
      if (event.target.matches(":focus-visible")) setFocused(true);
    },
    onBlurCapture: (event: FocusEvent<HTMLElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
    },
  };

  return { active, select, rootRef, controlsRef, paused, reduced, running, interactionHandlers, togglePaused: () => setPaused((value) => !value) };
}
