import type { AudiencePageContent, ProductModule } from "@/app/lib/cms-types";
import ButtonLink from "./ButtonLink";
import ProductModuleGrid from "./ProductModuleGrid";
import SectionHeader from "./SectionHeader";

export default function AudiencePage({
  content,
  modules,
  proofPoints,
}: {
  content: AudiencePageContent;
  modules: ProductModule[];
  proofPoints: string[];
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f7fbff] py-20 lg:py-28">
        <div className="absolute inset-0 surface-grid opacity-50" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0066cc]">
              {content.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#071527] sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#607089]">{content.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink cta={content.primaryCta} />
              <ButtonLink cta={content.secondaryCta} />
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[#dbe7f4] bg-white p-5 shadow-2xl shadow-slate-900/10">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7c3aed]">
              Decision workflow
            </p>
            <div className="mt-5 grid gap-3">
              {proofPoints.map((point, index) => (
                <div key={point} className="flex gap-4 rounded-2xl border border-[#dbe7f4] bg-[#fbfdff] p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-[#071527] text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold leading-6 text-[#33435b]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {content.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.5rem] border border-[#dbe7f4] bg-white p-7 shadow-sm"
              >
                <h2 className="text-2xl font-black tracking-[-0.04em] text-[#071527]">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#607089]">{section.description}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {section.points.map((point) => (
                    <div key={point} className="rounded-2xl bg-[#f7fbff] p-4 text-sm font-bold text-[#33435b]">
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Relevant modules"
            title="The same intelligence foundation, filtered for this workflow."
            description="These modules are labelled by stage so pilot, testing and planned capabilities stay clear."
          />
          <div className="mt-10">
            <ProductModuleGrid modules={modules} />
          </div>
        </div>
      </section>
    </>
  );
}
