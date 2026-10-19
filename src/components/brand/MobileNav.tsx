"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MascoLogo } from "@/components/brand/MascoLogo";

type NavItem = {
  label: string;
  href: string;
};

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-[20px] border border-masco-navy/10 text-masco-navy transition-colors hover:bg-masco-navy/5"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" strokeWidth={1.75} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100]">
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
              <MascoLogo href="/main" size="xs" />
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
        </div>
      )}
    </>
  );
}
