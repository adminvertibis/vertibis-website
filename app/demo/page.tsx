'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DemoPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Email capture — backend integration pending
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0066cc] via-[#0052a3] to-[#003d7a] py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
            Get Started Today
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Transform your MSME practice in minutes
          </h1>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 500+ CAs who use Vertibis to generate instant health scores, AI advisory, and professional reports for their MSME clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://vertibis-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0066cc] font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-xl text-lg"
            >
              Launch App — It's Free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-4">50 free reports/year · No credit card · Setup in 2 minutes</p>
        </div>
      </section>

      {/* Email capture */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Stay in the loop</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Get product updates, CA advisory tips, and MSME health insights delivered to your inbox. No spam.
          </p>
          {submitted ? (
            <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-semibold text-gray-900">You're subscribed!</p>
              <p className="text-sm text-gray-500 mt-1">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066cc]/30 focus:border-[#0066cc] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#0066cc] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#0052a3] transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-12">
            Everything you need, ready on day one
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'Instant setup', desc: 'No onboarding calls, no lengthy setup. Add your first client and get a health score in under 5 minutes.' },
              { icon: '🔗', title: 'GSTN connected', desc: 'Your MSME clients\' GST data flows in automatically. No document collection, no manual data entry.' },
              { icon: '🤖', title: 'AI-powered insights', desc: 'Get 5–10 tailored recommendations per client report — specific to their business, not generic advice.' },
              { icon: '📄', title: 'Professional PDFs', desc: 'Generate branded, printable reports in one click. Clients and lenders love them.' },
              { icon: '📊', title: 'Portfolio view', desc: 'Track all your MSME clients in one dashboard. Sort, filter, and spot at-risk clients at a glance.' },
              { icon: '🔔', title: 'Smart alerts', desc: 'Get notified when a client\'s health score drops or compliance risk increases — before it\'s a crisis.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#0066cc]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ready to score your first MSME?
          </h2>
          <p className="text-blue-100 mb-8">
            Start with 50 free reports. No credit card. No commitments.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://vertibis-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#0066cc] font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-all"
            >
              Get Started Free
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:border-white hover:bg-white/10 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
