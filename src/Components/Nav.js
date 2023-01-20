
import { NavLink} from 'react-router-dom';
import {AiOutlineSearch,AiOutlineShoppingCart, AiOutlineClose} from 'react-icons/ai';
import {FiBell,FiMenu} from 'react-icons/fi';
import { useState } from 'react';

const Nav = ({cart}) => {
  const [active, setActive] = useState(false);


  return (
    <nav className='w-full flex-center z-[9999] pointer-events-auto font-[satoshi] max-w-full sm:px-5 relative'>
        <FiMenu className='lg:hidden text-3xl' onClick={()=>setActive(true)}/>
        <NavLink to='/'><h3 className="logo nav-logo">Artsy.</h3></NavLink>

        <ul className='flex space-x-8 text-24 font-normal cursor-pointer sm:hidden'>
            <NavLink to='/'><li className=''>Home</li></NavLink>
            <NavLink to='/Marketplace'><li>Marketplace</li></NavLink>
            <NavLink to='/AuctionsPage'><li>Auctions</li></NavLink>
            <NavLink to='/Drop'><li>Drop</li></NavLink>
        </ul>

        <div className="nav-icons flex space-x-8 sm:space-x-4 relative cursor-pointer text-2xl text-black">
          <NavLink to='/MarketPlace'><AiOutlineSearch /></NavLink>
          <NavLink to='/market/carts'>
            <div className="relative">
              <AiOutlineShoppingCart className='relative'/>
              <span className={`absolute text-5xl -top-10 -right-2 animate-pulse ${cart.length===0?'text-body-bg':'text-red'}` }>.</span>
            </div>
          </NavLink>
          <NavLink to='/Drop' className='sm:hidden'><FiBell/></NavLink>
        </div>




        <div className={`mobile-nav transition-all duration-1000 delay-300 ease-in-out ${active?'left-0': ' left-[-100vw]'}`} onClick={()=>setActive(!active)}>
          <div className="nav-top flex-center">
            <NavLink to='/'><h3 className="logo nav-logo">Artsy.</h3></NavLink>
            <AiOutlineClose className='text-2xl' onClick={()=>setActive(!active)}/>
          </div>

          <ul className='=text-24 font-normal cursor-pointer flex-column space-y-5 text-2xl '>
              <NavLink to='/'><li className='sm:!border-none'>Home</li></NavLink>
              <NavLink to='/Marketplace' className='sm:!border-none'><li>Marketplace</li></NavLink>
              <NavLink to='/AuctionsPage' className='sm:!border-none'><li>Auctions</li></NavLink>
              <NavLink to='/Drop' className='sm:!border-body-bg'><li>Drop</li></NavLink>
          </ul>
        </div>
    </nav>
  )
}

export default Nav