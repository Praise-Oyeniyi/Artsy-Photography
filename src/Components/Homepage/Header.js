



const Header = ({Nav, cart}) => {
  return (
    <header className='w-5/6 mx-auto my-10 space-y-10 sm:w-full'>
        <Nav cart={cart}/>
        <div className="header-text w-full mx-auto space-y-10 text-center sm:space-y-5 sm:w-5/6" >
          <h2 className='text-80 tracking-wide leading-snug header-main font-extrabold sm:text-3xl sm:leading-relaxed'>Photography is poetry & beautiful untold stories</h2>
          <p className='text-28 w-[82%] mx-auto leading-snug font-semibold sm:text-15 sm:w-full'>Flip through more than 10,000 vintage shots, old photograghs,
            historic images and captures seamlessly in one place. Register to get top access.
          </p>
        </div>

      </header>
  )
}

export default Header