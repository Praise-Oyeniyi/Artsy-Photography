import Footer from "../Homepage/Footer";
import { DropData } from "./DropsData";
import DropSection from "./DropSection";
import { motion } from "framer-motion";

const Index = ({Nav,NavLink, useNavigate, cart, PageAnimate}) => {

  return (
    <motion.div 
        variants={PageAnimate} initial='init' animate='animate' exit='exit'
        className='w-full drop-outer space-y-10 bg-body-bg overflow-x-hidden py-10 text-header-p font-normal'>
        <div className="w-5/6 mx-auto sm:w-full med:w-[90%]">
            <Nav cart={cart}/>
            <div className="drop-body mt-16 space-y-10 sm:w-[90%] sm:mx-auto">
                <h4 className="text-24 font-semibold sm:hidden"><span className='text-[#BCB7B7]'><NavLink to='/'>Home / </NavLink><NavLink to='/AuctionsPage'>Auctions / Live bid / </NavLink></span>Drop</h4>
                
                <main className="drop-main text-center space-y-8 sm:space-y-4">
                    <h3 className="text-48 font-medium sm:font-bold">
                        Upcoming drops
                    </h3>
                    <p className="text-32 font-normal text-drop-text">Turn on notifications so that no drops will miss you.</p>
                    <button className="text-28 font-semibold w-[25%] border py-3 rounded-md hover:bg-blue transition-all delay-75 duration-300 ease-linear hover:text-white sm:w-4/6 sm:text-xl sm:py-2">Notify Me</button>
                </main>

                <section className="notifications-outer pt-10">
                   <DropSection DropData={DropData}/>
                    <button className='see-more sm:hidden'>See More</button>
                    <button className='lg:hidden text-base pt-5 text-light-blue border-b border-light-blue med:hidden'>View</button>                  
                </section>
                <Footer useNavigate={useNavigate} />
            </div>
        </div>
    </motion.div>
  )
}

export default Index