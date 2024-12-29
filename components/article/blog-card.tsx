import Image from "next/image";
import Link from "next/link";
import { BlogPostTwo } from "@/data/blog-posts";
import { Heart, Share2 } from "lucide-react";

interface BlogCardProps {
  post: BlogPostTwo;
  variant?: "featured" | "normal" | "small";
}

export function BlogCard({ post, variant = "normal" }: BlogCardProps) {
  return (
    <Link href={`/article/${post.id}`} className="group block">
      <article
        className={`relative rounded-lg  overflow-hidden ${
          variant === "featured"
            ? "h-[500px]"
            : variant === "small"
            ? "h-[200px]"
            : "h-[300px]"
        }`}
      >
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-lg" />
        <div className="absolute bottom-0 p-6 space-y-2">
          <p className="text-gray-300 text-sm">{post.date}</p>
          <h3
            className={`text-white font-bold ${
              variant === "featured"
                ? "text-3xl"
                : variant === "small"
                ? "text-lg"
                : "text-xl"
            } leading-tight`}
          >
            {post.title}
          </h3>
          {variant !== "small" && (
            <p className="text-gray-300 text-sm line-clamp-2">{post.excerpt}</p>
          )}
        </div>
        
          {/* Interactions */}
          <div className="absolute top-2 right-4 flex items-center gap-4 pt-2">
            <div className="flex items-center gap-1 text-[10px] text-white">
              <Heart className="w-3 h-3" />
              <span>{post.interactions.likes.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-white">
              <Share2 className="w-3 h-3" />
              <span>{post.interactions.shares}</span>
            </div>
          </div>
      </article>
    </Link>
  );
}
