import React from 'react'

const FilterResults = ({filterAll}) => {
  return (
    <div className="w-[80%] filter-results pt-4">
        <div className="w-full filter-results-container flex gap-10 items-center justify-evenly flex-wrap ">
        {
            filterAll.map(e=>(
            <div className='filter-items' key={e.id}>
                <img src={e.image} alt='filtered-show' className='filter-image'/>
                <p className='text-22'>{e.name}</p>
                <h4 className='text-28 font-bold'>{e.price}</h4>
            </div>
            ))
        }
        </div>
        <button className='see-more'>See More</button>

    </div>
  )
}

export default FilterResults