import PostCard from "../components/PostCard";
import { posts } from "../data/posts"

// 記事一覧ページ
export default function Home () {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">記事一覧</h1>
      {/* 記事情報表示 */}
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
