import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CartIsEmpty from './CartIsEmpty';
import CartNotEmpty from './CartNotEmpty';
import { motion } from 'framer-motion';

const CartPage = ({cart, Nav, deleteItem, cartItemsAdd, cartItemsRemove, updateCart, PageAnimate}) => {
    const navigate = useNavigate();
    const [Half, Halved] = useState('shopping');

  return (
    <motion.div 
      variants={PageAnimate} initial='init' animate='animate' exit='exit'
      className='w-full cart-outer space-y-10 bg-body-bg overflow-x-hidden py-10 text-header-p font-normal'>
        <div className={`cart-inner w-5/6 mx-auto space-y-16 sm:w-full sm:space-y-10`}>
            <Nav cart={cart}/>
            {cart.length===0?
            <CartIsEmpty navigate={navigate}/>
            :
            <CartNotEmpty cart={cart} updateCart={updateCart} navigate={navigate} deleteItem={deleteItem} Half={Half} Halved={Halved} cartItemsAdd={cartItemsAdd} cartItemsRemove={cartItemsRemove}/>
            }
        </div>
    </motion.div>

  )
}

export default CartPage