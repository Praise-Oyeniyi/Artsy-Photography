


const Creators = () => {
  return (
    <div className="top-creators-outer w-full bg-[#e2e2e2] py-10 header-main sm:py-5">
        <div className="top-creators w-5/6 mx-auto space-y-10 sm:w-full sm:px-2 sm:space-y-5">
          <div className="w-full top-creators-top flex justify-between items-start">
            <h3 className='text-55 font-semibold w-3/6 leading-tight sm:w-5/6 sm:font-extrabold'>TOP CREATORS OF THE WEEK</h3>
            <div className="creator-filter sm:w-1/6">
              <h3 className='' >Editorials</h3>
              <h3 className=''>Fashion</h3>
              <h3 className=''>Lifestyle</h3>
              <h3 className=''>Blueprint</h3>
            </div>
          </div>


          <div className="top-creators-bottom flex flex-col relative my-96 space-y-3 sm:my-0">
            <div className="top-creators-image absolute w-4/6 -top-28 right-12 sm:top-0">
              <div className='mx-auto relative z-30 animate-[changeBg_10s_ease-in-out_infinite] !bg-no-repeat creator-animate h-[35rem] sm:h-[20rem]'></div>
            </div>

            <p className='text-32 pr-16 text-[#00000091] font-thin relative tracking-wide z-10 leading-normal sm:pr-0'>
              “Everything always looked better in black and white. Everything always  as if it were the first time; there's always 
              more people in a black and white photograph. It just makes it seem that there were more people at a gig, 
              more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
            </p>
            <h3 className='text-48 font-extrabold absolute right-44 top-10 z-[99] sm:right-5 sm:top-20'>
              CIRCA
            </h3>
            <h2 className='w-[92%] relative -top-32 sm:top-0 text-right line-through font-extrabold text-9xl sm:text-7xl z-[99]'>
              1985
            </h2>
          </div>
        </div>
    </div>
  )
}

export default Creators