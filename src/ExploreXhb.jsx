import React from 'react'
import Cards from './Cards'

const ExploreXhb = ({ onAddToCart }) => {
  const products = [
    { pic: "/Amazon-Kindle-Paperwhite-12th-Gen-300x300.webp", detail: "Amazon Kindle Paperwhite 12th Gen 7” – 16GB", price: "Rs 61,999" },
    { pic: "/WiWU-Cozy-Classic-Black-300x300.webp", detail: "WiWU Cozy Classic Case 14″", price: "Rs 6,199" },
    { pic: "/WIWU-Elite-Backpack-Black-300x300.webp", detail: "WIWU Elite Backpack", price: "Rs 11,499" },
    { pic: "/WIWU-Smart-Stand-Sleeve-300x300.jpg", detail: "WIWU Smart Stand Sleeve 13″ – Black", price: "Rs 4,999" },
    { pic: "/WiWU-Defender-Pro-Sleeve-300x300.webp", detail: "Wiwu Defender Sleeve Pro 16″ – Black", price: "Rs 1,999" },
    { pic: "/Wiwu-Blade-Sleeve-Black-300x300.webp", detail: "Wiwu Blade Sleeve for MacBook Pro 13.3″", price: "Rs 4,199" },
    { pic: "/Wiwu-Skin-Pro-3-PU-Leather-Sleeve-300x300.webp", detail: "Wiwu Skin Pro 3 PU Leather Sleeve 12″ – Black", price: "Rs 2,799" },
    { pic: "/WIWU-Minimalist-Laptop-Bag-II-Black-300x300.webp", detail: "WIWU Minimalist Laptop Bag II", price: "Rs 4,999" },
    { pic: "/Wiwu-Vivi-Laptop-Bag-Black-300x300.webp", detail: "Wiwu Vivi Laptop Bag", price: "Rs 3,799" },
    { pic: "/WiWU-Pilot-Sleeve-Black-300x300.webp", detail: "WiWU Pilot Sleeve", price: "Rs 4,299" },
    { pic: "/WiWU-Skin-Zero-Sleeve-Black-300x300.webp", detail: "WiWU Skin Zero Sleeve", price: "Rs 2,999" },
    { pic: "/Wiwu-City-Commuter-Bag-300x300.webp", detail: "Wiwu City Commuter Bag 15″ – Black", price: "Rs 7,999" },
    { pic: "/Baseus-AeQur-Series-VO20-Bluetooth-Speaker-300x300.webp", detail: "Baseus AeQur Series VO20 Bluetooth Speaker", price: "Rs 9,999" },
    { pic: "/Baseus-Blade-Power-Bank-HD-Edition-20000mAh-100W-300x300.webp", detail: "Baseus Blade Power Fast Charging Power Bank HD 20000mAh 100W", price: "Rs 25,999" },
    { pic: "/Ugreen-35345-300x300.webp", detail: "Ugreen Computer Desktop Microphone – 35345", price: "Rs 8,499" },
    { pic: "/Ugreen-20192-300x300.webp", detail: "Ugreen Type-C to AUX Male Braided Cable With Chip – 20192", price: "Rs 1,999" },
    { pic: "/Youksh-iP17-Pro-Lens-Protector-Blue-300x300.webp", detail: "Youksh iPhone 17 Pro max Lens Protector", price: "Rs 1,499" },
    { pic: "/Youksh-iP17-Lens-Protector-Black-300x300.webp", detail: "Youksh iPhone 17 Pro Lens Protector", price: "Rs 1,499" },
    { pic: "/Youksh-iP17-Air-Lens-Protector-Black-300x300.webp", detail: "Youksh iPhone 17 Lens Protector", price: "Rs 1,499" },
    { pic: "/TORRAS-Ostand-Q3-Air-Series-Case-iPhone-17-Pro-Orange-300x300.webp", detail: "Youksh iPhone 17 Air Lens Protector", price: "Rs 1,499" },
    { pic: "/Amaze-A725-1-300x300.webp", detail: "Amaze Probus Triple Connection Rechargeable Wireless Mouse A725", price: "Rs 4,299" },
    { pic: "/Amaze-A720-1-300x300.webp", detail: "Amaze Probus Triple Connection Rechargeable Wireless Mouse A720", price: "Rs 3,799" },
    { pic: "/Amaze-A715-1-300x300.webp", detail: "Amaze Probus Comfort Click Wireless Mouse A715", price: "Rs 3,099" },
    { pic: "/Amaze-A712a-300x300.webp", detail: "Amaze Clicket Dual Wireless Rechargeable Mouse A712", price: "Rs 2,699" }
  ];

  return (
    <div className="w-full bg-white py-6 md:py-10">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-850 tracking-tight">Explore Xcessories Hub</h1>
        <p className="mt-2 text-sm text-gray-500 font-semibold">Explore our vast selection of premium smart gadgets, sleeves, laptop bags, and power solutions.</p>
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

export default ExploreXhb;
