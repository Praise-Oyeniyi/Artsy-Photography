import React from 'react'

const FilterTop = ({filterAll, searched}) => {
  return (
    <div className='my-14 mt-24 flex-center w-full'>
        <input type="text" placeholder='Search' className='bg-box-bg rounded-md w-1/6 h-9 pl-2 p-1 outline-none' onChange={(e)=>searched(e.target.value)}/>

        <div className='counter-box w-[80%] h-14 flex-center px-4 py-2 bg-white rounded-lg text-24'>
            <p>{`See ${filterAll.length >=1? filterAll.length : '9'} of 9 results`}</p>
            <select name='filter-how' className='border border-black rounded-md py-1 p-4 outline-none m-headings text-[rgba(0, 0, 0, 1)]'>
              <option value="" disabled selected> Sort By</option>
              <option value="popular">Popular</option>
              <option value="lowest">Lowest</option>
            </select>
        </div>
        </div>
  )
}

export default FilterTop