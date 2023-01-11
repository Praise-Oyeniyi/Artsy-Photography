import slide1 from './../Images/slide1.png'
import slide2 from './../Images/slide2.png'
import slide3 from './../Images/slide3.png'
import slide4 from './../Images/slide4.png'

const Slider = () => {
  return (
    <div className="w-full slider py-10 flex space-x-3 h-auto items-center justify-evenly">
        <img src={slide1} alt="slide-pics" className=' h-80'/>
        <img src={slide2} alt="slide-pics" className='h-96'/>
        <img src={slide3} alt="slide-pics" className='h-[26rem]' />
        <img src={slide4} alt="slide-pics" className='h-80'/>
    </div>
  )
}

export default Slider