const testimonials = [
  {
    name: 'CA Ramesh Mehta',
    role: 'Partner, Mehta & Associates, Mumbai',
    avatar: 'RM',
    quote:
      "Vertibis has completely changed how I assess MSME clients. What used to take me a full day of analysis now takes under 5 minutes. The AI advisory is impressively accurate.",
    stars: 5,
  },
  {
    name: 'CA Priya Sharma',
    role: 'Independent CA, Delhi',
    quote:
      "The GSTN integration alone is worth it. I don't have to chase clients for documents anymore. The health score dashboard gives a clear picture at a glance.",
    avatar: 'PS',
    stars: 5,
  },
  {
    name: 'CA Vikram Gupta',
    role: 'Director, Gupta & Co. Advisors, Bangalore',
    avatar: 'VG',
    quote:
      "My clients love the PDF reports — they're professional and easy to understand. It's helped me position myself as a more strategic advisor, not just a compliance person.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#0066cc] text-sm font-semibold uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            CAs across India trust Vertibis
          </h2>
          <p className="text-lg text-gray-600">Real results from real Chartered Accountants.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0066cc] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-[#0066cc] rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '500+', label: 'Active CAs' },
              { value: '12,000+', label: 'Reports Generated' },
              { value: '2.4 min', label: 'Avg. Report Time' },
              { value: '98%', label: 'Customer Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
