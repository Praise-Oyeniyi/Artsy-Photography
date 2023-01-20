import React from 'react'
import {FaHeart, FaPaperPlane} from 'react-icons/fa';

const BidSection = ({bidFunction, setBid, addBid, bidss,bid}) => {
  return (
    
    <div className="main-auction-r-inner h-full sm:fixed sm:w-screen sm:h-[40vh] sm:top-[52vh] sm:left-5 ">
        <div className="bids space-y-5 h-[85%] overflow-y-auto scrollbar-hide" >
            {bidss.map(e=>(
                <div className="profile flex-center justify-start gap-x-5" key={e.id}>
                    <img src={e.image} alt="profile-rep" className='h-full sm:h-8'/>

                    <div className="h-full profile-bid flex-column space-y-1 text-[#333] text-24 sm:text-white sm:text-sm">
                        <h4 className=' font-light '>{e.name}</h4>
                        <p className='font-semibold'>{e.bid}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="form sticky w-full h-auto flex-column justify-center space-y-1 mt-1">
            <h5 className='text-[#BAB9B9] text-15 italic'>Creator : Stormy Rylie</h5>

            <div className="inputs flex-center sm:justify-start sm:gap-x-5">
                <div className='border-grey border w-5/6 h-10 rounded-2xl p-2 px-4 flex-center sm:w-[70%]'>
                    <input 
                        type="text"  
                        className='w-full h-full  outline-none border-none placeholder-auc-creator-text text-15 sm:bg-[transparent]' 
                        placeholder='Place a bid...' 
                        value={bid}
                        required
                        onChange={event => setBid(event.target.value)}
                        onKeyDown={addBid}
                    />
                    <FaPaperPlane className='text-2xl w-auto' onClick={()=>bidFunction()}/>
                </div>
                <div className="heart-div h-10 w-10 rounded-full border border-grey flex-center justify-center" >
                    <FaHeart className='text-2xl text-red'/>
                </div>
            </div>

        </div>
    </div>
)}

export default BidSection