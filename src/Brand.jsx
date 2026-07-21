import React from 'react'

const Brand = () => {
  const brands = [
    "/amezefitlogo.webp",
    "/Screenshot-2024-05-13-at-12.32.17-AM.webp",
    "/Screenshot-2024-06-15-at-3.44.55 PM-1536x440.png",
    "/AMAZE-LOGO.jpg",
    "/A4Tech-Logo-1536x337.webp",
    "/download-45-1.webp",
    "/amband.webp",
    "/ankerlogo.webp",
    "/download-14-1.webp",
    "/download-43-1.webp",
    "/Baseus-logo.webp",
    "/download-47-1.webp",
    "/Belkin_logo-1536x422.webp",
    "/Benks_logo_5.webp",
    "/bloody.webp",
    "/dior.png",
    "/dizo.webp",
    "/dji-logo-black-and-white.png",
    "/Dyson-logo-1536x647.webp",
    "/earfun_logo.png",
    "/logo-1536x327.png",
    "/elago.webp",
    "/download-37-1.webp",
    "/esr_logo.webp",
    "/fragrance-one.avif",
    "/download-36-1.webp",
    "/GoPro-Logo-e1743213461890.png",
    "/download-34-2.webp",
    "/Haylou_logo-1.webp",
    "/Hifuture_logo-black-1536x331.webp",
    "/download-33-1.webp",
    "/Imilab-1-1.webp",
    "/Insta360_logo-1536x465.png",
    "/jabra-logo-1.webp",
    "/jbllogo.webp",
    "/download-58-2.webp",
    "/samsunglogo.webp",
    "/Oneplus_newlogo_main_1584369675960-1-1.webp",
    "/realmelogo.webp",
    "/metalogo.webp"
  ];

  return (
    <div className="w-full bg-white py-6 md:py-10">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 text-center">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-850 tracking-tight">Our Authorized Brands</h1>
        <p className="mt-2 text-sm text-gray-500 font-semibold">We partner with top-tier technology manufacturers to bring you 100% original premium accessories.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 px-4 md:px-8 max-w-7xl mx-auto mb-10">
        {brands.map((logo, idx) => (
          <div 
            key={idx}
            className="w-full h-24 border border-gray-100 rounded-2xl flex justify-center items-center p-4 bg-white shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
          >
            <img 
              src={logo} 
              alt={`Brand Logo ${idx}`} 
              className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-200" 
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brand;

