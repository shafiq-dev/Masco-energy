import Link from "next/link";
import { ContactUsButton } from "@/components/brand/ContactUsButton";
import { MascoLogo } from "@/components/brand/MascoLogo";
import { MobileNav } from "@/components/brand/MobileNav";
import { navItems } from "@/lib/home-content";

const headerNavItems = navItems.filter((item) => item.label !== "Contact");

const darkThemes = new Set<string>();

export function SiteHeader({
  gallery = false,
  theme = "classic",
}: {
  gallery?: boolean;
  theme?: string;
}) {
  const isDark = darkThemes.has(theme);

  return (
    <header
      className={`site-header header-${theme} sticky top-0 z-50 overflow-visible border-b px-4 py-1 lg:px-16 ${
        isDark
          ? "border-white/10 bg-[#071c31]/95 text-white backdrop-blur-md"
          : "border-masco-navy/10 bg-white"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-3">
        <MascoLogo
          href="/main"
          size="xs"
          className="relative z-10"
          variant={isDark ? "light" : "default"}
        />

        <div className="hidden items-center gap-2 md:gap-4 lg:flex">
          <nav className="flex items-center gap-0.5 md:gap-3">
            {headerNavItems.map((item) => (
              <Link
                key={item.label}
                href={gallery ? `/home/luminous${item.href}` : item.href}
                className={`rounded-[var(--r,20px)] px-2 py-1 text-[11px] font-bold transition-colors sm:px-2.5 sm:text-xs ${
                  isDark
                    ? "text-white/70 hover:bg-white/10 hover:text-white"
                    : "text-masco-black/70 hover:bg-masco-navy/5 hover:text-masco-navy"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ContactUsButton compact />
        </div>

        <div className="lg:hidden">
          <MobileNav
            items={headerNavItems.map((item) => ({
              ...item,
              href: gallery ? `/home/luminous${item.href}` : item.href,
            }))}
            logoVariant={isDark ? "light" : "default"}
            dark={isDark}
          />
        </div>
      </div>
    </header>
  );
}
