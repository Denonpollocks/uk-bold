import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Flight Deals from the UK – Compare Airline Offers & Save More',
  description: 'Explore cheap flight fares, Black Friday airline deals, standby tickets, and last-minute breaks from top airlines. Book with trusted UK travel platforms today.',
  keywords: 'flight deals, airline deals, cheap flights, black friday flights, last minute breaks, standby flights, UK flights, airfare deals',
};

export default function FlightDeals() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Grid Layout */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-24 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-4 h-full transform rotate-12 scale-150">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${2 + (i % 3)}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-pink-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-8 border border-white/20">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              ✨ Exclusive Flight Deals Hub
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Discover the Best
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Flight Deals
              </span>
              from the UK
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-12">
              Looking for cheap flight fares without spending hours comparing airline ticket prices? 
              You've landed in the right place. Our curated flight deals page brings you the most 
              up-to-date offers across major airlines, exclusive last-minute discounts, and seasonal 
              sales — all tailored for UK travellers.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { number: "500+", label: "Airlines", icon: "✈️" },
                { number: "70%", label: "Max Savings", icon: "💰" },
                { number: "24/7", label: "Support", icon: "🛟" },
                { number: "1M+", label: "Happy Travelers", icon: "😊" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/search" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Deals Now
              </Link>
              <Link 
                href="#latest-deals" 
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                View Latest Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Airline Deals Section */}
      <section id="latest-deals" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8 shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Latest Airline Deals You Don't Want to Miss
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Airfare doesn't have to break the bank. We track real-time airline deals so you can 
                get the lowest ticket prices on direct and connecting flights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  icon: "✈️",
                  title: "Exclusive Offers",
                  description: "Exclusive flight ticket offers from EasyJet, Qatar Airways, and Virgin Atlantic",
                  color: "blue",
                  image: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg"
                },
                {
                  icon: "🔁",
                  title: "Round-Trip Savings",
                  description: "Discounted round-trip airfare on popular UK–Europe routes",
                  color: "green",
                  image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
                },
                {
                  icon: "💺",
                  title: "Flexible Options",
                  description: "Cheap air fares with flexible booking options and add-ons",
                  color: "purple",
                  image: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg"
                },
                {
                  icon: "🟢",
                  title: "Daily Updates",
                  description: "See today's top airline deals updated regularly",
                  color: "orange",
                  image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
                }
              ].map((deal, index) => (
                <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={deal.image}
                      alt={deal.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 bg-${deal.color}-100 rounded-full flex items-center justify-center`}>
                        <span className="text-2xl">{deal.icon}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {deal.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {deal.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                href="/search" 
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                See today's top airline deals
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Black Friday Deals Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg"
            alt="Black Friday deals"
            fill
            className="object-cover opacity-10"
          />
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8 shadow-2xl animate-pulse">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Black Friday Airline Deals – Up to 60% Off
              </h2>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                Each November, we showcase the most aggressive flight discounts with our Black Friday 
                Flights collection. Save up to 60% on both economy and premium tickets.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
                <span className="text-red-500 mr-4 text-4xl">🔥</span>
                Expect deals on:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "✈️",
                    title: "British Airways, EasyJet & Finnair",
                    subtitle: "Premium & Budget Airlines",
                    color: "red"
                  },
                  {
                    icon: "🌍",
                    title: "Multi-city routes using Skyscanner",
                    subtitle: "Complex Itineraries",
                    color: "blue"
                  },
                  {
                    icon: "⚡",
                    title: "Flash sales from top travel agencies",
                    subtitle: "Limited Time Offers",
                    color: "purple"
                  }
                ].map((deal, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-20 h-20 bg-${deal.color}-100/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-4xl">{deal.icon}</span>
                    </div>
                    <h4 className="font-bold text-white mb-2 text-lg">{deal.title}</h4>
                    <p className="text-gray-300 text-sm">{deal.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/flight-deals/black-friday-flight-deals" 
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Explore Black Friday flight offers
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Last-Minute Breaks Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 to-red-50/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-8 shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Last-Minute Breaks for the Spontaneous Traveler
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Craving a spontaneous getaway? Whether it's a sunny beach or a quick weekend escape, 
                  our last-minute flight deals section helps you get away fast — without overspending.
                </p>
                
                <div className="space-y-6 mb-8">
                  {[
                    {
                      icon: "⚡",
                      title: "British Airways Last-Minute",
                      description: "British Airways last-minute breaks with hotel bundles",
                      color: "orange"
                    },
                    {
                      icon: "✈️",
                      title: "Standby Flights",
                      description: "Standby flights available at discounted rates",
                      color: "blue"
                    },
                    {
                      icon: "🤝",
                      title: "Partnered Offers",
                      description: "Partnered offers from trusted UK travel agencies",
                      color: "green"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href="/last-minute-deals" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-full hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Browse Last-Minute Flight Deals
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="relative">
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
                    alt="Last minute travel"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Floating cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Same Day</div>
                      <div className="text-sm text-gray-600">Departures</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">60% Off</div>
                      <div className="text-sm text-gray-600">Max Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cheap Flights by City Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-8 shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Cheap Flights from the UK – By City & Season
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Whether you're flying from London, Manchester, or Glasgow, we find low-cost flights 
                near you. Our system automatically displays cheap flights from the UK by departure 
                city, season, and booking trend.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center">
                <span className="text-yellow-500 mr-4 text-4xl">⭐</span>
                What makes this page unique:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "📍",
                    title: "Localized Filtering",
                    subtitle: "\"Flights near me\" filtering",
                    color: "yellow"
                  },
                  {
                    icon: "💰",
                    title: "Price Breakdown",
                    subtitle: "By airfare class",
                    color: "green"
                  },
                  {
                    icon: "🏢",
                    title: "Top Agency Offers",
                    subtitle: "Top UK travel agency offers included",
                    color: "blue"
                  }
                ].map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-20 h-20 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/city-flights" 
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold text-lg rounded-full hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Compare Cheap Flights from Your City
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-City Deals Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg"
                    alt="Multi-city travel"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <span className="text-2xl">🌍</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shadow-xl animate-pulse" style={{ animationDelay: '1s' }}>
                  <span className="text-xl">✈️</span>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-8 shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Multi-City & Flexible Travel Deals
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  For those who love hopping cities or need complex itineraries, we've partnered with 
                  leading tools like Skyscanner's multi-city planner to build flexible routes. Save 
                  money by bundling flights and maximize value.
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-purple-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-purple-600 mr-3 text-3xl">👨‍💼</span>
                    Ideal for:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: "💻",
                        title: "Digital Nomads",
                        subtitle: "and long-term travellers"
                      },
                      {
                        icon: "🏢",
                        title: "Corporate Travel",
                        subtitle: "booking companies"
                      },
                      {
                        icon: "👨‍👩‍👧‍👦",
                        title: "Group Bookings",
                        subtitle: "and family bookings"
                      }
                    ].map((type, index) => (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">{type.icon}</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">{type.title}</h4>
                        <p className="text-gray-600 text-sm">{type.subtitle}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href="/multi-city" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Planning Your Multi-City Trip
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8 shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                FAQs – Everything About Flight Deals
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to the most common questions about booking flight deals
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What's the cheapest time to buy flights?",
                  answer: "Most airlines release their lowest prices around 6–8 weeks in advance. For more detail, see our Best Time to Book Flights guide."
                },
                {
                  question: "Can I trust standby flight deals?",
                  answer: "Absolutely. We only show offers from verified airline partners and agencies with clear cancellation policies."
                },
                {
                  question: "Do you offer corporate travel deals?",
                  answer: "Yes! Check out our corporate travel booking options."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-indigo-600 mr-3 text-2xl">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed ml-8">
                    <span className="text-green-600 font-semibold mr-2">A:</span>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
            alt="Flight booking"
            fill
            className="object-cover opacity-10"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8 shadow-2xl animate-pulse">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Book Your Next Flight Deal?
            </h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              From cheap air fares and Black Friday offers to last-minute escapes, we've got the 
              perfect deal for you. Search, compare, and fly smarter with the UK's trusted travel 
              deal finder.
            </p>
            <Link 
              href="/search" 
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Compare Deals Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}