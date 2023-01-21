import { useState } from 'react';
import {AiOutlineClose, AiFillLock} from 'react-icons/ai'
import CartTotal from './CartTotal';
import DetailsForm from './DetailsForm';
import Payment from './Payment';







const CartNotEmpty = ({cart,deleteItem,navigate,Half, Halved,cartItemsAdd,cartItemsRemove }) => {
    
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
                <ul className={`flex-center w-4/6 mx-auto text-24 border-b border-[#888888] text-[#888888] cursor-pointer mb-16`}>
                    <li className={`pb-2 ${Half==='shopping'?'payment-active':''}`} onClick={()=>Halved('shopping')}>Shopping Cart</li>
                    <li className={`pb-2 ${Half==='shipping'?'payment-active':''}`} onClick={()=>Halved('shipping')}>Shipping Details</li>
                    <li className={`pb-2 ${Half==='payment'?'payment-active':''}`} onClick={()=>Halved('payment')}>Payment Details</li>
                </ul>

                <div className={`carts-items-outer relative ${Half ==='shipping'?'flex-center items-start gap-x-10':'mb-48'}`}>
                    <div className={`payment hidden ${Half === 'payment'?'!block': ''}`}>
                       <Payment CartTotal={CartTotal} itemTotal={itemTotal} cart={cart}/>
                    </div>

                    <DetailsForm Half={Half} Halved={Halved}/>
                    <div className={`carts duration-500 space-y-10  ${Half === 'shipping'?'!w-full h-[95vh] overflow-y-auto relative top-0':''||hidden()}`}>
                        {cart.map((e, index)=>(
                            <div className={`cart-item flex-center items-start border-b border-grey pb-10`} key={index}>
                                <div className={`cart-item-left flex-center justify-start items-stretch ${Half === 'shipping'?'gap-x-7 sm:gap-3':'gap-x-10 sm:gap-x-5'}`}>
                                    <img src={e.image} alt="" className={`rounded-md ${Half === 'shipping'?'h-48 w-40 sm:h-36 sm:w-32':'h-48 w-48 sm:h-36 sm:w-32'}`}/>
                                    <div className="cart-details space-y-5">
                                        <h3 className='text-24 font-semibold'>{e.name}</h3>
                                        <p className='text-24 sm:hidden'>{e.creator}</p>
                                        <p className='text-15 font-normal sm:hidden'>Size: <span className='font-medium pl-3'>{e.size}</span></p>
                                        <div className="cart-amount flex-center w-3/6 text-24 font-semibold">
                                            <button onClick={()=>cartItemsRemove(e.id)}>-</button>
                                                <p>{e.amount}</p>
                                            <button onClick={()=>cartItemsAdd(e.id)}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item-right flex-column h-44 justify-between items-center">
                                    <AiOutlineClose className='border rounded-full text-grey border-grey text-28 p-1 cursor-pointer' onClick={()=>deleteItem(e.id)}/>
                                    <h4 className='text-28 font-semibold'>${e.price}</h4>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                    <div className={`w-[52%] px-14 pt-5  toggle-counter fixed bottom-0 h-[35vh] flex-center justify-center items-start bg-body-bg right-0 ${Half === 'shipping'?'':'hidden'}`}>
                        <CartTotal cart={cart} itemTotal={itemTotal}/>
                    </div>
                </div>
                <div className={`cart-footer pt-9 flex-center items-start fixed bottom-0 h-52 bg-body-bg w-5/6 px-5 ${Half === 'shipping'?'hidden':'flex' } ${hidden()}`}>
                    <div className='space-y-5 flex-column items-center'>
                        <button className='text-24 bg-blue h-16 px-16 text-white font-medium' onClick={()=>Halved('shipping')}>Proceed to checkout</button>
                        <p className='text-24 text-blue border-b border-blue font-medium cursor-pointer' onClick={()=>navigate('/MarketPlace')}>Continue shopping</p>
                    </div>
                    <div className="cart-calc w-2/6">
                        <CartTotal cart={cart} itemTotal={itemTotal}/>
                    </div>
                </div>
            </div>
  )
}

export default CartNotEmpty