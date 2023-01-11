import search from './Icons/Vector.svg'
import cart from './Icons/Vector1.svg'
import notify from './Icons/Vector2.svg'
import { NavLink} from 'react-router-dom'

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

        <div className="nav-icons flex space-x-8 relative cursor-pointer">
          <img src={search} alt="search-icon" className='w-5' />
          <div className="relative">
            <img src={cart} alt="cart-icon" className='w-5 relative'/>
            <span className='absolute text-red text-5xl -top-10 -right-2 animate-pulse'>.</span>
          </div>
          <img src={notify} alt="notification-icon" className='w-5'/>

        </div>
    </nav>
  )
}

export default nav