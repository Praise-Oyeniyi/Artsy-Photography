import { NavLink, useParams} from 'react-router-dom';
import { AuctionsProfile,AuctionsData } from './AuctionsData';
import { useState } from 'react';
import {FiArrowRightCircle} from 'react-icons/fi';
import {HiEye} from 'react-icons/hi'
import BidSection from './BidSection';

const AuctionLive = ({useNavigate}) => {
    const {name} = useParams();
    const navigate = useNavigate();
    const selected = AuctionsData.find(prod => prod.name ===name);
    const [bid, setBid] = useState('');
    const [bidss, updateBids] = useState(AuctionsProfile);

    const addBid = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            bidFunction();
        }
    };

    const bidFunction = ()=>{
        if(bid !== ''){
            updateBids([...bidss, {
                id: Math.floor(Math.random() * 1000) + 1,
                name:'Praise',
                image:AuctionsProfile[Math.floor(Math.random() * (5 - 0) + 0)].image,
                bid: bid,
            }])
        }
        setBid('');
    }
    
  return (
    <div className='w-full space-y-10 bg-body-bg overflow-hidden pb-10 text-header-p font-normal h-full' >
        <div className="w-5/6 mx-auto ">
            <div className=" mt-16 space-y-10 sm:min-w-full">
                <h4 className="text-24 cursor-pointer font-semibold"><span className='text-[#BCB7B7]'><NavLink to='/'>Home / </NavLink><NavLink to='/AuctionsPage'>Auctions / </NavLink></span> Live bid</h4>
                
                <div className="main-auctions-outer border h-[95vh] flex sm:flex-column sm:w-min-w-[100vw] sm:h-screen sm:border-none ">

                    <div className={`h-full w-3/6 relative sm:fixed sm:top-0 sm:left-0 sm:min-w-[100vw]`} >
                        <div className=' w-full h-full z-0'>
                            <img src={selected.image} alt="" className='h-full w-full z-0 absolute top-0 left-0 sm:relative'/>
                            <div className='top-0 left-0 w-full h-full bg-black lg:hidden absolute bg-opacity-70 tab:hidden med:hidden pointer-events-none'></div>
                        </div>
                        <div className='main-auction-left top-[-100%]'>
                            <div className='!flex-center !z-30'>
                                <h4 className='pb-10 text-24 lg:hidden med:hidden sm:pb-0'>Tag: Lost or Wither</h4>
                                <button  onClick={()=>navigate('/AuctionsPage')} className="flex"><i className="fa fa-xmark bg-[#b8b4b47d] rounded-full px-3 py-1 text-2xl sm:hidden"></i></button>
                                <div className='sm:space-x-2  sm:flex lg:hidden med:hidden'>
                                    <button className='bg-light-blue rounded-xl py-0 px-3 text-15 sm:text-xs sm:rounded-sm sm:py-1'>Live</button>
                                    <button className='bg-[#ffffff66] px-3 text-xs rounded-sm py-1 lg-hidden flex-center'><HiEye className='mr-2'/>295</button>
                                </div>
                                <button  onClick={()=>navigate('/AuctionsPage')}><i className="fa fa-xmark  text-base lg:hidden med:hidden"></i></button>
                            </div>
                            <h3 className='text-48 place-self-center font-semibold !z-30 sm:relative sm:top-[-60%] sm:translate-y-[60%]'>
                                {`Current bid $4500`}
                            </h3>
                            <h4 className='pb-10 text-24 sm:hidden !z-30 '>Tag: Lost or Wither</h4>
                        </div>
                    </div>


                    <div className="main-auction-right px-6 w-3/6 sm:w-full sm:px-0">
                        <BidSection bidFunction={bidFunction} addBid={addBid} setBid={setBid} bidss={bidss} bid={bid}/>

                    </div>
                </div>
            </div>
            <button className='text-36 pt-10 font-semibold flex-center justify-start lg:hidden med:hidden'>See upcoming drops <span onClick={()=>navigate('/Drop')}><FiArrowRightCircle className="ml-5 text-5xl mt-2 hover:text-grey"/></span></button>
        </div>
    </div>
  )
}

export default AuctionLive