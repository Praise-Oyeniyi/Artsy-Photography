import React from 'react'
import { AiFillLock} from 'react-icons/ai';
import img1 from '../Icons/MetaMask.png';
import img2 from '../Icons/Coinbase.png';
import img3 from '../Icons/Phantom.png';
import img4 from '../Icons/Wallet.png';
import { useNavigate } from 'react-router-dom';

const Payment = ({CartTotal, itemTotal, cart}) => {
    const navigate = useNavigate();


  return (
    <div className="payment-outer flex-column text-[#616161] space-y-10 sm:space-y-5">
        <h4 onClick={()=>navigate('/')} className="text-base font-semibold text-[#BCB7B7] lg:hidden pb-4">Home / Marketplace / Cart / Shipping / <span className='text-black font-semibold'>Payment</span></h4>
         
        <div className="payment-top flex-center sm:justify-start">
            <h4 className='text-28 text-[#292929] font-semibold sm:hidden'>Payment method</h4>
            <p className='text-[#747474] font-normal text-24 flex items-center' >
                <span className='mr-2 font-medium text-28'><AiFillLock/> </span>
                Secure server
            </p>
        </div>

        <div className="payment-bottom flex-center items-start gap-x-10">

            <div className="form-area w-3/6  sm:w-full">
                <form action="">
                    <div className='payment-form space-y-10 py-10 px-8 rounded-md sm:!shadow-none sm:px-1 sm:space-y-5 sm:py-0'>
                        <div className="flex-center justify-start items-start space-x-5 sm:space-x-2">
                            <input type="radio" name="select" id="select" className='form-input h-4 mt-2 accent-[#28A814] sm:mt-1' required/>
                            
                            <div className="flex-column space-y-5 sm:space-y-4">
                                <div className='flex-center'>
                                    <label htmlFor="select" className='label text-[#292929] font-medium w-4/6 sm:text-xl sm:w-full'>Sellect Your Wallet</label>
                                    <div className="payment-icons flex-center justify-end sm:hidden">
                                        <img src={img1} alt="" className='h-10'/>
                                        <img src={img2} alt="" className='h-10'/>
                                        <img src={img3} alt="" className='h-10'/>
                                        <img src={img4} alt="" className='h-10'/>
                                    </div>
                                </div>

                                <p className='text-24 font-normal text-[#616161] w-5/6 sm:w-full'>
                                    Connect with one of our available wallet providers or add and connect a new wallet.  
                                </p>
                                <div className="payment-icons flex-center justify-center lg:hidden gap-x-5">
                                    <img src={img1} alt="" className='h-10'/>
                                    <img src={img2} alt="" className='h-10'/>
                                    <img src={img3} alt="" className='h-10'/>
                                    <img src={img4} alt="" className='h-10'/>
                                </div>

                            </div>
                        </div>
                        

                        <div className="form-control">
                            <label htmlFor="wallet type" className='label'>Wallet type</label>
                            <input type="text" id="wallet type" className='form-input' required/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="key" className='label'>Key</label>
                            <input type="text" id="key" className='form-input' placeholder='Please enter your key' required/>
                        </div>

                        <div className='form-half flex-center gap-x-5 m:gap-x-0 sm:flex-column sm:space-y-4 sm:w-full'>
                            <div className="form-control sm:min-w-full">
                                <label htmlFor="date" className='label'>Expiry Date</label>
                                <input type="date" id="date" className='form-input pr-5' required/>
                            </div>

                            <div className="form-control sm:w-full">
                                <label htmlFor="cvv" className='label'>CVV</label>
                                <input type="number" pattern="[0-9]*" id="cvv" className='form-input' required/>
                            </div>
                        </div>

                        <div className='form-control-inner'>
                            <input type="checkbox" name="" id="" className='accent-[#F2F2F2] border border-[#747474]'/>
                            <h4>Save my wallet details & information for future transactions</h4>
                        </div>
                    </div>

                    <button className='px-16 h-20 mt-14 sm:rounded-sm sm:px-8 sm:mx-auto sm:h-12 bg-blue w-full rounded-lg text-24 sm:w-4/6 text-white flex-center justify-center' type="submit">
                        Confirm
                    </button>
                    
                    
                </form>

            </div>



            <div className="payment-summary-area font-normal w-auto space-y-5 sm:hidden">
                <h4 className='text-28 text-[#292929] font-semibold pb-5 border-b-grey border-opacity-5 border-b'>Payment Summary</h4>
                <div className="wallet-info pb-5 border-b-grey border-b leading-relaxed space-y-3">
                    <h5 className='text-26 text-[#292929] font-medium'>Metamask wallet : 002345KJi90pzzz3</h5>
                    <p className='text-24 '>Actively linked to Yaba, Lagos Nigeria.</p>
                </div>
                <p className='text-[#292929] pb-5 border-b-grey border-b text-24 font-medium leading-normal'>
                    Expected arrival date: Between 22nd September and 26th September 20222
                </p>
                <CartTotal cart={cart} itemTotal={itemTotal}/>
            </div>

    </div>
</div>
  )
}

export default Payment