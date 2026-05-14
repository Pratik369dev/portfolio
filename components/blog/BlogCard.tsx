import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import Badge from "@/components/ui/Badge";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-2xl glass card-lift surface-glow p-6"
    >
      <div className="flex items-center gap-3 text-sm text-[var(--muted-foreground)] mb-3">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>

      <h3 className="font-semibold text-lg group-hover:text-[var(--accent-from)] transition-colors">
        {post.title}
      </h3>

      <p className="mt-2 text-sm text-[var(--muted-foreground)] line-clamp-2">
        {post.excerpt}
      </p>

      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )}
    </Link>
  );
}
