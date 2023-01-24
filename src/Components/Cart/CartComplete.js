import React from 'react'
import { useParams } from 'react-router-dom'
import Icon1 from '../Images/empty1.png'
import Icon2 from '../Images/empty2.png'
import Icon3 from '../Images/cc.png'

const CartComplete = ({navigate, cart, Nav}) => {
    const {name} = useParams();
    console.log(name)

  return (
    <div className='w-full cart-outer space-y-10 bg-body-bg overflow-x-hidden py-10 text-header-p font-normal'>
        <div className={`cart-inner w-5/6 mx-auto space-y-16 sm:w-full sm:space-y-10`}>
            <Nav cart={cart}/>
            <div className='absolute h-screen w-screen -top-16 left-0 z-[99] !overflow-hidden '>
                <div className="circles relative pointer-events-none sm:hidden">
                    <img src={Icon1 } alt="" className=''/>
                    <img src={Icon2} alt="" className='absolute top-0'/>
                </div>
                <div className="section w-full  relative -top-[35vw] left-10 sm:left-0 sm:top-[50%] sm:translate-y-[-50%]">
                    <div className='justify-center flex-column items-center space-y-5'>
                        <img src={Icon3} alt="" className='w-auto sm:h-[15em]'/>
                        <div className='space-y-3 text-center'>
                            <h3 className='text-3xl font-medium sm:text-lg'>Hey {`Celestina`}, thank you for your purchase. </h3>
                            <p className='text-24 sm:text-base font-medium'>You are amazing. Cheers to being <span className='text-blue'>ARTSY!</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartComplete