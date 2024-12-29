import { blogPostTwos } from '../../data/blog-posts'
import { PopularArticles } from '@/components/article/popular-articles'
import { LatestArticles } from '@/components/article/latest-articles'

export default function Home() {
  return (
    <main className="min-h-screen bg-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PopularArticles posts={blogPostTwos} />
        <LatestArticles posts={blogPostTwos} />
      </div>
    </main>
  )
}
