import Footer from "../Homepage/Footer"
import Notify1 from "./../Images/Notification1.png"
import Notify2 from "./../Images/Notify2.png"
import Notify3 from "./../Images/Notify3.png"
import Notify4 from "./../Images/Notify4.png"

const Index = ({Nav,NavLink, useNavigate}) => {
    // const navigate = useNavigate();

  return (
    <div className='w-full drop-outer space-y-10 bg-body-bg overflow-x-hidden py-10 text-header-p font-normal'>
        <div className="w-5/6 mx-auto">
            <Nav/>
            <div className="drop-body mt-16 space-y-10">
                <h4 className="text-24"><span className='text-[#BCB7B7]'><NavLink to='/'>Home/</NavLink> <NavLink to='/AuctionsPage'>Auctions/ Live bid/</NavLink></span>Drop</h4>
                
                <main className="drop-main text-center space-y-8">
                    <h3 className="text-48 font-medium">
                        Upcoming drops
                    </h3>
                    <p className="text-32 font-normal text-drop-text">Turn on notifications so that no drops will miss you.</p>
                    <button className="text-28 font-medium w-[25%] border py-2 rounded-md">Notify Me</button>
                </main>

                <section className="notifications-outer pt-10 space-y-24">
                    <div className="notification-box-outer">
                        <div className="notification-box-left">
                            <img src={Notify1} alt="" className="notify-image" />
                            <div className="notifications-text-box">
                                <h4 className="text-28">Time Remaining</h4>
                                <div className="flex-center space-y-2 text-40">
                                    <h3>06  hrs : 45 min : 22 s</h3>
                                    <button className="bg-light-blue rounded-xl px-4 text-24 font-medium">Join</button>
                                </div>
                            </div>
                        </div>

                        <div className="notification-box-right">
                            <button className="text-18 bg-light-blue px-8 py-1 rounded-lg text-body-bg">UPCOMING</button>
                            <h6 className="text-16">November 21 at 11 am WAT</h6>
                            <h3 className="text-36 font-medium">Eyo : Eko For Show</h3>
                            <p className="text-16 text-drop-text w-5/6">Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.</p>
                            <h4 className="text-24 font-medium">Creator : <span className="text-light-blue">Aliya Minat</span></h4>
                            <h6 className="text-16 underline text-light-blue">Get notified</h6>
                        </div>
                    </div>

                    <div className="notification-box-outer">
                        <div className="notification-box-left">
                            <img src={Notify2} alt="" className="notify-image" />
                            <div className="notifications-text-box">
                                <h4 className="text-28">Time Remaining</h4>
                                <div className="flex-center space-y-2 text-40">
                                    <h3>06  hrs : 45 min : 22 s</h3>
                                    <button className="bg-light-blue rounded-xl px-4 text-24 font-medium">Join</button>
                                </div>
                            </div>
                        </div>

                        <div className="notification-box-right">
                            <button className="text-18 bg-green px-8 py-1 rounded-lg text-body-bg">LIVE NOW</button>
                            <h6 className="text-16">November 21 at 11 am WAT</h6>
                            <h3 className="text-36 font-medium">Ginger Suburbs</h3>
                            <p className="text-16 text-drop-text w-5/6">Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.</p>
                            <h4 className="text-24 font-medium">Creator : <span className="text-light-blue">Tina Benson</span></h4>
                            <h6 className="text-16 underline text-light-blue">Get notified</h6>
                        </div>
                    </div>

                    <div className="notification-box-outer">
                        <div className="notification-box-left">
                            <img src={Notify3} alt="" className="notify-image" />
                            <div className="notifications-text-box">
                                <h4 className="text-28">Auction ended</h4>
                                <div className="flex-center space-y-2 text-40">
                                    <h3>2 hours ago</h3>
                                    <button className="bg-grey-100 rounded-xl px-4 text-24 font-medium">View</button>
                                </div>
                            </div>
                        </div>

                        <div className="notification-box-right">
                            <button className="text-18 bg-grey px-8 py-1 rounded-lg text-body-bg">ENDED</button>
                            <h6 className="text-16">November 21 at 11 am WAT</h6>
                            <h3 className="text-36 font-medium">Sink</h3>
                            <p className="text-16 text-drop-text w-5/6">Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.</p>
                            <h4 className="text-24 font-medium">Creator : <span className="text-light-blue">Tina Benson</span></h4>
                            <h6 className="text-16 underline text-light-blue">Get notified</h6>
                        </div>
                    </div>

                    <div className="notification-box-outer">
                        <div className="notification-box-left">
                            <img src={Notify4} alt="" className="notify-image" />
                            <div className="notifications-text-box">
                                <h4 className="text-28">Auction ended</h4>
                                <div className="flex-center space-y-2 text-40">
                                    <h3>5 hours ago</h3>
                                    <button className="bg-grey-100 rounded-xl px-4 text-24 font-medium">View</button>
                                </div>
                            </div>
                        </div>

                        <div className="notification-box-right">
                            <button className="text-18 bg-grey px-8 py-1 rounded-lg text-body-bg">ENDED</button>
                            <h6 className="text-16">November 21 at 11 am WAT</h6>
                            <h3 className="text-36 font-medium">Warped ‘99</h3>
                            <p className="text-16 text-drop-text w-5/6">Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.</p>
                            <h4 className="text-24 font-medium">Creator : <span className="text-light-blue">Tina Benson</span></h4>
                            <h6 className="text-16 underline text-light-blue">Get notified</h6>
                        </div>
                    </div>

                    <button className='see-more'>See More</button>                  
                </section>
                <Footer useNavigate={useNavigate}/>
            </div>
        </div>
    </div>
  )
}

export default Index