import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='flex h-10 bg-amber-200 items-center justify-between px-4 py-2'>
            <Link to={"/"} className='font-bold text-3xl text-blue-600'>
                MA<span className='text-red-500'>X</span>
            </Link>
            <div className='flex gap-4'>
                <Link to={"/"}>Home</Link>
                <Link to={"/appointment-booking"}>Appointment Booking</Link>
                <Link to={"/prescriptions"}>Prescriptions</Link>
            </div>
            <div className='flex gap-4'>
                <Link to={"/login"}>Login</Link>
                <Link to={"/register"}>Register</Link>
            </div>
        </nav>
    )
}
