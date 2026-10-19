import Link from "next/link";
import { ContactUsButton } from "@/components/brand/ContactUsButton";
import { MascoLogo } from "@/components/brand/MascoLogo";
import { MobileNav } from "@/components/brand/MobileNav";
import { navItems } from "@/lib/home-content";

const headerNavItems = navItems.filter((item) => item.label !== "Contact");

export function SiteHeader({ gallery = false, theme = "classic" }: { gallery?: boolean; theme?: string }) {
  return (
    <header className={`site-header header-${theme} sticky top-0 z-50 overflow-visible border-b border-masco-navy/10 bg-white px-4 py-1 lg:px-16`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3">
        <MascoLogo href="/main" size="xs" className="relative z-10" />

        <div className="hidden items-center gap-2 md:gap-4 lg:flex">
          <nav className="flex items-center gap-0.5 md:gap-3">
            {headerNavItems.map((item) => (
              <Link
                key={item.label}
                href={gallery ? `/home/classic${item.href}` : item.href}
                className="rounded-[20px] px-2 py-1 text-[11px] font-bold text-masco-black/70 transition-colors hover:bg-masco-navy/5 hover:text-masco-navy sm:px-2.5 sm:text-xs"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ContactUsButton compact />
        </div>

        <div className="lg:hidden">
          <MobileNav items={headerNavItems.map((item) => ({ ...item, href: gallery ? `/home/classic${item.href}` : item.href }))} />
        </div>
      </div>
    </header>
  );
}
