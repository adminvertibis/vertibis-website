import type { Metadata } from "next";
import AudiencePage from "../components/site/AudiencePage";
import { getCmsData } from "../lib/cms-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Vendor Health Intelligence for Enterprises | Vertibis",
  description:
    "Use Vertibis to explore vendor health monitoring, supplier risk segmentation and periodic MSME supplier intelligence.",
};

export default async function ForEnterprisesPage() {
  const cms = await getCmsData();
  const modules = cms.productModules.filter(
    (module) => module.audience.includes("Enterprise") || module.name.includes("Vendor"),
  );

  return (
    <AudiencePage
      content={cms.audiencePages.enterprises}
      modules={modules}
      proofPoints={[
        "Move beyond one-time vendor onboarding documents.",
        "Segment suppliers using explainable business-health indicators.",
        "Track periodic vendor health and potential early-warning signals.",
        "Use reports for vendor development programmes, not only risk flags.",
      ]}
    />
  );
}
