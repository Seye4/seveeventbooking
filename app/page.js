"use client"
import Modal from "@/components/Modal";
import React, {useState, useEffect} from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function Home() {
  const [eventList, setEventList] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [eventId, setEventId] = useState("")

  useEffect(() => {
    const bookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || []
    // get existing events
    const events = JSON.parse(localStorage.getItem("events") || "[]")
    // add existing events to eventlist
    setEventList(events)

  }, [])                                    

  

  const closeModal = () => {
    setShowModal(false)

    // get existing events
    const events = JSON.parse(localStorage.getItem("events") || "[]")
    // add existing events to eventlist
    setEventList(events)
  }

  const handleEdit = (event) => {
    for(var i = 0;i < eventList.length; i++){
      if (event.id === eventList[i].id) {
        const eventInfo = JSON.stringify(i)
        setEventId(eventInfo)
        break;
      }
    }
    setShowModal(true)
  }

  // delete an existing event
  const deleteEvent = (event) => {
    
    const events = JSON.parse(localStorage.getItem("events"))
    for(var i = 0;i < events.length; i++){
      if (event.id === events[i].id) {
          events.splice(i, 1)
          localStorage.setItem("events", JSON.stringify(events))
          if(events.length < 1)
          {
              setEventList([])
          }
          else {
            setEventList(events)
          }

          break;
      }
    }
  }

  const handleBookedEvent = (event) => {

      const events = JSON.parse(localStorage.getItem("events"))

      for(var i = 0;i < events.length; i++){
        if (event.id === events[i].id) {

            events[i].bookStatus = "Booked"
            
            localStorage.setItem("events", JSON.stringify(events))
            break;
        }
      }

      if (bookedEvents.find((e) => e.name === event.name && e.date === event.date)){
        toast.error("Event already booked!", {autoClose: 2000})
        return
      }

      const updateBookedEvents = [...bookedEvents, event]
      localStorage.setItem("bookedEvents", JSON.stringify(updateBookedEvents))
      setEventList(events)
      toast.success("Event booked Successfully!", {autoClose: 2000})
  }

  return (
    
    <main>
      <ToastContainer theme='colored' autoClose={2000} />
      <section className="h-screen flex items-center text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <h5 className="text-base md:text-lg text-indigo-700 mb-1">Your Reliable Event App</h5>
            <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">You Can Find all your Events Here</h1>
          </div>

          
          {
              eventList.length === 0 ? (<p className="text-red-500 text-center">No events found in Database</p>) : (
                <div className="gap-6 flex-wrap flex justify-center">
                {
                  eventList.map((event) => (
                      <div key={event.id} className="w-60 p-2 bg-white rounded-xl">
                        {/* <img className="h-40 object-cover rounded-xl"
                                  src="https://picsum.photos/id/188/720/400" alt="blog" /> */}
                        <div className="p-2">
                          <h2 className="font-bold text-lg mb-2">{event.name}</h2>
                          <div className="flex justify-between items-center">
                            <p className="font-bold text-xs text-gray-700">Venue</p>
                            <span className="text-[12px] font-semi-bold">{event.location}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="font-bold text-xs text-gray-700">Date</p>
                            <span className="text-[12px] font-semi-bold">{event.date}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2" >
                              <p className="font-bold text-xs text-gray-700">Cost</p>
                              <span className="text-sm font-semi-bold text-red-500">Rm {event.cost}</span>
                            </div>
                            <div className="p-1 px-2 bg-green-600 text-white rounded-lg text-[9px]" >{event.bookStatus}</div>
                          </div>
                          <div className="h-12">
                          <p className="font-bold text-xs text-gray-700">Description</p>
                            <p className="text-[12px] text-gray-500 mt-1 mb-2" >{event.description}</p>
                          </div>
                        </div>
                        <div className="p-2 flex items-center justify-between mb-2">
                          <button onClick={() => handleEdit(event)} className="p-2 flex items-center justify-center rounded-full bg-indigo-700"> 
                            <FaRegEdit className="text-white" />
                          </button>
                          <button onClick={() => deleteEvent(event)} className="p-2 flex items-center justify-center rounded-full bg-red-500">
                            <MdDelete className="text-white" />
                          </button>
                          <button className="p-2 bg-slate-600 text-white rounded-lg" onClick={() => handleBookedEvent(event)}>Book Events</button>
                        </div>
                        
                      </div>
                  ))
                }
                 </div>
              )
          }
        </div>
          <Modal isVisible={showModal} eventNos={eventId} onClose={() => closeModal()}  />
      </section>
    </main>
  );
}
