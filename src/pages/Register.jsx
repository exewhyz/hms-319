import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../context/AuthContext.jsx"


export default function Register() {
  const { isAuthenticated, register, loading, error } = useAuth();
  const redirect = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    mobile: "",
    password: ""
  });
  const { name, email, age, gender, mobile, password } = user;
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await register(user);
    } catch (error) {
      console.log(error)
    }
  }
  const handleChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  useEffect(() => {
    if (isAuthenticated) redirect("/")
  }, [])
  return (
    <div className='flex items-center justify-center h-full'>
      <form onSubmit={handleSubmit} className='flex flex-col bg-green-100/50 p-8 rounded-xl gap-4 w-90'>
        <input onChange={handleChange} name={"name"} value={name} type="text" placeholder='name' className='border border-black/25 py-1 px-2 rounded' required />
        <input onChange={handleChange} name={"email"} value={email} type="email" placeholder='email' className='border border-black/25 py-1 px-2 rounded' required />
        <input onChange={handleChange} name={"age"} value={age} type="number" placeholder='age' className='border border-black/25 py-1 px-2 rounded' required />
        <input onChange={handleChange} name={"gender"} value={gender} type="text" placeholder='gender' className='border border-black/25 py-1 px-2 rounded' required />
        <input onChange={handleChange} name={"mobile"} value={mobile} type="number" placeholder='mobile number' className='border border-black/25 py-1 px-2 rounded' required />
        <input onChange={handleChange} name={"password"} value={password} type="password" placeholder='password' className='border border-black/25 py-1 px-2 rounded' required />
        <button type='submit' disabled={loading} className='bg-green-500 px-2 py-1 rounded'>
          {loading ? "Registering User" : "Register"}
        </button>
        <Link to={"/login"} className='text-xs text-gray-400'>Already have an Account, Login!</Link>
      </form>
    </div>
  )
}
