import React from 'react'
import Icon1 from '../Images/empty1.png'
import Icon2 from '../Images/empty2.png'
import Icon3 from '../Images/empty.png'

const CartIsEmpty = ({navigate, cart}) => {

  return (
    <div className='absolute h-screen w-screen -top-16 left-0 z-[99] !overflow-hidden cart-c-bg pointer-events-none'>
        <div className="circles relative pointer-events-none sm:hidden ">
            <img src={Icon1 } alt="" className=' sm:w-[16em]'/>
            <img src={Icon2} alt="" className='absolute top-0 sm:h-[18em]'/>
        </div>
        <div className="section w-full  relative -top-[30vw] left-10 sm:left-0 sm:top-[50%] sm:translate-y-[-50%]">
            <div className='justify-center flex-column items-center space-y-5'>
                <img src={Icon3} alt="" className='h-[20em] w-[20em] sm:h-[12em] sm:w-auto'/>
                <div className='space-y-3 text-center'>
                    <h3 className='text-2xl font-medium sm:text-xl sm:px-5'>Heyy, You've not added any item to your cart</h3>
                    <p className='text-24 text-blue underline font-medium cursor-pointer' onClick={()=>navigate('/MarketPlace')}>Start Shopping</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartIsEmpty