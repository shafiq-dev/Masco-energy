"use client";

import { useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Building2, Check, Mail, MapPin, Send, X } from "lucide-react";
import { company } from "@/lib/home-content";

const interests = ["Project delivery", "Pipelines", "Digital infrastructure"];

export function ContactUsButton({ compact = false }: { compact?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const id = useId();
  const [mounted, setMounted] = useState(false);
  const [prepared, setPrepared] = useState(false);
  const openDialog = () => {
    setPrepared(false);
    if (!mounted) { setMounted(true); return; }
    dialog.current?.showModal();
    dialog.current?.querySelector<HTMLInputElement>('input[name="name"]')?.focus();
  };
  const attachDialog = (element: HTMLDialogElement | null) => {
    dialog.current = element;
    if (element && !element.open) {
      element.showModal();
      element.querySelector<HTMLInputElement>('input[name="name"]')?.focus();
    }
  };
  return <>
    <button type="button" onClick={openDialog} className={`masco-gradient shrink-0 whitespace-nowrap rounded-full font-bold text-white transition-opacity hover:opacity-90 ${compact ? "px-4 py-2.5 text-xs" : "px-5 py-3 text-sm"}`}>Contact Us</button>
    {mounted && createPortal(<dialog ref={attachDialog} aria-labelledby={`${id}-title`} className="contact-dialog contact-dialog-modern" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="contact-layout">
        <aside className="contact-aside">
          <div className="contact-motif" aria-hidden="true"><span /><span /><span /><span /></div>
          <span className="contact-aside-kicker"><span /> MASCO ENERGY</span>
          <div className="relative"><p className="text-xs font-bold uppercase tracking-[.18em] text-sky-200">A conversation.<br />A new possibility.</p><h2 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight text-white">Let’s build<br />what’s next.</h2><p className="mt-6 max-w-xs text-sm leading-7 text-sky-100/80">Energy. Industry. Infrastructure.<br />Connected expertise, from the first conversation.</p></div>
          <div className="relative mt-12 space-y-5 border-t border-white/15 pt-7"><a href={`mailto:${company.email}`} className="flex items-center gap-3 text-sm font-bold text-white"><Mail className="h-4 w-4 text-sky-300" />{company.email}<ArrowUpRight className="ml-auto h-4 w-4" /></a><p className="flex items-start gap-3 text-xs leading-6 text-sky-100/80"><MapPin className="mt-1 h-4 w-4 shrink-0 text-sky-300" /><span>{company.headquarters}, {company.city}<br />{company.country}</span></p></div>
        </aside>
        <div className="contact-form-panel">
          <button type="button" aria-label="Close contact form" onClick={() => dialog.current?.close()} className="contact-close"><X className="h-5 w-5" /></button>
          <p className="story-eyebrow flex items-center gap-2"><Building2 className="h-4 w-4" /> Start a conversation</p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-bold tracking-tight text-masco-navy sm:text-4xl">Tell us what’s next.</h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">Start with a few details about your next project.</p>
          <form className="contact-form mt-5" onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "Not provided"}\nInterest: ${data.get("interest")}\n\n${data.get("message")}`;
            window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`MASCO Energy — ${data.get("interest")}`)}&body=${encodeURIComponent(body)}`;
            setPrepared(true);
          }}>
            <fieldset className="mb-4"><legend className="mb-3 text-xs font-bold text-masco-navy">I’m interested in</legend><div className="contact-interests">{interests.map((interest, index) => <label key={interest} className="contact-interest"><input type="radio" name="interest" value={interest} defaultChecked={index === 0} /><span>{interest}</span></label>)}</div></fieldset>
            <div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor={`${id}-name`}>Full name</label><input id={`${id}-name`} name="name" autoComplete="name" required maxLength={120} placeholder="Your name" /></div><div><label htmlFor={`${id}-company`}>Company <span className="font-normal text-slate-400">(optional)</span></label><input id={`${id}-company`} name="company" autoComplete="organization" maxLength={160} placeholder="Company name" /></div></div>
            <div className="mt-4"><label htmlFor={`${id}-email`}>Work email</label><input id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={200} placeholder="you@company.com" /></div>
            <div className="mt-4"><label htmlFor={`${id}-message`}>How can we help?</label><textarea id={`${id}-message`} name="message" required rows={2} maxLength={2500} placeholder="Tell us about your project, scope or enquiry…" /></div>
            <button type="submit" className="contact-submit mt-4"><span>Prepare my enquiry</span><Send className="h-4 w-4" /></button>
            <p className="mt-2 text-[11px] leading-5 text-slate-500">Opens a draft in your email app for you to review and send.</p>
            {prepared && <p role="status" className="mt-4 flex gap-3 rounded-xl bg-sky-50 p-4 text-xs leading-6 text-masco-navy"><Check className="mt-1 h-4 w-4 shrink-0" /><span>Your email app has been requested. Review and send your enquiry there. If it did not open, write directly to <a href={`mailto:${company.email}`} className="font-bold underline">{company.email}</a>.</span></p>}
          </form>
        </div>
      </div>
    </dialog>, document.body)}
  </>;
}
