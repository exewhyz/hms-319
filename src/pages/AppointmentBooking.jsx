import React, { useState } from 'react'
import { useData } from "../context/DataContext"
import { useNavigate } from 'react-router-dom';

export default function AppointmentBooking() {
    const redirect = useNavigate()

    const { addAppointment } = useData();

    const [appointmentData, setAppointmentData] = useState({
        doctor: "",
        date: "",
        time: ""
    })

    const handleChange = (e) => {
        setAppointmentData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addAppointment(appointmentData);

        setAppointmentData({
            doctor: "",
            date: "",
            time: ""
        });
        redirect("/")
    }
    return (
        <div className='flex items-center justify-center h-full'>
            <form onSubmit={handleSubmit} className='bg-cyan-100/40 p-6 w-90 rounded-xl flex flex-col gap-4'>
                <select
                    name="doctor"
                    value={appointmentData.doctor}
                    onChange={handleChange}
                    id="doctor"
                    className='px-2 py-1 w-full border border-gray-400 rounded-xl'
                >
                    <option value="Dr. Anshuman">Dr. Anshuman</option>
                    <option value="Dr. Tarasha">Dr. Tarasha</option>
                    <option value="Dr. Anushka">Dr. Anushka</option>
                </select>
                <input
                    name="date"
                    value={appointmentData.date}
                    onChange={handleChange}
                    type="date"
                    className='px-2 py-1 w-full border border-gray-400 rounded-xl'
                />
                <input
                    name="time"
                    value={appointmentData.time}
                    onChange={handleChange}
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
