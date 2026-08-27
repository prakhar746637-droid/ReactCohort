import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Home = () => {
   let data = useContext(MyStore)
   console.log(data);
   
    console.log('home rendering')
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
