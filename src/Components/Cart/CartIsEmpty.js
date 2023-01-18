import React from 'react'
import Icon1 from '../Images/empty1.png'
import Icon2 from '../Images/empty2.png'
import Icon3 from '../Images/empty.png'
import { useParams } from 'react-router-dom'

const CartIsEmpty = ({navigate, cart}) => {
    const {name} = useParams();

  return (
    <div className='absolute h-screen w-screen -top-16 left-0 z-[99] !overflow-hidden '>
        <div className="circles relative pointer-events-none">
            <img src={Icon1 } alt="" className=''/>
            <img src={Icon2} alt="" className='absolute top-0'/>
        </div>
        <div className="section w-full  relative -top-[30vw] left-10">
            <div className='justify-center flex-column items-center space-y-5'>
                <img src={Icon3} alt="" className='h-[20em] w-[20em]'/>
                <div className='space-y-3 text-center'>
                    <h3 className='text-36 font-medium'>Heyy, You've not added any item to your cart</h3>
                    <p className='text-24 text-blue underline font-medium cursor-pointer' onClick={()=>navigate('/MarketPlace')}>Continue shopping</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartIsEmpty