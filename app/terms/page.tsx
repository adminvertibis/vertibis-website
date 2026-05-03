import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Vertibis Terms of Service — the rules and guidelines for using our platform.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: May 1, 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Vertibis platform (vertibis.com and associated services), you agree to be bound by these Terms of Service and our Privacy Policy. If you are accessing Vertibis on behalf of a CA firm or organisation, you represent that you have authority to bind that organisation.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">2. Description of Service</h2>
          <p>
            Vertibis provides an automated MSME business health scoring and advisory platform for Chartered Accountants and financial professionals. Health scores are generated based on data sourced from government databases and provided by users. Scores and advisory content are for informational purposes only and do not constitute financial, legal, or investment advice.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">3. User Accounts</h2>
          <p className="mb-3">You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately at security@vertibis.com if you suspect unauthorised access.</p>
          <p>One account may not be shared among multiple individuals. Team plans include multiple named user seats.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">4. Client Data & Consent</h2>
          <p>
            You are responsible for obtaining appropriate consent from your MSME clients before submitting their GSTN, PAN, or other identifying information to Vertibis. You warrant that you have the legal right and authorisation to process your clients' data through our platform.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">5. Acceptable Use</h2>
          <p className="mb-3">You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Use the platform for any unlawful purpose or in violation of any applicable laws</li>
            <li>Submit false, inaccurate, or misleading client information</li>
            <li>Attempt to reverse-engineer, scrape, or extract our scoring algorithms or data</li>
            <li>Resell or sublicense access to the platform without prior written consent</li>
            <li>Use the platform in a manner that could damage, disable, or impair our infrastructure</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">6. Subscription & Payment</h2>
          <p className="mb-3">
            Free plan users have access to 50 reports per year at no charge. Paid plans are billed annually in advance. All prices are in Indian Rupees (INR) and exclude applicable GST.
          </p>
          <p>
            Subscriptions auto-renew unless cancelled at least 7 days before the renewal date. Refunds are available within 14 days of payment if you have generated fewer than 5 reports in the billing period.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">7. Disclaimers & Limitation of Liability</h2>
          <p className="mb-3">
            Health scores and advisory content are provided "as is" for informational purposes only. Vertibis does not guarantee the accuracy, completeness, or fitness for any particular purpose of scores or recommendations. Scores should not be the sole basis for credit, investment, or business decisions.
          </p>
          <p>
            To the maximum extent permitted by law, Vertibis shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the platform or reliance on its output.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">8. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">9. Contact</h2>
          <p>
            For questions about these Terms, contact us at{' '}
            <a href="mailto:legal@vertibis.com" className="text-[#0066cc] hover:underline">legal@vertibis.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
