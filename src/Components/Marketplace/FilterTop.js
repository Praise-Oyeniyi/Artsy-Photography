import React from 'react'
import {NavLink } from 'react-router-dom'

const FilterTop = ({filterAll, searched, active, setActive}) => {

  return (
    <div className='my-14 mt-24 flex-center w-full sm:my-10 sm:block sm:space-y-3 sm:mb-0'>

        <h4 className="text-base font-semibold text-[#BCB7B7] lg:hidden pb-4 med:hidden sm:mx-2"><NavLink to='/'>Home</NavLink> / <NavLink to='/MarketPlace'>Marketplace</NavLink> /<span className='text-black font-semibold'> Editorials</span></h4>

        <p className='lg:hidden sm:mx-3 text-[#BCB7B7] text-base italic med:hidden'>{`Showing ${filterAll.length >=1? filterAll.length : '9'} of 9 results`}</p>

        <input type="text" placeholder='Search' className='bg-box-bg sm:hidden rounded-md w-1/6 h-9 pl-2 p-1 outline-none' onChange={(e)=>searched(e.target.value)}/>

        <div className='counter-box w-[80%] h-14 flex-center px-4 py-2 sm:py-0 bg-white rounded-lg text-24 sm:w-full'>
            
            
            <div className='lg:hidden flex-center justify-start space-x-2 med:hidden' onClick={()=>setActive(!active)}>
              <h4 className='text-lg'>Filters</h4>
              <i className="fa-solid fa-chevron-down text-lg"></i>
            </div>
            <p className='sm:hidden font-bold'>{`See ${filterAll.length >=1? filterAll.length : '9'} of 9 results`}</p>
            <select name='filter-how' className='border border-black rounded-md py-1 p-4 outline-none m-headings text-[rgba(0, 0, 0, 1)] sm:text-lg'>
              <option value="" disabled selected> Sort By</option>
              <option value="popular">Popular</option>
              <option value="lowest">Lowest</option>
            </select>
        </div>
        </div>
  )
}

export default FilterTop