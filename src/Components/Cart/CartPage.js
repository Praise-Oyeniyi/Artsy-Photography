import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CartIsEmpty from './CartIsEmpty';
import CartNotEmpty from './CartNotEmpty';

const CartPage = ({cart, Nav, deleteItem, cartItemsAdd, cartItemsRemove}) => {
    const navigate = useNavigate();
    const [Half, Halved] = useState('shopping');

  return (
    <div className='w-full cart-outer space-y-10 bg-body-bg overflow-x-hidden py-10 text-header-p font-normal'>
        <div className={`cart-inner w-5/6 mx-auto space-y-16 sm:w-[95%]`}>
            <Nav cart={cart}/>
            {cart.length===0?
            <CartIsEmpty navigate={navigate}/>
            :
            <CartNotEmpty cart={cart} navigate={navigate} deleteItem={deleteItem} Half={Half} Halved={Halved} cartItemsAdd={cartItemsAdd} cartItemsRemove={cartItemsRemove}/>
            }
        </div>
    </div>

  )
}

export default CartPage