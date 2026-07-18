import React from 'react'
import Cards from './Cards'

const Tablets = () => {
  return (
    <>
    <div className=' mb-5'>
        <div className='mt-8 ml-10'>
                <h1 className=' font-bold text-5xl text-slate-800'>Tablets</h1><br />
                <h2 className='mt-2 font-semibold text-4xl text-slate-700'>Explore and Buy Original Tablets Online in Pakistan</h2>
                <p className='mt-5  text-[#0B416B]'>Welcome to XcessoriesHub, your ultimate choice for buying premium tablets online in Pakistan. We offer authentic, powerful tablets <br /> at competitive prices. Discover our collection of the latest tablet models.</p>
        </div>
    <div className='flex justify-center gap-10'
    >
      <Cards pic="public\Samsung-Galaxy-Tab-S10-WiFi-with-Keyboard-Cover-300x300.webp"
            detail="Samsung Galaxy Tab S10"
            price="Rs 89,999"
            button="Add to Cart"
    />
      <Cards pic="public\Apple-iPad-Pro-12.9.webp"
            detail="Apple iPad Pro 12.9"
            price="Rs 124,999"
            button="Add to Cart"
    />
          <Cards pic="public\iPad-Air-M2.webp"
            detail="Apple iPad Air M2"
            price="Rs 99,999"
            button="Add to Cart"
    />
        <Cards pic="public\OnePlus-Pad.webp"
            detail="OnePlus Pad"
            price="Rs 54,999"
            button="Add to Cart"
    />

</div>
    </div>
    </>
  )
}

export default Tablets
