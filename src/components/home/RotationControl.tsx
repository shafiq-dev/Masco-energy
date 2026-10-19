"use client";

import { Pause, Play } from "lucide-react";

export function RotationControl({ paused, reduced, onToggle, label }: { paused: boolean; reduced: boolean; onToggle: () => void; label: string }) {
  const Icon = paused || reduced ? Play : Pause;
  return <button type="button" onClick={onToggle} disabled={reduced} aria-label={reduced ? "Automatic rotation disabled by your motion preference" : `${paused ? "Resume" : "Pause"} automatic ${label} rotation`} aria-pressed={paused || reduced} className="rotation-control inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-current/20 transition-colors hover:bg-current/5 disabled:opacity-40" title={reduced ? "Reduced motion enabled" : `${paused ? "Resume" : "Pause"} slideshow`}><Icon className="h-4 w-4" aria-hidden="true" /></button>;
}
