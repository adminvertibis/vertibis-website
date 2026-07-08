import type { Metadata } from "next";
import AudiencePage from "../components/site/AudiencePage";
import { getCmsData } from "../lib/cms-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Vertibis for CAs | MSME Health Reports and Practice Intelligence",
  description:
    "Join the Vertibis CA Partner Pilot to generate MSME Health Reports, manage client consent and identify advisory opportunities.",
};

export default async function ForCAsPage() {
  const cms = await getCmsData();
  const modules = cms.productModules.filter((module) =>
    ["CA", "MSME, CA", "MSME, CA, Lender"].some((audience) => module.audience.includes(audience)),
  );

  return (
    <AudiencePage
      content={cms.audiencePages.cas}
      modules={modules}
      proofPoints={[
        "Acquire client consent before report generation.",
        "Use GST API testing workflows through the Registered ASP pathway as enabled.",
        "Generate explainable MSME Health Reports for client discussion.",
        "Convert findings into advisory and practice-growth opportunities.",
      ]}
    />
  );
}
