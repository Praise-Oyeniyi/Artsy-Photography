
import {AiOutlineMail} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'



const Footer = ({useNavigate}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="newsletter-outer w-full py-14 relative sm:pt-0">
        <div className="newsletter w-[92%] left-[4%] sm:left-[2%]">
          <h3 className='text-3xl font-[Baskervville] sm:text-2xl'>
            NEWSLETTER
          </h3>
          <p className='text-2xl sm:text-base sm:uppercase'>Subscribe to get daily updates on new drops & exciting deals </p>

          <form action="" method="post" className='w-[40%] sm:w-full mx-auto sm:mx-0 sm:items-start  flex items-center sm:flex-col sm:space-y-5 sm:space-x-0  space-x-3 py-3 font-[Baskervville]'>
            <input type="email" name="" id="" placeholder='Enter your Email' className='w-[70%] border border-gray-800 h-12 pl-3 outline-none sm:w-5/6 ' required/>
            <button type="submit" className='bg-black h-12 w-auto text-white px-5 border-[#333333] text-15'>SUBSCRIBE</button>
          </form>

        </div>
      </div>

      <footer className='w-full mt-60 cursor-pointer'>
        <div className='w-5/6 mx-auto flex justify-evenly items-center pb-10 sm:hidden'>
          <h3 className="logo text-48 uppercase font-semibold header-main">ARTSY.</h3>
          <ul className='space-y-5 text-26'>
            <li onClick={()=>navigate('/')}>Home</li>
            <li onClick={()=>navigate('/Marketplace')}>MarketPlace</li>
            <li onClick={()=>navigate('/AuctionsPage')}>Auctions</li>
            <li onClick={()=>navigate('/drop')}>Drops</li>
          </ul>
          <ul className='space-y-5 text-26'>
            <li>Blog</li>
            <li>Wallets</li>
            <li>Rates</li>
            <li>High Bids</li>
          </ul>
          <ul className='space-y-7 text-26 self-start'>
            <li className='flex items-center'><AiOutlineMail className=" text-4xl text-black mr-3"/>artsystudios@gmail.com</li>
            <li className='flex items-center'><FiMapPin className="fas fa-location-dot text-4xl text-black mr-4"/>Lagos, Nigeria.</li>
          </ul>
        </div>
        <div className='lg:hidden flex-column relative left-[2%] py-7 space-y-4'>
          <h4 className='uppercase font-normal text-lg '>Reach Us</h4>
          <ul className='space-y-4 text-26 self-start  '>
            <li className='flex items-center sm:text-sm'><AiOutlineMail className=" text-4xl text-black mr-3 sm:text-2xl"/>artsystudios@gmail.com</li>
            <li className='flex items-center sm:text-sm'><FiMapPin className="fas fa-location-dot text-4xl text-black mr-4 sm:text-2xl"/>Lagos, Nigeria.</li>
          </ul>
        </div>
        
        <h3 className="copyright text-center text-gray-500 font-medium pt-8 text-base font-[Rubik] sm:text-xs mb-5">
          Artsystudios © 2022. All Rights Reserved. Coded by Praise_Oyeniyi
        </h3>
      </footer>
    </div>
  )
}

export default Footer