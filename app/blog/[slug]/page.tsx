import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] link-underline mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <header className="mb-10">
        <time
          dateTime={post.date}
          className="text-sm text-[var(--muted-foreground)]"
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}
      </header>

      <MarkdownRenderer content={post.content} />
    </article>
  );
}
