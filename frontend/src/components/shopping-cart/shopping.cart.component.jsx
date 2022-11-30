import React from 'react'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import ProductBox from '../product-box/ProductBox.component'
import '../shopping-cart/shopping.cart.styles.css'


const ShoppingCart = () => {

 const context = useContext(CartContext)
 const {qty, cart} = context.cartState
 console.log(cart)

  return(
      <div className='cart-container'>
          <h1 className='cart-title mt-3 mb-3 text-white'> Productos en tu carrito de compras <span className='text-white'>({qty})</span></h1>
          <div>
            {cart.map(el=><ProductBox product={el} key={el._id}/>)}
          </div>
      </div>
  )
}

export default ShoppingCart