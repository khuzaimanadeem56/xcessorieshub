import React from 'react'
import { Facebook, Instagram, Youtube, Clock, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 w-full text-white mt-16 border-t border-blue-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-8 py-12 md:py-16">
        
        {/* Company Info */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
            Xcessories <span className="text-[#d1cd4c]">Hub</span>
          </h2>
          <p className="text-sm text-blue-100 font-medium">
            Premium Tech Accessories, Delivered.
          </p>
          <div className="flex items-center space-x-4 pt-1">
            <a href="#" className="hover:text-amber-300 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors" aria-label="Youtube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          <div className="space-y-3 pt-3 text-xs sm:text-sm text-blue-100 font-medium">
            <div className="flex items-start gap-2">
              <Clock className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
              <span>Available: 11AM–9PM</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
              <span>G-68 Jeff Heights Gulberg 3 Lahore</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
              <span>0307-133-03-03</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
              <span>xcessorieshub@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Quick Links 1 */}
        <div className="flex flex-col space-y-3 md:pl-4">
          <h3 className="text-base font-extrabold tracking-wider uppercase text-amber-300">Find It Fast</h3>
          <ul className="space-y-2 text-sm text-blue-100 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Warranty Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div className="flex flex-col space-y-3 lg:pl-4">
          <h3 className="text-base font-extrabold tracking-wider uppercase text-amber-300">Company</h3>
          <ul className="space-y-2 text-sm text-blue-100 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/brand" className="hover:text-white transition-colors">Brands</a></li>
            <li><a href="/findus" className="hover:text-white transition-colors">Find Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Store Location Map */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-base font-extrabold tracking-wider uppercase text-amber-300">Visit Our Store</h3>
          <div className="w-full h-44 overflow-hidden rounded-xl shadow-md border border-blue-800">
            <iframe
              title="Find Us on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14138.353136579442!2d74.34068339999999!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904d3b8aee8ef%3A0x86c9b4c421eb8eb8!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698234812345!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="border-t border-blue-950/70 bg-blue-950/40 py-5 text-center">
        <p className="text-xs text-blue-200 font-medium">
          © 2026 Xcessories Hub. All rights reserved. Lahore, Pakistan.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
