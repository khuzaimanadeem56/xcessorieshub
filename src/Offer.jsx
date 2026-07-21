import React from 'react'

function Offer () {
  const features = [
    { title: 'Express Delivery', desc: 'All Over Pakistan', img: '/purchase.webp' },
    { title: 'Positive Feedback', desc: '99% Customer Satisfaction Rate', img: '/feedback.webp' },
    { title: 'Easy Return & Refunds', desc: 'T&Cs Apply', img: '/refresh.webp' },
    { title: 'Cost Saving', desc: 'Excellent Price & Rates', img: '/loss.webp' }
  ];

  return (
    <div className="w-full bg-white mt-4 px-4 md:px-8">
      {/* Banner */}
      <div className="w-full overflow-hidden rounded-2xl md:rounded-[30px] shadow-md hover:shadow-lg transition-shadow">
        <img 
          className="w-full h-auto md:max-h-[350px] object-cover" 
          src="/amaze_banner-scaled.webp" 
          alt="Amaze Banner"
        />
      </div>
      
      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
        {features.map((feat, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md p-4 md:p-6 flex flex-col items-center text-center transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 p-2 mb-3">
              <img className="w-full h-full object-contain" src={feat.img} alt={feat.title} />
            </div>
            <h3 className="font-bold text-sm sm:text-base text-gray-800 tracking-tight leading-snug">
              {feat.title}
            </h3>
            <p className="text-xxs sm:text-xs text-gray-500 mt-1 font-medium">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Top Seller Header */}
      <div className="text-center mt-12 md:mt-16">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-850 tracking-tight">Top Sellers</h1>
        <p className="mt-2 md:mt-3.5 text-xs sm:text-sm md:text-base text-gray-500 font-medium max-w-xl mx-auto">
          Our Most Loved picks by Customers - Trending and Trusted
        </p>
      </div>
    </div>
  )
}

export default Offer;