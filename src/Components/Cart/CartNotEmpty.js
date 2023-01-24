import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineClose, AiFillLock} from 'react-icons/ai'
import CartTotal from './CartTotal';
import DetailsForm from './DetailsForm';
import Payment from './Payment';







const CartNotEmpty = ({cart,deleteItem,navigate,Half, Halved,cartItemsAdd,cartItemsRemove, updateCart }) => {
    
    var itemTotal = 0;
    
    cart.forEach(item => {
        itemTotal = item.price*item.amount;
    });

    const hidden =()=> {
        if(Half === 'payment'){
            return '!hidden'
        }
    }

  return (
    <div className="cart-main-inner ">
                <ul className={`flex-center w-4/6 mx-auto text-24 border-b border-[#888888] text-[#888888] cursor-pointer mb-16 sm:hidden`}>
                    <li className={`pb-2 ${Half==='shopping'?'payment-active':''}`} onClick={()=>Halved('shopping')}>Shopping Cart</li>
                    <li className={`pb-2 ${Half==='shipping'?'payment-active':''}`} onClick={()=>Halved('shipping')}>Shipping Details</li>
                    <li className={`pb-2 ${Half==='payment'?'payment-active':''}`} onClick={()=>Halved('payment')}>Payment Details</li>
                </ul>
                <h4 className={`text-lg font-semibold sm:mx-3 text-[#BCB7B7] lg:hidden pb-12 ${Half !== 'shopping'? 'hidden': ''}`}><NavLink to='/'>Home</NavLink> / <NavLink to='/MarketPlace'>Marketplace</NavLink> / <span className='text-black font-semibold'> Cart</span></h4>

                <div className={`carts-items-outer sm:px-3 relative ${Half ==='shipping'?'flex-center items-start gap-x-10':'mb-48'}`}>
                    <div className={`payment hidden ${Half === 'payment'?'!block': ''}`}>
                       <Payment CartTotal={CartTotal} itemTotal={itemTotal} cart={cart} updateCart={updateCart} Halved={Halved}/>
                    </div>

                    <DetailsForm Half={Half} Halved={Halved}/>
                    <div className={`carts space-y-10 sm:space-y-5  ${Half === 'shipping'?'!w-full h-[95vh] overflow-y-auto relative top-0':''||hidden()}`}>
                        {cart.map((e, index)=>(
                            <div className={`cart-item flex-center items-start border-b border-grey sm:border-none pb-10 sm:pb-5 ${Half === 'shipping'?'sm:hidden':''}`} key={index}>
                               
                                <div className={`cart-item-left flex-center justify-start items-stretch ${Half === 'shipping'?'gap-x-7 sm:gap-3':'gap-x-10 sm:gap-x-3'}`}>
                                    <img src={e.image} alt="" className={`rounded-md ${Half === 'shipping'?'h-48 w-40 sm:h-36 sm:w-32':'h-48 w-48 sm:h-28 sm:w-28'}`}/>
                                    <div className="cart-details space-y-5 sm:h-28 sm:pb-2 sm:pt-1 sm:flex-column sm:justify-between">
                                        <h3 className='text-24 font-semibold sm:text-lg'>{e.name}</h3>
                                        <p className='text-24 sm:hidden'>{e.creator}</p>
                                        <p className='text-15 font-normal sm:hidden'>Size: <span className='font-medium pl-3'>{e.size}</span></p>
                                        
                                        <div className="cart-amount flex-center w-3/6 text-24 font-semibold sm:border sm:rounded-lg sm:w-fit sm:px-2  sm:text-lg">
                                            <button className='sm:border-r sm:pr-[.8rem]' onClick={()=>cartItemsRemove(e.id)}>-</button>
                                                <p className='sm:px-[.7rem]'>{e.amount}</p>
                                            <button className='sm:border-l sm:pl-[.8rem]' onClick={()=>cartItemsAdd(e.id)}>+</button>
                                        </div>
                                    </div>
                                </div>



                                <div className="cart-item-right flex-column h-44 justify-between items-center sm:h-28 sm:py-2">
                                    <AiOutlineClose className='border rounded-full text-grey border-grey text-28 p-1 cursor-pointer' onClick={()=>deleteItem(e.id)}/>
                                    <h4 className='text-28 font-semibold sm:text-xl'>${e.price}</h4>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                    <div className={`w-[52%] px-14 pt-5  toggle-counter fixed bottom-0 h-[35vh] flex-center justify-center items-start bg-body-bg right-0 sm:hidden ${Half === 'shipping'?'':'hidden'}`}>
                        <CartTotal cart={cart} itemTotal={itemTotal}/>
                    </div>
                </div>
                <div className={`cart-footer pt-9 sm:pt-5 flex-center items-start fixed bottom-0 sm:left-0 sm:w-full sm:px-3 h-52 bg-body-bg w-5/6 px-5 sm:flex-col sm:h-auto ${Half === 'shipping'?'hidden':'flex' } ${hidden()}`}>
                    <div className='space-y-5 flex-column items-center sm:order-2 sm:space-y-3 sm:mb-10 sm:place-self-center'>
                        <button className='text-24 bg-blue h-16 px-16 text-white font-medium sm:h-12 sm:rounded-sm' onClick={()=>Halved('shipping')}>Proceed to checkout</button>
                        <p className='text-24 text-blue border-b border-blue font-medium cursor-pointer' onClick={()=>navigate('/MarketPlace')}>Continue shopping</p>
                    </div>
                    <div className="cart-calc w-2/6 sm:order-1 sm:w-full sm:mb-5">
                        <CartTotal cart={cart} itemTotal={itemTotal}/>
                    </div>
                </div>
            </div>
  )
}

export default CartNotEmpty