import React from 'react'
import Cards from './Cards'

const Sell = () => {
  return (
    <div>
                 <div className='flex justify-center gap-1.5'>
        <Cards pic="public\Soundpeats-T3-Pro-ANC-Bluetooth-Earbuds-300x300.webp"
            detail=" Soundpeats T3 Pro ANC Bluetooth Earbuds"
            price="Rs 14,999"
            button="Add to Cart"
            />  
          <Cards pic="public\HaylouSolarUltraSmartWatch-Black-300x300.webp"
            detail=" Haylou Solor Ultra Smart Watch"
            price="Rs 3,699"
            button="Add to Cart"
            />  
             <Cards pic="public\DJI-Osmo-Mobile-7P-Gimbal-300x300.webp"
            detail="DJI Osmo Mobile 7p Gimble"
            price="Rs 39,999"
            button="Add to Cart"
            />  
             <Cards pic="public\tws-black_1920x_4_4027e963-7e73-4ec7-8e9e-2236a71d7fb0_1920x-300x300.webp"
            detail="CMF by Nothing Buds pro with Hybrid ANC"
            price="Rs 12,999"
            button="Add to Cart"
            />  
             <Cards pic="public\RedmiBuds6Lite-300x300.webp"
            detail="Redmi Buds 6 Lite with Hybrid ANC & upto38"
            price="Rs 5,499"
            button="Add to Cart"
            />     



          </div>
<div className='flex justify-center gap-1.5'>
  <Cards pic="public\watch-wrist.webp"
            detail="CMF by Nothing Watch Pro 2 with AMOLE"
            price="Rs 15,299"
            button="Add to Cart"
/>  
             <Cards pic="public\SAMSUNG-Galaxy-Buds-3-Pro-300x300.webp"
            detail="Samsung Galaxy Buds 3pro"
            price="Rs 32,499"
            button="Add to Cart"
 />  
             <Cards pic="public\Buds-FE-1-300x300.webp"
            detail="Samsung Galaxy Buds FE"
            price="Rs 13,99"
            button="Add to Cart"
 />  
             <Cards pic="public\watch-6-classic-47-600x600-1-300x300.webp"
            detail="Samsung Watch 6 classic 47mm R960"
            price="Rs 44,999"
            button="Add to Cart"
 />   
   <Cards pic="public\Xiaomi-TV-Box-S-2nd-Gen-4K-Ultra-HD-1-1-300x300.webp"
            detail="Xiaomi Tv Box x 2nd Gen 4k ultra HD"
            price="Rs 15,999"
            button="Add to Cart"
/>              
</div> 
 <div className='flex justify-center items-center mt-10'>
    
       <button className='bg-[#d1cd4c] text-white font-semibold w-40 h-10 rounded-full flex items-center justify-center hover:bg-[#c5c13e] transition'>
        View All</button>
        </div> 
    </div>
  )
}

export default Sell
