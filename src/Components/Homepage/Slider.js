import { useState, useEffect } from 'react'
import slide1 from './../Images/slide1.png'
import slide2 from './../Images/slide2.png'
import slide3 from './../Images/slide3.png'
import slide4 from './../Images/slide4.png'
import slide5 from './../Images/slide5.png'
import { ImageSlider } from './FeaturedData'
import { motion } from 'framer-motion'

const Slider = () => {
  const [myArray, setMyArray] = useState(ImageSlider);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const firstItem = myArray[0];
      const restOfItems = myArray.slice(1);
      setMyArray([...restOfItems, firstItem]);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [myArray]);


  return (
    <div>
      <div className="w-full lg:hidden sm:w-[90%] slider py-10 flex border-x-8 border-x-[transparent] h-auto items-center justify-center sm:block relative sm:mx-auto sm:space-x-0 sm:pb-5">
          <img src={slide1} alt="slide-pics" className='sm:w-full border-x-8 border-x-[transparent] h-80 relative z-40 sm:h-72'/>
          <img src={slide2} alt="slide-pics" className='sm:w-full border-x-8 border-x-[transparent] h-96 sm:absolute top-0 left-0 z-30 sm:h-72 sm:-rotate-6'/>
          <img src={slide3} alt="slide-pics" className='sm:w-full border-x-8 border-x-[transparent] h-[26rem] sm:absolute top-0 left-0 z-20 sm:h-72 sm:rotate-6'/>
          <img src={slide4} alt="slide-pics" className='sm:w-full border-x-8 border-x-[transparent] h-80 sm:absolute top-0 left-0 z-10 sm:h-72'/>
      </div>

      <div className='w-full sm:hidden slider py-10 flex items-center justify-start relative tab:hidden med:hidden'>
        {myArray.map((image, index)=>(
          <div className='relative slide-left' key={index}>
            <div className={`absolute bg-body-bg -top-3 h-[30rem] z-20 w-6 ${index ===0? '-left-7':'-left-5'}`}></div>
            <img src={image} alt="slide-pics" className={`min-w-[23em] h-full z-10 relative left-0`}/>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Slider