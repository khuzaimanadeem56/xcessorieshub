import React from 'react'
import Cards from './Cards'

const HeadphonesHome = () => {
  return (
    <>
    <div className='mt-10'>
           <div className='flex justify-center items-center text-center'>
        <h1 className='font-bold text-6xl text-slate-800'>Head Phones</h1>
      </div>
 <div className='flex items-center justify-between px-2'
 >    
      <Cards pic="/Tronsmart-Q20S-600x600.webp"
            detail="Amaze Strong Base Wireless Headphone With 24hrs Time A650"
            price="Rs 11,999"
            button="Add to Cart"
/>
      <Cards pic="/CMF-Nothing-Headphones-Pro-300x300.webp"
            detail="CMF Nothing Headphones Pro"
            price="Rs 39,999"
            button="Add to Cart"
/>
      <Cards pic="/QCY-Heroad-V200-300x300.webp"
            detail="QCY Heroad V200 7.1 Virtual Headset H4GM"
            price="Rs 12,499"
            button="Add to Cart"
/>
      <Cards pic="/Yolo-Nirvana-Headphone-Y-512-Black-300x300.webp"
            detail="Yolo Nirvana Wireless Headphones with Active Noise Cancellation Y-512"
            price="Rs 7,499"
            button="Add to Cart"
/>
      <Cards pic="/Yolo-Focus-Heaphone-Y-511-Black-300x300.webp"
            detail="Yolo Focus Wireless Heaphone Y-511"
            price="Rs 6,999"
            button="Add to Cart"
/>
</div>

 <div className='flex items-center justify-between px-2'
 >    
      <Cards pic="/Yolo-Vogue-Headphone-Y-510-Black-300x300.webp"
            detail="Amaze Strong Base Wireless Headphone With 24hrs Time A650"
            price="Rs 6,999"
            button="Add to Cart"
/>
      <Cards pic="/Amaze-A655-300x300.webp"
            detail="Amaze Whisper-X ANC Wireless Headphone – A655"
            price="Rs 7,199"
            button="Add to Cart"
/>
      <Cards pic="/Yolo-Vogue-Headphone-Y-510-Black-300x300.webp"
            detail="Yolo Vogue Wireless Headphones Y-510"
            price="Rs 6,999"
            button="Add to Cart"
/>
      <Cards pic="/Tronsmart-Q20S-600x600.webp"
            detail="Tronsmart Q20S Wireless Headphone"
            price="Rs 11,999"
            button="Add to Cart"
/>
      <Cards pic="/CMF-Nothing-Headphones-Pro-300x300.webp"
            detail="CMF Nothing Headphones Pro"
            price="Rs 39,999"
            button="Add to Cart"
/>
</div>
    </div>
    </>
  )
}

export default HeadphonesHome
