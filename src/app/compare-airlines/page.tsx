import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { airlines } from '@/data/airlines';

export const metadata: Metadata = {
  title: 'Compare Airlines – British Airways, EasyJet, Qatar & More | Halo Flights',
  description: 'Compare flights from top airlines like British Airways, EasyJet, Qatar Airways, Virgin Atlantic and more. Find the best fares, services, and routes from the UK.',
  keywords: 'compare airlines, british airways flights, easyjet flights, qatar airways flights, virgin atlantic, cheap air fares, airline ticket offers, best airlines to fly, travel travel agency, best online travel agency',
};

export default function CompareAirlinesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20" style={{ backgroundColor: '#dc0069' }}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg"
            alt="Compare airlines"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-8 border border-white/20">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              ✈️ Airline Comparison Hub
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Compare Airlines
              <span className="block text-yellow-400">
                Fares & Features
              </span>
              from the UK
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-12">
              Compare airline ticket prices, cabin features, luggage policies, and last-minute offers from top airlines flying from the UK. Whether you're looking for cheap air fares, premium comfort, or flexible booking, we've got you covered.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { number: "50+", label: "Airlines", icon: "✈️" },
                { number: "200+", label: "Routes", icon: "🌍" },
                { number: "24/7", label: "Support", icon: "🛟" },
                { number: "Best", label: "Prices", icon: "💰" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/search" 
                className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Compare Flights Now
              </Link>
              <Link 
                href="#airline-comparison" 
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                View Comparison
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Airline Comparison Table Section */}
      <section id="airline-comparison" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-2xl" style={{ backgroundColor: '#dc0069' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Top Airline Comparison
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Compare the most popular airlines flying from the UK. See pricing, routes, and what's included in your ticket.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: '#dc0069' }}>
                      <th className="p-6 text-left text-white font-semibold">Airline</th>
                      <th className="p-6 text-left text-white font-semibold">Popular Route</th>
                      <th className="p-6 text-left text-white font-semibold">Economy Fare From</th>
                      <th className="p-6 text-left text-white font-semibold">Baggage Included</th>
                      <th className="p-6 text-left text-white font-semibold">Flexibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                            <span className="text-blue-600 font-bold text-sm">BA</span>
                          </div>
                          <span className="font-semibold text-gray-900">British Airways</span>
                        </div>
                      </td>
                      <td className="p-6 text-gray-900">London ✈ NYC</td>
                      <td className="p-6 text-green-600 font-bold text-lg">£399</td>
                      <td className="p-6 text-gray-900">Yes</td>
                      <td className="p-6">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Moderate</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                            <span className="text-orange-600 font-bold text-sm">EJ</span>
                          </div>
                          <span className="font-semibold text-gray-900">EasyJet</span>
                        </div>
                      </td>
                      <td className="p-6 text-gray-900">UK ✈ EU Cities</td>
                      <td className="p-6 text-green-600 font-bold text-lg">£29</td>
                      <td className="p-6 text-gray-900">Carry-on only</td>
                      <td className="p-6">
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Low</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                            <span className="text-purple-600 font-bold text-sm">QR</span>
                          </div>
                          <span className="font-semibold text-gray-900">Qatar Airways</span>
                        </div>
                      </td>
                      <td className="p-6 text-gray-900">London ✈ Bangkok</td>
                      <td className="p-6 text-green-600 font-bold text-lg">£499</td>
                      <td className="p-6 text-gray-900">Yes</td>
                      <td className="p-6">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">High</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                            <span className="text-red-600 font-bold text-sm">VA</span>
                          </div>
                          <span className="font-semibold text-gray-900">Virgin Atlantic</span>
                        </div>
                      </td>
                      <td className="p-6 text-gray-900">London ✈ Dubai</td>
                      <td className="p-6 text-green-600 font-bold text-lg">£449</td>
                      <td className="p-6 text-gray-900">Yes</td>
                      <td className="p-6">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Moderate</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/search" 
                className="inline-flex items-center px-10 py-5 text-white font-bold text-lg rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                style={{ backgroundColor: '#dc0069' }}
              >
                Start Comparing Flights
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Airline Highlights Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-2xl" style={{ backgroundColor: '#dc0069' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Airline Highlights
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover what makes each airline unique and find the perfect match for your travel style.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {airlines.slice(0, 6).map((airline, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg"
                      alt={airline.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {airline.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                      {airline.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {airline.description}
                    </p>
                    <Link 
                      href={`/compare-airlines/${airline.slug}`} 
                      className="inline-flex items-center font-medium group-hover:translate-x-1 transition-transform"
                      style={{ color: '#dc0069' }}
                    >
                      Learn more about {airline.name}
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                href="/search" 
                className="inline-flex items-center px-10 py-5 text-white font-bold text-lg rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                style={{ backgroundColor: '#dc0069' }}
              >
                View All Airlines
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Tips Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 shadow-2xl" style={{ backgroundColor: '#dc0069' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Tips for Booking with Top Airlines
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Always compare airline ticket offers, look out for low fare flights during seasonal sales, and use tools like Skyscanner multi-city search. Bundle with a trusted travel agency for best value.
                </p>
                
                <div className="space-y-6 mb-8">
                  {[
                    {
                      icon: "💰",
                      title: "Compare Prices",
                      description: "Always check multiple airlines for the same route to find the best deals"
                    },
                    {
                      icon: "📅",
                      title: "Book in Advance",
                      description: "Book 6-8 weeks ahead for domestic flights, 8-12 weeks for international"
                    },
                    {
                      icon: "🎯",
                      title: "Be Flexible",
                      description: "Flexible dates can save you up to 40% on your airfare"
                    }
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">{tip.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                        <p className="text-gray-600">{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href="/best-time-to-book" 
                  className="inline-flex items-center px-8 py-4 text-white font-bold text-lg rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{ backgroundColor: '#dc0069' }}
                >
                  When to Book for the Best Price
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="relative">
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
                    alt="Booking tips"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Save 40%</div>
                      <div className="text-sm text-gray-600">With Flexible Dates</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Best Price</div>
                      <div className="text-sm text-gray-600">Guarantee</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Airlines Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-2xl" style={{ backgroundColor: '#dc0069' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Popular Airlines from the UK
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Choose from our selection of trusted airlines, each offering unique benefits and routes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
              {airlines.map((airline, index) => (
                <Link
                  key={index}
                  href={`/compare-airlines/${airline.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-100 transition-colors">
                    <span className="font-bold text-lg group-hover:text-pink-600 transition-colors" style={{ color: '#dc0069' }}>
                      {airline.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    {airline.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {airline.features[0]}
                  </p>
                </Link>
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                href="/search" 
                className="inline-flex items-center px-10 py-5 text-white font-bold text-lg rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                style={{ backgroundColor: '#dc0069' }}
              >
                Compare All Airlines
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#dc0069' }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
            alt="Compare and book"
            fill
            className="object-cover opacity-10"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-8 shadow-2xl animate-pulse">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Compare and Book?
            </h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Use our search tool to compare real-time prices from all top UK airlines. Find the perfect balance of price, comfort, and convenience for your next journey.
            </p>
            <Link 
              href="/search" 
              className="inline-flex items-center px-12 py-6 bg-yellow-400 text-black font-bold text-xl rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search Flights Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}