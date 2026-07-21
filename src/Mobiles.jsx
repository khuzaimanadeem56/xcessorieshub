import React from 'react'
import Cards from './Cards'

const Mobiles = ({ onAddToCart }) => {
  const products = [
    { pic: "/CUBEiPhone16ProMax_12_1024x1024-300x300.webp", detail: "Apple iPhone 16 Pro Max PTA Approved", price: "Rs 438,999" },
    { pic: "/iPhone-16-Pro-Desert-Titanium-1-300x300.webp", detail: "Apple iPhone 16 Pro PTA Approved", price: "Rs 374,999" },
    { pic: "/Redmi-Note-14-Black-300x300.webp", detail: "Redmi Note 14", price: "Rs 50,999" },
    { pic: "/Apple-iPhone-16-Black-1-300x300.webp", detail: "Apple iPhone 16 PTA Approved", price: "Rs 299,999" },
    { pic: "/Redmi-14C-6GB-128GB-Midnight-Black-300x300.webp", detail: "Redmi 14C (6GB - 128GB)", price: "Rs 27,999" },
    { pic: "/Apple-iPhone-16e-256-GB-300x300.jpg", detail: "Apple iPhone 16e PTA Approved", price: "Rs 274,999" },
    { pic: "/Redmi-Note-14-Pro-Black-300x300.jpg", detail: "Redmi Note 14 Pro", price: "Rs 74,999" },
    { pic: "/Samsung-Galaxy-S25-Ultra-300x300.webp", detail: "Samsung Galaxy S25 Ultra PTA Approved", price: "Rs 424,999" },
    { pic: "/Redmi-Note-13-Pro-Black-300x300.webp", detail: "Redmi Note 13 Pro", price: "Rs 59,999" },
    { pic: "/Redmi-A5-Black-300x300.webp", detail: "Redmi A5", price: "Rs 21,999" }
  ];

  return (
    <div className="w-full bg-white mt-12 md:mt-16">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-850 tracking-tight">
          Smart Phones
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

      {/* View All */}
      <div className="flex justify-center items-center mt-10">
        <a href="/smart">
          <button className="bg-[#d1cd4c] text-white font-bold px-10 py-3 rounded-full flex items-center justify-center hover:bg-[#c5c13e] transition duration-250 shadow-sm active:scale-95 text-sm">
            View All
          </button>
        </a>
      </div>
    </div>
  )
}

export default Mobiles;
