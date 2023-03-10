import exploreBtn from './../Icons/Vector13.svg'


const Auctions = ({next, useNavigate}) => {
    const navigate = useNavigate();

  return (
    <div>
        <div className="exhibition-outer w-full py-5">
            <div className="exhibition w-5/6 mx-auto">
                <h3 className="exhibition-header sm:hidden">
                    See Upcoming Auctions And Exhibitions.
                </h3>

                <div className="images-slider w-full my-4 h-[28rem] sm:h-[20rem] text-white flex items-end px-6 py-14 space-x-3 sm:px-1 sm:py-0 sm:items-center">
                    <div className='self-center h-[20%] flex-column sm:h-[100%]'>                       
                        <h1 className='text-8xl self-end -mt-3 sm:self-start'>.</h1>
                        <h2 className="number text-6xl pt-8 sm:pt-5 sm:text-4xl">01</h2>
                    </div>
                    <div className='flex flex-col space-y-4'>

                        <div className="top w-[25%] flex items-end sm:w-full"> 
                            <h3 className='text-28 leading-tight font-[Bellefair] sm:text-xl'>MONALISA REDEFINED IN STYLE.</h3>
                        </div>


                        <div className="w-full bottom flex justify-between items-end sm:space-y-5 sm:flex-col sm:items-start">
                            <div className="left space-y-4 w-4/6 sm:w-full"> 
                                <h5 className='text-xs uppercase font-[poppins] sm:text-sm'>Start on : 08:00 GTS . Monday </h5>
                                <p className=' leading-tight text-15 sm:text-xs sm:leading-normal'>
                                    GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS 
                                    AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.
                                </p>
                            </div>
                            <div className="right w-auto space-x-5 text-24 sm:w-5/6 sm:flex-center sm:justify-start sm:place-self-end">
                                <p className='inline border-b pb-1 cursor-pointer' onClick={()=>navigate('auctionspage')}>See more</p>
                                <button className='border-white border rounded-md px-2 py-[.3rem]' onClick={()=>navigate('drop')}>Set a reminder</button>
                            </div>
                        </div>
                </div>
            </div>

            <div className="exhibition-counter w-full flex justify-between items-center sm:hidden">
                <input type="range" name="exhibition-range" id="exhibition-range" className='accent-body-bg'/>
                <div className="exhibition-buttons flex justify-between items-center space-x-2">
                    <button className='np-button'><i className="fas fa-chevron-left text-lg text-white"></i></button>
                    <button className='np-button'><i className="fas fa-chevron-right text-lg text-white"></i></button>
                </div>
            </div>

            </div>

        </div>

        <div className="explore-outer w-full pt-28 pb-24 sm:py-16">
            <div className="explore w-full mx-auto font-medium">
                <div className='explore-div '>
                    <h3 className='text-48' >Explore Marketplace</h3>
                    <img src={exploreBtn} alt="" className='explore-btn' onClick={()=>navigate('Marketplace')}/>
                </div>
                <div className='explore-div '>
                    <h3 className='text-48'>See Auctions</h3>
                    <img src={exploreBtn} alt="" className='explore-btn' onClick={()=>navigate('Auctionspage')}/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Auctions