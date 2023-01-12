import FilterOptions from './FilterOptions';
import { FilterData } from './FilterData';
import FilterResults from './FilterResults';
import { useState } from 'react';
import FilterTop from './FilterTop';

const Index = ({Nav, cart}) => {
  const [filterAll, filterSome] = useState(FilterData);
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
    <div className='w-full market-outer space-y-10 bg-body-bg overflow-x-hidden py-10 text-header-p font-normal'>
      <div className="market-inner w-5/6 mx-auto">
        <Nav cart={cart}/>

        <div className='body w-full'>
          <FilterTop filterAll={filterAll} searched={searched}/>


          <div className="filter w-full flex justify-between items-start">
            <FilterOptions filterControl={filterControl}/>
            <FilterResults filterAll={filterAll}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index