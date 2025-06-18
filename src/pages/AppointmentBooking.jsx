import React from 'react'

export default function AppointmentBooking() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='flex items-center justify-center h-full'>
            <form onSubmit={handleSubmit} className='bg-cyan-100/40 p-6 w-90 rounded-xl flex flex-col gap-4'>
                <select
                    name="doctor"
                    id="doctor"
                    className='px-2 py-1 w-full border border-gray-400 rounded-xl'
                >
                    <option value="Dr. Anshuman">Dr. Anshuman</option>
                    <option value="Dr. Tarasha">Dr. Tarasha</option>
                    <option value="Dr. Anushka">Dr. Anushka</option>
                </select>
                <input
                    type="date"
                    className='px-2 py-1 w-full border border-gray-400 rounded-xl'
                />
                <input
                    type="time"
                    className='px-2 py-1 w-full border border-gray-400 rounded-xl'
                />
                <button
                    type='submit'
                    className='px-2 py-1 w-full bg-cyan-500/70 rounded-xl'
                >
                    Book Appointment
                </button>
            </form>
        </div>
    )
}
