"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MascoLogo } from "@/components/brand/MascoLogo";

type NavItem = {
  label: string;
  href: string;
};

export function MobileNav({
  items,
  dark = false,
}: {
  items: NavItem[];
  logoVariant?: "default" | "light";
  dark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    panelRef.current?.querySelector<HTMLElement>('button[aria-label="Close menu"]')?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab") {
        const controls = panelRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`flex h-11 w-11 items-center justify-center rounded-[20px] border transition-colors ${
          dark
            ? "border-white/15 text-white hover:bg-white/10"
            : "border-masco-navy/10 text-masco-navy hover:bg-masco-navy/5"
        }`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" strokeWidth={1.75} />
      </button>

      {open && createPortal(
        <div ref={panelRef} role="dialog" aria-modal="true" aria-label="Site navigation" className="fixed inset-0 z-[100]">
          <button
            type="button"
            className="absolute inset-0 bg-masco-black/50"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          <nav
            id="mobile-nav-panel"
            className="absolute inset-y-0 right-0 flex w-[min(100vw,20rem)] max-w-full flex-col overflow-y-auto bg-white shadow-2xl"
            style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
          >
            <div className="flex items-center justify-between border-b border-masco-navy/10 px-4 py-3">
              <MascoLogo href="/home/luminous" size="xs" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-[20px] text-masco-navy transition-colors hover:bg-masco-navy/5"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>

            <ul className="flex-1 px-3 py-4">
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center rounded-[20px] px-4 text-base font-bold text-masco-navy transition-colors hover:bg-masco-navy/5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-masco-navy/10 px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <Link href="#contact" onClick={() => setOpen(false)} className="masco-gradient block rounded-full px-5 py-3 text-center text-sm font-bold text-white">Contact Us</Link>
            </div>
          </nav>
        </div>, document.body
      )}
    </>
  );
}
