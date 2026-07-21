import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";

function Header({ cart = [], setIsCartOpen }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore Xhb', href: '/explorexhb' },
    { name: 'Brands', href: '/brand' },
    { name: 'Reviews', href: '/review' },
    { name: 'Find Us', href: '/findus' },
    { name: 'Smart Phones', href: '/smart' }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-4 md:px-8 py-3.5">
          
          {/* Mobile Menu Button + Logo */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 active:scale-95 transition"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <a href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center rounded-lg w-9 h-9 bg-blue-900 text-white font-bold shadow-md">
                <span>XH</span>
              </div>
              <span className="font-extrabold text-gray-800 text-xl tracking-tight hidden sm:inline-block">
                Xcessories <span className="text-[#d1cd4c]">Hub</span>
              </span>
            </a>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="flex w-full">
              <select className="px-3.5 py-2 border border-r-0 border-gray-200 rounded-l-full bg-gray-50 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent">
                <option>All Categories</option>
                <option>Mobiles</option>
                <option>Air Pods</option>
                <option>Laptops</option>
                <option>Power Banks</option>
                <option>Smart Watches</option>
                <option>Headphones</option>
                <option>Data Cables</option>
                <option>Chargers</option>
                <option>Speakers</option>
                <option>Tablets</option>
              </select>
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for premium accessories..."
                className="flex-1 border border-gray-200 px-5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
              <button className="bg-blue-900 text-white hover:bg-blue-800 flex items-center justify-center px-6 rounded-r-full transition active:scale-95">
                <Search className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-1.5 sm:space-x-3.5">
            {/* Mobile Search Toggle */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 rounded-full text-gray-700 hover:bg-gray-100 transition"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Login / Register */}
            <a href="/log" className="flex items-center text-gray-700 hover:text-blue-950 p-2 rounded-full hover:bg-gray-100 transition">
              <User className="w-5 h-5 sm:mr-1.5" />
              <span className="hidden lg:inline text-sm font-semibold">Login/Register</span>
            </a>

            {/* Cart Icon Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full text-gray-700 hover:bg-gray-100 hover:text-blue-900 transition active:scale-90"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5.5 h-5.5" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xxs font-bold leading-none text-white transform translate-x-1/3 -translate-y-1/3 bg-red-500 rounded-full min-w-5 h-5 shadow-sm">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden border-t border-gray-150 px-4 py-3 bg-gray-50 animate-fadeIn">
            <div className="flex w-full">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search accessories..."
                className="flex-1 border border-gray-200 px-4 py-2.5 text-sm rounded-l-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-gray-800"
              />
              <button className="bg-blue-900 text-white flex items-center justify-center px-5 rounded-r-xl active:scale-95 transition">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Slide-in Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
          
          <div className="fixed inset-y-0 left-0 max-w-full flex">
            <div className="w-screen max-w-xs bg-white shadow-2xl flex flex-col justify-between transform transition duration-300">
              
              <div>
                {/* Mobile Drawer Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-150">
                  <a href="/" className="flex items-center space-x-2">
                    <div className="flex items-center justify-center rounded-lg w-8 h-8 bg-blue-900 text-white font-bold">
                      <span>XH</span>
                    </div>
                    <span className="font-extrabold text-gray-800 text-lg">
                      Xcessories Hub
                    </span>
                  </a>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="px-4 py-6 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Mobile Drawer Footer Info */}
              <div className="p-6 border-t border-gray-150 bg-gray-50">
                <p className="text-xs text-gray-500 text-center font-medium">© 2026 Xcessories Hub. All rights reserved.</p>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
