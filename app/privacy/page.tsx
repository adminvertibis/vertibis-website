import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Vertibis Privacy Policy — how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: May 1, 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-sm leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">1. Introduction</h2>
          <p>
            Vertibis Technologies Pvt. Ltd. ("Vertibis", "we", "us", or "our") operates the Vertibis platform and website at vertibis.com. This Privacy Policy describes how we collect, use, store, and protect information about you and your clients when you use our services.
          </p>
          <p className="mt-3">
            By using Vertibis, you agree to the collection and use of information as described in this policy. If you do not agree, please discontinue use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">2. Information We Collect</h2>
          <p className="mb-3"><strong>Account Information:</strong> When you register, we collect your name, email address, CA registration number, firm name, and billing information.</p>
          <p className="mb-3"><strong>Client Data:</strong> When you add an MSME client, we collect their GSTN, PAN, and business details necessary to generate health scores. This data is provided by you and sourced from government databases with your clients' consent.</p>
          <p className="mb-3"><strong>Usage Data:</strong> We collect information about how you use the platform — features accessed, reports generated, session durations — to improve the product.</p>
          <p><strong>Payment Information:</strong> Payment details are processed by Razorpay and are not stored on our servers.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide and operate the Vertibis platform and generate health score reports</li>
            <li>To send transactional emails (report notifications, account updates, security alerts)</li>
            <li>To improve our scoring algorithms and AI advisory quality</li>
            <li>To provide customer support and respond to your enquiries</li>
            <li>To comply with applicable Indian laws and regulatory requirements</li>
          </ul>
          <p className="mt-3">We do not sell your personal data or your clients' financial data to any third party.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">4. Data Storage & Security</h2>
          <p className="mb-3">All data is stored on servers located in India, complying with RBI data localisation guidelines. We use AES-256 encryption at rest and TLS 1.3 in transit.</p>
          <p>We maintain SOC 2 Type II compliance and conduct annual third-party security audits. Access to client data is restricted to authorised personnel with a documented need.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">5. Data Retention</h2>
          <p>
            Account data is retained while your account is active and for 3 years thereafter for legal compliance. Client health score data and reports are retained for 7 years to support longitudinal analysis. You may request deletion of your account and associated data at any time, subject to applicable legal retention requirements.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">6. Your Rights</h2>
          <p className="mb-3">Under applicable Indian data protection laws, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate personal data</li>
            <li>Request deletion of your account and data (subject to legal holds)</li>
            <li>Data portability — export your data in machine-readable format</li>
            <li>Object to certain processing activities</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, contact us at privacy@vertibis.com.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">7. Cookies</h2>
          <p>We use essential cookies for authentication and session management, and analytics cookies (via privacy-preserving tools) to understand platform usage. You may disable non-essential cookies in your browser settings.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">8. Contact</h2>
          <p>
            For privacy-related enquiries or to exercise your data rights, contact our Data Protection Officer at:{' '}
            <a href="mailto:privacy@vertibis.com" className="text-[#0066cc] hover:underline">privacy@vertibis.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
