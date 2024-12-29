"use client"
import { useState } from "react";
import { Heart } from "lucide-react";

export function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    // Here you would typically send a request to your backend to update the like status
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
        liked
          ? "bg-red text-white"
          : "border-2 border-gray-300 rounded-full text-gray-500"
      }`}
    >
      <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
      <span>{liked ? "Liked" : "Like"}</span>
    </button>
  );
}
