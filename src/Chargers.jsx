import React from 'react'
import Cards from './Cards'

const Chargers = ({ onAddToCart }) => {
  const products = [
    { pic: "/Ugreen-GAN-Fast-Charger-1C-20W-Black-300x300.webp", detail: "UGREEN GaN Fast Charger 1C 20W Black", price: "Rs 1,999" },
    { pic: "", detail: "Baseus 65W GaN Charger", price: "Rs 3,999" },
    { pic: "", detail: "Anker 737 Charger", price: "Rs 4,499" },
    { pic: "", detail: "Apple 20W USB-C Charger", price: "Rs 4,999" }
  ];

  return (
    <div className="w-full bg-white py-6 md:py-10">
      {/* Header text */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-850 tracking-tight">Chargers</h1>
        <h2 className="mt-2 font-bold text-lg sm:text-xl md:text-2xl text-gray-700 leading-snug">Explore and Buy Original Chargers Online in Pakistan</h2>
        <p className="mt-4 text-xs sm:text-sm text-blue-900 leading-relaxed font-medium max-w-3xl">
          Welcome to XcessoriesHub, your ultimate choice for buying premium chargers online in Pakistan. We offer authentic, fast-charging solutions at affordable prices. Discover our collection of the latest charger models for all devices.
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

export default Chargers;
