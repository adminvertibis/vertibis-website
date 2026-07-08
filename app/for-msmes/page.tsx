import type { Metadata } from "next";
import AudiencePage from "../components/site/AudiencePage";
import { getCmsData } from "../lib/cms-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "MSME Business Health Score | Vertibis",
  description:
    "Understand MSME business health, GST and compliance indicators, loan readiness and improvement recommendations with Vertibis.",
};

export default async function ForMSMEsPage() {
  const cms = await getCmsData();
  const modules = cms.productModules.filter((module) => module.audience.includes("MSME"));

  return (
    <AudiencePage
      content={cms.audiencePages.msmes}
      modules={modules}
      proofPoints={[
        "Start with a consent-backed MSME pilot request.",
        "Combine GST, compliance, financial and business indicators where available.",
        "Review score factors, risk areas and improvement recommendations.",
        "Share the structured report with a CA, lender or investor for review.",
      ]}
    />
  );
}
