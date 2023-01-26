import slide1 from './../Images/slide1.png'
import slide2 from './../Images/slide2.png'
import slide3 from './../Images/slide3.png'
import slide4 from './../Images/slide4.png'
import { ImageSlider } from './FeaturedData'

const Slider = () => {
  return (
    <div>
      <div className="w-full lg:hidden sm:w-[90%] slider py-10 flex border-x-8 border-x-[transparent] h-auto items-center justify-center sm:block relative sm:mx-auto sm:space-x-0 sm:pb-5">
          <img src={slide1} alt="slide-pics" className='sm:w-full border-x-8 border-x-[transparent] h-80 relative z-40 sm:h-80'/>
          <img src={slide2} alt="slide-pics" className='sm:w-full border-x-8 border-x-[transparent] h-96 sm:absolute top-0 left-0 z-30 sm:h-80 sm:-rotate-6'/>
          <img src={slide3} alt="slide-pics" className='sm:w-full border-x-8 border-x-[transparent] h-[26rem] sm:absolute top-0 left-0 z-20 sm:h-80 sm:rotate-6'/>
          <img src={slide4} alt="slide-pics" className='sm:w-full border-x-8 border-x-[transparent] h-80 sm:absolute top-0 left-0 z-10 sm:h-80'/>
      </div>

      <div className='w-full sm:hidden slider py-10 flex gap-x-5 h-auto items-center justify-centerrelative'>
        {ImageSlider.map((image, index)=>(
          <img src={image} alt="slide-pics" key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Slider