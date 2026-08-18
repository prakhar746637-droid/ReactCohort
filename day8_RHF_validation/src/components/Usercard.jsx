import React from 'react'

const Usercard = ({user}) => {
  return (
    <div className='p-4 border border-yellow-600 bg-black rounded flex flex-col gap-4'>
      <div className='h-40 w-50'>
        <img className='object-cover h-full w-full rounded-xl'
         src={user.image}
          alt="image" />
      </div>
      <div className='flex flex-col gap-1'>
        <h1 className='text-white'>{user.name}</h1>
        <p className='text-sm text-white'>{user.email}</p>
        <p className='text-sm text-white'>{user.contect}</p>
      </div>
      <div className='flex w-full justify-between gap-1'>
        <button className='bg-green-500 text-white p-2 rounded cursor-pointer'>Update</button>
        <button className='bg-red-500 text-white p-2 rounded cursor-pointer'>Delete</button>
      </div>
    </div>
  )
}

export default Usercard
