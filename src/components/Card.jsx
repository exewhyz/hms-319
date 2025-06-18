import React from 'react'

export default function Card({ id, doctor, date, time }) {
    return (
        <div className='bg-fuchsia-100 w-60 h-50 rounded-lg flex flex-col gap-4 items-center justify-center'>
            <h3 className='font-bold text-2xl'>{doctor}</h3>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
        </div>
    )
}
