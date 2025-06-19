import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../context/AuthContext.jsx"

export default function Login() {
  const redirect = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { isAuthenticated, loading, error, login } = useAuth();


  useEffect(() => {
    if (isAuthenticated) redirect("/");
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-center h-full'>
      <form onSubmit={handleSubmit} className='flex flex-col bg-blue-100/50 p-8 rounded-xl h-50 w-90 gap-4'>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder='email'
          className='border border-black/25 py-1 px-2 rounded' required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder='password'
          className='border border-black/25 py-1 px-2 rounded' required
        />
        <button
          disabled={loading}
          type='submit'
          className='bg-blue-500 px-2 py-1 rounded'
        >
          {loading ? "Logging In" : "Login"}
        </button>
        <Link to={"/register"} className='text-xs text-gray-400'>Not have an Account, Register!</Link>
      </form>
    </div>
  )
}
