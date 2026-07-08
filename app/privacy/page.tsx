import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Vertibis Privacy Policy for website, lead forms and pilot-stage platform workflows.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black tracking-[-0.04em] text-[#071527]">Privacy Policy</h1>
      <p className="mt-2 text-sm font-semibold text-[#607089]">Last updated: July 8, 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-7 text-[#33435b]">
        {[
          [
            "1. Introduction",
            "Vertibis Technologies Pvt Ltd operates the Vertibis website and pilot-stage business-health intelligence workflows. This policy explains how we collect, use and protect information submitted through the website, lead forms and platform pilots.",
          ],
          [
            "2. Information we collect",
            "We may collect contact details, organisation details, role, city, enquiry type, messages, source page and UTM parameters submitted through public forms. Pilot workflows may collect business identifiers and supporting information only through applicable consent workflows.",
          ],
          [
            "3. How we use information",
            "We use submitted information to respond to enquiries, manage pilots, improve product workflows, maintain lead records, support consent-backed report processes and comply with applicable obligations.",
          ],
          [
            "4. GST API and consent",
            "Vertibis is a Registered ASP with TaxPro GSTP. GST API integration is currently under testing/pilot stage and will be enabled subject to applicable approvals, consent workflows and technical readiness.",
          ],
          [
            "5. Data minimisation and access",
            "We aim to collect only information needed for the stated workflow. Access to pilot and lead data should be restricted to authorised team members and professional reviewers where required.",
          ],
          [
            "6. No sale of personal data",
            "We do not sell personal data or MSME business information. Institutional pilots should be governed by separate data-sharing, consent and security terms.",
          ],
          [
            "7. Your rights",
            "You may contact us to request access, correction or deletion of information submitted to Vertibis, subject to applicable law and legitimate retention needs.",
          ],
          [
            "8. Contact",
            "For privacy questions, contact hello@vertibis.com.",
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
