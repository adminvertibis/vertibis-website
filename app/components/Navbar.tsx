"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavigationItem, SiteSettings } from "@/app/lib/cms-types";
import ButtonLink from "./site/ButtonLink";

export default function Navbar({
  navigation,
  settings,
}: {
  navigation: NavigationItem[];
  settings: SiteSettings;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerLinks = navigation.filter((item) => item.showInHeader);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dbe7f4] bg-white/92 backdrop-blur-xl">
      {settings.announcementBanner ? (
        <div className="border-b border-[#dbe7f4] bg-[#071527] px-4 py-2 text-center text-xs font-bold text-white sm:text-sm">
          {settings.announcementBanner}
        </div>
      ) : null}

      <nav className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setMobileOpen(false)}>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#0066cc] text-base font-black text-white shadow-lg shadow-blue-900/20">
            V
          </span>
          <span>
            <span className="block text-base font-black tracking-[0.08em] text-[#071527]">
              VERTIBIS
            </span>
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.14em] text-[#607089] xl:block">
              Technologies Pvt Ltd
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          {headerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-bold text-[#33435b] transition hover:text-[#0066cc]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink cta={{ label: "Login / Sign In", href: settings.loginUrl, variant: "ghost" }} />
          <ButtonLink cta={{ label: "Join Pilot", href: settings.partnerJoinUrl, variant: "primary" }} />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#dbe7f4] text-[#071527] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-[#dbe7f4] bg-white px-4 py-4 shadow-xl shadow-slate-900/8 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {headerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-[#33435b] hover:bg-[#f1f7ff] hover:text-[#0066cc]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-2 border-t border-[#dbe7f4] pt-4 sm:grid-cols-2">
              <ButtonLink cta={{ label: "Login / Sign In", href: settings.loginUrl, variant: "secondary" }} />
              <ButtonLink cta={{ label: "Join Pilot", href: settings.partnerJoinUrl, variant: "primary" }} />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
