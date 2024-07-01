import React from 'react'

export default function Contact (){
  return (
    <div id='contact' className='max-w-md mx-auto p-6 mb-16 bg-gray-600 rounded-lg shadow-md'>
        <h2 className='text-3xl text-center text-red-500'> Contact Us</h2>
        <form action="">
            <div className="mb-4">
                <label htmlFor="" className='block text-white text-sm font-semibold mb-2' >Your Name</label>
                <input placeholder="John Doe" className='w-full px-3 py-2 border rounded-lg bg-gray-800 focu-blue-500' required type='text' />
            </div>
            <div className="mb-4">
                <label htmlFor="" className='block text-white text-sm font-semibold mb-2' >Your Email</label>
                <input placeholder="john@example.com" className='w-full px-3 py-2 border rounded-lg bg-gray-800 focu-blue-500' required type='email' />
            </div>
            <div className="mb-4">
                <label htmlFor="" className='block text-white text-sm font-semibold mb-2' >Your Message Here</label>
                <textarea rows={4} placeholder="Your message here ..." className='w-full px-3 py-2 border rounded-lg bg-gray-800 focu-blue-500' required type='text' /> 
            </div>
            <div>
                <button type="submit" className='bg-red-500 text-white font-semibold px-4 py-2 rounded-lg bg-gray-800 hover:bg-red-600 focus:border-blue-500'>Send Message</button>
            </div>
        </form>
    </div>
  )
}
