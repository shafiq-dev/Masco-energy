"use client";

import { useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
import { MascoLogo } from "@/components/brand/MascoLogo";

type NavItem = { label: string; href: string };

export function MobileNav({ items, dark = false }: { items: NavItem[]; logoVariant?: "default" | "light"; dark?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDialogElement | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef("");
  const attachPanel = useCallback((node: HTMLDialogElement | null) => {
    panel.current = node;
    if (node && !node.open) node.showModal();
  }, []);

  function show() {
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setOpen(true);
    if (!mounted) setMounted(true);
    else panel.current?.showModal();
  }
  function closed() {
    document.body.style.overflow = previousOverflow.current;
    setOpen(false);
    trigger.current?.focus({ preventScroll: true });
  }
  return <>
    <button ref={trigger} type="button" className={`mobile-menu-trigger ${dark ? "is-dark" : ""}`} aria-label="Open menu" aria-expanded={open} aria-controls="mobile-nav-panel" onClick={show}><Menu size={21} strokeWidth={1.7} /></button>
    {mounted && createPortal(<dialog ref={attachPanel} id="mobile-nav-panel" className="mobile-navigation" aria-label="Site navigation" onClose={closed}>
      <div className="mobile-navigation-inner">
        <header className="mobile-navigation-header"><MascoLogo href="#home" size="xs" /><button type="button" className="mobile-menu-close" onClick={() => panel.current?.close()} aria-label="Close menu"><X size={23} /></button></header>
        <nav aria-label="Mobile navigation"><p className="mobile-navigation-eyebrow">EXPLORE MASCO ENERGY</p><ul>{items.map((item, index) => <li key={item.label}><a href={item.href} onClick={() => panel.current?.close()}><span className="mobile-navigation-number">{String(index + 1).padStart(2, "0")}</span><span>{item.label}</span><ArrowUpRight size={22} strokeWidth={1.4} /></a></li>)}</ul></nav>
        <footer className="mobile-navigation-footer"><a className="mobile-navigation-contact" href="#contact" onClick={() => panel.current?.close()}>Let’s talk <ArrowRight size={20} /></a><a className="mobile-navigation-email" href="mailto:info@masco.com.sa">info@masco.com.sa</a><p>Al Khobar · Kingdom of Saudi Arabia</p></footer>
      </div>
    </dialog>, document.body)}
  </>;
}
