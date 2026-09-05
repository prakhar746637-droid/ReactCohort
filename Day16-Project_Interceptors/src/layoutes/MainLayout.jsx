import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'


const MainLayout = () => {
  return (
    <div className="h-screen bg-gray-700 text-white p-2 grid grid-cols-1 md:grid-cols-[1fr_5fr] gap-2">
      <Navbar/>
      <div className='h-full p-2'>
      <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout
