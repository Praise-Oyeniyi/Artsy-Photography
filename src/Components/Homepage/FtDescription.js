import React from 'react'
import Nav from './../Nav'
import { useParams, NavLink} from 'react-router-dom';
import { useState } from 'react';
import {FaHeart} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai'
import { Explore } from './FeaturedData';







const FtDescription = ({FtData, FilterData, cart, Atcart}) => {
    const [like, Updatelike] = useState(false)
    var [count, UpdateCounter] = useState(1);
    const {id} = useParams();

    var selected;
    if(id>=10){
        selected = FilterData.find(prod => String(prod.id) === id);
    }else{
        selected = FtData.find(prod => String(prod.id) === id);
    }

    const cartItems =(operation)=>{
        if(operation === 'minus' && count === 0){
            count = 0;
        }else if(operation === 'minus' && count >= 1){
            count--;
        }else if(operation === 'plus'){
            count++;
        }
        return UpdateCounter(count);
    }

    



  return (
    <div className='w-full ftdescription-outer space-y-10 bg-body-bg overflow-x-hidden py-10 text-header-p font-normal mb-56 sm:mb-10'>
        <div className="w-5/6 mx-auto sm:w-full">
            <Nav cart={cart}/>
            <div className="ftdescription-body mt-16 space-y-10 w-[95%] sm:w-full mx-auto">
                <h4 className="text-24 cursor-pointer font-semibold tracking-wide sm:border-b sm:pb-2 sm:mx-3"><NavLink to='/'><span className='text-[#BCB7B7]'>Home / Marketplace / Editorials / </span></NavLink>{`${selected.name}`}</h4>
                
                <div className='flex-center items-center justify-start border sm:border-none sm:flex-col sm:w-[90%] sm:mx-auto'>
                    <img src={selected.id >=10? selected.image:selected.bigImage} alt="" className={`py-8 px-4 h-[52.5em] sm:h-96 sm:p-0 w-full ${selected.id >=10? 'w-3/6 sm:w-full':''}`}/>

                    <div className="desc-text-area w-full border-l sm:border-none sm:!text-lg">
                        <div className="desc-title-area border-b py-10 px-5 flex-center sm:py-0  sm:border-none sm:px-0 sm:pt-3">
                            <h3 className='text-40 font-bold sm:text-lg sm:uppercase'>{selected.name}</h3>
                            <div className="desc-price flex items-center gap-x-3 text-4xl">
                                <i className="fa-brands fa-ethereum text-main-text sm:hidden"></i>
                                <h5 className='text-32 font-medium sm:font-bold'><span className='lg:hidden'>$ </span>{selected.price}</h5>
                            </div>
                        </div>

                        <div className="desc-buy py-10 px-5 border-b space-y-3 sm:border-none sm:px-0 sm:py-5">
                            <h4 className='text-32 text-drop-text'>Creator : <span className='text-light-blue font-medium'>{selected.creator===undefined?'Ali Dawa':selected.creator}</span></h4>
                            <p className='text-24 text-black'>{selected.country===undefined?'Made In Italy':selected.country}</p>
                            <h5 className='text-28 font-semibold sm:text-xl'>Total views: <span>{selected.views}</span></h5>
                            <div className="desc-amount text-36 sm:text-2xl flex space-x-3">
                                <button onClick={()=>cartItems('minus')}>-</button>
                                <p>{count}</p>
                                <button onClick={()=>cartItems('plus')}>+</button>
                            </div>
                            <div className="desc-add-to-cart w-5/6 flex pt-8 pb-4 gap-x-5 sm:pt-4">
                                <button className='text-26 bg-blue text-body-bg w-4/6 sm:w-5/6 py-3 hover-btn' onClick={()=>Atcart(selected, count)}>Add to cart </button>
                                <button 
                                    className='border border-header-p w-[13%] sm:w-[24%] flex-center justify-center sm:p-2' onClick={()=>Updatelike(!like)}>
                                    {like===false?<AiOutlineHeart className="text-header-p text-4xl font-thin"/>: <FaHeart className="text-red text-3xl font-thin"/>}
                                    </button>
                            </div>
                        </div>

                        <div className='desc-accordion-outer px-5 py-10 border-b sm:py-5 sm:border-y sm:px-0'>
                            <div className="desc-accordion-title">
                                <h4 className='text-32 font-medium'>Description</h4>
                                <i className="fas fa-chevron-down text-base"></i>
                            </div>
                        </div>
                        <div className='desc-accordion-outer px-5 py-10 border-b sm:py-5 sm:px-0'>
                            <div className="desc-accordion-title">
                                <h4 className='text-32 font-medium'>Listings</h4>
                                <i className="fas fa-chevron-down text-base"></i>
                            </div>
                        </div>
                        <div className='desc-accordion-outer px-5 py-10 sm:py-5 sm:border-b sm:px-0'>
                            <div className="desc-accordion-title">
                                <h4 className='text-32 font-medium'>Status</h4>
                                <i className="fas fa-chevron-down text-base"></i>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="ftdesc-explore-outer pt-10 space-y-16 sm:space-y-8 sm:w-[95%] sm:mx-auto">
                    <div className="rounded-xl explore-bar flex-center py-5 px-6 sm:!shadow-none sm:px-0 sm:py-0">
                        <p className=' text-28 font-semibold w-full sm:hidden'>Explore more from this collection</p>
                        <p className=' text-28 font-semibold w-full lg:hidden '>More from this collection</p>
                        <div className="flex-center justify-end space-x-5 sm:hidden">
                            <button className='np-button !shadow-none border-[.5px] border-[#616161]'><i className="fas fa-chevron-left text-base"></i></button>
                            <button className='np-button !shadow-none border-[.5px] border-[#616161]'><i className="fas fa-chevron-right text-base"></i></button>
                        </div>
                    </div>
                    <div>
                        <div className="explore-images flex-center justify-start gap-x-8 w-full overflow-x-auto">

                            {Explore.map((e,index)=>(
                                <div className="flex-column space-y-3 p-3 px-5 border border-[#333] min-w-[30%] sm:min-w-[100%]" key={index}>
                                    <AiOutlineHeart className="ft-desc-explore-font"/>
                                    <img src={e.image} alt="" className=' h-72 w-full'/>
                                    <div className='text-32 font-medium flex-center'>
                                        <h3 className='font-semibold'>{e.name}</h3>
                                        <div className='flex-center justify-end space-x-1'>
                                            <i className="fa-brands fa-ethereum text-main-text text-2xl"></i>
                                            <h4>{e.price}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>

                    </div>
                    <button className='see-more sm:w-3/6 bg-gradient-to-r from-[#78A3AD] to-[#C056097D] p-0 border-none'><span className='bg-body-bg w-[99%] py-[0.55rem] sm:py-[0.8rem] rounded-md'>Explore All</span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FtDescription