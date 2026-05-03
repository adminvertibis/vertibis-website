import type { Metadata } from 'next';
import CTA from '../components/CTA';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore all Vertibis features: instant health scoring, AI advisory, GSTN integration, analytics, PDF reports, and client portfolio management.',
};

const featureGroups = [
  {
    category: 'Health Scoring Engine',
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-[#0066cc]',
    features: [
      {
        title: '0–100 Composite Health Score',
        description:
          'A single, easy-to-interpret score that summarises a business\'s overall financial and operational health. Built from 40+ underlying parameters across four key dimensions.',
      },
      {
        title: 'Financial Health Sub-score',
        description:
          'Analyses revenue trends, gross margin, EBITDA, working capital cycle, liquidity ratios, and debt-to-equity. Benchmarked against industry peers in the same MSME category.',
      },
      {
        title: 'Compliance Score',
        description:
          'Tracks GST filing consistency, return accuracy, ITR submission history, TDS compliance, and MCA annual filing status. Flags late filings and defaulted months.',
      },
      {
        title: 'Growth Index',
        description:
          'Measures turnover trajectory over 12–36 months, customer concentration risk, geographic expansion signals, and sector-specific growth benchmarks.',
      },
      {
        title: 'Credit Worthiness Score',
        description:
          'Assesses repayment history, existing credit obligations, leverage ratios, collateral coverage, and overall credit risk profile relevant for lenders.',
      },
    ],
  },
  {
    category: 'AI Advisory Engine',
    color: 'bg-purple-50 border-purple-100',
    iconBg: 'bg-purple-600',
    features: [
      {
        title: 'Personalised Recommendations',
        description:
          'Each report includes 5–10 AI-generated, actionable recommendations specific to the business — not generic advice. Covers working capital, compliance, growth, and credit readiness.',
      },
      {
        title: 'Risk Flag Alerts',
        description:
          'Proactively flags deteriorating metrics before they become critical — such as a declining compliance pattern, thinning margins, or a rising debt burden.',
      },
      {
        title: 'Opportunity Identification',
        description:
          'Identifies growth opportunities like government MSME schemes the business may qualify for, optimal credit products, or sectors showing correlated growth.',
      },
    ],
  },
  {
    category: 'Data Integrations',
    color: 'bg-green-50 border-green-100',
    iconBg: 'bg-green-600',
    features: [
      {
        title: 'GSTN Integration',
        description:
          'Directly pull GST filing history, turnover declarations, and compliance records from the GST Network. No manual document collection needed.',
      },
      {
        title: 'Income Tax Portal',
        description:
          'Access ITR filing history, declared income, TDS data, and income source breakdown from the IT portal with client consent.',
      },
      {
        title: 'MCA Integration',
        description:
          'Fetch company registration details, director information, annual filings, and charge data from the Ministry of Corporate Affairs.',
      },
      {
        title: 'API Access (Enterprise)',
        description:
          'Connect Vertibis to your existing practice management software, accounting tools, or custom applications via our REST API with webhook support.',
      },
    ],
  },
  {
    category: 'Reports & Analytics',
    color: 'bg-amber-50 border-amber-100',
    iconBg: 'bg-amber-500',
    features: [
      {
        title: 'One-Click PDF Reports',
        description:
          'Generate professional, print-ready PDF health reports in seconds. Includes score breakdown, trend charts, AI advisory, and next-step recommendations.',
      },
      {
        title: 'Historical Trend Analysis',
        description:
          'Track health score evolution over months and years. Identify when a business started recovering or deteriorating and correlate with external events.',
      },
      {
        title: 'Portfolio Dashboard',
        description:
          'See all your MSME clients at a glance — sorted by health score, flagged for risk, or filtered by industry. Identify your most and least healthy clients instantly.',
      },
      {
        title: 'Industry Benchmarking',
        description:
          'Compare any business against anonymised aggregate data from similar MSMEs in the same industry and revenue range to provide context to your clients.',
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#e6f0fa] via-white to-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#0066cc] text-sm font-semibold uppercase tracking-wider mb-4">Platform Features</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Every tool a CA needs for MSME advisory
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From automated scoring to AI-generated advisory, Vertibis brings together all the data and analysis your practice needs — in one platform.
          </p>
        </div>
      </section>

      {/* Feature groups */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {featureGroups.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-8 h-8 rounded-lg ${group.iconBg} flex items-center justify-center`}>
                  <div className="w-3 h-3 rounded-full bg-white opacity-90" />
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">{group.category}</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {group.features.map((feature) => (
                  <div key={feature.title} className={`rounded-xl border p-5 ${group.color}`}>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Vertibis vs. Manual Assessment
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-semibold text-gray-600">Capability</th>
                  <th className="text-center px-6 py-4 font-semibold text-gray-600">Manual</th>
                  <th className="text-center px-6 py-4 font-bold text-[#0066cc]">Vertibis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ['Time per MSME assessment', '6–8 hours', '< 3 minutes'],
                  ['Data collection', 'Manual document chase', 'Automated GSTN/IT pull'],
                  ['Scoring consistency', 'Varies by analyst', 'Standardised algorithm'],
                  ['AI advisory', 'Not available', 'Included'],
                  ['Historical trends', 'Spreadsheet work', 'Auto-tracked'],
                  ['PDF reports', 'Manual preparation', 'One click'],
                  ['Compliance monitoring', 'Periodic check', 'Real-time alerts'],
                  ['Industry benchmarks', 'No access', 'Built-in'],
                ].map(([capability, manual, vertibis]) => (
                  <tr key={capability} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4 text-gray-700 font-medium">{capability}</td>
                    <td className="px-6 py-4 text-center text-gray-400">{manual}</td>
                    <td className="px-6 py-4 text-center text-[#0066cc] font-semibold">{vertibis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
