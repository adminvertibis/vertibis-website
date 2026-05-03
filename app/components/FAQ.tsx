'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What is Vertibis and who is it for?',
    a: 'Vertibis is a business health scoring platform designed for Chartered Accountants who serve MSME clients in India. It automates financial analysis, generates health scores across key dimensions, and provides AI-powered advisory — helping CAs deliver more value in less time.',
  },
  {
    q: 'How does the health score work?',
    a: 'The health score is a 0–100 composite score built from 40+ parameters across four dimensions: Financial Health (revenue, profitability, liquidity), Compliance Score (GST filings, tax returns), Growth Index (turnover trends, market trajectory), and Credit Worthiness (repayment patterns, leverage ratios). Each dimension is weighted and combined into an overall score.',
  },
  {
    q: 'What data sources does Vertibis use?',
    a: 'Vertibis integrates with GSTN (GST Network) for GST compliance and turnover data, Income Tax portal for ITR history, and MCA for company filings. Enterprise plans also support custom data source integrations via API.',
  },
  {
    q: 'Is my client data secure?',
    a: 'Yes. All data is encrypted at rest and in transit using AES-256 and TLS 1.3 respectively. We are SOC 2 compliant and follow RBI data localisation guidelines. Your client data is never shared with third parties or used to train our models.',
  },
  {
    q: 'How many reports can I generate on the Free plan?',
    a: 'The Free plan includes 50 health score reports per year — sufficient for small CA practices. Reports reset annually. If you need more, the Pro plan offers unlimited reports for ₹3,999/year.',
  },
  {
    q: 'Can I white-label the PDF reports with my CA firm\'s branding?',
    a: 'Yes, white-labelled PDF reports are available on the Enterprise plan. Pro plan users get custom branded reports with their firm name and logo included.',
  },
  {
    q: 'Is there an API available for integration with my existing software?',
    a: 'Yes, REST API access is available on the Enterprise plan. You can integrate Vertibis scoring into your existing practice management or accounting software. We also provide webhooks for real-time notifications.',
  },
  {
    q: 'What kind of support do you offer?',
    a: 'Free plan users get email support. Pro plan includes priority support with a 4-hour response SLA. Enterprise customers get a dedicated account manager and 1-hour SLA support with a direct phone line.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 group-hover:text-[#0066cc] transition-colors text-sm sm:text-base">
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-sm text-gray-600 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[#0066cc] text-sm font-semibold uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-600">
            Can't find what you're looking for?{' '}
            <a href="/contact" className="text-[#0066cc] hover:underline font-medium">
              Contact our team
            </a>
            .
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
