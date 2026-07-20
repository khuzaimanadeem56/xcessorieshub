import React from 'react'


const Cards = ({pic,detail,price,button}) => {
  const imageSrc = pic || 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';
  return (
    <>
    <div className='mt-13'>
               <div className="w-65 h-105 bg-white p-2 rounded-lg shadow-md hover:shadow-2xl transition-shadow relative  hover:scale-105 text-center">
  

  
  <img src={imageSrc} alt={detail || "Product image"} className="w-45 h-55 mx-auto object-contain" />
<div className='w-60 h-15 border-amber-950 text-center'>
  
  <h3 className="mt-4 text-lg font-semibold text-slate-800 leading-tight">
    {detail}
  </h3>
  </div>
<div>
  <p className="mt-4 text-base font-semibold  text-shadow-blue-950">{price}</p>
</div>
  
  <button className="mt-5 bg-blue-900 text-white text-sm font-semibold py-3 px-8 rounded-full hover:bg-blue-800 transition">
    {button}
  </button>
</div>

    </div>
    </>
  )
}

export default Cards
