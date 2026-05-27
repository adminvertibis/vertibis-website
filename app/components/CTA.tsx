export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0066cc] to-[#0052a3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Ready to transform your practice?
        </h2>
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
          Join partners who use Vertibis to find client risks, income opportunities, and report-led advisory work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://vertibis-frontend.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0066cc] font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-all shadow-lg"
          >
            Register as Partner
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:border-white hover:bg-white/10 transition-all"
          >
            Talk to Sales
          </a>
        </div>
        <p className="mt-6 text-blue-200 text-sm">
          Starter Rs 3,999/year · Firm Rs 7,999/year · Enterprise Rs 12,999/year
        </p>
      </div>
    </section>
  );
}
