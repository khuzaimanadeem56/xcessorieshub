import React from 'react'

const Cards = ({ pic, detail, price, button, onAddToCart }) => {
  const imageSrc = pic || 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';

  const handleCartClick = (e) => {
    e.preventDefault();
    if (onAddToCart) {
      onAddToCart({ pic, detail, price });
    }
  };

  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-[390px] w-full text-center relative group">
      
      {/* Product Image */}
      <div className="relative flex items-center justify-center h-44 w-full bg-gray-50/50 rounded-xl p-2 overflow-hidden mb-3">
        <img 
          src={imageSrc} 
          alt={detail || "Product image"} 
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" 
          loading="lazy"
        />
      </div>

      {/* Product Title */}
      <div className="flex-1 flex items-center justify-center px-1">
        <h3 className="text-sm sm:text-base font-bold text-gray-800 leading-snug line-clamp-2 max-h-12 overflow-hidden">
          {detail}
        </h3>
      </div>

      {/* Pricing & CTA */}
      <div className="mt-2.5">
        <p className="text-base sm:text-lg font-extrabold text-blue-900 tracking-tight">{price}</p>
        
        <button 
          onClick={handleCartClick}
          className="mt-3.5 w-full bg-blue-900 text-white hover:bg-blue-800 active:scale-95 text-xs sm:text-sm font-bold py-2.5 px-4 rounded-full shadow-sm hover:shadow transition duration-200 min-h-[44px]"
        >
          {button || "Add to Cart"}
        </button>
      </div>

    </div>
  );
}

export default Cards;
