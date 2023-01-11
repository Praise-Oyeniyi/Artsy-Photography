import { NavLink} from 'react-router-dom';
import { AuctionsProfile } from './AuctionsData';
import { useState } from 'react';
import {FiArrowRightCircle} from 'react-icons/fi';
import BidSection from './BidSection';

const AuctionLive = ({useNavigate}) => {
    const navigate = useNavigate();
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
    <div className='w-full space-y-10 bg-body-bg overflow-x-hidden pb-10 text-header-p font-normal h-full'>
        <div className="w-5/6 mx-auto">
            <div className="ftdescription-body mt-16 space-y-10">
                <h4 className="text-24 cursor-pointer font-semibold"><span className='text-[#BCB7B7]'><NavLink to='/'>Home/</NavLink><NavLink to='/AuctionsPage'>Auctions/</NavLink></span> Live bid</h4>
                
                <div className="main-auctions-outer border h-[95vh] flex">

                    <div className="main-auction-left w-3/6 h-full text-white flex-column justify-between py-3 px-6 relative">
                        <div className='flex-center'>
                            <button  onClick={()=>navigate('/AuctionsPage')}><i className="fa fa-xmark bg-[#b8b4b47d] rounded-full px-3 py-1 text-2xl"></i></button>
                            <button className='bg-light-blue rounded-xl py-0 px-3 text-15'>Live</button>
                        </div>
                        <h3 className='text-48 place-self-center font-semibold'>
                            {`Current bid $4500`}
                        </h3>
                        <h4 className='pb-10 text-24'>Tag: Lost or Wither</h4>
                    </div>


                    <div className="main-auction-right px-6 w-3/6">
                        <BidSection bidFunction={bidFunction} addBid={addBid} setBid={setBid} bidss={bidss} bid={bid}/>

                    </div>
                </div>
            </div>
            <button className='text-36 pt-10 font-semibold flex-center justify-start'>See upcoming drops <span onClick={()=>navigate('/Drop')}><FiArrowRightCircle className="ml-5 text-5xl mt-2 hover:text-grey"/></span></button>
        </div>
    </div>
  )
}

export default AuctionLive