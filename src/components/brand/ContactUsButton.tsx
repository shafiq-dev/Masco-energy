"use client";

import { useId, useRef, useState } from "react";
import { Mail, X } from "lucide-react";
import { company } from "@/lib/home-content";

export function ContactUsButton({ compact = false }: { compact?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const id = useId();
  const [prepared, setPrepared] = useState(false);
  return <>
    <button type="button" onClick={() => { setPrepared(false); dialog.current?.showModal(); }} className={`masco-gradient shrink-0 rounded-full font-bold text-white transition-opacity hover:opacity-90 ${compact ? "px-4 py-2.5 text-xs" : "px-5 py-3 text-sm"}`}>Contact Us</button>
    <dialog ref={dialog} aria-labelledby={`${id}-title`} className="contact-dialog fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl bg-white p-7 text-[#134880] shadow-2xl backdrop:bg-[#071c31]/60" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <button type="button" aria-label="Close contact form" onClick={() => dialog.current?.close()} className="absolute right-4 top-4 rounded-full p-3 hover:bg-masco-navy/5"><X className="h-5 w-5" /></button>
      <p className="story-eyebrow pr-12">Let’s build what comes next</p><h2 id={`${id}-title`} className="mt-4 pr-5 text-2xl font-bold">Discuss your project.</h2>
      <p className="mt-4 text-sm leading-7 text-slate-600">Tell us what you have in mind. We’ll prepare an email addressed to {company.email} for you to review and send.</p>
      <form className="mt-6 space-y-5" onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "Not provided"}\n\n${data.get("message")}`;
        window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`MASCO Energy enquiry — ${data.get("name")}`)}&body=${encodeURIComponent(body)}`;
        setPrepared(true);
      }}>
        <div><label htmlFor={`${id}-name`} className="mb-2 block text-xs font-bold">Full name</label><input id={`${id}-name`} name="name" autoComplete="name" required maxLength={120} className="w-full rounded-lg border border-masco-navy/20 px-4 py-3 text-sm" /></div>
        <div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor={`${id}-email`} className="mb-2 block text-xs font-bold">Email address</label><input id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={200} className="w-full rounded-lg border border-masco-navy/20 px-4 py-3 text-sm" /></div><div><label htmlFor={`${id}-company`} className="mb-2 block text-xs font-bold">Company <span className="font-normal text-slate-500">(optional)</span></label><input id={`${id}-company`} name="company" autoComplete="organization" maxLength={160} className="w-full rounded-lg border border-masco-navy/20 px-4 py-3 text-sm" /></div></div>
        <div><label htmlFor={`${id}-message`} className="mb-2 block text-xs font-bold">Project or enquiry</label><textarea id={`${id}-message`} name="message" required rows={4} maxLength={2500} className="w-full rounded-lg border border-masco-navy/20 px-4 py-3 text-sm" /></div>
        <button type="submit" className="masco-gradient flex w-full items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-bold text-white"><Mail className="h-4 w-4" />Prepare email</button>
        {prepared && <p role="status" className="rounded-lg bg-sky-50 p-4 text-sm leading-6">Your email app has been requested. Review and send the message there. If it didn’t open, email <a href={`mailto:${company.email}`} className="font-bold underline">{company.email}</a> directly.</p>}
      </form>
      <p className="mt-6 border-t border-masco-navy/10 pt-5 text-xs leading-6 text-slate-500">Al Khobar, Eastern Province, Kingdom of Saudi Arabia</p>
    </dialog>
  </>;
}
