import React, { useState } from 'react'

const Register = ({setToggle, setUsers}) => {
  const [formData, setFormData] = useState({
     name: "",
     email: "",
     password: "",
     image:"",
  })
  
  

  const handleChange=(e)=>{
    let {name,value}=e.target
    setFormData({...formData, [name]:value})
  }
  const handleSbmit =(e)=>{
    e.preventDefault();
    setUsers((prev)=>[...prev, formData])
        setFormData({
      name:"",
      email:"",
      password:"",
      image:""
    })
    
  }
  return (

    <div className="bg-gray-400 w-90 p-4 rounded-2xl flex flex-col gap-4">
      <form onSubmit={handleSbmit} className="flex flex-col gap-4 p-3" action="">
        <h1>Register...</h1>

        <input required value={formData.name} name='name' onChange={handleChange} className="p-2 border border-gray-600 rounded-2xl" type="text" placeholder="Name" />
        <input required value={formData.email} name='email' onChange={handleChange} className="p-2 border border-gray-600 rounded-2xl" type="text" placeholder="Email" />
        <input required value={formData.password} name='password' onChange={handleChange} className="p-2 border border-gray-600 rounded-2xl" type="password" placeholder="Password" />
        <input required value={formData.image} name='image' onChange={handleChange} className="p-2 border border-gray-600 rounded-2xl" type="url" placeholder="Image URL" />

        <button className="bg-black text-white rounded-2xl cursor-pointer p-2">Register</button>
      </form>
      <p>Have an Account? <span onClick={
        ()=>{setToggle((prev)=>!prev)}
      } className="text-blue-700 cursor-pointer" >Register here</span></p>
    </div>
  )
}

export default Register
