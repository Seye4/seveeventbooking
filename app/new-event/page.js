"use client"
import React, {useState} from 'react'
import {toast, ToastContainer} from "react-toastify"
import {v4 as uuidv4} from "uuid"

export default function NewEvent() {
    const [eventName, setEventName] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [eventDescription, setEventDescription] = useState("")
    const [eventLocation, setEventLocation] = useState("")
    const [eventOrganiser, setEventOrganiser] = useState("")
    const [eventCost, setEventCost] = useState("")

    function handleCreateEvent (e) {
        e.preventDefault()

        try {
            //check if all events are filled
            if (!eventName ||  !eventDate || !eventDescription || !eventLocation || !eventOrganiser ) {
                toast.error("Kindly fill up all Properties")
            }
            else {
                //create new event
                const newEvent = {
                    id: uuidv4(),
                    name: eventName,
                    date: eventDate,
                    description: eventDescription,
                    location: eventLocation,
                    organiser: eventOrganiser,
                    cost: eventCost,
                    bookStatus: "Book"
                }
                
                //add event to local storage
                const events = JSON.parse(localStorage.getItem("events")) || []
                events.push(newEvent)
                localStorage.setItem("events", JSON.stringify(events))

                //clear event useState
                setEventName("")
                setEventDate("")
                setEventDescription("")
                setEventLocation("")
                setEventOrganiser("")
                setEventCost("")

                toast.success("New Event Successfully Added")

            }
        } catch (error) {
            toast.error("Kindly Check one of the component for errors")
        }
    }


    return <>
        <ToastContainer theme='colored' autoClose={2000} />
        <section className='container px-5 py-24 mx-auto'>
            <div className='text-center mb-12' >
                <h1 className='text-indigo-600 font-bold' >Add Event</h1>
                <h1 className='text-3xl' >Kindly Fill all Input Fields</h1>
            </div>
            <form onSubmit={handleCreateEvent} className='mt-5 p-8 flex flex-col gap-5 items-center'>
                <input className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm' type="text" name="event-name" id="event-name" placeholder='Enter event name' required 
                            value={eventName} 
                            onChange={(e) => setEventName(e.target.value) } />
                <input className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm' type="date" name="event-date" id="event-date" placeholder='Select Event Date' required
                        value={eventDate} 
                        onChange={(e) => setEventDate(e.target.value) } />
                <textarea className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm' name="event-description" id="event-description" placeholder='Enter Event Description' cols={30} rows={6} required
                            value={eventDescription} 
                            onChange={(e) => setEventDescription(e.target.value) } />
                <input className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm' type="text" name="event-location" id="event-location" placeholder='Enter Event Location' required
                        value={eventLocation} 
                        onChange={(e) => setEventLocation(e.target.value) } />
               <input className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm' type="text" name="event-organiser" id="event-organiser" placeholder='Enter Name of Organiser' required 
                         value={eventOrganiser} 
                         onChange={(e) => setEventOrganiser(e.target.value) } />
               <input className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm' type="text" name="event-event" id="event-event" placeholder='Cost of Event' required 
                         value={eventCost} 
                         onChange={(e) => setEventCost(e.target.value) } />
                <button onClick={handleCreateEvent} type="submit" className='w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer' >Create New Event</button>
            </form>
        </section>
    </>
}