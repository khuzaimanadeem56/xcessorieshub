import React from 'react'
import { Link } from 'react-router-dom'

function Showbar ()  {
  const categories = [
    { name: 'Smartphones', path: '/smartphones', img: '/Apple-iPhone-16-Ultramarine.webp' },
    { name: 'AirPods', path: '/airpods', img: '/Oraimo-FreePods-Lite-True-Wireless-Earbuds-OTW-330-xhb-blue-300x300.webp' },
    { name: 'SmartWatches', path: '/smartwatches', img: '/Mibro-Watch-C4-300x300.webp' },
    { name: 'PowerBanks', path: '/powerbanks', img: '/MCDODO-MC-5021-20000MAH-20W-MAGNETIC-WIRELESS-POWER-BANK-1-xcessorieshub-300x300-1.webp' },
    { name: 'DataCables', path: '/datacables', img: '/UGREEN-–-50567-300x300.webp' },
    { name: 'Headphones', path: '/headphones', img: '/Soundpeats-Space-Pro-300x300.webp' },
    { name: 'Speakers', path: '/speakers', img: '/Logitech-Z625-1-300x300-1.webp' },
    { name: 'Tablets', path: '/tablets', img: '/Samsung-Galaxy-Tab-S10-WiFi-with-Keyboard-Cover-300x300.webp' },
    { name: 'Chargers', path: '/chargers', img: '/Ugreen-GAN-Fast-Charger-1C-20W-Black-300x300.webp' }
  ];

  return (
    <div className="bg-white border-b border-gray-100 shadow-sm w-full overflow-hidden">
      <div className="flex overflow-x-auto scrollbar-none py-5 px-4 md:px-8 gap-5 md:justify-center items-center w-full">
        {categories.map((cat, i) => (
          <Link 
            key={i}
            to={cat.path} 
            className="flex-shrink-0 flex flex-col items-center justify-between w-22 h-24 p-2 bg-white rounded-xl border border-gray-100 hover:border-blue-900 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer text-center group"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors p-1">
              <img className="max-h-full max-w-full object-contain" src={cat.img} alt={cat.name} />
            </div>
            <span className="text-[11px] font-bold text-gray-700 tracking-tight leading-tight group-hover:text-blue-900 transition-colors">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Showbar;
