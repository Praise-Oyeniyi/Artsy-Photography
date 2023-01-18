import React from 'react'

const DetailsForm = ({Half, Halved}) => {

    const onSubmit = () => {
        Halved('payment');
    }

  return (
    <div className={`${Half === 'shipping'?'details-form w-3/6':'hidden'} relative`}>

        <form className='text-[#888888] space-y-8' onSubmit={e => e.preventDefault()} noValidate>

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

            <div className='form-half flex-center gap-x-10'>
                <div className="form-control">
                    <label htmlFor="country" className='label'>Country</label>
                    <input type="text" id="country" className='form-input' name='country' required/>
                </div>

                <div className="form-control">
                    <label htmlFor="zip" className='label'>Postal code</label>
                    <input type="text" pattern="[0-9]*" id="zip" name='zip' placeholder="001001" className='form-input' required/>
                </div>
            </div>

            <div className="form-control">
                <label htmlFor="phone" className='label'>Phone number</label>
                <input type="phone" id="phone" name='phone' placeholder="0812 3456 785" className='form-input' required/>
            </div>

            <button onClick={onSubmit} className='px-16 h-20 bg-blue w-full rounded-lg text-28 text-white flex-center justify-center' type='submit'>
                Proceed to payment
            </button>
            
        </form>
    </div>
  )
}

export default DetailsForm