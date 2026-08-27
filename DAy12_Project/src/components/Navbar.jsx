import React, { useContext } from 'react'
import { MyStory } from '../context/MyContext'

const Navbar = () => {
    let {setIsCartOpen} = useContext(MyStory)
  return (
    <div className='bg-black text-white rounded p-5 flex items-center justify-between'>
      <div>Logo</div>
      <div className='flex gap-10 text-xl'>
        <a
        onClick={()=>setIsCartOpen(false)}
        href="#">Home</a>
        <a 
        onClick={()=>setIsCartOpen(true)}
        href="#">Cart</a>
      </div>
      <button>Create</button>
    </div>
  )
}

export default Navbar
