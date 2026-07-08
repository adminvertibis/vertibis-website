import type { ProductModule } from "@/app/lib/cms-types";
import ButtonLink from "./ButtonLink";
import StagePill from "./StagePill";

export default function ProductModuleGrid({ modules }: { modules: ProductModule[] }) {
  const visibleModules = modules
    .filter((module) => module.show)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {visibleModules.map((module) => (
        <article
          key={module.name}
          className="group flex min-h-[270px] flex-col justify-between rounded-[1.35rem] border border-[#d8e6f5] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#7fb8f1] hover:shadow-xl hover:shadow-slate-900/10"
        >
          <div>
            <div className="flex items-start justify-between gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef6ff] text-sm font-black text-[#0066cc]">
                {module.icon}
              </div>
              <StagePill stage={module.stage} />
            </div>
            <h3 className="mt-5 text-lg font-black tracking-[-0.03em] text-[#071527]">
              {module.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#607089]">{module.description}</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#7c3aed]">
              {module.audience}
            </p>
          </div>
          <ButtonLink cta={module.relatedCta} className="mt-5 w-full" />
        </article>
      ))}
    </div>
  );
}
