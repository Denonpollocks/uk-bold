"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navigationItems = [
    { href: '/', label: 'Search Flights', icon: '🔍' },
    { href: '/flight-deals', label: 'Flight Deals', icon: '💰' },
    { href: '/compare-airlines', label: 'Compare Airlines', icon: '✈️' },
    { href: '/best-time-to-book', label: 'Best Time to Book', icon: '📅' },
    { href: '/travel-agencies', label: 'Travel Agencies', icon: '🏢' },
    { href: '/blog', label: 'Blog', icon: '📝' },
    { href: '/about', label: 'About Us', icon: 'ℹ️' },
    { href: '/contact', label: 'Contact', icon: '📞' },
  ];

  return (
    <header className="bg-white shadow-sm relative z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#dc0069' }}>
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Halo Flights</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm transition-colors duration-200 ${isActive('/') ? 'font-semibold' : 'text-gray-700 hover:text-pink-600'}`}
              style={isActive('/') ? { color: '#dc0069' } : {}}
            >
              Search Flights
            </Link>
            <Link 
              href="/flight-deals" 
              className={`text-sm transition-colors duration-200 ${isActive('/flight-deals') ? 'font-semibold' : 'text-gray-700 hover:text-pink-600'}`}
              style={isActive('/flight-deals') ? { color: '#dc0069' } : {}}
            >
              Flight Deals
            </Link>
            <Link 
              href="/compare-airlines" 
              className={`text-sm transition-colors duration-200 ${isActive('/compare-airlines') ? 'font-semibold' : 'text-gray-700 hover:text-pink-600'}`}
              style={isActive('/compare-airlines') ? { color: '#dc0069' } : {}}
            >
              Compare Airlines
            </Link>
            <Link 
              href="/best-time-to-book" 
              className={`text-sm transition-colors duration-200 ${isActive('/best-time-to-book') ? 'font-semibold' : 'text-gray-700 hover:text-pink-600'}`}
              style={isActive('/best-time-to-book') ? { color: '#dc0069' } : {}}
            >
              Best Time to Book
            </Link>
            <Link 
              href="/travel-agencies" 
              className={`text-sm transition-colors duration-200 ${isActive('/travel-agencies') ? 'font-semibold' : 'text-gray-700 hover:text-pink-600'}`}
              style={isActive('/travel-agencies') ? { color: '#dc0069' } : {}}
            >
              Travel Agencies
            </Link>
            <Link 
              href="/blog" 
              className={`text-sm transition-colors duration-200 ${isActive('/blog') ? 'font-semibold' : 'text-gray-700 hover:text-pink-600'}`}
              style={isActive('/blog') ? { color: '#dc0069' } : {}}
            >
              Blog
            </Link>
            
            <Link 
              href="/about" 
              className={`text-sm transition-colors duration-200 ${isActive('/about') ? 'font-semibold' : 'text-gray-700 hover:text-pink-600'}`}
              style={isActive('/about') ? { color: '#dc0069' } : {}}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm transition-colors duration-200 ${isActive('/contact') ? 'font-semibold' : 'text-gray-700 hover:text-pink-600'}`}
              style={isActive('/contact') ? { color: '#dc0069' } : {}}
            >
              Contact
            </Link>
            <button className="text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg" style={{ backgroundColor: '#dc0069' }}>
              My Bookings
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ focusRingColor: '#dc0069' }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />
        )}

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Mobile Menu Header */}
          <div className="px-6 py-6" style={{ background: 'linear-gradient(135deg, #dc0069 0%, #b8005a 100%)' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <div>
                  <h2 className="text-white font-bold text-lg">Halo Flights</h2>
                  <p className="text-pink-100 text-sm">Your travel companion</p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <div className="px-6 py-6 flex-1 overflow-y-auto">
            {/* Quick Actions */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="text-white p-4 rounded-xl text-center hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg" style={{ backgroundColor: '#dc0069' }}>
                  <div className="text-2xl mb-2">✈️</div>
                  <div className="text-sm font-medium">Search Flights</div>
                </button>
                <button className="bg-green-500 text-white p-4 rounded-xl text-center hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  <div className="text-2xl mb-2">📋</div>
                  <div className="text-sm font-medium">My Bookings</div>
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Navigation</h3>
              <div className="space-y-2">
                {navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center space-x-4 p-3 rounded-xl transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-white border-l-4 shadow-lg'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    style={isActive(item.href) ? { 
                      backgroundColor: '#dc0069', 
                      borderLeftColor: '#b8005a' 
                    } : {}}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                    {isActive(item.href) && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Support Section */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Support</h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Need Help?</h4>
                    <p className="text-sm text-gray-600">24/7 Customer Support</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-white text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
                    Chat
                  </button>
                  <button className="flex-1 bg-white text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
                    Call
                  </button>
                </div>
              </div>
            </div>

            {/* App Download */}
            <div className="rounded-xl p-4 text-white" style={{ background: 'linear-gradient(135deg, #dc0069 0%, #b8005a 100%)' }}>
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-2xl">📱</div>
                <div>
                  <h4 className="font-semibold">Download Our App</h4>
                  <p className="text-sm text-pink-100">Get exclusive mobile deals</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-white/20 hover:bg-white/30 py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200">
                  iOS
                </button>
                <button className="flex-1 bg-white/20 hover:bg-white/30 py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200">
                  Android
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>© 2024 Halo Flights</span>
              <div className="flex space-x-4">
                <button className="transition-colors duration-200" style={{ color: '#dc0069' }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="transition-colors duration-200" style={{ color: '#dc0069' }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button className="transition-colors duration-200" style={{ color: '#dc0069' }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}