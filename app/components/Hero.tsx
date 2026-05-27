import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#e6f0fa] via-white to-white overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066cc' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#e6f0fa] text-[#0066cc] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse" />
              Trusted by 500+ Chartered Accountants
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Score Your{' '}
              <span className="text-[#0066cc]">MSME's</span>
              <br />
              Business Health
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              Vertibis gives CAs and consultants data-driven MSME health scores, client consent workflows, AI advisory, and income opportunity intelligence. All in minutes, not days.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://vertibis-frontend.vercel.app/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0066cc] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#0052a3] transition-all shadow-lg shadow-[#0066cc]/25 hover:shadow-xl hover:shadow-[#0066cc]/30 hover:-translate-y-0.5"
              >
                Register as Partner
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://vertibis-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-6 py-3.5 rounded-xl hover:border-[#0066cc] hover:text-[#0066cc] transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                No credit card needed
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Free starter credits
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                GSTN integrated
              </div>
            </div>
          </div>

          {/* Right: Score card mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Business Health Score</p>
                  <p className="text-lg font-bold text-gray-900 mt-0.5">Sharma Textiles Pvt. Ltd.</p>
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-[#0066cc] flex items-center justify-center bg-[#e6f0fa]">
                  <span className="text-xl font-extrabold text-[#0066cc]">78</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { label: 'GST Integrity', score: 82, color: 'bg-green-500' },
                  { label: 'ITR Consistency', score: 76, color: 'bg-[#0066cc]' },
                  { label: 'Cashflow Health', score: 65, color: 'bg-amber-500' },
                  { label: 'Compliance Behaviour', score: 74, color: 'bg-[#0066cc]' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{item.label}</span>
                      <span className="font-semibold text-gray-700">{item.score}/100</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#e6f0fa] rounded-xl p-3">
                <p className="text-xs font-semibold text-[#0066cc] mb-1">AI Advisory</p>
                <p className="text-xs text-gray-600">Strong compliance standing. Consider optimising working capital cycle to improve growth index by ~8 points.</p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2 flex items-center gap-2">
              <span className="text-green-500 text-lg">+</span>
              <div>
                <p className="text-xs font-bold text-gray-900">+12 pts</p>
                <p className="text-xs text-gray-500">This month</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2 flex items-center gap-2">
              <span className="text-[#0066cc] text-lg">V</span>
              <div>
                <p className="text-xs font-bold text-gray-900">2.4 min</p>
                <p className="text-xs text-gray-500">Avg. report time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof strip */}
        <div className="mt-20 border-t border-gray-100 pt-10">
          <p className="text-center text-sm text-gray-400 font-medium mb-8">TRUSTED BY LEADING CA FIRMS ACROSS INDIA</p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-300 font-bold text-lg">
            {['Mehta & Associates', 'RK Tax Consultants', 'Gupta & Co.', 'Jain Finance Advisory', 'Shah CA Firm'].map((name) => (
              <span key={name} className="opacity-60">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
