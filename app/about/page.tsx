import type { Metadata } from "next";
import SectionHeader from "../components/site/SectionHeader";
import { getCmsData } from "../lib/cms-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Vertibis",
  description:
    "Learn why Vertibis Technologies Pvt Ltd is building an explainable MSME Business Health Intelligence ecosystem.",
};

export default async function AboutPage() {
  const cms = await getCmsData();

  return (
    <>
      <section className="bg-[#f7fbff] py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="About"
            title="Vertibis exists because MSME intelligence is still fragmented."
            description="The company is building a trusted business-health layer that begins with CAs and expands toward MSMEs, lenders, enterprises, insurers and strategic partners."
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-[#071527]">
              Why Vertibis exists
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#607089]">
              Indian MSMEs generate valuable compliance, financial and operating signals, but those
              signals rarely become a clear business-health view. Vertibis is designed to help owners
              and professionals understand what the data says, where risks may exist and what actions
              can improve readiness.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#607089]">
              CAs are the starting point because they are already trusted by MSMEs. Over time, the
              same intelligence foundation can support lender, enterprise, insurance and platform
              partner workflows.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Mission", "Make business health measurable, explainable and useful for MSMEs."],
              ["Starting point", "Enable CAs, CSs and tax consultants as trusted MSME advisors."],
              ["Product stage", "Pilot reports and GST API testing are in progress."],
              ["Long-term vision", "A consent-backed MSME intelligence network for multiple ecosystems."],
            ].map(([title, copy]) => (
              <article key={title} className="rounded-[1.35rem] border border-[#dbe7f4] bg-[#fbfdff] p-6">
                <h3 className="text-xl font-black tracking-[-0.03em] text-[#071527]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#607089]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gst-status" className="bg-[#071527] py-20 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="GST and trust status"
            title="Registered ASP with TaxPro GSTP. GST API testing is in progress."
            description="The public site now avoids unsupported production claims and uses the same careful wording across the product."
            tone="light"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              cms.settings.gstDisclaimer,
              "Client consent, data minimisation and professional review are part of the Vertibis design approach.",
              "Scoring output is explainable and indicative. It does not replace legal, tax, credit, investment or insurance judgement.",
            ].map((copy) => (
              <div key={copy} className="rounded-[1.35rem] border border-white/12 bg-white/7 p-6 text-sm leading-7 text-blue-100">
                {copy}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
