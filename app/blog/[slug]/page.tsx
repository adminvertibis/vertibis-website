import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog Article',
  description: 'Read the latest insights from the Vertibis team.',
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-[#0066cc] hover:underline mb-8">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </Link>
      <div className="bg-gradient-to-br from-[#e6f0fa] to-white rounded-2xl p-10 text-center">
        <p className="text-[#0066cc] text-sm font-semibold mb-3">Article coming soon</p>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-4">
          We're writing this article right now
        </h1>
        <p className="text-gray-600 text-sm">
          Slug: <code className="bg-white px-2 py-0.5 rounded text-xs">{slug}</code>
        </p>
        <Link
          href="/blog"
          className="inline-block mt-6 bg-[#0066cc] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0052a3] transition-colors"
        >
          Browse all articles
        </Link>
      </div>
    </div>
  );
}
