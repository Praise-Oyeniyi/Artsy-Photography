import React from 'react'

const CartTotal = ({cart, itemTotal}) => {
  return (
    <div className="w-full space-y-2 text-28 text-grey">
        <h4 className='flex-center'>Products in cart :<span className='cart-total-span'>{cart.length} items</span></h4>
        <h4 className='flex-center'>Shipping : <span className='cart-total-span'>${2.50 * cart.length }</span></h4>
        <h4 className='flex-center'>Total : <span className='cart-total-span'>${itemTotal}</span></h4>
    </div>
  )
}

export default CartTotal