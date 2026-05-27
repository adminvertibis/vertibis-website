'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What is Vertibis and who is it for?',
    a: 'Vertibis is a business health scoring and partner intelligence platform for CAs, CS, CWAs, advocates, tax consultants, and other advisors serving MSMEs in India.',
  },
  {
    q: 'How does the health score work?',
    a: 'The V2 score is a 0-100 composite across five components: GST Integrity, ITR Consistency, Cashflow Health, Compliance Behaviour, and Data Credibility. The same base score can later support NBFC lending and enterprise vendor-screening indices.',
  },
  {
    q: 'What data sources does Vertibis use?',
    a: 'Vertibis uses GST, income tax, and banking data. GST GSP/API integration is planned, with manual uploads available as the current fallback flow.',
  },
  {
    q: 'Is client consent required?',
    a: 'Yes. Client consent is required before Vertibis processes GST, income tax, or banking documents. The platform supports consent requests by email.',
  },
  {
    q: 'How are partner plans and report credits priced?',
    a: 'The partner dashboard starts at Rs 3,999/year for up to 50 clients, Rs 7,999/year for up to 200 clients, and Rs 12,999/year for Enterprise. Report credits are purchased separately; initially one credit equals one report.',
  },
  {
    q: 'What report types are available?',
    a: 'Quick reports are Rs 499. FY reports are Rs 999, Rs 1,999, or Rs 2,999 by turnover band. Detailed reports are Rs 1,499, Rs 2,499, or Rs 3,499 by turnover band.',
  },
  {
    q: 'Can I white-label the PDF reports with my firm branding?',
    a: 'Yes. Reports can be co-branded, and white-label options are planned for higher partner tiers and enterprise use cases.',
  },
  {
    q: 'Is there an API for NBFC or enterprise integrations?',
    a: 'API-based scoring is part of the Vertibis roadmap for NBFC credit verification and enterprise vendor onboarding or credit-term workflows.',
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
