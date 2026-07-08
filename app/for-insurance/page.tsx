import type { Metadata } from "next";
import AudiencePage from "../components/site/AudiencePage";
import { getCmsData } from "../lib/cms-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "MSME Business Risk Indicators for Insurance | Vertibis",
  description:
    "Explore MSME business continuity, compliance behaviour and financial health indicators for insurance intelligence workflows.",
};

export default async function ForInsurancePage() {
  const cms = await getCmsData();
  const modules = cms.productModules.filter(
    (module) => module.audience.includes("Insurance") || module.audience.includes("Institutional"),
  );

  return (
    <AudiencePage
      content={cms.audiencePages.insurance}
      modules={modules}
      proofPoints={[
        "Understand business continuity and operating-health indicators.",
        "Use compliance and financial-health patterns as review support.",
        "Segment MSME business risk with explainable factors.",
        "Explore pilot workflows without replacing underwriting judgement.",
      ]}
    />
  );
}
