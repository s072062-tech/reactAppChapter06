// 記事情報
export default function PostCard({ post }) {
  const {title, thumbnailUrl, createdAt, categories, content} = post;

  return (
    <div className="flex flex-row overflow-hidden shadow-sm hover:shadow-md transition">
      {/* サムネ画像 */}
      <img src={thumbnailUrl} alt={title} className="w-60 h-full py-4 object-cover shrink-0" />
      <div className="p-4">
        <div className="flex flex-row items-center gap-2 mb-2">
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
              <span key={categorie} 
              className="inline-block text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded mr-1">
                {categorie}
              </span>
            ))}
          </div>
        </div>
        {/* タイトル */}
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        {/* 本文 */}
        <div dangerouslySetInnerHTML={{ __html: content }} 
        className="text-sm text-gray-700 line-clamp-2" />
      </div>
    </div>
  );
}
