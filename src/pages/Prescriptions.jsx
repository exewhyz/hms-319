import React from 'react'

export default function Prescriptions() {

    const appointments = [
        {
            id: 1,
            doctor: "Dr. Anushka",
            date: "2025-05-20",
            time: "10:34 AM"
        },
        {
            id: 2,
            doctor: "Dr. Tarasha",
            date: "2025-06-20",
            time: "10:34 AM"
        },
        {
            id: 3,
            doctor: "Dr. Anshuman",
            date: "2025-07-20",
            time: "01:40 PM"
        }
    ];
    const prescriptions = [
        {
            id: 1,
            doctor: "Dr. Anushka",
            details: "jhefhwokfp"
        },
        {
            id: 2,
            doctor: "Dr. Tarasha",
            details: "jhefhwokfp"
        },
        {
            id: 3,
            doctor: "Dr. Anshuman",
            details: "jhefhwokfp"
        }
    ];


    return (
        <div className='flex flex-col gap-8'>
            <h1 className='font-bold text-4xl'>Prescriptions</h1>
            <div className='flex flex-col gap-6'>
                {
                    prescriptions.map((pres) => {
                        return (
                            <div key={pres.id} className='flex gap-4 bg-emerald-200 px-4 py-2 rounded'>
                                <p className='mr-4'>
                                    <span className='font-semibold'>Doctor:</span> {pres.doctor}
                                </p>
                                <p>
                                    <span className='font-semibold'>Details:</span> {pres.details}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
