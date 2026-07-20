import React from 'react'
import Cards from './Cards'

const Headphones = () => {
  return (
    <>
    <div className=' mb-5'>
        <div className='mt-8 ml-10'>
                <h1 className=' font-bold text-5xl text-slate-800'>Headphones</h1><br />
                <h2 className='mt-2 font-semibold text-4xl text-slate-700'>Explore and Buy Original Headphones Online in Pakistan</h2>
                <p className='mt-5  text-[#0B416B]'>Welcome to XcessoriesHub, your ultimate choice for buying premium headphones online in Pakistan. We offer authentic, high-quality audio solutions <br /> at competitive prices. Discover our collection of the latest headphone models.</p>
        </div>
    <div className='flex justify-center gap-10'
    >
      <Cards pic="/Soundpeats-Space-Pro-300x300.webp"
            detail="Soundpeats Space Pro"
            price="Rs 4,999"
            button="Add to Cart"
    />
      <Cards pic=""
            detail="Sony WH-1000XM5"
            price="Rs 29,999"
            button="Add to Cart"
    />
          <Cards pic=""
            detail="Bose QuietComfort 45"
            price="Rs 24,999"
            button="Add to Cart"
    />
        <Cards pic=""
            detail="JBL Tune 750"
            price="Rs 8,999"
            button="Add to Cart"
    />

</div>
    </div>
    </>
  )
}

export default Headphones
