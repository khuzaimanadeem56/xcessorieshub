import React from 'react'
import Cards from './Cards'

const Chargers = () => {
  return (
    <>
    <div className=' mb-5'>
        <div className='mt-8 ml-10'>
                <h1 className=' font-bold text-5xl text-slate-800'>Chargers</h1><br />
                <h2 className='mt-2 font-semibold text-4xl text-slate-700'>Explore and Buy Original Chargers Online in Pakistan</h2>
                <p className='mt-5  text-[#0B416B]'>Welcome to XcessoriesHub, your ultimate choice for buying premium chargers online in Pakistan. We offer authentic, fast-charging solutions <br /> at affordable prices. Discover our collection of the latest charger models for all devices.</p>
        </div>
    <div className='flex justify-center gap-10'
    >
      <Cards pic="/Ugreen-GAN-Fast-Charger-1C-20W-Black-300x300.webp"
            detail="UGREEN GAN 20W Charger"
            price="Rs 1,999"
            button="Add to Cart"
    />
      <Cards pic=""
            detail="Baseus 65W GaN Charger"
            price="Rs 3,999"
            button="Add to Cart"
    />
          <Cards pic=""
            detail="Anker 737 Charger"
            price="Rs 4,499"
            button="Add to Cart"
    />
        <Cards pic=""
            detail="Apple 20W USB-C Charger"
            price="Rs 4,999"
            button="Add to Cart"
    />

</div>
    </div>
    </>
  )
}

export default Chargers
