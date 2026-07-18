import React from 'react'
import Cards from './Cards'

const PowerBanks = () => {
  return (
    <>
    <div className=' mb-5'>
        <div className='mt-8 ml-10'>
                <h1 className=' font-bold text-5xl text-slate-800'>Power Banks</h1><br />
                <h2 className='mt-2 font-semibold text-4xl text-slate-700'>Explore and Buy Original Power Banks Online in Pakistan</h2>
                <p className='mt-5  text-[#0B416B]'>Welcome to XcessoriesHub, your ultimate choice for buying high-capacity power banks online in Pakistan. We offer authentic, reliable power solutions <br /> at competitive prices. Discover our collection of the latest power bank models.</p>
        </div>
    <div className='flex justify-center gap-10'
    >
      <Cards pic="public\MCDODO-MC-5021-20000MAH-20W-MAGNETIC-WIRELESS-POWER-BANK-1-xcessorieshub-300x300-1.webp"
            detail="MCDODO 20000MAH Power Bank"
            price="Rs 4,999"
            button="Add to Cart"
    />
      <Cards pic="public\Anker-PowerCore-26800.webp"
            detail="Anker PowerCore 26800"
            price="Rs 7,999"
            button="Add to Cart"
    />
          <Cards pic="public\Baseus-30000MAH-Power-Bank.webp"
            detail="Baseus 30000MAH Power Bank"
            price="Rs 5,999"
            button="Add to Cart"
    />
        <Cards pic="public\Xiaomi-Mi-Power-Bank.webp"
            detail="Xiaomi Mi Power Bank 10000"
            price="Rs 3,499"
            button="Add to Cart"
    />

</div>
    </div>
    </>
  )
}

export default PowerBanks
