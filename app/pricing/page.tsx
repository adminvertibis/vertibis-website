import type { Metadata } from 'next';
import PricingSection from '../components/PricingSection';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for Vertibis. Free plan with 50 reports/year, Pro at ₹3,999/year, and Enterprise with custom pricing.',
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#e6f0fa] via-white to-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#0066cc] text-sm font-semibold uppercase tracking-wider mb-4">Pricing</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Start free, grow with your practice
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            No complicated tiers. No hidden fees. Choose the plan that fits your practice size and upgrade when you need more.
          </p>
        </div>
      </section>

      <PricingSection />

      {/* Feature comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Full feature comparison</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-semibold text-gray-600 w-1/2">Feature</th>
                  <th className="text-center px-4 py-4 font-semibold text-gray-600">Free</th>
                  <th className="text-center px-4 py-4 font-bold text-[#0066cc] bg-[#e6f0fa]">Pro</th>
                  <th className="text-center px-4 py-4 font-semibold text-gray-600">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ['Health Score Reports', '50/year', 'Unlimited', 'Unlimited'],
                  ['GSTN Data Integration', '✓', '✓', '✓'],
                  ['PDF Report Export', '✓', '✓', '✓'],
                  ['AI Advisory', '—', '✓', '✓'],
                  ['Advanced Analytics', '—', '✓', '✓'],
                  ['Industry Benchmarking', '—', '✓', '✓'],
                  ['Trend Tracking & Alerts', '—', '✓', '✓'],
                  ['Branded Reports', '—', 'Logo & Name', 'Full White-label'],
                  ['Team Members', '1', '3', 'Unlimited'],
                  ['Support', 'Email', 'Priority (4hr)', 'Dedicated (1hr)'],
                  ['API Access', '—', '—', '✓'],
                  ['SSO / Enterprise Security', '—', '—', '✓'],
                ].map(([feature, free, pro, enterprise]) => (
                  <tr key={feature} className="hover:bg-gray-50/50">
                    <td className="px-6 py-3.5 text-gray-700 font-medium">{feature}</td>
                    <td className="px-4 py-3.5 text-center text-gray-500">{free}</td>
                    <td className="px-4 py-3.5 text-center text-[#0066cc] font-medium bg-[#e6f0fa]/30">{pro}</td>
                    <td className="px-4 py-3.5 text-center text-gray-600">{enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
