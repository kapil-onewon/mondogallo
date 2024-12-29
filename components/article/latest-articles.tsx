import { BlogPostTwo } from "@/data/blog-posts";
import { BlogCard } from "./blog-card";

export function LatestArticles({ posts }: { posts: BlogPostTwo[] }) {
  const latestPosts = posts.filter((post) => post.category === "latest");

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <div className="flex justify-center mt-8 gap-2">
        <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
          1
        </button>
        <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center">
          2
        </button>
        <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center">
          3
        </button>
        <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center">
          4
        </button>
        <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center">
          5
        </button>
        <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center">
          Next →
        </button>
      </div>
    </section>
  );
}
