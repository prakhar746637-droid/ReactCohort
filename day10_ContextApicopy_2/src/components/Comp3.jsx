import React from 'react'
import Comp4 from './Comp4'

const Comp3 = ({data}) => {
    console.log(data);
    
  return (
    <div>
      <h1>comp3 inside comp2</h1>
      <Comp4 data={data}/>
    </div>
  )
}

export default Comp3
