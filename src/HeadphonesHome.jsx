import React from 'react'
import Cards from './Cards'

const HeadphonesHome = ({ onAddToCart }) => {
  const products = [
    { pic: "/Tronsmart-Q20S-600x600.webp", detail: "Amaze Strong Base Wireless Headphone With 24hrs Time A650", price: "Rs 11,999" },
    { pic: "/CMF-Nothing-Headphones-Pro-300x300.webp", detail: "CMF Nothing Headphones Pro", price: "Rs 39,999" },
    { pic: "/QCY-Heroad-V200-300x300.webp", detail: "QCY Heroad V200 7.1 Virtual Headset H4GM", price: "Rs 12,499" },
    { pic: "/Yolo-Nirvana-Headphone-Y-512-Black-300x300.webp", detail: "Yolo Nirvana Wireless Headphones with ANC Y-512", price: "Rs 7,499" },
    { pic: "/Yolo-Focus-Heaphone-Y-511-Black-300x300.webp", detail: "Yolo Focus Wireless Headphone Y-511", price: "Rs 6,999" },
    { pic: "/Yolo-Vogue-Headphone-Y-510-Black-300x300.webp", detail: "Yolo Vogue Wireless Headphones Y-510", price: "Rs 6,999" },
    { pic: "/Amaze-A655-300x300.webp", detail: "Amaze Whisper-X ANC Wireless Headphone – A655", price: "Rs 7,199" },
    { pic: "/Yolo-Vogue-Headphone-Y-510-Black-300x300.webp", detail: "Yolo Vogue Wireless Headphones Y-510", price: "Rs 6,999" },
    { pic: "/Tronsmart-Q20S-600x600.webp", detail: "Tronsmart Q20S Wireless Headphone", price: "Rs 11,999" },
    { pic: "/CMF-Nothing-Headphones-Pro-300x300.webp", detail: "CMF Nothing Headphones Pro", price: "Rs 39,999" }
  ];

  return (
    <div className="w-full bg-white mt-12 md:mt-16">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-850 tracking-tight">
          Head Phones
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 px-4 md:px-8 max-w-7xl mx-auto">
        {products.map((prod, idx) => (
          <Cards 
            key={idx}
            pic={prod.pic}
            detail={prod.detail}
            price={prod.price}
            button="Add to Cart"
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default HeadphonesHome;
