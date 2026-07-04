import Link from "next/link";
import { posts } from "@/lib/blog-data";

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen px-4 pb-24 pt-32 md:px-6">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--accent-cyan)]">
          Journal
        </p>
        <h1 className="mt-5 text-6xl font-semibold tracking-[-0.1em] text-[var(--color-ink)] md:text-8xl">
          Blog
        </h1>
        <div className="mt-14 grid gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-glass)] p-6 transition hover:-translate-y-1 hover:border-[var(--accent-cyan)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                {post.date}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
                {post.title}
              </h2>
              <p className="mt-3 text-[var(--color-muted)]">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
