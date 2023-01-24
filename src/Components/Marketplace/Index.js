import FilterOptions from './FilterOptions';
import { FilterData } from './FilterData';
import FilterResults from './FilterResults';
import { useState } from 'react';
import FilterTop from './FilterTop';
import { motion } from 'framer-motion';

const Index = ({Nav, cart, PageAnimate}) => {
  const [filterAll, filterSome] = useState(FilterData);
  const [active, setActive] = useState(false);
  const [prev, UpadatedPrev] = useState('')

  const filterControl = (value) =>{
    var filtered;
    if(prev === value){
      filtered = FilterData.filter(e=> !(e.category === value));
      UpadatedPrev('');
    }else{
      filtered = FilterData.filter(e=> e.category === value);
      UpadatedPrev(value)
    }
    filterSome(filtered);
  }

  const searched = (value)=>{
    var capValue = value.charAt(0).toUpperCase() + value.slice(1);
    filterSome(FilterData.filter(e=>e.name.includes(capValue)));

  }

  return (
    <motion.div 
      variants={PageAnimate} initial='init' animate='animate' exit='exit'
      className='w-full market-outer space-y-10 bg-body-bg overflow-x-hidden py-10 text-header-p font-normal'>
      <div className="market-inner w-5/6 mx-auto sm:w-full med:w-[90%]">
        <Nav cart={cart}/>

        <div className='body w-full sm:w-[90%] sm:mx-auto'>
          <FilterTop filterAll={filterAll} searched={searched} active={active} setActive={setActive}/>
          
          <div className="filter w-full flex justify-between items-start sm:flex-column">
            <FilterOptions filterControl={filterControl} active={active} setActive={setActive}/>
            <FilterResults filterAll={filterAll}/>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Index