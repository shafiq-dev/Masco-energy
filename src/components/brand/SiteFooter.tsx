import Link from "next/link";
import { MascoLogo } from "@/components/brand/MascoLogo";
import { company, navItems } from "@/lib/home-content";
import { Mail, MapPin } from "@/lib/icons";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-auto border-t border-masco-navy/10 bg-white"
    >
      <div className="masco-gradient px-6 py-14 text-white lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
              {company.tagline}
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Partner with MASCO Energy
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
              Saudi-based EPC and integrated contracting across energy, oil
              &amp; gas, petrochemical, and industrial infrastructure, aligned
              with Saudi Vision 2030.
            </p>
          </div>
          <Link
            href={`mailto:${company.email}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-[20px] bg-white px-8 py-3 text-sm font-bold text-masco-navy transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} />
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="px-6 py-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <MascoLogo href="/main" size="sm" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-masco-black/60">
              {company.industry}. Headquartered in Al Khobar, serving the
              Kingdom of Saudi Arabia.
            </p>
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-bold text-masco-blue hover:underline"
            >
              masco.com.sa
            </a>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-masco-blue">
              Navigation
            </p>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-masco-black/65 transition-colors hover:text-masco-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-masco-blue">
              Headquarters
            </p>
            <ul className="mt-4 space-y-4 text-sm text-masco-black/65">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-masco-blue" strokeWidth={1.75} />
                {company.email}
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-masco-blue" strokeWidth={1.75} />
                <span>
                  {company.headquarters}
                  <br />
                  {company.city}
                  <br />
                  {company.country}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-masco-blue">
              Company
            </p>
            <ul className="mt-4 space-y-3 text-sm text-masco-black/65">
              <li>{company.legacy}</li>
              <li>{company.workforce}</li>
              <li>Seven core sectors</li>
              <li>EPC / EPCM / Hybrid</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-masco-navy/10 pt-8 md:flex-row">
          <p className="text-xs uppercase tracking-[0.15em] text-masco-black/40">
            © 2026 MASCO Energy. Kingdom of Saudi Arabia.
          </p>
          <div className="flex gap-6 text-xs text-masco-black/40">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
