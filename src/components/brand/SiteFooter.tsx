import Link from "next/link";
import { Mail, MapPin, ArrowUpRight, Download } from "lucide-react";
import { ContactUsButton } from "@/components/brand/ContactUsButton";
import { MascoLogo } from "@/components/brand/MascoLogo";
import { company, navItems } from "@/lib/home-content";

const footerCtaHeadlines: Record<string, string> = {
  classic: "Let’s build what comes next.",
  minimal: "Quiet confidence. Clear delivery.",
  services: "Specify the capability. We’ll deliver the system.",
  split: "Where narrative meets performance.",
  editorial: "The next chapter of Saudi infrastructure.",
  monumental: "Infrastructure at national scale.",
  kinetic: "Keep the delivery system moving.",
  dossier: "Request the full corporate profile.",
  luminous: "Built for what comes next.",
};

export function SiteFooter({ theme = "classic", gallery = false }: { theme?: string; gallery?: boolean }) {
  const ctaHeadline = footerCtaHeadlines[theme] ?? footerCtaHeadlines.classic;

  return <footer id="contact" className={`site-footer footer-${theme} mt-auto border-t border-masco-navy/10 bg-white text-masco-navy`}>
    <div className="masco-gradient px-6 py-20 text-white lg:px-16 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">Engineering progress. Delivering with purpose.</p><h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight lg:text-6xl">{ctaHeadline}</h2><p className="mt-6 max-w-xl text-sm leading-7 opacity-80">Bring your next energy, industrial or infrastructure project to a team built for integrated delivery across the Kingdom.</p></div><div className="flex flex-col items-start gap-6"><ContactUsButton /><a href={`mailto:${company.email}`} className="inline-flex items-center gap-3 text-sm font-bold"><Mail className="h-4 w-4" />{company.email}</a><a href="/masco-energy-profile-2026.pdf" download className="inline-flex items-center gap-3 text-sm font-bold underline underline-offset-4"><Download className="h-4 w-4" />Company profile 2026 (PDF)</a></div></div></div>
    <div className="px-6 py-12 lg:px-16"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
      <div><MascoLogo size="sm" /><p className="mt-5 max-w-xs text-sm leading-7 text-slate-600">Saudi EPC and industrial infrastructure. Headquartered in Al Khobar, serving the Kingdom.</p><a href={company.website} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-masco-blue">masco.com.sa<ArrowUpRight className="h-4 w-4" /></a></div>
      <div><p className="story-eyebrow">Explore</p><ul className="mt-5 space-y-3">{navItems.map((item) => <li key={item.label}><Link href={gallery && item.href !== "#contact" ? `/home/luminous${item.href}` : item.href} className="text-sm text-slate-600 hover:text-masco-blue">{item.label}</Link></li>)}</ul></div>
      <div><p className="story-eyebrow">Headquarters</p><div className="mt-5 flex gap-3 text-sm leading-7 text-slate-600"><MapPin className="mt-1 h-4 w-4 shrink-0 text-masco-blue" /><p>{company.headquarters}<br />{company.city}<br />{company.country}</p></div><a href={`mailto:${company.email}`} className="mt-5 inline-block break-all text-sm text-masco-blue">{company.email}</a></div>
      <div><p className="story-eyebrow">Our platform</p><ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600"><li>Integrated EPC delivery</li><li>MASCO Pipelines</li><li>Lumeron</li><li>Part of MASCO Group</li></ul><Link href="/main" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-masco-blue">All design directions<ArrowUpRight className="h-4 w-4" /></Link></div>
    </div><div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-5 border-t border-masco-navy/10 pt-7 text-xs text-slate-500 md:flex-row"><div><p>© 2026 MASCO Energy. Kingdom of Saudi Arabia.</p></div><a href={gallery ? "/main" : "#home"} className="font-bold text-masco-navy">Back to top ↑</a></div></div>
  </footer>;
}
