import React from 'react'
import Nav from './../Nav'
import { useParams, NavLink} from 'react-router-dom';
import { useState } from 'react';
import Explore1 from './../Images/explore1.png';
import Explore2 from './../Images/explore2.png';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';







const FtDescription = ({FtData, FilterData}) => {
    var [count, UpdateCounter] = useState(1);
    const {id} = useParams();
    var selected
    if(id>=10){
        selected = FilterData.find(prod => String(prod.id) === id);
    }else{
        selected = FtData.find(prod => String(prod.id) === id);
    }


  return (
    <div className='w-full ftdescription-outer space-y-10 bg-body-bg overflow-x-hidden py-10 text-header-p font-normal mb-56'>
        <div className="w-5/6 mx-auto">
            <Nav/>
            <div className="ftdescription-body mt-16 space-y-10 w-[95%] mx-auto">
                <h4 className="text-24 cursor-pointer"><NavLink to='/'><span className='text-[#BCB7B7]'>Home/</span></NavLink>Marketplace/ Editorials/ Philomena ‘22</h4>
                
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
                            <h5 className='text-28 font-medium'>Total views: <span>{selected.views}</span></h5>
                            <div className="desc-amount text-36 flex space-x-3">
                                <button onClick={()=>count >1? UpdateCounter(count--): ''}>-</button>
                                <p>{count}</p>
                                <button onClick={()=>UpdateCounter(count++)}>+</button>
                            </div>
                            <div className="desc-add-to-cart w-5/6 flex pt-8 pb-4 gap-x-5">
                                <button className='text-26 bg-blue text-body-bg w-4/6 py-3'>Add to cart </button>
                                <button className='border border-header-p w-[13%]'><i className="far fa-heart text-header-p text-3xl font-thin"></i></button>
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
                    <div className="rounded-xl explore-bar flex-center py-5 px-4">
                        <p className=' text-32 font-medium w-full'>Explore more from this collection</p>
                        <div className="flex-center justify-end space-x-5">
                            <button className='np-button !shadow-none border-[.5px] border-[#616161]'><i className="fas fa-chevron-left text-base"></i></button>
                            <button className='np-button !shadow-none border-[.5px] border-[#616161]'><i className="fas fa-chevron-right text-base"></i></button>
                        </div>
                    </div>
                    <div>
                        <div className="explore-images flex-center justify-start gap-x-8 max-w-full overflow-hidden">
                            <div className="flex-column h-full space-y-3 p-3 border border-[#333] w-3/6">
                                <FontAwesomeIcon icon={faHeart} className='ft-desc-explore-font'/>
                                <img src={Explore1} alt="" className=' h-72'/>
                                <div className='text-32 font-medium flex-center'>
                                    <h3 >Sassy</h3>
                                    <div>
                                        <img src="" alt="" />
                                        <h4>3.20</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-column h-full space-y-3 p-3 border border-[#333] w-3/6">
                                <FontAwesomeIcon icon={faHeart} className='ft-desc-explore-font'/>
                                <img src={Explore2} alt="" className='h-72'/>
                                <div className='text-32 font-medium flex-center'>
                                    <h3 >Escape</h3>
                                    <div>
                                        <img src="" alt="" />
                                        <h4>0.03</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-column h-full space-y-3 p-3 border border-[#333] w-3/6">
                                <FontAwesomeIcon icon={faHeart} className='ft-desc-explore-font'/>
                                <img src={Explore2} alt="" className='h-72'/>
                                <div className='text-32 font-medium flex-center'>
                                    <h3 >Escape</h3>
                                    <div>
                                        <img src="" alt="" />
                                        <h4>0.03</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className='see-more bg-gradient-to-r from-[#78A3AD] to-[#C056097D] p-0 border-none'><span className=' bg-body-bg w-[99%] py-[0.55rem] rounded-md'>Explore All</span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FtDescription