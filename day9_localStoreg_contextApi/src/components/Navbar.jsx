import React from 'react'
import logo from "./prakhar_updated_logo-removebg-preview.png";
import users from "./free-user-group-icon-296-thumb-removebg-preview.png"

const Navbar = ({setToggle}) => {
  return (
    <div className='p-4 flex items-center bg-black text-white rounded justify-between'>
      <img src={logo} alt="logo" className='w-20'/>
      <div className='flex gap-4'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contect</a>
        
      </div>
      <button
      onClick={()=>setToggle((prev)=>!prev)} 
      className='p-2 bg-blue-700 text-white rounded cursor-pointer flex items-center gap-2'>Create user <img src={users} alt="Users" className='w-5'/></button>
    </div>
  )
}

export default Navbar
