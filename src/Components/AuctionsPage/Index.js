import Cimage from './../Images/create-image.png';
import Cimage1 from './../Images/create-image1.png';
import Heart from './../Icons/Vector12.svg';
import { motion } from 'framer-motion';

const Index = ({Nav,NavLink, useNavigate, AuctionsData, cart, PageAnimate}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={PageAnimate} initial='init' animate='animate' exit='exit' 
      className='w-full auctions-outer space-y-10 bg-body-bg overflow-x-hidden py-10 text-header-p font-normal mb-56 sm:mb-10'>
      <div className="w-5/6 mx-auto sm:w-full">
        <Nav cart={cart}/>



        <div className="auction-body mt-16 space-y-10 sm:w-[95%] sm:mx-auto med:w-[90%]">
          <h4 className="text-24 font-semibold sm:hidden"><NavLink to='/'><span className='text-[#BCB7B7]'>Home/</span></NavLink>Auctions</h4>
          <h3 className="text-28 font-bold sm:text-15">Here’s an overview of products actively on auction, explore!</h3>

          <section className="slider-outer relative w-full h-96 sm:h-auto med:h-56">
            <div className="slider absolute w-screen left-0 top-0 flex-center gap-x-5 sm:items-start overflow-auto">
              {
                AuctionsData.map(e=>(
                <div className="relative auctions-img-outer" key={e.id}>
                  <div className='auctions-img relative'>
                    <img src={e.image} alt="" className='relative min-w-[15rem]'/>
                    <h3 className='auctions-img-text z-10 nav-logo'>{e.time}</h3>
                  </div>
                  <div className='auctions-img-hover space-x-3 overflow-hidden' onClick={()=>navigate(`/auctions/live-bid/${e.name}`)}>
                    <p className='text-32 text-white' >Join Livestream</p>
                    <i className="fas fa-arrow-right border rounded-full border-white text-white p-2 px-3 text-4xl"></i>
                    
                  </div>
                </div>
              ))}
            </div>

            <div className="dots flex-center justify-center relative top-[28rem] sm:top-[14rem] text-center w-full space-x-2 med:top-[14rem]">
              <span className='!bg-light-blue dots-span'></span>
              <span className='dots-span'></span>
              <span className='dots-span'></span>
              <span className='dots-span'></span>
            </div>
          </section>

          <section className='pt-10 space-y-16 sm:relative sm:top-[12rem] sm:space-y-5'>
            <h3 className='text-36 sm:text-xl'>Top bids from popular creators</h3>
            <div className="auct-creators-outer flex-center gap-x-20 sm:flex-column sm:gap-y-10 med:gap-x-10">

              <div className="creator-container">
                <div className='creator-container-inner '>
                  <img src={Heart} alt="icon" className='heart-icon '/>
                  <img src={Cimage} alt="creator-main" className='h-full sm:px-4'/>
                  <h3 className='text-32 font-bold px-8 py-6 sm:py-3 sm:px-4'>Out of the box</h3>
                </div>
                <div className="creator-info sm:pl-3">
                  <h4 className='creator-info-text'>Creator : <span className='creator-span sm:text-[#006CA2]'>Dan Murray</span></h4>
                  <h4 className='creator-info-text '>Date :<span className='creator-span'>12/08/22</span></h4>
                  <h4 className=' creator-info-text'>Highest Bid :<span className='creator-span pl-4'> 0.57 ETH</span></h4>
                </div>
                
                <div className="bid flex-center bg-box-bg rounded-md py-2 px-6 ">
                  <div className="bid-left ">
                    <h5 className='text-auc-creator-text sm:text-lg'>Current bid</h5>
                    <h4 className='text-main-text sm:text-xl'>0.987 ETH</h4>
                  </div>
                  <button className='creator-button hover-btn'>Place Bid</button>
                </div>
              </div>

              <div className="creator-container">
                <div className='creator-container-inner '>
                  <img src={Heart} alt="icon" className='heart-icon'/>
                  <img src={Cimage1} alt="creator-main" className='h-full sm:px-4'/>
                  <h3 className='text-32 font-bold px-8 py-6 sm:py-3 sm:px-4'>Falling apart</h3>
                </div>
                <div className="creator-info ">
                  <h4 className='creator-info-text'>Creator : <span className='creator-span sm:text-[#006CA2]'>Falling apart</span></h4>
                  <h4 className='creator-info-text '>Date :<span className='creator-span'>12/08/22</span></h4>
                  <h4 className=' creator-info-text'>Highest Bid :<span className='creator-span pl-4'> 0.34 ETH</span></h4>
                </div>
                
                <div className="bid flex-center bg-box-bg rounded-md py-2 px-6 ">
                  <div className="bid-left">
                    <h5 className='text-auc-creator-text sm:text-lg'>Current bid</h5>
                    <h4 className='text-main-text sm:text-xl'>0.99 ETH</h4>
                  </div>
                  <button className='creator-button hover-btn'>Place Bid</button>
                </div>
              </div>

              
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  )
}

export default Index