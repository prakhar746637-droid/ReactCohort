import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Usercard from './components/Usercard'
import Form from './components/Form'

const App = () => {
  const [toggle, setToggle] = useState(false)
  const [users, setUsers] = useState(()=>{
    return JSON.parse(localStorage.getItem("users")) || []
  })
  const [updatedData, setUpdatedData] = useState(null)
  const deleteUser =(id)=>{
    let filterUser = users.filter((val,index)=>{
      return index!==id
    })
    console.log(filterUser);
    setUsers(filterUser)
    localStorage.setItem("users",JSON.stringify(filterUser))
  }
  return (

    <div className='p-3 h-screen bg-gray-800 flex flex-col gap-4'>
      <Navbar setToggle={setToggle}/>
      {
        toggle ? (
      <div className='flex flex-wrap gap-4'>
        {
          users.map((elem, index)=>{
            return <Usercard setToggle={setToggle} ind={index} setUpdatedData={setUpdatedData} deleteUser={deleteUser} key={index} user={elem}/>
          })
        }
      </div>):(
      <div className='flex justify-center h-[70%] items-center'>
        <Form setUsers={setUsers} setToggle={setToggle} users={users} updatedData={updatedData}/>
      </div>
      )
      }
    </div>
  )
}

export default App