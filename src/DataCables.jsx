import React from 'react'
import Cards from './Cards'

const DataCables = () => {
  return (
    <>
    <div className=' mb-5'>
        <div className='mt-8 ml-10'>
                <h1 className=' font-bold text-5xl text-slate-800'>Data Cables</h1><br />
                <h2 className='mt-2 font-semibold text-4xl text-slate-700'>Explore and Buy Original Data Cables Online in Pakistan</h2>
                <p className='mt-5  text-[#0B416B]'>Welcome to XcessoriesHub, your ultimate choice for buying premium data cables online in Pakistan. We offer authentic, durable cables <br /> at affordable prices. Discover our collection of the latest data cable models for all devices.</p>
        </div>
    <div className='flex justify-center gap-10'
    >
      <Cards pic="/UGREEN-–-50567-300x300.webp"
            detail="UGREEN USB-C Cable"
            price="Rs 899"
            button="Add to Cart"
    />
      <Cards pic=""
            detail="Baseus Lightning Cable"
            price="Rs 1,299"
            button="Add to Cart"
    />
          <Cards pic=""
            detail="Anker Micro USB Cable"
            price="Rs 699"
            button="Add to Cart"
    />
        <Cards pic=""
            detail="Xiaomi USB-C Cable"
            price="Rs 599"
            button="Add to Cart"
    />

</div>
    </div>
    </>
  )
}

export default DataCables
