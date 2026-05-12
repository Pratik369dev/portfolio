import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts, tutorials, and behind-the-scenes looks at my creative process.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <SectionWrapper
      title="Blog"
      subtitle="Thoughts, tutorials, and behind-the-scenes"
    >
      {posts.length === 0 ? (
        <p className="py-20 text-center text-[var(--muted-foreground)]">
          No blog posts yet. Check back soon.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
