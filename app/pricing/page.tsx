import type { Metadata } from "next";
import ButtonLink from "../components/site/ButtonLink";
import SectionHeader from "../components/site/SectionHeader";
import StagePill from "../components/site/StagePill";
import { getCmsData } from "../lib/cms-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pilot Pricing",
  description:
    "Pilot-stage pricing for Vertibis CA Partner Plans, MSME Health Reports, loan-readiness add-ons and institutional pilots.",
};

export default async function PricingPage() {
  const cms = await getCmsData();
  const plans = cms.pricingPlans.sort((a, b) => a.displayOrder - b.displayOrder);
  const reportPrices = cms.reportPricing.sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <>
      <section className="bg-[#f7fbff] py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pilot pricing"
            title="Pricing that supports CA partners first, then the wider ecosystem."
            description="Partner and report pricing is labelled by stage so early partners can understand pilot subscriptions, report credits and institutional discussions."
            align="center"
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="CA Partner Plans"
            title="Start with partner access and report credits."
            description="Plans are designed for early CA, CS, CWA, advocate and tax-consultant partners."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`flex min-h-[490px] flex-col justify-between rounded-[1.5rem] border p-6 shadow-sm ${
                  plan.highlighted
                    ? "border-[#0066cc] bg-[#f7fbff] shadow-xl shadow-blue-900/10"
                    : "border-[#dbe7f4] bg-white"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-2xl font-black tracking-[-0.04em] text-[#071527]">
                      {plan.name}
                    </h2>
                    <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-blue-700">
                      {plan.status}
                    </span>
                  </div>
                  <p className="mt-4 text-4xl font-black tracking-[-0.06em] text-[#071527]">
                    {plan.price}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#607089]">{plan.billingPeriod}</p>
                  <p className="mt-5 text-sm leading-7 text-[#607089]">{plan.description}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm font-semibold text-[#33435b]">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#13b8a6]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <ButtonLink cta={plan.cta} className="mt-8 w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="report-pricing" className="bg-[#f7fbff] py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Report credits"
            title="MSME report pricing is separate from partner subscription."
            description="This gives Vertibis room to support quick snapshots, annual reports, detailed reports and future add-ons."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {reportPrices.map((report) => (
              <article key={report.name} className="rounded-[1.35rem] border border-[#dbe7f4] bg-white p-5 shadow-sm">
                <div className="flex justify-between gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef6ff] text-sm font-black text-[#0066cc]">
                    R
                  </div>
                  <StagePill stage={report.stage} />
                </div>
                <h3 className="mt-5 text-lg font-black tracking-[-0.03em] text-[#071527]">
                  {report.name}
                </h3>
                <p className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#071527]">
                  {report.price}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#607089]">{report.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-5xl rounded-[1.5rem] border border-amber-200 bg-amber-50 px-6 py-8 text-amber-900 sm:px-8">
          <h2 className="text-xl font-black">Pilot-stage pricing disclaimer</h2>
          <p className="mt-3 text-sm leading-7">
            Pricing shown is pilot-stage and may change as the product moves from testing to
            production. Institutional pricing requires a pilot discussion, consent-flow mapping and
            technical/security review.
          </p>
        </div>
      </section>
    </>
  );
}
