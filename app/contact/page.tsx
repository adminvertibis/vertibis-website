import type { Metadata } from "next";
import LeadForm from "../components/site/LeadForm";
import SectionHeader from "../components/site/SectionHeader";
import { getCmsData } from "../lib/cms-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact Vertibis",
  description:
    "Contact Vertibis for CA partner pilots, MSME Health Reports, lender, enterprise, insurance and strategic partner enquiries.",
};

function formIdFromType(type?: string | string[]) {
  const value = Array.isArray(type) ? type[0] : type;

  switch (value) {
    case "ca-partner":
      return "ca-partner";
    case "msme-pilot":
      return "msme-pilot";
    case "lender":
      return "lender-interest";
    case "enterprise":
      return "enterprise-interest";
    case "insurance":
      return "insurance-interest";
    case "institutional":
      return "lender-interest";
    default:
      return "general-contact";
  }
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [cms, params] = await Promise.all([getCmsData(), searchParams]);
  const defaultFormId = formIdFromType(params.type);

  return (
    <>
      <section className="bg-[#f7fbff] py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Contact us"
            title="Talk to Vertibis about the right pilot pathway."
            description="Select your role and tell us what you want to evaluate. Enquiries are stored for admin review and export."
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <aside className="space-y-5">
            <div className="rounded-[1.5rem] border border-[#dbe7f4] bg-[#071527] p-7 text-white">
              <h2 className="text-2xl font-black tracking-[-0.04em]">Vertibis Technologies Pvt Ltd</h2>
              <p className="mt-4 text-sm leading-7 text-blue-100">{cms.settings.footerCopy}</p>
              <div className="mt-6 grid gap-3 text-sm">
                <a className="font-bold text-white hover:text-[#65d6c8]" href={`mailto:${cms.settings.contactEmail}`}>
                  {cms.settings.contactEmail}
                </a>
                <span className="text-blue-100">Registered location: {cms.settings.registeredLocation}</span>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[#dbe7f4] bg-[#f7fbff] p-7">
              <h2 className="text-xl font-black tracking-[-0.03em] text-[#071527]">
                Lead categories
              </h2>
              <div className="mt-5 grid gap-3 text-sm font-semibold text-[#33435b]">
                {cms.leadForms
                  .filter((form) => form.active)
                  .map((form) => (
                    <span key={form.id} className="rounded-2xl bg-white px-4 py-3">
                      {form.name}
                    </span>
                  ))}
              </div>
            </div>
          </aside>

          <div className="rounded-[1.5rem] border border-[#dbe7f4] bg-white p-6 shadow-xl shadow-slate-900/8 sm:p-8">
            <LeadForm forms={cms.leadForms} defaultFormId={defaultFormId} sourcePage="/contact" />
          </div>
        </div>
      </section>
    </>
  );
}
