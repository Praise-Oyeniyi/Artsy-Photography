import React from 'react'
import { AiFillLock} from 'react-icons/ai';
import img1 from '../Icons/MetaMask.png';
import img2 from '../Icons/Coinbase.png';
import img3 from '../Icons/Phantom.png';
import img4 from '../Icons/Wallet.png';

const Payment = ({CartTotal, itemTotal, cart}) => {
  return (
    <div className="payment-outer flex-column text-[#616161] space-y-10">
        <div className="payment-top flex-center">
            <h4 className='text-28 text-[#292929] font-semibold'>Payment method</h4>
            <p className='text-[#747474] font-normal text-24 flex items-center' >
                <span className='mr-2 font-medium text-28'><AiFillLock/> </span>
                Secure server
            </p>
        </div>

        <div className="payment-bottom flex-center items-start gap-x-10">

            <div className="form-area w-3/6">
                <form action="">
                    <div className='payment-form space-y-10 py-10 px-8 rounded-md'>
                        <div className="flex-center justify-start items-start space-x-5">
                            <input type="radio" name="" id="select" className='form-input h-4 mt-2 accent-[#28A814]' required/>
                            
                            <div className="flex-column space-y-5">
                                <div className='flex-center'>
                                    <label htmlFor="select" className='label text-[#292929] font-medium w-4/6'>Sellect Your Wallet</label>
                                    <div className="payment-icons flex-center justify-end">
                                        <img src={img1} alt="" className='h-10'/>
                                        <img src={img2} alt="" className='h-10'/>
                                        <img src={img3} alt="" className='h-10'/>
                                        <img src={img4} alt="" className='h-10'/>
                                    </div>
                                </div>


                                <p className='text-24 font-normal text-[#616161] w-5/6'>
                                    Connect with one of our available wallet providers or add and connect a new wallet.  
                                </p>

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

                        <div className='form-half flex-center gap-x-5'>
                            <div className="form-control">
                                <label htmlFor="date" className='label'>Expiry Date</label>
                                <input type="date" id="date" className='form-input pr-5' required/>
                            </div>

                            <div className="form-control">
                                <label htmlFor="cvv" className='label'>CVV</label>
                                <input type="number" pattern="[0-9]*" id="cvv" className='form-input' required/>
                            </div>
                        </div>

                        <div className='form-control-inner'>
                            <input type="checkbox" name="" id="" className='accent-[#F2F2F2] border border-[#747474]'/>
                            <h4>Save my wallet details & information for future transactions</h4>
                        </div>
                    </div>

                    <button className='px-16 h-20 mt-14 bg-blue w-full rounded-lg text-28 text-white flex-center justify-center' type="submit">
                        Confirm
                    </button>
                    
                    
                </form>

            </div>



            <div className="payment-summary-area font-normal w-auto space-y-5 ">
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