import React from 'react'
import { useNavigate } from 'react-router-dom';

const FilterResults = ({filterAll}) => {
  const navigate = useNavigate();

  return (
    <div className="w-[80%] filter-results pt-4 sm:w-full">
        <div className={`w-full filter-results-container flex gap-10 items-center justify-evenly sm:gap-y-16 flex-wrap ${filterAll.length <= 2?'!justify-start': ''}`}>
        {
            filterAll.map(e=>(
            <div className={`filter-items `} key={e.id} onClick={()=>navigate(`/market/${e.id}`)}>
                <img src={e.image} alt='filtered-show' className='filter-image'/>
                <div className='sm:flex-center sm:text-base sm:font-semibold'>
                  <p className='text-22 uppercase'>{e.name}</p>
                  <h4 className='text-28 font-bold'>{'$'+e.price}</h4>
                </div>
            </div>
            ))
        }
        </div>
        <button className='see-more sm:w-3/6 sm:mt-16'>See More</button>

    </div>
  )
}

export default FilterResults