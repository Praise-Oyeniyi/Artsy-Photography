import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai'








const CartNotEmpty = ({cart,deleteItem,navigate, }) => {
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
                <ul className='flex-center w-4/6 mx-auto text-24 border-b border-grey mb-16'>
                    <li className='border-b pb-2'>Shopping Cart</li>
                    <li className='border-b pb-2'>Shipping Details</li>
                    <li className='border-b pb-2'>Payment Details</li>
                </ul>

                <div className="carts-items-outer space-y-10 mb-48">
                    {cart.map((e, index)=>(
                        <div className="cart-item flex-center items-start border-b border-grey pb-10" key={index}>
                            <div className="cart-item-left flex-center justify-start items-stretch gap-x-10">
                                <img src={e.image} alt="" className='h-48 w-48 rounded-md'/>
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
                <div className="cart-footer pt-9 flex-center items-start fixed bottom-0 h-52 bg-body-bg w-5/6 px-5">
                    <div className='space-y-5 flex-column items-center'>
                        <button className='text-24 bg-blue h-16 px-16 text-white font-medium'>Proceed to checkout</button>
                        <p className='text-24 text-blue border-b border-blue font-medium cursor-pointer' onClick={()=>navigate('/MarketPlace')}>Continue shopping</p>
                    </div>
                    <div className="cart-calc text-28 text-grey space-y-3 w-2/6">
                        <h4 className='flex-center'>Products in cart :<span className='text-[#292929]'>{cart.length} items</span></h4>
                        <h4 className='flex-center'>Shipping : <span className='text-[#292929]'>${2.50 * cart.length }.0</span></h4>
                        <h4 className='flex-center'>Total : <span className='text-[#292929]'>${itemTotal}</span></h4>
                    </div>
                </div>
            </div>
  )
}

export default CartNotEmpty