import React, {useState, useRef} from 'react'


const Form = () => {
  const [products, setProducts] = useState({})
  console.log(products)
  const formRef = useRef({})
  const handelSubmit =(e)=>{
    e.preventDefault()
    
  let obj ={
    pName: formRef.current.ProductName.value,
    Price: formRef.current.Price.value,
    Category: formRef.current.Category.value,
    ImageURL: formRef.current.ImageURL.value
  }
  setProducts(obj)
  }


  return (
    <div className='w-80 h-screen'>
      <form onSubmit={handelSubmit} className='p-6 rounded-2xl flex flex-col bg-gray-300 gap-4'>
        <input ref={(e)=> formRef.current.ProductName =e}
         className='p-2 border border-gray-600 rounded-2xl' type="text" placeholder='Product name'/>
        <input ref={(e)=> formRef.current.Price = e}
         className='p-2 border border-gray-600 rounded-2xl' type="text" placeholder='price'/>
        <span>Select category:</span>
        <select ref={(e)=> formRef.current.Category = e}
        className='p-2 border border-gray-600 rounded-2xl'>
            <option value="MENS">mens</option>
            <option value="WOMEN">Womens</option>
            <option value="KIDS">Kids</option> 
        </select>
        <input ref={(e)=> formRef.current.ImageURL =e}
        className='p-2 border border-gray-600 rounded-2xl' type="text" placeholder='Image URL'/>
        <button className='bg-black text-white rounded-2xl p-1'>Create</button>
      </form>
      <h1>{products.pName}</h1>
      <h1>{products.Price}</h1>
      <h1>{products.Category}</h1>
      
    </div>
    
  )
}

export default Form
