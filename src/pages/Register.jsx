import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const handleSubmit = (e) => {
    e.oreventDefault()
  }
  return (
    <div className='flex items-center justify-center h-full'>
      <form onSubmit={handleSubmit} className='flex flex-col bg-green-100/50 p-8 rounded-xl gap-4 w-90'>
        <input type="text" placeholder='name' className='border border-black/25 py-1 px-2 rounded' required />
        <input type="email" placeholder='email' className='border border-black/25 py-1 px-2 rounded' required />
        <input type="number" placeholder='age' className='border border-black/25 py-1 px-2 rounded' required />
        <input type="text" placeholder='gender' className='border border-black/25 py-1 px-2 rounded' required />
        <input type="number" placeholder='mobile number' className='border border-black/25 py-1 px-2 rounded' required />
        <input type="password" placeholder='password' className='border border-black/25 py-1 px-2 rounded' required />
        <button type='submit' className='bg-green-500 px-2 py-1 rounded'>Register</button>
        <Link to={"/login"} className='text-xs text-gray-400'>Already have an Account, Login!</Link>
      </form>
    </div>
  )
}
