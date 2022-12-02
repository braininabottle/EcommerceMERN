import React from 'react'
import { useContext, Fragment } from 'react'
import CartContext from '../../context/CartContext'
import ProductBox from '../product-box/ProductBox.component'
import '../shopping-cart/shopping.cart.styles.css'
import { PayPalButtons } from "@paypal/react-paypal-js";


const ShoppingCart = () => {

 const context = useContext(CartContext)
 const {qty, cart} = context.cartState
 console.log(cart)

  return(
    <Fragment>
      <div className='cart-container'>
          <h1 className='cart-title mt-3 mb-3 text-white'> Productos en tu carrito de compras <span className='text-white'>({qty})</span></h1>
          <div>
            {cart.map(el=><ProductBox product={el} key={el._id}/>)}
          </div>
          <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "1.99",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            />
      </div>
    </Fragment>
  )
}

export default ShoppingCart