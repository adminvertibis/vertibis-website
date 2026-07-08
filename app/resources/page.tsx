import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "../components/site/SectionHeader";
import { getCmsData } from "../lib/cms-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Vertibis resources on MSME Health Score, CA Practice Intelligence, Loan Readiness, Vendor Risk and Insurance Risk.",
};

const categories = [
  "MSME Health Score",
  "CA Practice Intelligence",
  "Loan Readiness",
  "GST and Compliance Health",
  "Vendor Risk",
  "Lender Intelligence",
  "Insurance Risk",
  "Product Updates",
];

export default async function ResourcesPage() {
  const cms = await getCmsData();
  const resources = cms.resources.filter((resource) => resource.status === "published");
  const drafts = cms.resources.filter((resource) => resource.status === "draft");

  return (
    <>
      <section className="bg-[#f7fbff] py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Resources"
            title="Clear writing for a careful MSME intelligence category."
            description="Resources are CMS-ready. Draft and coming-soon content is labelled internally rather than shown as fake published material."
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div key={category} className="rounded-2xl border border-[#dbe7f4] bg-[#fbfdff] p-5">
                <p className="font-black text-[#071527]">{category}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="rounded-[1.5rem] border border-[#dbe7f4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#7fb8f1] hover:shadow-xl hover:shadow-slate-900/10"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0066cc]">
                  {resource.category}
                </p>
                <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] text-[#071527]">
                  {resource.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#607089]">{resource.summary}</p>
                <p className="mt-6 text-sm font-black text-[#0066cc]">Read resource</p>
              </Link>
            ))}
          </div>

          {drafts.length ? (
            <div className="mt-12 rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-xl font-black text-amber-950">Draft resources in CMS</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {drafts.map((draft) => (
                  <div key={draft.slug} className="rounded-2xl bg-white/70 p-4">
                    <p className="text-sm font-black text-amber-950">{draft.title}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
                      Draft / coming soon
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
