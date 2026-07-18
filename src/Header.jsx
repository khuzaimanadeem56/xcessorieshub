import React from 'react'
import { Search, User, ShoppingCart } from "lucide-react";

function Header ()  {
  return (
   <>

    <div className='flex items-center justify-between bg-white px-6 py-3'>
        <div className='flex items-center space-x-2'>
            <div className='flex items-center justify-center rounded w-8 h-8 bg-blue-600 text-white'>
                <span className='font-bold text-lg'>XH</span>
            </div>
        <span className='font-semibold text-gray-800 text-lg'>
             Xcessories Hub
        </span>
    </div>
    <div className='flex flex-1 max-w-2xl mx-6'>
          <select className='px-3 py-2 border border-r-0 rounded-l-lg bg-gray-50 text-gray-700'>
            <option>All Categories</option>
            <option>Mobiles</option>
            <option>Air Podes</option>
            <option>Laptops</option>
            <option>Power Banks</option>
            <option>Smart Watches</option>
            <option>Headphones</option>
            <option>Data Cables</option>
            <option>Chargers</option>
            <option>Speakers</option>
            <option>Tablets</option>
          
          </select>
     <input type="text"
       placeholder='Search for products...'
       className='flex-1 border-t border-b px-4 py-2 focus:outline-none'
       />
       <button className='bg-blue-900 text-white flex items-center justify-center px-4 rounded-r-lg '>
<Search className="w-5 h-5" />
       </button>
    </div>

<div className='flex items-center space-x-5'>
<a href="log"><button className='flex items-center text-gray-700 hover:text-blue-700 hover:scale-105'>
  <User className="w-5 h-5 mr-1" />
  <span>Login/Register</span>
    </button></a>
<button className='relative'>
   <ShoppingCart className="w-6 h-6 text-gray-700" />

</button>
  
  </div>    







    </div>







</>

   
  )
}

export default Header
