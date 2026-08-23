import React from 'react'
import Comp3 from './Comp3'
import { MyStore } from '../context/MyContext'

const Comp2 = () => {
    useContext(MyStore)
  return (
    <div>
      <h1>Comp2 inside comp1</h1>
      <Comp3/>
    </div>
  )
}

export default Comp2
