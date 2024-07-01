import React from 'react'
import Form from './form'

export default function Modal ({isVisible, onClose, eventNos}) 
{
    
    const handleEdit = () => {
        for(var i = 0;i < eventList.length; i++){
          if (eventNos === eventList[i].id) {
            const eventInfo = JSON.stringify(i)
            setEventId(eventInfo)
            break;
          }
        }
        setShowModal(true)
      }

    if(!isVisible) return null

    const handleClose = (e) => {
        if(e.target.id === 'wrapper')
            onClose()
    }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose} >
       <div className='w-[600px] md:w-[60%] md:mx-auto flex flex-col' >
        <button className='text-white text-xl place-self-end' onClick={() => onClose()} >X</button>
        <div className="bg-white p-2 rounded">
            <Form eventNos={eventNos} onClose={onClose} />
        </div>
       </div>
    </div>
  )
}

