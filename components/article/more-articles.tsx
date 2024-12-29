import { BlogCard } from "./blog-card";
import { BlogPostTwo } from "@/data/blog-posts";

export function MoreArticles({
  currentArticleId,
  articles,
}: {
  currentArticleId: number;
  articles: BlogPostTwo[];
}) {
  const relatedArticles = articles
    .filter((article) => article.id !== currentArticleId)
    .slice(0, 3);

  return (
    <div className=" p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">More Articles Like This</h2>
      <div className="space-y-6">
        {relatedArticles.map((article) => (
          <BlogCard key={article.id} post={article} compact={true} />
        ))}
      </div>
    </div>
  );
}
