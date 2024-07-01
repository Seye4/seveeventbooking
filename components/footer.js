"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




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
export default function Footer (){
    const pathName = usePathname()


  return (
    <footer className='w-full bg-gray-800' >
          <div className="container mx-auto py-5 flex items-center justify-between">
          <Link href="/"><h1 className='text-2xl font-bold text-white' >  Event Booking </h1></Link>
            <span className='hidden md:block font-medium text-white'> &copy; {new Date().getFullYear()} Petaling Jaya, Design with  ❤️  by Seve</span>
            <div className='flex gap-2 text-cyan-50 cursor-pointer'>
                <Link href="https://www.linkedin.com/in/oluseye-ekerin-41653042"><FaLinkedinIn /></Link>
                <Link href="https://github.com/Seye4"><FaGithub /></Link>
            </div>
          </div>
      </footer>
  )
}
