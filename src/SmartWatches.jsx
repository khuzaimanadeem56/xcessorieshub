import React from 'react'
import Cards from './Cards'

const SmartWatches = () => {
  return (
    <>
    <div className=' mb-5'>
        <div className='mt-8 ml-10'>
                <h1 className=' font-bold text-5xl text-slate-800'>Smart Watches</h1><br />
                <h2 className='mt-2 font-semibold text-4xl text-slate-700'>Explore and Buy Original Smart Watches Online in Pakistan</h2>
                <p className='mt-5  text-[#0B416B]'>Welcome to XcessoriesHub, your ultimate choice for buying premium smartwatches online in Pakistan. We offer authentic, feature-rich smartwatches <br /> at affordable prices. Discover our collection of the latest and most popular smartwatch models.</p>
        </div>
    <div className='flex justify-center gap-10'
    >
      <Cards pic="public\Mibro-Watch-C4-300x300.webp"
            detail="Mibro Watch C4"
            price="Rs 3,999"
            button="Add to Cart"
    />
      <Cards pic="public\OnePlus-Watch-4-300x300.webp"
            detail="OnePlus Watch 4"
            price="Rs 91,999"
            button="Add to Cart"
    />
          <Cards pic="public\Amazfit-Bip-Max-300x300.webp"
            detail="Amazfit Bip Max Smartwatch"
            price="Rs 34,999"
            button="Add to Cart"
    />
        <Cards pic="public\Xiaomi-Watch-S5-Black-300x300.webp"
            detail="Xiaomi Watch S5"
            price="Rs 42,999"
            button="Add to Cart"
    />

</div>

    <div className='flex justify-center gap-10'
    >
      <Cards pic="public\HUAWEI-Watch-Fit-5-Pro-300x300.webp"
            detail="HUAWEI Watch Fit 5 Pro"
            price="Rs 74,999"
            button="Add to Cart"
    />
      <Cards pic="public\Huawei-Watch-Fit-5-1-300x300.webp"
            detail="HUAWEI Watch Fit 5"
            price="Rs 44,999"
            button="Add to Cart"
    />
          <Cards pic="public\HUAWEI-Band-11-Black-300x300.webp"
            detail="HUAWEI Band 11"
            price="Rs 14,999"
            button="Add to Cart"
    />
        <Cards pic="public\Aurafit-ELLA-3-AM28-300x300.webp"
            detail="Aurafit ELLA 3 AM28 AMOLED Lady Smartwatch with Dual Strap"
            price="Rs 11,799"
            button="Add to Cart"
    />

</div>

    </div>
    </>
  )
}

export default SmartWatches
