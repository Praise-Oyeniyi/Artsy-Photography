import Filter from './../Icons/Vector10.svg';
import Checked from './../Icons/Vector9.svg';
import { Category} from './FilterData';
import { useState } from 'react';



const FilterOptions = ({filterControl, active, setActive}) => {
    const [init, slide] = useState('150,000')
    const [active1, setActive1] =useState(true);
    const [active2, setActive2] =useState(true);
    const [active3, setActive3] =useState(true);

    const down = <i className="fa-solid fa-chevron-down text-lg"></i>;
    const up = <i className="fa-solid fa-chevron-up text-lg"></i>;


  return (
    <div className={`filter-options w-1/6 space-y-10 sm:w-full  ${active?'opacity-100 block':'sm:hidden'}`}>
        <div className='flex-center justify-start pb-3 mb-5 border-b-2 space-x-2 sm:hidden'>
            <img src={Filter} alt="" className='h-9 w-9'/>
            <h3 className='text-32 text-[rgba(0, 0, 0, 1)] filter-head !font-extrabold'>Filter</h3>
        </div>

        <div className='space-y-8 sm:space-y-4' >
            <button className='filter-head text-[rgba(0, 0, 0, 1)]' onClick={()=>setActive1(!active1)}>
                By Category 
                <span className='pt-1'>{active1?down:up}</span>
            </button>

            <div className={`category-filter space-y-2 ${active1?`hidden`:''}`}>
                {Category.map(e=>(
                    <div className="c-filter-container" onClick={()=>{filterControl(e.category); e.image = !(e.image)}} key={e.id}>
                        <div className="c-filter-checked">
                            <img src={e.image?'':Checked} alt="" className='checked-box' />
                        </div> 
                        <p className='text-24'>{e.category}</p>
                    </div>
                ))} 
            </div>

            <div className='price-category space-y-5'>
                <button className='filter-head text-[rgba(0, 0, 0, 1)]' onClick={()=>setActive2(!active2)}>
                    Price
                    <span className='pt-1'>{active2?down:up}</span>
                </button>
                <div className={`space-y-5 text-24 ${active2?`hidden`:''}`}>
                    <h4>{`$100,000 - $${init}`}</h4>
                    <input type="range" min='100000' max='150000' className='accent-black' onInput={(e)=>slide(e.target.value)}/>
                </div>
            </div>

            <div className="artist-category space-y-5">
                <button className='filter-head text-[rgba(0, 0, 0, 1)]' onClick={()=>setActive3(!active3)}>
                    By Artist
                    <span className='pt-1'>{active3?down:up}</span>
                </button>
                <ul className={`text-24 space-y-2 ${active3?`hidden`:''}`}>
                    <li>All</li>
                    <li>Below $100.00</li>
                    <li>$100.00 - $150.00</li>
                    <li>$150.00 - $200.00</li>
                    <li>Above $200.00</li>
                </ul>
            </div>

            <div className='collection-category'>
                <button className='filter-head text-[rgba(0, 0, 0, 1)]'>
                    Collection year
                    <span className='pt-1'>{down}</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default FilterOptions