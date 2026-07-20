import React from 'react'
import { Link } from 'react-router-dom'

function Showbar ()  {
  return (
    <div className=''>
       <div className='flex justify-center w-full h-30 bg-white gap-10  shadow-md'>
      <Link to="/smartphones" className='w-24 h-25 shadow-md hover:shadow-2xl transition-shadow hover:scale-105 cursor-pointer'>
        <img className=' w-22 h-20' src="/Apple-iPhone-16-Ultramarine.webp" />
        <div className='w-20 text-center '>
        <h3 className='text-center text-sm font-medium text-gray-800 '>SmartPhones</h3>
        </div>
      </Link>
      <Link to="/airpods" className='w-24 h-25 shadow-md hover:shadow-2xl transition-shadow hover:scale-105 cursor-pointer'>
        <img className='w-22 h-20' src="/Oraimo-FreePods-Lite-True-Wireless-Earbuds-OTW-330-xhb-blue-300x300.webp" alt="" />
       <div className='w-20 text-center '>
        <h3 className='text-center text-sm font-medium text-gray-800'>AirPods</h3>
        </div>
      </Link>
      <Link to="/smartwatches" className='w-24 h-25 shadow-md hover:shadow-2xl transition-shadow hover:scale-105 cursor-pointer'>
        <img className='w-22 h-20' src="/Mibro-Watch-C4-300x300.webp" alt="" />
        <div className='w-20 text-center '>
        <h3 className='text-center text-sm font-medium text-gray-800'>SmartWatches</h3>
        </div>
      </Link>
      <Link to="/powerbanks" className='w-24 h-25 shadow-md hover:shadow-2xl transition-shadow hover:scale-105 cursor-pointer'>
        <img className='w-22 h-20' src="/MCDODO-MC-5021-20000MAH-20W-MAGNETIC-WIRELESS-POWER-BANK-1-xcessorieshub-300x300-1.webp" alt="" />
       <div className='w-20 text-center '>
        <h3 className=' text-sm font-medium text-gray-800'>PowerBanks</h3>
      </div>
      </Link>
      <Link to="/datacables" className='w-24 h-25 shadow-md hover:shadow-2xl transition-shadow hover:scale-105 cursor-pointer'>
        <img className='w-22 h-20' src="/UGREEN-–-50567-300x300.webp" alt="" />
        <div className='w-20 text-center '>
        <h3 className=' text-sm font-medium text-gray-800'>DataCables</h3>
     </div>
      </Link>
     <Link to="/headphones" className='w-24 h-25 shadow-md hover:shadow-2xl transition-shadow hover:scale-105 cursor-pointer'>
        <img className='w-22 h-20' src="/Soundpeats-Space-Pro-300x300.webp" alt="" />
        <div className='w-20 text-center '>
        <h3 className=' text-sm font-medium text-gray-800'>Headphones</h3>
      </div>
      </Link>
      <Link to="/speakers" className='w-24 h-25 shadow-md hover:shadow-2xl transition-shadow hover:scale-105 cursor-pointer'>
        <img className='w-22 h-20' src="/Logitech-Z625-1-300x300-1.webp" alt="" />
        <div className='w-20 text-center '>
        <h3 className=' text-sm font-medium text-gray-800'>Speakers</h3>
        </div>
      </Link>
      <Link to="/tablets" className='w-24 h-25 shadow-md hover:shadow-2xl transition-shadow hover:scale-105 cursor-pointer'>
        <img className='w-22 h-20' src="/Samsung-Galaxy-Tab-S10-WiFi-with-Keyboard-Cover-300x300.webp" alt="" />
        <div className='w-20 text-center '>
        <h3 className='text-sm font-medium text-gray-800'>Tablets</h3>
        </div>
      </Link>
      <Link to="/chargers" className='w-24 h-25 shadow-md hover:shadow-2xl transition-shadow hover:scale-105 cursor-pointer'>
        <img className='w-22 h-20' src="/Ugreen-GAN-Fast-Charger-1C-20W-Black-300x300.webp" alt="" />
        <div className='w-20 text-center '>
        <h3 className='text-sm font-medium text-gray-800'>Chargers</h3>
      </div>
      </Link>
      </div>
      
</div>

  )
}

export default Showbar
