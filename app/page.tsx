import type { Metadata } from "next";
import Link from "next/link";
import ButtonLink from "./components/site/ButtonLink";
import ProductModuleGrid from "./components/site/ProductModuleGrid";
import SectionHeader from "./components/site/SectionHeader";
import StagePill from "./components/site/StagePill";
import { getCmsData } from "./lib/cms-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Vertibis | MSME Business Health Intelligence Ecosystem",
  description:
    "Vertibis is building an explainable MSME Health Intelligence ecosystem for CAs, MSMEs, lenders, insurers and enterprises.",
};

export default async function HomePage() {
  const cms = await getCmsData();
  const { homepage } = cms;
  const displayedStats = cms.websiteStats.filter((stat) => stat.display && !stat.isDemo);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f7fbff]">
        <div className="absolute inset-0 surface-grid opacity-60" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-2">
              {homepage.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#b9d2ee] bg-white px-3 py-1.5 text-xs font-extrabold text-[#0052a3] shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-[#071527] sm:text-6xl lg:text-7xl">
              {homepage.heroHeadline}
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-[#203451]">
              {homepage.heroSubheadline}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#607089] sm:text-lg">
              {homepage.heroSupportingText}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink cta={homepage.primaryCta} />
              <ButtonLink cta={homepage.secondaryCta} />
              <ButtonLink cta={homepage.tertiaryCta} />
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {displayedStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-[#dbe7f4] bg-white/85 p-4">
                  <p className="text-2xl font-black tracking-[-0.04em] text-[#071527]">
                    {stat.value}
                    {stat.suffix || ""}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#0066cc]">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[#607089]">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-[#b9d2ee] bg-white/80 p-4 shadow-2xl shadow-slate-900/12 backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#dbe7f4] bg-white">
                <div className="flex items-center justify-between border-b border-[#dbe7f4] px-5 py-4">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#607089]">
                    MSME Health Intelligence
                  </p>
                </div>

                <div className="grid gap-5 p-5 md:grid-cols-[190px_1fr]">
                  <div className="rounded-[1.35rem] bg-[#071527] p-5 text-white">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#65d6c8]">
                      Business Health
                    </p>
                    <p className="mt-5 text-6xl font-black tracking-[-0.08em]">78</p>
                    <p className="mt-2 rounded-full bg-[#d8fff6] px-3 py-2 text-xs font-black text-[#065f56]">
                      Pilot score band
                    </p>
                    <p className="mt-5 text-sm leading-6 text-blue-100">
                      Indicative and explainable. Requires professional review.
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066cc]">
                          Client report preview
                        </p>
                        <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#071527]">
                          Shree Precision Components
                        </h2>
                      </div>
                      <StagePill stage="pilot" />
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {[
                        ["GST Health", "Testing"],
                        ["Loan Readiness", "Pilot"],
                        ["Vendor Signals", "Planned"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-[#dbe7f4] bg-[#fbfdff] p-4">
                          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#607089]">
                            {label}
                          </p>
                          <p className="mt-2 text-lg font-black text-[#071527]">{value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 space-y-4">
                      {[
                        ["Compliance behaviour", "91"],
                        ["Financial stability", "73"],
                        ["Cash-flow indicators", "68"],
                        ["Advisory readiness", "76"],
                      ].map(([label, value]) => (
                        <div key={label} className="grid grid-cols-[150px_1fr_36px] items-center gap-3 text-sm">
                          <span className="font-bold text-[#33435b]">{label}</span>
                          <span className="h-2.5 overflow-hidden rounded-full bg-[#e8f0fa]">
                            <span
                              className="block h-full rounded-full bg-[#0066cc]"
                              style={{ width: `${value}%` }}
                            />
                          </span>
                          <span className="font-black text-[#071527]">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  ["Health report", "For MSME clarity"],
                  ["Partner desk", "For CA distribution"],
                  ["Institutional layer", "For risk workflows"],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl border border-[#dbe7f4] bg-white p-4">
                    <p className="font-black text-[#071527]">{title}</p>
                    <p className="mt-1 text-sm text-[#607089]">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The problem"
            title="MSME data exists. Business-health intelligence does not."
            description="Vertibis brings fragmented information into an explainable decision layer for the people who advise, finance, insure, procure from and run MSMEs."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {homepage.problemCards.map((card, index) => (
              <article key={card} className="rounded-[1.35rem] border border-[#dbe7f4] bg-[#fbfdff] p-5">
                <span className="grid h-9 w-9 place-items-center rounded-2xl bg-[#071527] text-sm font-black text-white">
                  {index + 1}
                </span>
                <p className="mt-5 text-sm font-semibold leading-6 text-[#33435b]">{card}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071527] py-20 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Vertibis ecosystem"
            title="One intelligence foundation. Multiple decision use cases."
            description="The platform starts with CAs and MSME reports, then expands into institutional intelligence for lending, vendor risk and insurance workflows."
            tone="light"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {homepage.ecosystemLayers.map((layer) => (
              <article
                key={layer.name}
                className="rounded-[1.5rem] border border-white/12 bg-white/7 p-6 backdrop-blur"
              >
                <h3 className="text-2xl font-black tracking-[-0.04em]">{layer.name}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">{layer.description}</p>
                <div className="mt-6 grid gap-2">
                  {layer.items.map((item) => (
                    <span key={item} className="rounded-2xl bg-white/8 px-4 py-3 text-sm font-bold text-white">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Audience pathways"
              title="Built for every stakeholder in the MSME decision chain."
              description="Each pathway uses the same explainable intelligence foundation, but the workflow changes for CAs, MSMEs, lenders, enterprises and insurers."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink cta={{ label: "For CAs", href: "/for-cas", variant: "primary" }} />
              <ButtonLink cta={{ label: "For MSMEs", href: "/for-msmes", variant: "secondary" }} />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["For CAs", "Convert compliance data into advisory opportunities.", "/for-cas"],
              ["For MSMEs", "Understand health, risks and loan-readiness gaps.", "/for-msmes"],
              ["For Lenders", "Use explainable indicators for lending support.", "/for-lenders"],
              ["For Enterprises", "Monitor vendor health beyond onboarding.", "/for-enterprises"],
              ["For Insurance", "Support MSME business-risk intelligence.", "/for-insurance"],
            ].map(([title, copy, href]) => (
              <Link
                key={title}
                href={href}
                className="rounded-[1.35rem] border border-[#dbe7f4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#7fb8f1] hover:shadow-xl hover:shadow-slate-900/10"
              >
                <h3 className="text-xl font-black tracking-[-0.03em] text-[#071527]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#607089]">{copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Technology and trust"
            title="Built on consent, explainability and professional review."
            description="The public website now says exactly where the product is: registered ASP status, GST API testing, explainable output and no unsupported production claims."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {homepage.trustItems.map((item) => (
              <div key={item} className="rounded-2xl border border-[#dbe7f4] bg-[#fbfdff] p-5">
                <p className="font-bold text-[#203451]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="modules" className="bg-[#f7fbff] py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Product modules"
            title="Every module carries its stage clearly."
            description="Admin can edit module names, descriptions, audiences and stage labels so the site stays accurate as Vertibis moves from pilot to production."
          />
          <div className="mt-10">
            <ProductModuleGrid modules={cms.productModules} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Early access"
            title="Join the Vertibis early ecosystem."
            description="Select the pathway that fits your role. Each lead is stored for admin review and export."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {homepage.pilotAudiences.map((audience) => (
              <article key={audience.title} className="flex min-h-[250px] flex-col justify-between rounded-[1.35rem] border border-[#dbe7f4] bg-white p-6 shadow-sm">
                <div>
                  <h3 className="text-xl font-black tracking-[-0.03em] text-[#071527]">
                    {audience.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#607089]">{audience.description}</p>
                </div>
                <ButtonLink cta={audience.cta} className="mt-6 w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
