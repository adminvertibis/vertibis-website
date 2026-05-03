import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog – Insights for CAs and MSMEs',
  description:
    'Case studies, guides, and insights on MSME financial health, CA advisory practices, and business scoring from the Vertibis team.',
};

const posts = [
  {
    slug: 'how-vertibis-saved-ca-6-hours-per-client',
    title: 'How Vertibis Saved a Mumbai CA Firm 6 Hours Per Client Assessment',
    excerpt:
      'CA Ramesh Mehta used to spend a full working day assessing each MSME client. Here\'s how he reduced that to under 20 minutes without sacrificing quality.',
    category: 'Case Study',
    date: 'April 28, 2026',
    readTime: '5 min read',
    author: 'Vertibis Team',
    featured: true,
  },
  {
    slug: 'understanding-msme-health-scores',
    title: 'Understanding MSME Health Scores: A Complete Guide for CAs',
    excerpt:
      'What does a score of 65 actually mean? We break down each component of the Vertibis health score and how to interpret it for your MSME clients.',
    category: 'Guide',
    date: 'April 15, 2026',
    readTime: '8 min read',
    author: 'Neha Krishnamurthy',
    featured: true,
  },
  {
    slug: 'gstn-data-msme-financial-health',
    title: 'How GST Filing Data Reveals MSME Financial Health (And What to Look For)',
    excerpt:
      'GST data is a goldmine for financial analysts — if you know how to read it. We explain the key signals in GST filings that predict business health.',
    category: 'Insights',
    date: 'April 3, 2026',
    readTime: '6 min read',
    author: 'Arjun Patel',
  },
  {
    slug: 'ca-advisory-revenue-streams',
    title: '3 New Revenue Streams CAs Can Unlock with Health Score Reports',
    excerpt:
      'Beyond compliance, CAs can now offer health score reviews, lender-ready reports, and strategic advisory packages — all powered by Vertibis data.',
    category: 'Business',
    date: 'March 22, 2026',
    readTime: '5 min read',
    author: 'Ananya Bose',
  },
  {
    slug: 'msme-credit-readiness-checklist',
    title: 'The MSME Credit Readiness Checklist Every CA Should Use',
    excerpt:
      'Before your client approaches a bank or NBFC, run through this 12-point checklist to assess their credit readiness and avoid rejection.',
    category: 'Guide',
    date: 'March 10, 2026',
    readTime: '7 min read',
    author: 'Rohit Jain',
  },
  {
    slug: 'ai-advisory-vs-human-judgment',
    title: 'AI Advisory vs. Human Judgement: How CAs Should Think About AI Tools',
    excerpt:
      'AI doesn\'t replace CA expertise — it amplifies it. We explore how to use AI advisory outputs effectively and where human judgement always wins.',
    category: 'Insights',
    date: 'February 28, 2026',
    readTime: '6 min read',
    author: 'Neha Krishnamurthy',
  },
];

const categoryColors: Record<string, string> = {
  'Case Study': 'bg-green-100 text-green-700',
  'Guide': 'bg-blue-100 text-blue-700',
  'Insights': 'bg-purple-100 text-purple-700',
  'Business': 'bg-amber-100 text-amber-700',
};

export default function BlogPage() {
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#e6f0fa] via-white to-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#0066cc] text-sm font-semibold uppercase tracking-wider mb-4">Vertibis Blog</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Insights for smarter CA advisory
          </h1>
          <p className="text-lg text-gray-600">
            Case studies, guides, and expert analysis on MSME financial health and CA practice growth.
          </p>
        </div>
      </section>

      {/* Featured posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-[#0066cc]/20 transition-all"
              >
                <div className="bg-gradient-to-br from-[#e6f0fa] to-[#cce0f5] h-48 flex items-center justify-center">
                  <div className="text-center px-6">
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#0066cc]/20 flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 text-[#0066cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0066cc] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>{post.date} · {post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* More articles */}
          <h2 className="text-lg font-bold text-gray-900 mb-6">More Articles</h2>
          <div className="space-y-4">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-100 hover:border-[#0066cc]/20 hover:shadow-md transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#0066cc] transition-colors mb-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="text-right text-xs text-gray-400 flex-shrink-0 pt-1">
                  <div>{post.date}</div>
                  <div>{post.readTime}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
