import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    description: 'Perfect for individual CAs just getting started.',
    highlight: false,
    features: [
      '50 health score reports per year',
      'Basic financial health scoring',
      'GSTN data integration',
      'PDF report export',
      'Email support',
      'Dashboard access',
    ],
    missing: ['Advanced analytics', 'AI advisory', 'Priority support', 'API access'],
    cta: 'Get Started Free',
    href: 'https://vertibis-frontend.vercel.app',
    external: true,
  },
  {
    name: 'Pro',
    price: '₹3,999',
    period: 'per year',
    description: 'For growing CA firms managing multiple MSME clients.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Unlimited health score reports',
      'Advanced analytics & benchmarking',
      'AI-powered advisory engine',
      'GSTN + ITR integration',
      'Trend tracking & alerts',
      'Custom branded PDF reports',
      'Priority support (< 4hr response)',
      'Team collaboration (3 users)',
    ],
    missing: ['API access', 'Dedicated support'],
    cta: 'Start Pro Trial',
    href: 'https://vertibis-frontend.vercel.app',
    external: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored pricing',
    description: 'For large CA firms and financial institutions.',
    highlight: false,
    features: [
      'Everything in Pro',
      'REST API access',
      'Bulk processing & batch scoring',
      'White-label reports',
      'Dedicated account manager',
      'SLA-backed support (< 1hr)',
      'Custom integrations',
      'Unlimited team members',
      'SSO & enterprise security',
    ],
    missing: [],
    cta: 'Contact Sales',
    href: '/contact',
    external: false,
  },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[#0066cc] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
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
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
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
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    {plan.highlight ? (
                      <svg className="w-4 h-4 text-blue-200 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    ) : (
                      <CheckIcon />
                    )}
                    <span className={plan.highlight ? 'text-blue-50' : 'text-gray-700'}>{f}</span>
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm opacity-50">
                    <XIcon />
                    <span className={plan.highlight ? 'text-blue-50 line-through' : 'text-gray-400 line-through'}>{f}</span>
                  </li>
                ))}
              </ul>

              {plan.external ? (
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
                  className={`text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all border-2 ${
                    plan.highlight
                      ? 'border-white text-white hover:bg-white/10'
                      : 'border-[#0066cc] text-[#0066cc] hover:bg-[#e6f0fa]'
                  }`}
                >
                  {plan.cta}
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          All plans include a 14-day money-back guarantee. GST extra for Indian customers.
        </p>
      </div>
    </section>
  );
}
