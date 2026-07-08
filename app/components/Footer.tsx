import Link from "next/link";
import type { NavigationItem, SiteSettings } from "@/app/lib/cms-types";

function externalLabel(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function Footer({
  navigation,
  settings,
}: {
  navigation: NavigationItem[];
  settings: SiteSettings;
}) {
  const footerLinks = navigation.filter((item) => item.showInFooter);

  return (
    <footer className="border-t border-[#dbe7f4] bg-[#071527] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.6fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0066cc] text-base font-black text-white">
                V
              </span>
              <span>
                <span className="block text-base font-black tracking-[0.08em]">VERTIBIS</span>
                <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-blue-100">
                  Technologies Pvt Ltd
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-blue-100">{settings.footerCopy}</p>
            <div className="mt-6 grid gap-2 text-sm text-blue-100">
              <span>{settings.companyName}</span>
              <span>Registered location: {settings.registeredLocation}</span>
              <a className="font-bold text-white hover:text-[#65d6c8]" href={`mailto:${settings.contactEmail}`}>
                {settings.contactEmail}
              </a>
              <a
                className="font-bold text-white hover:text-[#65d6c8]"
                href={settings.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {externalLabel(settings.linkedInUrl)}
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#65d6c8]">
                Explore
              </h2>
              <div className="mt-4 grid gap-3 text-sm font-semibold text-blue-100">
                {footerLinks.slice(0, 6).map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#65d6c8]">
                Ecosystem
              </h2>
              <div className="mt-4 grid gap-3 text-sm font-semibold text-blue-100">
                {footerLinks.slice(6).map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                ))}
                <a href={settings.loginUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Partner Login
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#65d6c8]">
                Legal
              </h2>
              <div className="mt-4 grid gap-3 text-sm font-semibold text-blue-100">
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 text-xs leading-6 text-blue-100 lg:grid-cols-2">
          <p>{settings.platformDisclaimer}</p>
          <p>{settings.gstDisclaimer}</p>
        </div>

        <div className="mt-8 text-xs text-blue-100">
          &copy; 2026 {settings.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
