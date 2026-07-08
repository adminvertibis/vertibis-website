import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Vertibis Terms of Service for website, pilot programmes and platform use.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black tracking-[-0.04em] text-[#071527]">Terms of Service</h1>
      <p className="mt-2 text-sm font-semibold text-[#607089]">Last updated: July 8, 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-7 text-[#33435b]">
        {[
          [
            "1. Acceptance",
            "By accessing Vertibis websites, forms, pilot workflows or related services, you agree to these terms and our Privacy Policy.",
          ],
          [
            "2. Platform description",
            "Vertibis is an AI-assisted business intelligence and professional productivity platform for MSME health intelligence, partner workflows and institutional use-case exploration.",
          ],
          [
            "3. Indicative output",
            "Scores, reports, recommendations and indicators are explainable and indicative. They are not final legal, tax, credit, investment or insurance advice and should be reviewed by qualified professionals.",
          ],
          [
            "4. GST API status",
            "Vertibis is a Registered ASP with TaxPro GSTP. GST API integration is currently under testing/pilot stage and is subject to approvals, consent workflows and technical readiness.",
          ],
          [
            "5. User responsibility and consent",
            "Users and partners are responsible for providing accurate information and obtaining appropriate consent before submitting MSME or client data to Vertibis.",
          ],
          [
            "6. Pricing",
            "Pricing shown on the website is pilot-stage and may change as the product moves from testing to production. Institutional pilots require separate discussion.",
          ],
          [
            "7. No guaranteed outcomes",
            "Vertibis does not guarantee loan approval, insurance acceptance, investment outcomes, tax outcomes or risk prediction accuracy.",
          ],
          [
            "8. Contact",
            "For questions about these terms, contact hello@vertibis.com.",
          ],
        ].map(([title, body]) => (
          <section key={title} className="rounded-[1.35rem] border border-[#dbe7f4] bg-white p-6">
            <h2 className="text-xl font-black text-[#071527]">{title}</h2>
            <p className="mt-3">{body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
