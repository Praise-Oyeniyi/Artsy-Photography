import Cimage from './../Images/create-image.png';
import Heart from './../Icons/Vector12.svg';

const Index = ({Nav,NavLink, useNavigate, AuctionsData}) => {
  const navigate = useNavigate();

  return (
    <div className='w-full auctions-outer space-y-10 bg-body-bg overflow-x-hidden py-10 text-header-p font-normal mb-56'>
      <div className="w-5/6 mx-auto">
        <Nav/>
        <div className="auction-body mt-16 space-y-10">
          <h4 className="text-24"><NavLink to='/'><span className='text-[#BCB7B7]'>Home/</span></NavLink>Auctions</h4>
          <h3 className="text-28">Here’s an overview of products actively on auction, explore!</h3>

          <section className="slider-outer relative w-full h-96">
            <div className="slider absolute w-screen left-0 top-0 flex-center gap-x-5">
              {
                AuctionsData.map(e=>(
                <div className="relative auctions-img-outer" key={e.id}>
                  <div className='auctions-img'>
                    <img src={e.image} alt="" className='relative '/>
                    <h3 className='auctions-img-text z-10'>{e.time}</h3>
                  </div>
                  <div className='auctions-img-hover space-x-3 overflow-hidden' onClick={()=>navigate(`/auctions/live-bid/${e.name}`)}>
                    <p className='text-32 text-white' >Join Livestream</p>
                    <i className="fas fa-arrow-right border rounded-full border-white text-white p-2 px-3 text-4xl"></i>
                    
                  </div>
                </div>
              ))}
            </div>

            <div className="dots flex-center justify-center relative top-[28rem] text-center w-full space-x-2">
              <span className='bg-light-blue rounded-full h-2 w-2'></span>
              <span className='bg-grey rounded-full h-2 w-2'></span>
              <span className='bg-grey rounded-full h-2 w-2'></span>
              <span className='bg-grey rounded-full h-2 w-2'></span>
            </div>
          </section>

          <section className='pt-10 space-y-16'>
            <h3 className='text-36 '>Top bids from popular creators</h3>
            <div className="auct-creators-outer flex-center gap-x-20 ">

              <div className="creator-container space-y-8 w-3/6">
                <div className='creator-container-inner '>
                  <img src={Heart} alt="icon" className='heart-icon '/>
                  <img src={Cimage} alt="creator-main" className='h-full'/>
                  <h3 className='text-32 font-bold px-8 py-6'>Out of the box</h3>
                </div>
                <div className="creator-info ">
                  <h4 className='creator-info-text'>Creator : <span className='creator-span '>Dan Murray</span></h4>
                  <h4 className='creator-info-text '>Date :<span className='creator-span'>12/08/22</span></h4>
                  <h4 className=' creator-info-text'>Highest Bid :<span className='creator-span pl-4'> 0.57 ETH</span></h4>
                </div>
                
                <div className="bid flex-center bg-box-bg rounded-md py-2 px-6 ">
                  <div className="bid-left text-28 font-bold space-y-3">
                    <h5 className='text-auc-creator-text'>Current bid</h5>
                    <h4 className='text-main-text'>0.987 ETH</h4>
                  </div>
                  <button className='creator-button'>Place Bid</button>
                </div>
              </div>

              <div className="creator-container space-y-8 w-3/6">
                <div className='creator-container-inner '>
                  <img src={Heart} alt="icon" className='heart-icon '/>
                  <div className='h-[280px] bg-creator-two-bg rounded-md'></div>
                  <h3 className='text-32 font-bold px-8 py-6'>Falling apart</h3>
                </div>
                <div className="creator-info ">
                  <h4 className='creator-info-text'>Creator : <span className='creator-span '>Falling apart</span></h4>
                  <h4 className='creator-info-text '>Date :<span className='creator-span'>12/08/22</span></h4>
                  <h4 className=' creator-info-text'>Highest Bid :<span className='creator-span pl-4'> 0.34 ETH</span></h4>
                </div>
                
                <div className="bid flex-center bg-box-bg rounded-md py-2 px-6 ">
                  <div className="bid-left text-28 font-bold space-y-3">
                    <h5 className='text-auc-creator-text'>Current bid</h5>
                    <h4 className='text-main-text'>0.99 ETH</h4>
                  </div>
                  <button className='creator-button'>Place Bid</button>
                </div>
              </div>

              
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Index