import React, { useContext } from 'react'
import CartProductCard from '../components/CartProductCard '
import { MyStory } from '../context/MyContext'

const CartScreen = () => {
    let {cartItems}= useContext(MyStory)
  return (
    <div className='h-screen flex flex-col gap-3'>
      {
        cartItems.map((elem)=>{
            return <CartProductCard product={elem} key={elem.id}/>
        })
      }
    </div>
  )
}

export default CartScreen
