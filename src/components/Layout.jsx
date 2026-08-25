import Header from "./Header";

// レイアウト: 共通ヘッダーとRoute表示
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}
