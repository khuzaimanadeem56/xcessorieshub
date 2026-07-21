import React from 'react'

function Navbar (){

  return (
    <div className="hidden md:block bg-blue-900">
        <nav className='flex justify-center gap-10 text-base font-bold items-center w-full text-white h-12 max-w-7xl mx-auto px-4'>
              <a className='hover:text-amber-300 transition-colors py-1.5 px-3 rounded-md hover:bg-white/10' href="/">Home</a>
              <a className='hover:text-amber-300 transition-colors py-1.5 px-3 rounded-md hover:bg-white/10' href="/explorexhb">Explore Xhb</a>
              <a className='hover:text-amber-300 transition-colors py-1.5 px-3 rounded-md hover:bg-white/10' href="/brand">Brands</a>
              <a className='hover:text-amber-300 transition-colors py-1.5 px-3 rounded-md hover:bg-white/10' href="/review">Reviews</a>
              <a className='hover:text-amber-300 transition-colors py-1.5 px-3 rounded-md hover:bg-white/10' href="/findus">Find Us</a>
              <a className='hover:text-amber-300 transition-colors py-1.5 px-3 rounded-md hover:bg-white/10' href="/smart">Smart Phones</a>
        </nav>
      
    </div>
  )
}

export default Navbar;
