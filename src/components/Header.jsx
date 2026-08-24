// 共通ヘッダー
export default function Header() {
  return (
    <header className="items-center px-4 py-3 bg-gray-800 text-white">
      <nav className="flex justify-between gap-4">
        <a href="/" className="hover:underline">Blog</a>
        <a href="" className="hover:underline">お問い合わせ</a>
      </nav>
    </header>
  )
}
