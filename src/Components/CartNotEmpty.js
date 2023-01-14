import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import CartTotal from './CartTotal';
import DetailsForm from './DetailsForm';








const CartNotEmpty = ({cart,deleteItem,navigate,Half, Halved }) => {
    var [count, UpdateCounter] = useState();

    const cartItems =(operation)=>{
        if(operation === 'minus' && count === 0){
            count = 0;
        }else if(operation === 'minus' && count >= 1){
            count--;
        }else if(operation === 'plus'){
            count++;
        }
        return UpdateCounter(count);
    }
    var itemTotal = 0;
    
    cart.forEach(item => {
        itemTotal = item.price*item.amount;
    });


  return (
    <div className="cart-main-inner ">
                <ul className={`flex-center w-4/6 mx-auto text-24 border-b border-grey ${Half?'mb-14':'mb-16'}`}>
                    <li className='border-b pb-2'>Shopping Cart</li>
                    <li className='border-b pb-2' onClick={()=>Halved(!Half)}>Shipping Details</li>
                    <li className='border-b pb-2'>Payment Details</li>
                </ul>

                <div className={`carts-items-outer relative ${Half?'flex-center items-start gap-x-10':'mb-48'}`}>
                    <DetailsForm Half={Half}/>
                    <div className="carts space-y-10 !w-full h-[95vh] overflow-y-auto relative top-0">
                        {cart.map((e, index)=>(
                            <div className={`cart-item flex-center items-start border-b border-grey pb-10`} key={index}>
                                <div className={`cart-item-left flex-center justify-start items-stretch ${Half?'gap-x-7':'gap-x-10'}`}>
                                    <img src={e.image} alt="" className={`rounded-md ${Half?'h-48 w-40':'h-48 w-48'}`}/>
                                    <div className="cart-details space-y-5">
                                        <h3 className='text-24'>{e.name}</h3>
                                        <p className='text-24'>{e.creator}</p>
                                        <p className='text-15 font-normal'>Size: <span className='font-medium pl-3'>{e.size}</span></p>
                                        <div className="cart-amount flex-center w-3/6 text-24 font-medium">
                                            <button onClick={()=>cartItems('minus')}>-</button>
                                                <p>{e.amount}</p>
                                            <button onClick={()=>cartItems('plus')}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item-right flex-column h-44 justify-between items-center">
                                    <AiOutlineClose className='border rounded-full text-grey border-grey text-28 p-1 cursor-pointer' onClick={()=>deleteItem(e.id)}/>
                                    <h4 className='text-28 font-medium'>${e.price}</h4>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                    <div className={`w-3/6 px-14 pt-5  toggle-counter fixed bottom-0 h-[35vh] flex-center justify-center items-start bg-body-bg right-0 ${Half?'':'hidden'}`}>
                        <CartTotal cart={cart} itemTotal={itemTotal}/>
                    </div>
                </div>
                <div className={`cart-footer pt-9 flex-center items-start fixed bottom-0 h-52 bg-body-bg w-5/6 px-5 ${Half?'hidden':'flex'}`}>
                    <div className='space-y-5 flex-column items-center'>
                        <button className='text-24 bg-blue h-16 px-16 text-white font-medium'>Proceed to checkout</button>
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