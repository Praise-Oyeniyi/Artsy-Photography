import Avatar1 from './../Images/avatar1.png'
import Avatar2 from './../Images/avatar2.png'
import Avatar3 from './../Images/avatar3.png'
import Avatar4 from './../Images/avatar4.png'
import Avatar5 from './../Images/avatar5.png'



const Featured = ({next, useNavigate, FtData}) => {
  const navigate = useNavigate();

  return (
    <div className="featured w-full pb-20 sm:pb-8">

        <div className="featured-inner w-5/6 mx-auto space-y-10">
          <h3 className="featured-header pb-6 featured-border text-48 font-medium sm:text-28">
            Featured Products
          </h3>


          <div className="featured-product-outer space-y-10">
            {FtData.map((e)=>(
              <div className={`featured-product w-full flex sm:flex-col sm:space-x-0 sm:space-y-5 space-x-10 featured-border ${e.id===3?'!border-b-0':''}`} key={e.id}>
                <div className={`featured-product-img w-full  ${e.id%2===0? 'order-2 ml-10 sm:order-1 sm:ml-0':''}`} onClick={()=>navigate(`/market/${e.id}`)}>
                  <img src={e.image} alt="" className='w-full' />
                  
                  <div className='featured-pd-effect'>
                    <p className='featured-pd-effect-text ' onClick={()=>navigate(`/market/${e.id}`)}>View Product</p>
                    <img src={next} alt="marketplace-icon" className='border border-white rounded-full p-3 h-12 w-12'/>
                  </div>
                </div>

                <div className={`featured-product-text ${e.id%2===0? 'order-1 sm:order-2':''}`}>
                  <h3 className='text-40 nav-logo font-bold sm:hidden'>{e.name}</h3>
                  <p className='text-24 sm:text-15'>{e.description}</p>
                  <div className='flex-center'>

                    <div className="flex-center justify-start space-x-8 sm:justify-between sm:mt-5">
                      <div className="w-2/6 images relative h-12 sm:h-10">
                        <img src={Avatar1} alt="" className="featured-avatar" />
                        <img src={Avatar2} alt="" className="featured-avatar left-8" />
                        <img src={Avatar3} alt="" className="featured-avatar left-16" />
                        <img src={Avatar4} alt="" className="featured-avatar left-24" />
                        <img src={Avatar5} alt="" className="featured-avatar left-32" />
                      </div>
                      <h4 className='text-24 font-semibold w-auto sm:text-15'>64 major creators</h4>
                    </div>

                    <img src={next} alt="marketplace-icon" className='border rounded-full p-3 h-14 w-14 sm:hidden' onClick={()=>navigate(`/market/${e.id}`)}/>
                  </div>

                </div>
              </div>
            ))}
            
          </div>
        </div>

    </div>
  )
}

export default Featured