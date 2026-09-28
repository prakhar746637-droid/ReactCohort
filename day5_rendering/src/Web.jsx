import React from 'react'
import { useState } from 'react'

/*
Two type of input handlink

1. brutal force 
jitne input utne use state:


const Web = () => {

    const [name, setName] = useState('Prakhar')
    const [email, setEmail] = useState('Prakhar')
    const [pasword, setPasword] = useState('Prakhar')
    console.log(name)

    return (
        
    <div className='flex flex-col gap-5 w-60 p-4'>
    <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name'/>
    <h1>This is name-{name}</h1>
    
    <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email'/>
    <h1>This is Email-{email}</h1>
    
    <input onChange={(e)=>setPasword(e.target.value)} type="text" placeholder='Pasword'/>
    <h1>This is pasword-{pasword}</h1>
    
    </div>
)
}
---------------------------------------------------------

2. better

const Web = () => {

    const [formData, setFormData] = useState({})
    console.log(formData)

return (
    
<div className='flex flex-col gap-5 w-60 p-4'>
<input onChange={(e)=>setFormData({...formData, name: e.target.value})} type="text" placeholder='Name'/>
<input onChange={(e)=>setFormData({...formData, email:e.target.value})} type="text" placeholder='Email'/>
<input onChange={(e)=>setFormData({...formData, pasward:e.target.value})} type="text" placeholder='Pasword'/>    
</div>
)
}
----------------------------------------------------------------------------------------------------------------------------------------------------

3.Optemize

const Web = () => {

    const [formData, setFormData] = useState({})
    console.log(formData) 

const handelChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}
return (
    
<div className='flex flex-col gap-5 w-60 p-4'>
<input name='name' onChange={handelChange} type="text" placeholder='Name'/>
<input name='email' onChange={handelChange} type="text" placeholder='Email'/>
<input name='passward' onChange={handelChange} type="text" placeholder='Pasword'/>    
</div>
)
}
-------------------------------------------------------------------------------------------------------
4. ultra Optimize

*/
const Web = () => {
    const [formData, setFormData] = useState({})
    console.log(formData) 

    const handelChange = (e) => {
        let {name, value} = e.target
        setFormData({...formData, [name]: value})
    }
    return (
        
    <div className='flex flex-col gap-5 w-60 p-4'>
    <input name='name' onChange={handelChange} type="text" placeholder='Name'/>
    <input name='email' onChange={handelChange} type="text" placeholder='Email'/>
    <input name='passward' onChange={handelChange} type="text" placeholder='Pasword'/>    


     <h1>This is name-{formData.name}</h1>
    <h1>This is Email-{formData.email}</h1>
    <h1>This is pasword-{formData.pasword}</h1>
    
    </div>
)
}

export default Web
