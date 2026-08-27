// 06-contact.html を参照

import { useState } from "react"

// 3-1. state の設計

// 3-7. handleSubmit の流れ

// 3-8. バリデーション関数

// export default function Contact() {
//   return (
//     // ページ全体ラッパー
//     <>
      // {/* ページ見出し（<h1> タグ） */}
      // <></>
      // {/* 3-2. フォーム全体（<form> タグ） */}
      // <>
      //   {/* 3-3. 名前フィールド */}
      //   <></>
      //   {/* 3-4. メールアドレスフィールド */}
      //   <></>
      //   {/* 3-5. 本文フィールド */}
      //   <></>
      //   {/* 3-6. 送信ボタン */}
      //   <></>
      // </>
//     </>
//   )
// }

export default function Contact() {

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ errors, setErrors ] = useState(null);
  const [ isSubmitting, setIsSubmitting ] = useState(false);

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      {/* ページ見出し（<h1> タグ） */}
      <h1 className="text-2xl font-bold mb-6">問合わせフォーム</h1>
      {/* 3-2. フォーム全体（<form> タグ） */}
      <form >
        {/* 3-3. 名前フィールド */}
        <div>
          <label>お名前</label>
          <input type="text" value={name} />
        </div>
        {/* 3-4. メールアドレスフィールド */}
        <div>
          <label>メールアドレス</label>
          <input type="email" value={email} />
        </div>
        {/* 3-5. 本文フィールド */}
        <div>
          <label>本文</label>
          <textarea value={message} />
        </div>
        {/* 3-6. 送信ボタン */}
        <div className="flex flex-row">
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed" 
          type="submit">送信</button>
          <button >クリア</button>
        </div>

      </form>
    </div>
  )
}