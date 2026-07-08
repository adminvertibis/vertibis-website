import type { ModuleStage } from "@/app/lib/cms-types";

const stageClasses: Record<ModuleStage, string> = {
  live: "border-emerald-200 bg-emerald-50 text-emerald-700",
  pilot: "border-blue-200 bg-blue-50 text-blue-700",
  testing: "border-amber-200 bg-amber-50 text-amber-700",
  planned: "border-slate-200 bg-slate-50 text-slate-600",
};

export default function StagePill({ stage }: { stage: ModuleStage }) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] ${stageClasses[stage]}`}
    >
      {stage}
    </span>
  );
}
