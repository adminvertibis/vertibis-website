import type { Metadata } from "next";
import AudiencePage from "../components/site/AudiencePage";
import { getCmsData } from "../lib/cms-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "MSME Loan Readiness and Risk Intelligence | Vertibis",
  description:
    "Explore consent-backed MSME loan-readiness, borrower monitoring and early-warning intelligence for banks, NBFCs and fintechs.",
};

export default async function ForLendersPage() {
  const cms = await getCmsData();
  const modules = cms.productModules.filter(
    (module) => module.audience.includes("Lender") || module.audience.includes("Institutional"),
  );

  return (
    <AudiencePage
      content={cms.audiencePages.lenders}
      modules={modules}
      proofPoints={[
        "Use Vertibis for lending support, not automated loan approval.",
        "Review loan-readiness indicators before or during borrower conversations.",
        "Monitor early-warning signals and business improvement trends.",
        "Discuss API and dashboard pilots after consent and security review.",
      ]}
    />
  );
}
