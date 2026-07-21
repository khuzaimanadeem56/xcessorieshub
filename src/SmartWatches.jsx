import React from 'react'
import Cards from './Cards'

const SmartWatches = ({ onAddToCart }) => {
  const products = [
    { pic: "/Mibro-Watch-C4-300x300.webp", detail: "Mibro Watch C4", price: "Rs 3,999" },
    { pic: "/OnePlus-Watch-4-300x300.webp", detail: "OnePlus Watch 4", price: "Rs 91,999" },
    { pic: "/Amazfit-Bip-Max-300x300.webp", detail: "Amazfit Bip Max Smartwatch", price: "Rs 34,999" },
    { pic: "/Xiaomi-Watch-S5-Black-300x300.webp", detail: "Xiaomi Watch S5", price: "Rs 42,999" },
    { pic: "/HUAWEI-Watch-Fit-5-Pro-300x300.webp", detail: "HUAWEI Watch Fit 5 Pro", price: "Rs 74,999" },
    { pic: "/Huawei-Watch-Fit-5-1-300x300.webp", detail: "HUAWEI Watch Fit 5", price: "Rs 44,999" },
    { pic: "/HUAWEI-Band-11-Black-300x300.webp", detail: "HUAWEI Band 11", price: "Rs 14,999" },
    { pic: "/Aurafit-ELLA-3-AM28-300x300.webp", detail: "Aurafit ELLA 3 AM28 AMOLED Lady Smartwatch with Dual Strap", price: "Rs 11,799" }
  ];

  return (
    <div className="w-full bg-white py-6 md:py-10">
      {/* Header text */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-850 tracking-tight">Smart Watches</h1>
        <h2 className="mt-2 font-bold text-lg sm:text-xl md:text-2xl text-gray-700 leading-snug">Explore and Buy Original Smart Watches Online in Pakistan</h2>
        <p className="mt-4 text-xs sm:text-sm text-blue-900 leading-relaxed font-medium max-w-3xl">
          Welcome to XcessoriesHub, your ultimate choice for buying premium smartwatches online in Pakistan. We offer authentic, feature-rich smartwatches at affordable prices. Discover our collection of the latest and most popular smartwatch models.
        </p>
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

export default SmartWatches;
