import React from 'react'
import Cards from './Cards'

const Sell = ({ onAddToCart }) => {
  const products = [
    { pic: "/Soundpeats-T3-Pro-ANC-Bluetooth-Earbuds-300x300.webp", detail: "Soundpeats T3 Pro ANC Bluetooth Earbuds", price: "Rs 14,999" },
    { pic: "/HaylouSolarUltraSmartWatch-Black-300x300.webp", detail: "Haylou Solar Ultra Smart Watch", price: "Rs 3,699" },
    { pic: "/DJI-Osmo-Mobile-7P-Gimbal-300x300.webp", detail: "DJI Osmo Mobile 7p Gimbal", price: "Rs 39,999" },
    { pic: "/tws-black_1920x_4_4027e963-7e73-4ec7-8e9e-2236a71d7fb0_1920x-300x300.webp", detail: "CMF by Nothing Buds Pro with Hybrid ANC", price: "Rs 12,999" },
    { pic: "/RedmiBuds6Lite-300x300.webp", detail: "Redmi Buds 6 Lite with Hybrid ANC", price: "Rs 5,499" },
    { pic: "/watch-wrist.webp", detail: "CMF by Nothing Watch Pro 2 with AMOLED", price: "Rs 15,299" },
    { pic: "/SAMSUNG-Galaxy-Buds-3-Pro-300x300.webp", detail: "Samsung Galaxy Buds 3 Pro", price: "Rs 32,499" },
    { pic: "/Buds-FE-1-300x300.webp", detail: "Samsung Galaxy Buds FE", price: "Rs 13,999" },
    { pic: "/watch-6-classic-47-600x600-1-300x300.webp", detail: "Samsung Watch 6 Classic 47mm R960", price: "Rs 44,999" },
    { pic: "/Xiaomi-TV-Box-S-2nd-Gen-4K-Ultra-HD-1-1-300x300.webp", detail: "Xiaomi TV Box S 2nd Gen 4K Ultra HD", price: "Rs 15,999" }
  ];

  return (
    <div className="w-full bg-white mt-8">
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

      <div className="flex justify-center items-center mt-10">
        <button className="bg-[#d1cd4c] text-white font-bold px-10 py-3 rounded-full flex items-center justify-center hover:bg-[#c5c13e] transition duration-250 shadow-sm active:scale-95 text-sm">
          View All
        </button>
      </div> 
    </div>
  )
}

export default Sell;
