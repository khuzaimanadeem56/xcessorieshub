import React from 'react'
import { Facebook, Instagram, Youtube, Clock, MapPin, Phone, Mail } from "lucide-react";
const Footer = () => {
  return (
    <div className='bg-blue-900 w-full h-110'>
          <div className=' flex justify-between'>
<div className='flex flex-col'>
          <div className='flex items-center space-x-2 mt-9 ml-5'>
            <h1 className='text-3xl font-bold text-white'>Xcessories Hub</h1>
          </div>
        <p className='text-white font-medium w-fit mt-4 ml-5'>Premium Tech Accessories, Delivered.</p> 
<div className='flex space-x-4 text-white mt-4 ml-5'>
        <Facebook/>
        <Instagram/>
        <Youtube />
    
        </div>  
 <div className="space-y-3 text-sm mt-3 ml-5">
        <div className="flex items-center space-x-2">
          <Clock className="w-6 h-6 text-blue-300" />
          <span className='text-white font-semibold text-lg'>Available: 11AM–9PM</span>
        </div>
 <div className="flex items-center space-x-2">
          <MapPin className="w-6 h-6 text-blue-300" />
          <span className='text-white font-semibold text-lg'>G-68 Jeff Heights Gulberg 3 Lahore</span>
        </div>
<div className="flex items-center space-x-2">
          <Phone className="w-6 h-6 text-blue-300" />
          <span className='text-white font-semibold text-lg'>0307-133-03-03</span>
        </div>
<div className="flex items-center space-x-2">
          <Mail className="w-6 h-6 size-5 text-blue-300" />
          <span className='text-white font-semibold text-lg'>xcessorieshub@gmail.com</span>
        </div>

</div>


</div>
       <div className='flex flex-col mt-10'>
        <h1 className='text-white font-bold text-lg '>Find It Fast</h1>
        <h2 className='text-white font-sans mt-2'>FAQS</h2>
        <h2 className='text-white font-sans mt-2'>Warrenty Policy</h2>
        <h2 className='text-white font-sans mt-2'>Terms & Conditions</h2>
        <h2 className='text-white font-sans mt-2'>Privacy Policy</h2>

</div>

<div className='flex flex-col mt-10 '>
    <h1 className='text-white font-bold text-xl'>Company</h1>
        <h2 className='text-white font-sans mt-2'>About</h2>
        <h2 className='text-white font-sans mt-2'>Brands</h2>
        <h2 className='text-white font-sans mt-2'>Find Us</h2>
        <h2 className='text-white font-sans mt-2'>Blog</h2>

</div>

<div className='flex flex-col mt-10 '>
    <h1 className='text-white font-bold text-xl'>Visit Our Store</h1>
      <div className="flex justify-center mt-8 w-110  mr-8">
        <iframe
          title="Find Us on Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14138.353136579442!2d74.34068339999999!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904d3b8aee8ef%3A0x86c9b4c421eb8eb8!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698234812345!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="fast"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl shadow-lg"
        ></iframe>
      </div>


</div>
 </div>
        <div></div>

          </div>
  );

    
  
}

export default Footer
