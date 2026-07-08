import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCmsData } from "@/app/lib/cms-store";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cms = await getCmsData();
  const resource = cms.resources.find((item) => item.slug === slug && item.status === "published");

  if (!resource) {
    return { title: "Resource not found" };
  }

  return {
    title: resource.seoTitle,
    description: resource.seoDescription,
  };
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const cms = await getCmsData();
  const resource = cms.resources.find((item) => item.slug === slug && item.status === "published");

  if (!resource) {
    notFound();
  }

  return (
    <article className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/resources" className="text-sm font-black text-[#0066cc]">
          Back to resources
        </Link>
        <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-[#7c3aed]">
          {resource.category}
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#071527] sm:text-5xl">
          {resource.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#607089]">{resource.summary}</p>
        <div className="mt-8 rounded-2xl border border-[#dbe7f4] bg-[#f7fbff] p-5 text-sm font-semibold text-[#33435b]">
          Author: {resource.author} · Published: {resource.publishDate}
        </div>
        <div className="prose prose-slate mt-10 max-w-none">
          <p className="text-lg leading-8 text-[#33435b]">{resource.body}</p>
        </div>
      </div>
    </article>
  );
}
