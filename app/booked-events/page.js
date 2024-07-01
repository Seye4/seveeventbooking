"use client"
import React , {useState, useEffect} from 'react'

export default function BookedEvents () {
    const [bookedEvents, setBookedEvents] = useState([])

    

        useEffect(() => {
            const events = JSON.parse(localStorage.getItem("bookedEvents") || "[]")
            setBookedEvents(events)
        }, [])

  return (
    <div>
        <section className='container h-screen px-5 py-24 mx-auto'>
            <div className='text-center mb-12' >
                <h1 className='text-indigo-600 font-bold' >Your Reliable App</h1>
                <h1 className='text-3xl' >Your Booked Events Record</h1>
            </div>
            {
                bookedEvents.length === 0 ? <p className="text-red-500 text-center">No Booked Event in Database </p> : <table className='w-full'>
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Name</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Date</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Location</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Organiser</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookedEvents.map((event) => (
                           <tr key={event.id}>
                            <td className='p-3 text-sm text-gray-700'>{event.name}</td>
                            <td className='p-3 text-sm text-gray-700'>{event.date}</td>
                            <td className='p-3 text-sm text-gray-700'>{event.location}</td>
                            <td className='p-3 text-sm text-gray-700'>{event.organiser}</td>
                           </tr> 
                        ))}
                    </tbody>
                </table>
            }
        </section>
    </div>
  )
}
