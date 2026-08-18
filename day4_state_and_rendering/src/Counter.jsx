import React, {useState} from 'react'

const Counter = () => {
  let [count, setCount] = useState(0)
  return (
    /* jab same set function ko ek hi function ke andar muliple barr
    call karte hai to setCount ka "batching"(Same set function ko batch kar deta hai)
     ho jata hai
     
     <div>
     <h1>Count is {count}</h1>
     <button onClick={()=>{
      setCount(count+1)
      setCount(count+1)
      setCount(count+1)
      }}>Increment</button>
      </div>
      -------------------------------------------------------------------
      Set function ke andar previous(matlab current state) hota hai 
    */
       <div>
      <h1>Count is {count}</h1>
      <button onClick={()=>{
        setCount((prev)=>prev+1)      // impliset return
        setCount((prev)=>prev+1)      
        setCount((prev)=>prev+1)      
      }}>Increment</button>
    </div>
  )
}

export default Counter
