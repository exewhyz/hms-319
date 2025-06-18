import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted")
  }

  return (
    <div className='flex items-center justify-center h-full'>
      <form onSubmit={handleSubmit} className='flex flex-col bg-blue-100/50 p-8 rounded-xl h-50 w-90 gap-4'>
        <input type="email" placeholder='email' className='border border-black/25 py-1 px-2 rounded' required/>
        <input type="password" placeholder='password' className='border border-black/25 py-1 px-2 rounded' required/>
        <button type='submit' className='bg-blue-500 px-2 py-1 rounded'>Login</button>
        <Link to={"/register"} className='text-xs text-gray-400'>Not have an Account, Register!</Link>
      </form>
    </div>
  )
}
