import React from 'react'
import Cards from './Cards'

const AirPods = ({ onAddToCart }) => {
  const products = [
    { pic: "/Oraimo-FreePods-Lite-True-Wireless-Earbuds-OTW-330-xhb-blue-300x300.webp", detail: "Oraimo FreePods Lite", price: "Rs 1,999" },
    { pic: "/Redmi-Buds-8-Black-300x300.webp", detail: "Redmi Buds 8", price: "Rs 12,999" },
    { pic: "/Realme-Buds-Clip-Black-300x300.webp", detail: "Realme Buds Clip Open Ear Wireless Earbuds", price: "Rs 19,999" },
    { pic: "/Realme-Buds-T500-Pro-Chocolate-300x300.webp", detail: "Realme Buds T500 Pro", price: "Rs 15,999" },
    { pic: "/Xiaomi-Buds-6-1-300x300.webp", detail: "Xiaomi Buds 6", price: "Rs 28,999" },
    { pic: "/Anker-Soundcore-C40i-Black-300x300.webp", detail: "Anker Soundcore C40i Earbuds – Midnight Black", price: "Rs 17,499" },
    { pic: "/HOCO-EQ5-300x300.jpg", detail: "HOCO EQ5 Energy True Wireless Bluetooth Earbuds ANC ENC Noise Reduction", price: "Rs 3,499" },
    { pic: "/HOCO-EQ22-300x300.webp", detail: "HOCO EQ22 Singer True Wireless ANC+ENC Noise Reduction Wireless BT", price: "Rs 3,499" }
  ];

  return (
    <div className="w-full bg-white py-6 md:py-10">
      {/* Header text */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-850 tracking-tight">AirPods</h1>
        <h2 className="mt-2 font-bold text-lg sm:text-xl md:text-2xl text-gray-700 leading-snug">Explore and Buy Original AirPods Online in Pakistan</h2>
        <p className="mt-4 text-xs sm:text-sm text-blue-900 leading-relaxed font-medium max-w-3xl">
          Welcome to XcessoriesHub, your ultimate choice for buying premium AirPods online in Pakistan. We offer authentic, high-quality wireless earbuds at competitive prices. Discover our collection of the latest and most popular AirPods models.
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

export default AirPods;
