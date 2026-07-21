import React from 'react'

const Sbrand = () => {
  const brands = [
    { name: 'Anker', logo: '/anker-logo.webp' },
    { name: 'A4Tech', logo: '/A4Tech-Logo-1536x337.webp' },
    { name: 'Baseus', logo: '/Baseus-logo.webp' },
    { name: 'Apple', logo: '/apple.jpg' },
    { name: 'Boya', logo: '/boya.webp' },
    { name: 'Jisulife', logo: '/jisulife-1536x407.webp' },
    { name: 'Mcdodo', logo: '/mcdodo_uk_logo.webp' },
    { name: 'Pitaka', logo: '/pitaka-logo-e1743214379641-1536x330.webp' },
    { name: 'Samsung', logo: '/samsung-logo-e1743213906540-1536x310.webp' },
    { name: 'UGreen', logo: '/UGreen-Logo.png-1536x437.webp' },
    { name: 'JBL', logo: '/jbl logo.png' },
    { name: 'Xiaomi', logo: '/Xiaomi-logo-scaled-e1743214282864-1536x422.webp' }
  ];

  return (
    <div className="w-full bg-white mt-12 md:mt-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center">
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-850 tracking-tight">
          Shop By Brand
        </h2>
      </div>

      {/* Grid of brand logos */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 mt-8">
        {brands.map((brand, idx) => (
          <div 
            key={idx}
            className="w-full h-20 border border-gray-200 rounded-2xl flex justify-center items-center p-3 bg-white hover:shadow-md hover:border-gray-300 transition-all duration-300"
          >
            <img 
              src={brand.logo} 
              alt={brand.name} 
              className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-200" 
            />
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center items-center mt-10 mb-5">
        <a href="/brand">
          <button className="bg-[#d1cd4c] text-white font-bold px-10 py-3 rounded-full flex items-center justify-center hover:bg-[#c5c13e] transition duration-250 shadow-sm active:scale-95 text-sm">
            View All
          </button>
        </a>
      </div>
    </div>
  );
}

export default Sbrand;
