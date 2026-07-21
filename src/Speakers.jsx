import React from 'react'
import Cards from './Cards'

const Speakers = ({ onAddToCart }) => {
  const products = [
    { pic: "/Logitech-Z625-1-300x300-1.webp", detail: "Logitech Z625", price: "Rs 14,999" },
    { pic: "", detail: "JBL PartyBox 110", price: "Rs 24,999" },
    { pic: "", detail: "Sony SRS-XB13", price: "Rs 6,999" },
    { pic: "", detail: "Ultimate Ears Boom 3", price: "Rs 12,999" }
  ];

  return (
    <div className="w-full bg-white py-6 md:py-10">
      {/* Header text */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-850 tracking-tight">Speakers</h1>
        <h2 className="mt-2 font-bold text-lg sm:text-xl md:text-2xl text-gray-700 leading-snug">Explore and Buy Original Speakers Online in Pakistan</h2>
        <p className="mt-4 text-xs sm:text-sm text-blue-900 leading-relaxed font-medium max-w-3xl">
          Welcome to XcessoriesHub, your ultimate choice for buying premium speakers online in Pakistan. We offer authentic, powerful audio equipment at affordable prices. Discover our collection of the latest speaker models.
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

export default Speakers;
