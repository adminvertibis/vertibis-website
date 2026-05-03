const steps = [
  {
    step: '01',
    title: 'Connect your client',
    description:
      'Add your MSME client by entering their GSTN or PAN. Vertibis instantly pulls compliance data, filing history, and turnover details from government databases.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Get your health score',
    description:
      'Our engine analyses 40+ financial and compliance parameters in seconds, generating a 0–100 composite health score with sub-scores across four key dimensions.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Review AI advisory',
    description:
      'Receive tailored, AI-generated recommendations covering working capital, compliance risks, growth opportunities, and credit readiness — specific to each client.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Share & act',
    description:
      'Export a professional PDF report for your client or lender, schedule follow-up alerts, and track improvement over time from your portfolio dashboard.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#0066cc] text-sm font-semibold uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            From GSTN to health score in minutes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple 4-step process that replaces hours of manual work with automated, AI-powered analysis.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#0066cc]/20 via-[#0066cc] to-[#0066cc]/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#0066cc] text-white flex items-center justify-center shadow-lg shadow-[#0066cc]/30 mb-6">
                  {step.icon}
                </div>
                <div className="absolute top-0 -translate-y-1 text-xs font-bold text-[#0066cc] bg-white border border-[#0066cc]/20 rounded-full w-5 h-5 flex items-center justify-center" style={{ right: idx === 3 ? 'calc(50% - 28px - 10px)' : 'calc(50% - 28px - 10px)' }}>
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://vertibis-frontend.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0066cc] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#0052a3] transition-all shadow-lg shadow-[#0066cc]/25"
          >
            Try It Free — No Setup Required
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
