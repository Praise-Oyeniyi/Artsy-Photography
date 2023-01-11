


const Creators = () => {
  return (
    <div className="top-creators-outer w-full bg-[#e2e2e2] py-10">
        <div className="top-creators w-5/6 mx-auto space-y-10">
          <div className="w-full top-creators-top flex justify-between items-start">
            <h3 className='text-55  -tracking-wide w-3/6 leading-tight'>TOP CREATORS OF THE WEEK</h3>
            <div className="creator-filter text-40 font-normal flex-column space-y-8 border-l-4 border-gray-600 pt-2 pl-5 z-10">
              <h3 className='' >Editorials</h3>
              <h3 className=''>Fashion</h3>
              <h3 className=''>Lifestyle</h3>
              <h3 className=''>Blueprint</h3>
            </div>
          </div>


          <div className="top-creators-bottom flex flex-col relative my-96 space-y-3">
            <div className="top-creators-image absolute w-4/6 -top-36 right-12">
              <div className='mx-auto relative z-30 animate-[changeBg_10s_ease-in-out_infinite] !bg-no-repeat creator-animate h-[35rem]'></div>
            </div>

            <p className='text-32 pr-16 text-gray-600 font-thin relative tracking-wider z-10 leading-normal'>
              “Everything always looked better in black and white. Everything always  as if it were the first time; there's always 
              more people in a black and white photograph. It just makes it seem that there were more people at a gig, 
              more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
            </p>
            <h3 className='text-3xl font-extrabold absolute right-40 top-5 z-10'>
              CIRCA
            </h3>
            <h2 className='w-[92%] text-right line-through font-extrabold text-8xl z-10'>
              1985
            </h2>
          </div>
        </div>
    </div>
  )
}

export default Creators