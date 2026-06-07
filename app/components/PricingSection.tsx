import Link from 'next/link';
import { PARTNER_REGISTER_URL } from '../config';

const partnerPlans = [
  {
    name: 'Starter Pack',
    price: 'Rs 3,999',
    period: 'per year',
    description: 'For solo practitioners and small advisory practices.',
    highlight: false,
    features: [
      'Partner intelligence dashboard',
      'Up to 50 MSME clients',
      'Client consent workflow',
      'Report credit wallet',
      'Income opportunity view',
      'Co-branded client reports',
    ],
    cta: 'Register as Partner',
    href: PARTNER_REGISTER_URL,
  },
  {
    name: 'Firm Pack',
    price: 'Rs 7,999',
    period: 'per year',
    description: 'For CA, CS, CWA, advocate, and tax consultant firms managing a larger base.',
    highlight: true,
    badge: 'Recommended',
    features: [
      'Everything in Starter',
      'Up to 200 MSME clients',
      'Advanced portfolio analytics',
      'Opportunity pipeline tracking',
      'Pitch and proposal tools',
      'Priority partner support',
    ],
    cta: 'Start Firm Pack',
    href: PARTNER_REGISTER_URL,
  },
  {
    name: 'Enterprise Pack',
    price: 'Rs 12,999',
    period: 'per year',
    description: 'For large practices and teams that want deeper operating visibility.',
    highlight: false,
    features: [
      'Everything in Firm',
      'Large client portfolio support',
      'White-label report options',
      'Team workflow readiness',
      'Custom onboarding support',
      'API-readiness for future integrations',
    ],
    cta: 'Contact Sales',
    href: '/contact',
  },
];

const reportProducts = [
  { name: 'Quick Report', price: 'Rs 499', detail: 'For portal testing and first client conversations.' },
  { name: 'FY Report', price: 'Rs 999 / 1,999 / 2,999', detail: 'For FY-focused issues, based on turnover band.' },
  { name: 'Detailed Report', price: 'Rs 1,499 / 2,499 / 3,499', detail: 'The final scoring report with advisory and action plan.' },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[#0066cc] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#0066cc] text-sm font-semibold uppercase tracking-wider mb-3">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Partner dashboard plans and client report pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            CAs and consultants subscribe to the dashboard, then use report credits to generate MSME health reports.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {partnerPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-[#0066cc] text-white shadow-2xl shadow-[#0066cc]/30 scale-105'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? 'text-blue-200' : 'text-gray-500'}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    {plan.highlight ? (
                      <svg className="w-4 h-4 text-blue-200 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    ) : (
                      <CheckIcon />
                    )}
                    <span className={plan.highlight ? 'text-blue-50' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.href.startsWith('http') ? (
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                    plan.highlight
                      ? 'bg-white text-[#0066cc] hover:bg-blue-50'
                      : 'bg-[#0066cc] text-white hover:bg-[#0052a3]'
                  }`}
                >
                  {plan.cta}
                </a>
              ) : (
                <Link
                  href={plan.href}
                  className="text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all border-2 border-[#0066cc] text-[#0066cc] hover:bg-[#e6f0fa]"
                >
                  {plan.cta}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-100 p-6">
          <h3 className="text-xl font-extrabold text-gray-900 mb-4">Client MSME health report pricing</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {reportProducts.map((product) => (
              <div key={product.name} className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="text-sm font-semibold text-[#0066cc] mb-2">{product.name}</div>
                <div className="text-2xl font-extrabold text-gray-900 mb-2">{product.price}</div>
                <p className="text-sm text-gray-600">{product.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">FY and Detailed report prices vary by turnover: up to Rs 1 Cr, Rs 1-5 Cr, and above Rs 5 Cr.</p>
        </div>
      </div>
    </section>
  );
}
