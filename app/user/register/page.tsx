"use client"

import { useState } from "react"

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  console.log(name)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:3001/api/user/register", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      })

      const jsonData = await response.json()
      console.log(jsonData)
      alert(jsonData)
    } catch (err) {
      alert("ユーザー登録失敗")
    }
  }
  return (
    <div>
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="名前" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" name="email" placeholder="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" name="password" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button>登録</button>
      </form>
    </div>
  )
}

export default Register
