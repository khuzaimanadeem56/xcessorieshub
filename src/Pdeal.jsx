import React from 'react'

const Pdeal = () => {
  const deals = [
    "Under Rs. 5,000",
    "Rs. 5,000 – Rs. 20,000",
    "Rs. 20,000 – Rs. 30,000",
    "Rs. 30,000 – Rs. 50,000",
    "Rs. 50,000 – Rs. 75,000",
    "Rs. 75,000 – Rs. 100,000",
    "Rs. 100,000 – Rs. 200,000",
    "Above Rs. 200,000"
  ];

  return (
    <div className="w-full bg-white mt-12 md:mt-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center">
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-850 tracking-tight leading-tight">
          Shop By Price – Find Your Perfect Deal
        </h2>
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-8">
        {deals.map((deal, idx) => (
          <button 
            key={idx}
            className="w-full min-h-[50px] sm:min-h-[60px] flex items-center justify-center text-xs sm:text-sm font-bold border-2 border-blue-900 text-blue-900 rounded-xl hover:bg-blue-900 hover:text-white active:scale-[0.97] transition-all duration-200 shadow-sm cursor-pointer px-3 text-center"
          >
            {deal}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Pdeal;
