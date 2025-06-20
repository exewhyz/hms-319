import React from 'react'
import { useData } from '../context/DataContext'

export default function Prescriptions() {

    const { prescriptions } = useData();

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
