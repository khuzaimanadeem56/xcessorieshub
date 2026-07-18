import React from 'react'

const Pdeal = () => {
  return (
    <div className='mt-15'>
           <div className='flex justify-center items-center text-center'>
        <h1 className='font-bold text-5xl text-slate-800'>Shop By Price – Find Your Perfect Deal</h1>
 </div>
        <div class="flex flex-wrap items-center gap-3 mt-8 p-2 bg-white">
  <button class="w-80 h-15 border-2 border-[#0B416B] text-[#0B416B] font-semibold rounded-md hover:bg-[#0B416B] hover:text-white transition">
    Under Rs. 5,000
  </button>
    <button class="w-80 h-15 border-2 border-[#0B416B] text-[#0B416B] font-semibold rounded-md hover:bg-[#0B416B] hover:text-white transition">
    Rs. 5,000 – Rs. 20,000
  </button>
    <button class="w-80 h-15 border-2 border-[#0B416B] text-[#0B416B] font-semibold rounded-md hover:bg-[#0B416B] hover:text-white transition">
    Rs. 20,000 – Rs. 30,000
  </button>
  <button class="w-80 h-15 border-2 border-[#0B416B] text-[#0B416B] font-semibold rounded-md hover:bg-[#0B416B] hover:text-white transition">
    Rs. 30,000 – Rs. 50,000
  </button>

  </div>

        <div class="flex flex-wrap items-center gap-3 mt-1 p-2 bg-white">
  <button class="w-80 h-15 border-2 border-[#0B416B] text-[#0B416B] font-semibold rounded-md hover:bg-[#0B416B] hover:text-white transition">
    Rs. 50,000 – Rs. 75,000
  </button>
    <button class="w-80 h-15 border-2 border-[#0B416B] text-[#0B416B] font-semibold rounded-md hover:bg-[#0B416B] hover:text-white transition">
    Rs. 75,000 – Rs. 100,000
  </button>
    <button class="w-80 h-15 border-2 border-[#0B416B] text-[#0B416B] font-semibold rounded-md hover:bg-[#0B416B] hover:text-white transition">
    Rs. 100,000 – Rs. 200,000
  </button>
  <button class="w-80 h-15 border-2 border-[#0B416B] text-[#0B416B] font-semibold rounded-md hover:bg-[#0B416B] hover:text-white transition">
    Above Rs. 200,000 
  </button>

  </div>
    </div>
  )
}

export default Pdeal
