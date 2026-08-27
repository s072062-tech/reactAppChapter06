import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PostDetail from "./pages/PostDetail"
import Layout from "./components/Layout"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Layout className="min-h-screen bg-gray-50">
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}
