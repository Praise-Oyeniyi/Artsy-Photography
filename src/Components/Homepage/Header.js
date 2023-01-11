



const Header = ({Nav}) => {
  return (
    <header className='w-5/6 mx-auto my-10 space-y-10'>
        <Nav/>
        <div className="header-text w-full mx-auto space-y-10 text-center " >
          <h2 className='text-80 tracking-wide leading-snug '>Photography is poetry & beautiful untold stories</h2>
          <p className='text-28 font-medium w-[82%] mx-auto leading-snug'>Flip through more than 10,000 vintage shots, old photograghs,
            historic images and captures seamlessly in one place. Register to get top access.
          </p>
        </div>

      </header>
  )
}

export default Header