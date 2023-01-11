
import { NavLink, useNavigate} from 'react-router-dom';
import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai';
import {FiBell} from 'react-icons/fi';

const nav = () => {

  return (
    <nav className='w-full flex-center'>
        <NavLink to='/'><h3 className="logo text-32 uppercase font-medium cursor-pointer">Artsy.</h3></NavLink>

        <ul className='flex space-x-8 text-24 font-normal cursor-pointer'>
            <NavLink to='/'><li className=''>Home</li></NavLink>
            <NavLink to='/Marketplace'><li>Marketplace</li></NavLink>
            <NavLink to='/AuctionsPage'><li>Auctions</li></NavLink>
            <NavLink to='/Drop'><li>Drop</li></NavLink>
        </ul>

        <div className="nav-icons flex space-x-8 relative cursor-pointer text-2xl text-black">
          <NavLink to='/MarketPlace'><AiOutlineSearch /></NavLink>
          <div className="relative">
          <AiOutlineShoppingCart className='relative'/>
            <span className='absolute text-red text-5xl -top-10 -right-2 animate-pulse'>.</span>
          </div>
          <NavLink to='/Drop'><FiBell/></NavLink>
        </div>
    </nav>
  )
}

export default nav