import type { Metadata } from "next";
import Link from "next/link";
import ButtonLink from "../components/site/ButtonLink";
import SectionHeader from "../components/site/SectionHeader";
import { getCmsData } from "../lib/cms-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to the Vertibis portal, partner desk or admin console.",
};

export default async function LoginPage() {
  const cms = await getCmsData();

  return (
    <section className="bg-[#f7fbff] py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Login"
          title="Access Vertibis from the right workspace."
          description="Partner workflows continue through the Vertibis partner portal. Website content administration remains separate."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-[1.5rem] border border-[#dbe7f4] bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-[#071527]">Partner portal</h2>
            <p className="mt-3 text-sm leading-7 text-[#607089]">
              Open the partner workspace for login, pilot workflows, credits and report generation.
            </p>
            <ButtonLink cta={{ label: "Open Partner Portal", href: cms.settings.loginUrl, variant: "primary" }} className="mt-7 w-full" />
          </article>

          <article className="rounded-[1.5rem] border border-[#dbe7f4] bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-[#071527]">Partner access</h2>
            <p className="mt-3 text-sm leading-7 text-[#607089]">
              New CA partners can request access through the pilot pathway before using the partner portal.
            </p>
            <ButtonLink cta={{ label: "Join CA Partner Pilot", href: "/contact?type=ca-partner", variant: "secondary" }} className="mt-7 w-full" />
          </article>

          <article className="rounded-[1.5rem] border border-[#dbe7f4] bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-[#071527]">Website admin</h2>
            <p className="mt-3 text-sm leading-7 text-[#607089]">
              Manage website content, pricing, forms, product modules and leads.
            </p>
            <Link
              href="/admin"
              className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#b9d2ee] bg-white px-5 py-2.5 text-sm font-bold text-[#0052a3] transition hover:-translate-y-0.5 hover:border-[#0066cc] hover:bg-[#f4f8ff]"
            >
              Open Admin
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
