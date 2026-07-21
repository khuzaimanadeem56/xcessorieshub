import React from 'react'
import Cards from './Cards'

const PowerBanks = ({ onAddToCart }) => {
  const products = [
    { pic: "/MCDODO-MC-5021-20000MAH-20W-MAGNETIC-WIRELESS-POWER-BANK-1-xcessorieshub-300x300-1.webp", detail: "MCDODO 20000MAH Power Bank", price: "Rs 4,999" },
    { pic: "", detail: "Anker PowerCore 26800", price: "Rs 7,999" },
    { pic: "", detail: "Baseus 30000MAH Power Bank", price: "Rs 5,999" },
    { pic: "", detail: "Xiaomi Mi Power Bank 10000", price: "Rs 3,499" }
  ];

  return (
    <div className="w-full bg-white py-6 md:py-10">
      {/* Header text */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-850 tracking-tight">Power Banks</h1>
        <h2 className="mt-2 font-bold text-lg sm:text-xl md:text-2xl text-gray-700 leading-snug">Explore and Buy Original Power Banks Online in Pakistan</h2>
        <p className="mt-4 text-xs sm:text-sm text-blue-900 leading-relaxed font-medium max-w-3xl">
          Welcome to XcessoriesHub, your ultimate choice for buying high-capacity power banks online in Pakistan. We offer authentic, reliable power solutions at competitive prices. Discover our collection of the latest power bank models.
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

export default PowerBanks;
