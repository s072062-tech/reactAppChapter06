import { useState } from "react"

export default function Contact() {

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ errors, setErrors ] = useState({});
  const [ isSubmitting, setIsSubmitting ] = useState(false);

  const validate = () => {
    const newErrors = {};

    if(!name) {
      newErrors.name = "お名前は必須です。";
    }
    else if(name.length > 30) {
      newErrors.name = "お名前は30文字以内で入力してください。"
    }

    if(!email) {
      newErrors.email = "メールアドレスは必須です。";
    }
    else if(email.length > 30) {
      newErrors.email = "お名前は30文字以内で入力してください。"
    }

    if(!message) {
      newErrors.message = "本文は必須です。";
    }
    else if(message.length > 500) {
      newErrors.message = "本文は500文字以内で入力してください。"
    }

    return newErrors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if(Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        }
      );

      alert("送信しました");
      handleClear();
      setErrors({});
    } catch(error) {
      console.error("送信に失敗しました:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleClear = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* ページ見出し（<h1> タグ） */}
      <h1 className="text-2xl font-bold mb-6">問合わせフォーム</h1>
      {/* 3-2. フォーム全体（<form> タグ） */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 3-3. 名前フィールド */}
        <div className="flex items-center gap-4">
          <label className="w-32 shrink-0 text-sm font-medium">お名前</label>
          <div>
            <input type="text" value={name} 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
        </div>
        {/* 3-4. メールアドレスフィールド */}
        <div className="flex items-center gap-4">
          <label className="w-32 shrink-0 text-sm font-medium">メールアドレス</label>
          <input type="email" value={email} 
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        {/* 3-5. 本文フィールド */}
        <div className="flex items-center gap-4">
          <label className="w-32 shrink-0 text-sm font-medium pt-2">本文</label>
          <textarea value={message} 
          className="w-full h-40 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        {/* 3-6. 送信ボタン */}
        <div className="flex justify-center gap-4 pt-4">
          <button type="submit" disabled={isSubmitting} 
          className="w-24 px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 disabled:bg-gray-400">
          送信</button>
          <button type="button" 
          className="w-24 px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
          クリア</button>
        </div>
      </form>
    </div>
  )
}
