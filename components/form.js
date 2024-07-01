import React, { useEffect, useState } from 'react'
import {toast, ToastContainer} from "react-toastify"

export default function Form  ({eventNos, onClose}) {

    const [newEventId, setNewEventId] = useState("")
    const [eventName, setEventName] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [eventDescription, setEventDescription] = useState("")
    const [eventLocation, setEventLocation] = useState("")
    const [eventOrganiser, setEventOrganiser] = useState("")
    const [eventCost, setEventCost] = useState("")
    const [eventStatus, setEventStatus] = useState("")

    useEffect(() => {
        const eventList = JSON.parse(localStorage.getItem("events") || "[]")

        setNewEventId(eventList[eventNos].id)
        setEventName(eventList[eventNos].name)
        setEventDate(eventList[eventNos].date)
        setEventDescription(eventList[eventNos].description)
        setEventLocation(eventList[eventNos].location)
        setEventOrganiser(eventList[eventNos].organiser)
        setEventCost(eventList[eventNos].cost)
        setEventStatus(eventList[eventNos].bookStatus)
    
      }, []
    )  

    function handleEdit (e) {
        e.preventDefault()

        try {
            //check if all events are filled
            if (!eventName ||  !eventDate || !eventDescription || !eventLocation || !eventOrganiser ) {
                toast.error("Kindly fill up all Properties")
            }
            else {
                //create new event
                const newEvent = {
                    id: newEventId,
                    name: eventName,
                    date: eventDate,
                    description: eventDescription,
                    location: eventLocation,
                    organiser: eventOrganiser,
                    cost: eventCost,
                    bookStatus: eventStatus
                }
                
                const events = JSON.parse(localStorage.getItem("events"))
                events[eventNos] = newEvent
                
                localStorage.setItem("events", JSON.stringify(events))

                // //clear event useState
                // setEventName("")
                // setEventDate("")
                // setEventDescription("")
                // setEventLocation("")
                // setEventOrganiser("")

                toast.success("Event Successfully Updated")
                onClose()

            }
        } catch (error) {
            toast.error("Kindly Check one of the component for errors")
        }
    }

  return (
    <form onSubmit={handleEdit} className='mt-5 p-8 flex flex-col gap-5 items-center'>
        <div className='w-full md:w-1/2'>
            <label htmlFor="" className='text-left text-sm font-medium text-gray-900'>Enter Event Name</label>
            <input className='p-2 w-full ring-1 ring-indigo-300 rounded-sm' type="text" name="event-name" id="event-name" placeholder={eventName} required 
                        value={eventName} 
                        onChange={(e) => setEventName(e.target.value) } />
        </div>
        
        <div className='w-full md:w-1/2'>
            <label htmlFor="" className='text-left text-sm font-medium text-gray-900'>Select Event Date</label>
            <input className='p-2 w-full ring-1 ring-indigo-300 rounded-sm' type="date" name="event-date" id="event-date" placeholder='Select Event Date' required
                    value={eventDate} 
                    onChange={(e) => setEventDate(e.target.value) } />
        </div>

        <div className='w-full md:w-1/2'>
            <label htmlFor="" className='text-left text-sm font-medium text-gray-900'>Select Event Date</label>
            <textarea className='p-2 w-full ring-1 ring-indigo-300 rounded-sm' name="event-description" id="event-description" placeholder='Enter Event Description' cols={30} rows={6} required
                        value={eventDescription} 
                        onChange={(e) => setEventDescription(e.target.value) } />
        </div>

        <div className='w-full md:w-1/2'>
            <label htmlFor="" className='text-left text-sm font-medium text-gray-900'>Enter Event Venue</label>
            <input className='p-2 w-full ring-1 ring-indigo-300 rounded-sm' type="text" name="event-location" id="event-location" placeholder='Enter Event Location' required
                    value={eventLocation} 
                    onChange={(e) => setEventLocation(e.target.value) } />
        </div>

        <div className='w-full md:w-1/2'>
            <label htmlFor="" className='text-left text-sm font-medium text-gray-900'>Enter Event Organiser</label>
            <input className='p-2 w-full ring-1 ring-indigo-300 rounded-sm' type="text" name="event-organiser" id="event-organiser" placeholder='Enter Name of Organiser' required 
                        value={eventOrganiser} 
                        onChange={(e) => setEventOrganiser(e.target.value) } />
        </div>

        <div className='w-full md:w-1/2'>
            <label htmlFor="" className='text-left text-sm font-medium text-gray-900'>  Enter Event Cost</label>
            <input className='p-2 w-full ring-1 ring-indigo-300 rounded-sm' type="text" name="event-cost" id="event-cost" placeholder='Enter Cost of Event' required 
                        value={eventCost} 
                        onChange={(e) => setEventCost(e.target.value) } />
        </div>
        <button onClick={handleEdit} type="submit" className='w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer' >Update Event</button>
    </form>
  )
}
