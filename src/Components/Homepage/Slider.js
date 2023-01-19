import slide1 from './../Images/slide1.png'
import slide2 from './../Images/slide2.png'
import slide3 from './../Images/slide3.png'
import slide4 from './../Images/slide4.png'

const Slider = () => {
  return (
    <div className="w-full sm:w-[90%] slider py-10 flex space-x-3 h-auto items-center justify-evenly sm:block relative sm:mx-auto sm:space-x-0 sm:pb-5">
        <img src={slide1} alt="slide-pics" className='sm:w-full h-80 relative z-40 sm:h-80'/>
        <img src={slide2} alt="slide-pics" className='sm:w-full h-96 sm:absolute top-0 left-0 z-30 sm:h-80 sm:-rotate-6'/>
        <img src={slide3} alt="slide-pics" className='sm:w-full h-[26rem] sm:absolute top-0 left-0 z-20 sm:h-80 sm:rotate-6'/>
        <img src={slide4} alt="slide-pics" className='sm:w-full h-80 sm:absolute top-0 left-0 z-10 sm:h-80'/>
    </div>
  )
}

export default Slider