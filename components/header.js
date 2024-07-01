"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
    {
        title : "home",
        url: "/",
    },
    {
        title : "Booked Events",
        url: "/booked-events",
    },
    {
        title : "New Event",
        url: "/new-event",
    }
]
export default function Header (){
    const pathName = usePathname()

    function handleMenuBar () {
      const menu = document.querySelector('#menu')
      const bars = document.querySelectorAll('.bar')

      menu.classList.toggle("hidden")
      bars.forEach(bar => {
        bar.classList.toggle("bg-white")
      }); 
    }


  return (
    <nav className='fixed top-0 w-full bg-white' >
          <div className="container mx-auto py-5 flex justify-between">
            <Link href='/'><h1 className='font-bold md:block' >  Event Booking </h1> </Link>
            
            <ul className='hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase'>
                  {
                      
                      links.map((link) => (
                          <li key={link.url} className='hover:text-gray-500' > 
                              <Link href={link.url} className={`${pathName === link.url ? "font-bold opacity-100" : "font-normal opacity-70"} transition`} >{link.title}</Link>
                          </li>
                      ))
                  }
              </ul>
            <div>
            <Link href='#contact'><h3 className='font-bold hidden md:block'>Contact Us</h3></Link>
              
            </div>
            <div id='hamburger' className='space-y-1 md:hidden cursor-pointer z-10' onClick={handleMenuBar}>
              <div id='bar' className='bar w-6 h-0.5 bg-black'></div>
              <div id='bar' className='bar w-6 h-0.5 bg-black'></div>
              <div id='bar' className='bar w-6 h-0.5 bg-black'></div>
            </div>
            <ul id='menu' className='hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center uppercase'>
                  {
                      
                      links.map((link) => (
                          <li key={link.url} className='hover:text-gray-500' > 
                              <Link href={link.url} className={`${pathName === link.url ? "font-bold opacity-100" : "font-normal opacity-70"} transition`} >{link.title}</Link>
                          </li>
                      ))
                  }
              </ul>
          </div>
      </nav>
  )
}
