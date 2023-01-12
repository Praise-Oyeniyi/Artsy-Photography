import React from 'react'
import { useNavigate } from 'react-router-dom';
import CartIsEmpty from './CartIsEmpty';
import CartNotEmpty from './CartNotEmpty';

const CartPage = ({cart, Nav, deleteItem}) => {
    const navigate = useNavigate();

  return (
    <div className='w-full cart-outer space-y-10 bg-body-bg overflow-x-hidden py-10 text-header-p font-normal'>
        <div className="cart-inner w-5/6 mx-auto space-y-16">
            <Nav cart={cart}/>
            {cart.length===0?
            <CartIsEmpty navigate={navigate}/>
            :
            <CartNotEmpty cart={cart} navigate={navigate} deleteItem={deleteItem}/>
            }
        </div>
    </div>

  )
}

export default CartPage