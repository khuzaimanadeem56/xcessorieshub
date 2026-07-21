import React from 'react'

const Say = () => {
  return (
    <div className="w-full bg-white mt-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl md:rounded-[30px] shadow-sm hover:shadow-md transition-shadow">
        <img 
          className="w-full h-auto object-cover" 
          src="/scared-of.webp" 
          alt="Banner Offer"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default Say;
