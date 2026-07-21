import React from 'react'
import Cards from './Cards'

const Smartphone = ({ onAddToCart }) => {
  const products = [
    { pic: "/Apple-iPhone-17-Pro-Max-Blue-300x300.webp", detail: "Apple iPhone 17 Pro Max PTA Approved", price: "Rs 564,999" },
    { pic: "/Apple-iPhone-17-Pro-Orange-300x300.webp", detail: "Apple iPhone 17 Pro  PTA Approved", price: "Rs 520,499" },
    { pic: "/Apple-iPhone-17-Air-Black-300x300.webp", detail: "Apple iPhone 17 Air PTA Approved", price: "Rs 479,999" },
    { pic: "/Apple-iPhone-17-Black-300x300.webp", detail: "Apple iPhone 17 PTA Approved", price: "Rs 398,999" },
    { pic: "/Xiaomi-15-Ultra-300x300.webp", detail: "Xiaomi 15 Ultra (16GB+512GB)", price: "Rs 381,999" },
    { pic: "/Xiaomi-MIX-Flip-300x300.webp", detail: "Xiaomi MIX Flip(12GB- 512GB)", price: "Rs 323,999" },
    { pic: "/Redmi-A5-Black-300x300.webp", detail: "Redmi A5", price: "Rs 21,999" },
    { pic: "/Apple-iPhone-16e-256-GB-300x300.jpg", detail: "Apple iPhone 16e PTA Approved", price: "Rs 274,999" },
    { pic: "/Samsung-Galaxy-S25-Ultra-300x300.webp", detail: "Samsung-Galaxy S25 Ultra PTA Approved ", price: "Rs 424,999" },
    { pic: "/Redmi-Note-14-Pro-5G-Black-300x300.webp", detail: "Redmi Note 14 Pro + 5G (12GB- 512GB)", price: "Rs 131,999" },
    { pic: "/Redmi-Note-14-Pro-Black-300x300.jpg", detail: "Redmi Note 14 Pro", price: "Rs 74,999" },
    { pic: "/Redmi-Note-14-Black-300x300.webp", detail: "Redmi Note 14", price: "Rs 50,999" },
    { pic: "/Xiaomi-14T-Pro-12GB-512GB-black-300x300.webp", detail: "Xiaomi 14T Pro (12GB-512GB)", price: "Rs 219,999" },
    { pic: "/Xiaomi-14T-12GB-512GB-black-300x300.webp", detail: "Xiaomi 14T  (12GB-512GB)", price: "Rs 169,999" },
    { pic: "/Redmi-Note-13-Pro-Black-300x300.webp", detail: "Redmi Note 13 Pro ", price: "Rs 59,999" },
    { pic: "/Redmi-Note-13-Black-300x300.webp", detail: "Redmi Note 13", price: "Rs 42,999" },
    { pic: "/Redmi-13-Black-300x300.webp", detail: "Redmi 13", price: "Rs 33,499" },
    { pic: "/Redmi-14C-6GB-128GB-Midnight-Black-300x300.webp", detail: "Redmi 14C (6GB- 128GB)", price: "Rs 27,999" },
    { pic: "/Redmi-A3-Black-300x300.webp", detail: "Redmi A3", price: "Rs 19,999" },
    { pic: "/redmi-a3x-Mistore_grande-300x300.webp", detail: "Redmi A3x (3GB- 64GB)", price: "Rs 17,999" },
    { pic: "/Apple-iPhone-16-Black-1-300x300.webp", detail: "Apple Iphone 16 PTA Approved ", price: "Rs 299,999" },
    { pic: "/Apple-iPhone-16-Black-1.webp", detail: "Apple Iphone 16 Plus PTA Approved", price: "Rs 329,999" },
    { pic: "/iPhone-16-Pro-Desert-Titanium-1-300x300.webp", detail: "Apple Iphone 16 Pro PTA Approved", price: "Rs 374,999" },
    { pic: "/CUBEiPhone16ProMax_12_1024x1024-300x300.webp", detail: "Apple Iphone 16 Pro Max PTA Approved", price: "Rs 438,999" }
  ];

  return (
    <div className="w-full bg-white py-6 md:py-10">
      {/* Header text */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-850 tracking-tight">Smartphones</h1>
        <h2 className="mt-2 font-bold text-lg sm:text-xl md:text-2xl text-gray-700 leading-snug">Explore and Buy Original Smartphones Online in Pakistan</h2>
        <p className="mt-4 text-xs sm:text-sm text-blue-900 leading-relaxed font-medium max-w-3xl">
          Welcome to XcessoriesHub, your ultimate choice for buying smartphones online in Pakistan. We value your need to have reliable, high-quality devices at affordable prices. That’s why we have crafted a list of the most sought after smartphones that will help you meet your digital needs.
        </p>
      </div>

      {/* Grid of product cards */}
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

export default Smartphone;
