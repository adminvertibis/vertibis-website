import type { Metadata } from 'next';
import CTA from '../components/CTA';

export const metadata: Metadata = {
  title: 'About Vertibis',
  description:
    'Learn about Vertibis — the team building India\'s leading MSME business health scoring platform for Chartered Accountants.',
};

const team = [
  {
    name: 'Arjun Patel',
    role: 'Co-founder & CEO',
    bio: 'Former fintech product lead with 10+ years in MSME lending. Ex-SIDBI, IIT Bombay alumni.',
    avatar: 'AP',
  },
  {
    name: 'Neha Krishnamurthy',
    role: 'Co-founder & CTO',
    bio: 'Built ML risk models at CIBIL and Lendingkart. IIT Delhi + Carnegie Mellon graduate.',
    avatar: 'NK',
  },
  {
    name: 'Rohit Jain',
    role: 'Head of Product',
    bio: 'Spent 8 years working alongside CA firms building accounting software. ICAI certified.',
    avatar: 'RJ',
  },
  {
    name: 'Ananya Bose',
    role: 'Head of Growth',
    bio: 'Built B2B SaaS GTM from 0 to 50K users at two prior startups. IIM Calcutta.',
    avatar: 'AB',
  },
];

const values = [
  {
    title: 'Built for India',
    description:
      'We understand the unique challenges of Indian MSMEs — GST complexity, informal cash flows, seasonal volatility. Our scoring engine is calibrated for Indian data, not adapted from Western models.',
    icon: '🇮🇳',
  },
  {
    title: 'CAs First',
    description:
      'Every feature is designed with Chartered Accountants in mind. We respect your expertise and build tools that amplify your advisory capacity — not replace it.',
    icon: '🤝',
  },
  {
    title: 'Data Privacy',
    description:
      'Client data is sacred. We never sell, share, or use your clients\' financial data for anything other than generating their health reports. Full stop.',
    icon: '🔒',
  },
  {
    title: 'Continuous Improvement',
    description:
      'Our scoring models are continuously updated with new data and CA feedback. The more CAs use Vertibis, the smarter and more accurate it becomes.',
    icon: '📈',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#e6f0fa] via-white to-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#0066cc] text-sm font-semibold uppercase tracking-wider mb-4">About Vertibis</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            We're fixing how India's CAs assess business health
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Vertibis was born from a simple frustration: talented Chartered Accountants were spending days on manual financial analysis that should take minutes. We're changing that.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">The Problem We Saw</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                India has 63 million MSMEs employing 110 million people — yet most CAs still assess their clients' financial health using spreadsheets, gut feel, and documents collected over email.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A typical health assessment takes 4–8 hours per client: gathering GST returns, analysing P&L, checking compliance, writing recommendations. For a CA managing 50+ MSME clients, this is unsustainable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The result? CAs are stuck doing compliance work when they should be doing strategic advisory. MSMEs miss out on proactive guidance. And everyone loses.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-4">
                {[
                  { label: 'Average hours per manual MSME assessment', value: '6–8 hrs' },
                  { label: 'Average MSME clients per CA firm', value: '40–80' },
                  { label: 'Hours saved per year with Vertibis', value: '300+ hrs' },
                  { label: 'Increase in advisory revenue potential', value: '2–3×' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-600">{item.label}</span>
                    <span className="text-sm font-bold text-[#0066cc]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#e6f0fa] rounded-2xl p-8 order-2 md:order-1">
              <div className="text-[#0066cc] text-6xl font-extrabold mb-2">2022</div>
              <p className="text-gray-600 text-sm">Founded in Mumbai, India</p>
              <div className="mt-6 space-y-3">
                {[
                  '✓ Launched with 3 beta CA firms',
                  '✓ 500+ active CAs by Year 1',
                  '✓ 12,000+ reports generated',
                  '✓ ₹2.5 Cr seed round raised',
                ].map((item) => (
                  <p key={item} className="text-sm text-gray-700">{item}</p>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Our Solution</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We built Vertibis to automate the data collection and analysis layer of MSME assessment — pulling from GSTN, ITR, and MCA — and layer AI-generated advisory on top.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                What took 6–8 hours now takes under 3 minutes. CAs get more time for high-value work. MSMEs get proactive, data-driven guidance. Banks and lenders get standardised health reports.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to make professional business health assessment accessible to every MSME in India — regardless of size or geography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">Our Principles</h2>
            <p className="text-gray-600">What guides every product decision we make.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">Meet the Team</h2>
            <p className="text-gray-600">
              Former fintech operators, ML engineers, and CA-software builders.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#0066cc] text-white text-2xl font-extrabold flex items-center justify-center mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-[#0066cc] font-medium mb-2">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
