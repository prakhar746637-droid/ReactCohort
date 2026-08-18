import React from 'react'

const ProductsCard = ({product, del}) => {
    
  return (
    <div className='p-1 border-2 rounded flex flex-col gap-2'>
      <div className='w-40'>
        <img src={product.image} alt="paste image URL" />
      </div>
      <div>
        <h2 className='font-semibold'>{product.name}</h2>
        <p className='text-xs'>Category</p>
        <p className='text-green-900'>Price</p>
      </div>
      <button className='text-white p-2 bg-amber-900 rounded-2xl cursor-pointer'
      onClick={()=>del(product.id)}>Delete</button>
    </div>
  )
}

export default ProductsCard
