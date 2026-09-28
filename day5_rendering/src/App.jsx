
import React, {useState} from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const [user, setUser] = useState({
    name: "Prakhar"
  })

  return (
    <div>
      <h1>Count is - {count}</h1>
      <h2>Name is - {user.name}</h2>



      <button onClick={()=>{
        setCount(count+1)
      }}>Count Increment</button>

      <button onClick={()=>{
        user.name = "Prakhar"
        setUser({
          name: 'Prakhar'
        })
      }}>Change Name</button>
    </div>
  )
}

export default App
