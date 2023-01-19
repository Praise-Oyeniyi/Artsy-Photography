import Footer from "../Homepage/Footer";
import { DropData } from "./DropsData";
import DropSection from "./DropSection";

const Index = ({Nav,NavLink, useNavigate, cart}) => {
    // const navigate = useNavigate();

  return (
    <div className='w-full drop-outer space-y-10 bg-body-bg overflow-x-hidden py-10 text-header-p font-normal'>
        <div className="w-5/6 mx-auto">
            <Nav cart={cart}/>
            <div className="drop-body mt-16 space-y-10">
                <h4 className="text-24 font-semibold"><span className='text-[#BCB7B7]'><NavLink to='/'>Home / </NavLink><NavLink to='/AuctionsPage'>Auctions / Live bid / </NavLink></span>Drop</h4>
                
                <main className="drop-main text-center space-y-8">
                    <h3 className="text-48 font-medium">
                        Upcoming drops
                    </h3>
                    <p className="text-32 font-normal text-drop-text">Turn on notifications so that no drops will miss you.</p>
                    <button className="text-28 font-semibold w-[25%] border py-3 rounded-md hover:bg-blue transition-all delay-75 duration-300 ease-linear hover:text-white">Notify Me</button>
                </main>

                <section className="notifications-outer pt-10">
                   <DropSection DropData={DropData}/>
                    <button className='see-more'>See More</button>                  
                </section>
                <Footer useNavigate={useNavigate}/>
            </div>
        </div>
    </div>
  )
}

export default Index