import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const DetailsForm = ({Half, Halved}) => {
    const navigate = useNavigate();

    const onSubmit = () => {
        Halved('payment');
    }

  return (
    <div className={`${Half === 'shipping'?'details-form w-3/6 sm:min-w-full':'hidden'} relative`}>
        <h4 className="text-base font-semibold text-[#BCB7B7] lg:hidden pb-4"><NavLink to='/'>Home</NavLink> / <NavLink to='/MarketPlace'>Marketplace</NavLink> / <span onClick={()=>Halved('shopping')}>Cart</span> / <span className='text-black font-semibold' >Shipping</span></h4>

        <form className='text-[#888888] space-y-8 sm:space-4' onSubmit={e => e.preventDefault()} noValidate>

            <div className="form-control">
                <label htmlFor="email" className='label'>Your Email</label>
                <input type="email" id="Email" placeholder="oyeniyipraise@gmail.com" className='form-input' name='email' required/>
                <div className='form-control-inner'>
                    <input type="checkbox" name="check" id="" className='accent-[#F2F2F2] border border-[#747474]'/>
                    <h4>Get updates about new drops & exclusive offers</h4>
                </div>
            </div>

            <div className="form-control">
                <label htmlFor="name" className='label'>Your full name</label>
                <input type="name" id="name" name='name' placeholder="Praise Oyeniyi" className='form-input' required/>
            </div>

            <div className="form-control">
                <label htmlFor="wallet" className='label'>Choose a wallet</label>
                <select id="wallet" className='form-input' required>
                    <option value="coinbase">Coinbase</option>
                    <option value="phantom">Phantom</option>
                    <option value="metamask">METAMASK</option>
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="city" className='label'>City</label>
                <input type="text" id="city" className='form-input' name='city' required/>
            </div>

            <div className='form-half flex-center gap-x-10 sm:gap-x-0 sm:flex-column sm:space-y-4 sm:w-full'>
                <div className="form-control sm:w-full">
                    <label htmlFor="country" className='label'>Country</label>
                    <input type="text" id="country" className='form-input' name='country' required/>
                </div>

                <div className="form-control sm:w-full">
                    <label htmlFor="zip" className='label'>Postal code</label>
                    <input type="text" pattern="[0-9]*" id="zip" name='zip' placeholder="001001" className='form-input' required/>
                </div>
            </div>

            <div className="form-control">
                <label htmlFor="phone" className='label'>Phone number</label>
                <input type="phone" id="phone" name='phone' placeholder="0812 3456 785" className='form-input' required/>
            </div>

            <button onClick={onSubmit} className='px-16 sm:rounded-sm sm:px-8 sm:mx-auto h-20 sm:h-12 bg-blue w-full rounded-lg text-24 sm:w-4/6 text-white flex-center justify-center' type='submit'>
                Proceed to payment
            </button>
            <p className='text-24 text-blue border-b border-blue font-medium cursor-pointer mx-auto w-fit lg:hidden !mt-3' onClick={()=>navigate('/MarketPlace')}>Go back to cart </p>
            
        </form>
    </div>
  )
}

export default DetailsForm