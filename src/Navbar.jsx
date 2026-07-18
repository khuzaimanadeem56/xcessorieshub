import React from 'react'

function Navbar (){

  return (
    <div>
        <nav className='flex justify-center gap-10 text-lg font-semibold items-center bg-blue-900 w-full text-white h-12 '>
              <a className='hover:text-amber-300' href="/">Home</a>
              <a className='hover:text-amber-300' href="/explorexhb">Explore Xhb</a>
              <a className='hover:text-amber-300' href="/brand">Brands</a>
              <a className='hover:text-amber-300' href="/review">Reviews</a>
              <a className='hover:text-amber-300' href="/findus">Find Us</a>
              <a className='hover:text-amber-300' href="/smart">Smart Phones</a>
        </nav>
      
    </div>
  )
}

export default Navbar
