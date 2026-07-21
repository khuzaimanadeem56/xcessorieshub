import React from 'react'
import Cards from './Cards'

const DataCables = ({ onAddToCart }) => {
  const products = [
    { pic: "/UGREEN-–-50567-300x300.webp", detail: "UGREEN USB-C Cable", price: "Rs 899" },
    { pic: "", detail: "Baseus Lightning Cable", price: "Rs 1,299" },
    { pic: "", detail: "Anker Micro USB Cable", price: "Rs 699" },
    { pic: "", detail: "Xiaomi USB-C Cable", price: "Rs 599" }
  ];

  return (
    <div className="w-full bg-white py-6 md:py-10">
      {/* Header text */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-850 tracking-tight">Data Cables</h1>
        <h2 className="mt-2 font-bold text-lg sm:text-xl md:text-2xl text-gray-700 leading-snug">Explore and Buy Original Data Cables Online in Pakistan</h2>
        <p className="mt-4 text-xs sm:text-sm text-blue-900 leading-relaxed font-medium max-w-3xl">
          Welcome to XcessoriesHub, your ultimate choice for buying premium data cables online in Pakistan. We offer authentic, durable cables at affordable prices. Discover our collection of the latest data cable models for all devices.
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

export default DataCables;
