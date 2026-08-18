import React,{useRef} from 'react'
import Form from './components/Form'
import RHF from './components/RHF';

const App = () => {
  let inpRef = useRef()
  console.log(inpRef);
  
  return (
    <div className='h-screen w-full p-5'>
      {/*<Form/>*/}
      <RHF/>
    </div>
  )
}

export default App
