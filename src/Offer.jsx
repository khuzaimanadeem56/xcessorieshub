import React from 'react'

function Offer () {
  return (
    <div className='w-full h-250 bg-white mt-5'>
        <img className='pt-10 py-1 px-4  rounded-[30px]  shadow-2xl' src="/amaze_banner-scaled.webp" alt=""
         />
      <div className='flex items-center justify-between mt-15 px-7 py-2 gap-5'
      >
        <div className=' sm:w-1/4 h-60 bg-white rounded-[10px] shadow-md p-6 flex flex-col items-center text-center'>
              <img className='"w-10 h-12 text-blue-800 mb-3"' src="/purchase.webp" alt="" />
               <h3 className="font-semibold text-lg mt-2 text-gray-900">
        Express Delivery
      </h3>
       <p className="text-base mt-2 text-gray-500">
        All Over Pakistan
      </p>
 </div>
        <div className='sm:w-1/4 h-60 bg-white rounded-[10px] shadow-md p-6 flex flex-col items-center text-center'>
              <img className='"w-10 h-12 text-blue-800 mb-3"' src="/feedback.webp" alt="" />
               <h3 className="font-semibold text-lg mt-2 text-gray-900">
        Positive Feedback
      </h3>
       <p className="text-base mt-2 text-gray-500">
        99% Customer Satisfication Rate
      </p>
</div>
        <div className='sm:w-1/4 h-60 bg-white rounded-[10px] shadow-md p-6 flex flex-col items-center text-center'>
              <img className='"w-10 h-12 text-blue-800 mb-3"' src="/refresh.webp" alt="" />
               <h3 className="font-semibold text-lg mt-2 text-gray-900">
        Easy Return & Refunds
      </h3>
       <p className="text-base mt-2 text-gray-500">
        T&Cs Apply
      </p>
</div>
       <div className='sm:w-1/4 h-60 bg-white rounded-[10px] shadow-md p-6 flex flex-col items-center text-center'>
              <img className='"w-10 h-12 text-blue-800 mb-3"' src="/loss.webp" alt="" />
               <h3 className="font-semibold text-lg mt-2 text-gray-900">
        Cost Saving
      </h3>
       <p className="text-base mt-2 text-gray-500">
        Excellent Price & Rates
      </p>
          </div>
</div>
        <div className='Flex justify-center items-center text-center mt-15'>
              <h1 className='font-bold text-6xl text-slate-800'>Top Seller</h1>
              <p className='mt-4 text-lg text-gray-600'>
                  Our Most Loved picks by Customers - Trending and Trusted
              </p>
</div>
       

    </div>
  )
}

export default Offer