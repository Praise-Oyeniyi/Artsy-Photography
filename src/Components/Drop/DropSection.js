import React from 'react'

const DropSection = ({DropData}) => {
  return (
    <div className='space-y-20 sm:space-y-12'>
        {DropData.map(e=>(
            <div className="notification-box-outer sm:flex-column relative ">
                <div className="notification-box-left sm:w-full sm:relative">
                    <img src={e.image} alt="" className="notify-image sm:h-[13rem]" />
                    <div className="notifications-text-box sm:w-[90%]">
                        <h4 className="text-28 sm:text-base">{e.ended===''?'Auction Ended':'Time Remaining'}</h4>
                        <div className="flex-center space-y-2 text-40">
                            <h3 className=' sm:text-xl'>{e.time}</h3>
                            <button className="bg-grey-100 rounded-xl px-4 text-24 font-medium sm:hidden">{e.action}</button>
                        </div>
                    </div>
                </div>

                <div className="notification-box-right sm:w-full sm:space-y-5">
                    <button 
                        className={`text-18 sm:absolute sm:top-3 sm:right-5 sm:text-xs sm:px-4 sm:uppercase  px-8 py-2 rounded-lg text-body-bg ${e.when==='Ended'?'bg-grey':e.when=== 'Upcoming'?'bg-green':'bg-blue'}`}>
                            {e.when}
                    </button>

                    <h6 className="text-16">{e.day}</h6>
                    <h3 className="text-36 font-medium sm:text-2xl">{e.venue}</h3>
                    <p className="text-16 text-drop-text w-5/6">{e.text}</p>
                    <h4 className="text-24 font-medium">Creator : <span className="text-light-blue">{e.creator}</span></h4>
                    <h6 className="text-16 underline text-light-blue">Get notified</h6>
                </div>
            </div>
        ))}
    </div>
  )
}

export default DropSection