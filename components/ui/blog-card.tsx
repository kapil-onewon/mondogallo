import { Card } from "@/components/ui/card";
import { BlogPost } from "../../data/blog-posts";
import Image from "next/image";
import { Heart, Share2 } from "lucide-react";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="relative w-full aspect-[3/4] overflow-hidden group cursor-pointer">
      {/* Background Image */}
      <Image
        src={post.imageUrl}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
        {/* Date */}
        <div className="flex items-center gap-1">
          <div className="bg-red px-2 py-1 text-sm font-bold">
            {post.date.day}
          </div>
          <div className="bg-red px-2 py-1 text-sm font-bold">
            {post.date.month}
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold leading-tight">{post.title}</h3>
          <p className="text-sm text-gray-300 line-clamp-2">{post.excerpt}</p>

          {/* Interactions */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-1 text-sm">
              <Heart className="w-4 h-4" />
              <span>{post.interactions.likes.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Share2 className="w-4 h-4" />
              <span>{post.interactions.shares}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
