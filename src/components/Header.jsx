import { Link } from "react-router-dom"

// 共通ヘッダー
export default function Header() {
  return (
    <header className="items-center px-4 py-3 bg-gray-800 text-white">
      <nav className="flex justify-between gap-4">
        <Link to="/" className="hover:underline">Blog</Link>
        <Link to="/contact" className="hover:underline">お問い合わせ</Link>
      </nav>
    </header>
  )
}
