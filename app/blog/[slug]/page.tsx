import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  return {
    title: post ? `${post.title} | ${siteConfig.name}` : `Blog | ${siteConfig.name}`,
    description: post?.description ?? siteConfig.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen px-4 pb-24 pt-32 md:px-6">
      <article className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--accent-cyan)]">
          {post.date}
        </p>
        <h1 className="mt-5 text-5xl font-semibold leading-none tracking-[-0.08em] text-[var(--color-ink)] md:text-7xl">
          {post.title}
        </h1>
        <p className="mt-8 text-xl leading-9 text-[var(--color-muted)]">{post.description}</p>
        <div className="mt-12 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-glass)] p-8 leading-8 text-[var(--color-muted)]">
          <p>
            This is a launch-ready placeholder for a long-form article. Replace it with real writing,
            diagrams, code samples, media, and production notes as the portfolio content matures.
          </p>
        </div>
      </article>
    </main>
  );
}
