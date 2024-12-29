import { notFound } from "next/navigation";
import Image from "next/image";
import { SocialIcons } from "@/components/article/social-icons";
import { MoreArticles } from "@/components/article/more-articles";
import { LikeButton } from "@/components/article/like-button";
import { blogPostTwos } from "@/data/blog-posts";

export async function generateStaticParams() {
  const ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return ids.map((post) => ({
    id: post,
  }));
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const post: any = blogPostTwos.find(
    (post) => post.id === parseInt(params.id)
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen  py-12 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <article className="lg:w-2/3">
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-red-600 px-2 py-1 text-sm font-bold">
                  {post.date.day}
                </div>
                <div className="bg-red-600 px-2 py-1 text-sm font-bold">
                  {post.date.month}
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <div className="flex items-center justify-between">
                <p className="text-gray-400">By John Doe</p>
                <div className="flex items-center gap-4">
                  <LikeButton />
                  <SocialIcons />
                </div>
              </div>
            </header>
            <div className="relative w-full aspect-video mb-8">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl mb-6">{post.excerpt}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <h2>The Importance of Innovation</h2>
              <p>
                Innovation drives progress and shapes our future. It's the
                engine that propels societies forward, challenges the status
                quo, and opens up new possibilities. In today's rapidly changing
                world, the ability to innovate is more crucial than ever.
              </p>
              <p>
                From groundbreaking technologies to revolutionary ideas,
                innovation touches every aspect of our lives. It's not just
                about creating new products or services; it's about finding
                novel solutions to complex problems and improving the human
                experience.
              </p>
              <h2>Embracing Change</h2>
              <p>
                Change is inevitable, and those who embrace it are often the
                ones who thrive. In a world where disruption is the new normal,
                adaptability and a willingness to evolve are key to success.
                Whether in business, technology, or personal growth, the ability
                to pivot and adjust course is invaluable.
              </p>
              <p>
                As we look to the future, it's clear that the pace of change
                will only accelerate. By fostering a mindset of continuous
                learning and improvement, we can better position ourselves to
                navigate the challenges and opportunities that lie ahead.
              </p>
            </div>
          </article>
          <aside className="lg:w-1/3 mt-12 lg:mt-0">
            <div className="sticky top-6">
              <MoreArticles
                currentArticleId={post.id}
                articles={blogPostTwos}
              />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
