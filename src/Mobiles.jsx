import React from 'react'
import Cards from './Cards'

const Mobiles = () => {
  return (
    <>
    <div >
      <div className='flex justify-center items-center text-center'>
        <h1 className='font-bold text-6xl text-slate-800'>Smart Phones</h1>
      </div>
 <div className='flex justify-center gap-1.5'>    
      <Cards pic="/CUBEiPhone16ProMax_12_1024x1024-300x300.webp"
            detail="Apple iPhone 16 Pro Max PTA Approved"
            price="Rs 438,999"
            button="Add to Cart"
/>
     <Cards  pic="/iPhone-16-Pro-Desert-Titanium-1-300x300.webp"
            detail="Apple iPhone 16 Pro PTA Approved"
            price="Rs 374,999"
            button="Add to Cart"
/>
    <Cards  pic="/Redmi-Note-14-Black-300x300.webp"
            detail="Redme Note 14"
            price="Rs 50,999"
            button="Add to Cart"
/>
      <Cards  pic="/Apple-iPhone-16-Black-1-300x300.webp"
            detail="Apple iPhone 16 PTA Approved"
            price="Rs 299,999"
            button="Add to Cart"
/> 
      <Cards  pic="/Redmi-14C-6GB-128GB-Midnight-Black-300x300.webp"
            detail="Redmi 14C (6GB -128GB)"
            price="Rs 27,999"
            button="Add to Cart"/>
</div>   

     
 <div className='flex justify-center gap-1.5'>    
      <Cards pic="/Apple-iPhone-16e-256-GB-300x300.jpg"
            detail="Apple Iphone 16e PTA Approved"
            price="Rs 274,999"
            button="Add to Cart"
/>
     <Cards  pic="/Redmi-Note-14-Pro-Black-300x300.jpg"
            detail="Redmi Note 14 Pro"
            price="Rs 74,999"
            button="Add to Cart"
/>
    <Cards  pic="/Samsung-Galaxy-S25-Ultra-300x300.webp"
            detail="Samsung Galaxy S25 Ultra PTA Approved"
            price="Rs 424,999"
            button="Add to Cart"
/>
      <Cards  pic="/Redmi-Note-13-Pro-Black-300x300.webp"
            detail="Redmi Note 13 Pro"
            price="Rs 59,999"
            button="Add to Cart"
/> 
      <Cards  pic="/Redmi-A5-Black-300x300.webp"
            detail="Redmi A5"
            price="Rs 21,999"
            button="Add to Cart"/>
</div> 
      <div className='flex justify-center items-center mt-10'>
    
      <a href="/smart"><button className='bg-[#d1cd4c] text-white font-semibold w-40 h-10 rounded-full flex items-center justify-center hover:bg-[#c5c13e] transition'>
        View All</button></a>
        </div>
    </div>
    </>
  )
}

export default Mobiles
