import type { Metadata } from 'next';
import PricingSection from '../components/PricingSection';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Vertibis pricing for partner dashboard subscriptions and MSME health reports.',
};

const comparison = [
  ['Annual dashboard price', 'Rs 3,999', 'Rs 7,999', 'Rs 12,999'],
  ['Client limit', '50', '200', 'Large practice'],
  ['Report credits', 'Purchased separately', 'Purchased separately', 'Purchased separately'],
  ['Quick report', 'Rs 499', 'Rs 499', 'Rs 499'],
  ['FY report', 'Rs 999 / 1,999 / 2,999', 'Rs 999 / 1,999 / 2,999', 'Rs 999 / 1,999 / 2,999'],
  ['Detailed report', 'Rs 1,499 / 2,499 / 3,499', 'Rs 1,499 / 2,499 / 3,499', 'Rs 1,499 / 2,499 / 3,499'],
  ['AI advisory', 'Included', 'Included', 'Included'],
  ['Income opportunities', 'Basic', 'Advanced', 'Advanced'],
  ['Branded reports', 'Co-branded', 'Co-branded', 'White-label options'],
  ['Team members', '1', '3', 'Unlimited'],
  ['API access', 'No', 'No', 'Future-ready'],
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#e6f0fa] via-white to-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#0066cc] text-sm font-semibold uppercase tracking-wider mb-4">Pricing</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Pricing for partners and MSME health reports
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Subscribe to the partner dashboard, purchase report credits, and generate Quick, FY, or Detailed reports for MSME clients.
          </p>
        </div>
      </section>

      <PricingSection />

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Full feature comparison</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-semibold text-gray-600 w-1/2">Feature</th>
                  <th className="text-center px-4 py-4 font-semibold text-gray-600">Starter</th>
                  <th className="text-center px-4 py-4 font-bold text-[#0066cc] bg-[#e6f0fa]">Firm</th>
                  <th className="text-center px-4 py-4 font-semibold text-gray-600">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {comparison.map(([feature, starter, firm, enterprise]) => (
                  <tr key={feature} className="hover:bg-gray-50/50">
                    <td className="px-6 py-3.5 text-gray-700 font-medium">{feature}</td>
                    <td className="px-4 py-3.5 text-center text-gray-500">{starter}</td>
                    <td className="px-4 py-3.5 text-center text-[#0066cc] font-medium bg-[#e6f0fa]/30">{firm}</td>
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
