import React from 'react'
import Cards from './Cards'

const AirPods = () => {
  return (
    <>
    <div className=' mb-5'>
        <div className='mt-8 ml-10'>
                <h1 className=' font-bold text-5xl text-slate-800'>AirPods</h1><br />
                <h2 className='mt-2 font-semibold text-4xl text-slate-700'>Explore and Buy Original AirPods Online in Pakistan</h2>
                <p className='mt-5  text-[#0B416B]'>Welcome to XcessoriesHub, your ultimate choice for buying premium AirPods online in Pakistan. We offer authentic, high-quality wireless earbuds <br /> at competitive prices. Discover our collection of the latest and most popular AirPods models.</p>
        </div>
    <div className='flex justify-center gap-10'
    >
      <Cards pic="public\Oraimo-FreePods-Lite-True-Wireless-Earbuds-OTW-330-xhb-blue-300x300.webp"
            detail="Oraimo FreePods Lite"
            price="Rs 1,999"
            button="Add to Cart"
    />
      <Cards pic="public\Redmi-Buds-8-Black-300x300.webp"
            detail="Redmi Buds 8"
            price="Rs 12,999"
            button="Add to Cart"
    />
          <Cards pic="public\Realme-Buds-Clip-Black-300x300.webp"
            detail="Realme Buds Clip Open Ear Wireless Earbuds"
            price="Rs 19,999"
            button="Add to Cart"
    />
        <Cards pic="public\Realme-Buds-T500-Pro-Chocolate-300x300.webp"
            detail="Realme Buds T500 Pro"
            price="Rs 15,999"
            button="Add to Cart"
    />

</div>


    <div className='flex justify-center gap-10'
    >
      <Cards pic="public\Xiaomi-Buds-6-1-300x300.webp"
            detail="Xiaomi Buds 6"
            price="Rs 28,999"
            button="Add to Cart"
    />
      <Cards pic="public\Anker-Soundcore-C40i-Black-300x300.webp"
            detail="Anker Soundcore C40i Earbuds – Midnight Black"
            price="Rs 17,499"
            button="Add to Cart"
    />
          <Cards pic="public\HOCO-EQ5-300x300.jpg"
            detail="HOCO EQ5 Energy True Wireless Bluetooth Earbuds ANC ENC Noise Reduction"
            price="Rs 3,499"
            button="Add to Cart"
    />
        <Cards pic="public\HOCO-EQ22-300x300.webp"
            detail="HOCO EQ22 Singer True Wireless ANC+ENC Noise Reduction Wireless BT "
            price="Rs 3,499"
            button="Add to Cart"
    />

</div>

    </div>
    </>
  )
}

export default AirPods
