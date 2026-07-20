import React from 'react'
import Cards from './Cards'

const Speakers = () => {
  return (
    <>
    <div className=' mb-5'>
        <div className='mt-8 ml-10'>
                <h1 className=' font-bold text-5xl text-slate-800'>Speakers</h1><br />
                <h2 className='mt-2 font-semibold text-4xl text-slate-700'>Explore and Buy Original Speakers Online in Pakistan</h2>
                <p className='mt-5  text-[#0B416B]'>Welcome to XcessoriesHub, your ultimate choice for buying premium speakers online in Pakistan. We offer authentic, powerful audio equipment <br /> at affordable prices. Discover our collection of the latest speaker models.</p>
        </div>
    <div className='flex justify-center gap-10'
    >
      <Cards pic="/Logitech-Z625-1-300x300-1.webp"
            detail="Logitech Z625"
            price="Rs 14,999"
            button="Add to Cart"
    />
      <Cards pic=""
            detail="JBL PartyBox 110"
            price="Rs 24,999"
            button="Add to Cart"
    />
          <Cards pic=""
            detail="Sony SRS-XB13"
            price="Rs 6,999"
            button="Add to Cart"
    />
        <Cards pic=""
            detail="Ultimate Ears Boom 3"
            price="Rs 12,999"
            button="Add to Cart"
    />

</div>
    </div>
    </>
  )
}

export default Speakers
