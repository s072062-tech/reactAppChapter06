import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts"
import CategoryTag from "../components/CategoryTag";

// 記事詳細
export default function PostDetail() {

  const { id } = useParams();
  const post = posts.find((data) => data.id === Number(id));

  // 記事がない場合はメッセージを表示
  if(!post) {
    return (
      <p className="text-center text-gray-500 py-12">
        記事が見つかりませんでした
      </p>
    )
  }

  const {title, thumbnailUrl, createdAt, categories, content} = post;

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      {/* サムネ画像 */}
      <img src={thumbnailUrl} alt={title} className="w-full py-4 object-cover shrink-0" />
      <div className="flex flex-row items-center gap-2 mb-6">
        {/* 作成時間 */}
        <span className="text-sm text-gray-500">
          {new Date(createdAt).toLocaleDateString('ja-JP', {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        {/* カテゴリタグ */}
        <div>
          {categories.map((categorie) => (
            <CategoryTag key={categorie} categorie={categorie} />
          ))}
        </div>
      </div>
      {/* タイトル */}
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      {/* 本文 */}
      <div dangerouslySetInnerHTML={{ __html: content }} 
      className="text-base leading-7" />

      {/* 戻る */}
      <Link to="/" className="inline-block mt-8 text-blue-600 font-semibold hover:underline">
      記事一覧へ戻る</Link>
    </div>
  )
}
