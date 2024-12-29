import { BlogCard } from "./blog-card";
import { BlogPostTwo } from "@/data/blog-posts";

export function PopularArticles({ posts }: { posts: BlogPostTwo[] }) {
  const [featured, ...smallPosts] = posts.filter(
    (post) => post.category === "popular"
  );

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Popular Articles</h2>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="lg:col-span-1">
          <BlogCard post={featured} variant="featured" />
        </div>
        <div className="grid gap-6">
          {smallPosts.slice(0, 2).map((post) => (
            <BlogCard key={post.id} post={post} variant="small" />
          ))}
        </div>
      </div>
    </section>
  );
}
