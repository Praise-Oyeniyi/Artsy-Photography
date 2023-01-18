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
    <div className='w-full ftdescription-outer space-y-10 bg-body-bg overflow-x-hidden py-10 text-header-p font-normal mb-56'>
        <div className="w-5/6 mx-auto">
            <Nav cart={cart}/>
            <div className="ftdescription-body mt-16 space-y-10 w-[95%] mx-auto">
                <h4 className="text-24 cursor-pointer font-semibold tracking-wide"><NavLink to='/'><span className='text-[#BCB7B7]'>Home / Marketplace / Editorials / </span></NavLink>{`${selected.name}`}</h4>
                
                <div className='flex-center items-center justify-start border'>
                    <img src={selected.id >=10? selected.image:selected.bigImage} alt="" className={`py-8 px-4 h-[52.5em] w-full ${selected.id >=10? 'w-3/6':''}`}/>

                    <div className="desc-text-area w-full border-l">
                        <div className="desc-title-area border-b py-10 px-5 flex-center">
                            <h3 className='text-40 font-bold'>{selected.name}</h3>
                            <div className="desc-price flex items-center gap-x-3 text-4xl">
                                <i className="fa-brands fa-ethereum text-main-text"></i>
                                <h5 className='text-32 font-medium'>{selected.price}</h5>
                            </div>
                        </div>

                        <div className="desc-buy py-10 px-5 border-b space-y-3 ">
                            <h4 className='text-32 text-drop-text'>Creator : <span className='text-light-blue font-medium'>{selected.creator===undefined?'Ali Dawa':selected.creator}</span></h4>
                            <p className='text-24 text-black'>{selected.country===undefined?'Made In Italy':selected.country}</p>
                            <h5 className='text-28 font-semibold'>Total views: <span>{selected.views}</span></h5>
                            <div className="desc-amount text-36 flex space-x-3">
                                <button onClick={()=>cartItems('minus')}>-</button>
                                <p>{count}</p>
                                <button onClick={()=>cartItems('plus')}>+</button>
                            </div>
                            <div className="desc-add-to-cart w-5/6 flex pt-8 pb-4 gap-x-5">
                                <button className='text-26 bg-blue text-body-bg w-4/6 py-3' onClick={()=>Atcart(selected, count)}>Add to cart </button>
                                <button 
                                    className='border border-header-p w-[13%] flex-center justify-center' onClick={()=>Updatelike(!like)}>
                                    {like===false?<AiOutlineHeart className="text-header-p text-4xl font-thin"/>: <FaHeart className="text-red text-3xl font-thin"/>}
                                    </button>
                            </div>
                        </div>

                        <div className='desc-accordion-outer px-5 py-10 border-b'>
                            <div className="desc-accordion-title">
                                <h4 className='text-32 font-medium'>Description</h4>
                                <i className="fas fa-chevron-down text-base"></i>
                            </div>
                            <p></p>
                        </div>
                        <div className='desc-accordion-outer px-5 py-10 border-b'>
                            <div className="desc-accordion-title">
                                <h4 className='text-32 font-medium'>Listings</h4>
                                <i className="fas fa-chevron-down text-base"></i>
                            </div>
                            <p></p>
                        </div>
                        <div className='desc-accordion-outer px-5 py-10'>
                            <div className="desc-accordion-title">
                                <h4 className='text-32 font-medium'>Status</h4>
                                <i className="fas fa-chevron-down text-base"></i>
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>

                
                <div className="ftdesc-explore-outer pt-10 space-y-16">
                    <div className="rounded-xl explore-bar flex-center py-5 px-6">
                        <p className=' text-28 font-semibold w-full'>Explore more from this collection</p>
                        <div className="flex-center justify-end space-x-5">
                            <button className='np-button !shadow-none border-[.5px] border-[#616161]'><i className="fas fa-chevron-left text-base"></i></button>
                            <button className='np-button !shadow-none border-[.5px] border-[#616161]'><i className="fas fa-chevron-right text-base"></i></button>
                        </div>
                    </div>
                    <div>
                        <div className="explore-images flex-center justify-start gap-x-8 w-full overflow-x-auto">

                            {Explore.map((e,index)=>(
                                <div className="flex-column space-y-3 p-3 px-5 border border-[#333] min-w-[30%]" key={index}>
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
                    <button className='see-more bg-gradient-to-r from-[#78A3AD] to-[#C056097D] p-0 border-none'><span className='bg-body-bg w-[99%] py-[0.55rem] rounded-md'>Explore All</span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FtDescription