import { Metadata } from 'next';
import { homeData } from '../data/homeData';
import HeroSection from '../components/HeroSection';
import PopularDestinations from '../components/PopularDestinations';
import NewsletterSection from '../components/NewsletterSection';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Halo Flights - Book Cheap Flights & Airline Tickets',
  description: 'Find and book cheap flights, airline tickets, and last-minute flights worldwide. Compare flight deals from leading airlines and travel agents.',
  keywords: 'cheap flights, airline tickets, flight booking, international flights, flight deals, cheap airline tickets, last minute flights, standby flights, black friday flights, flights near me, google flight tickets, travel travel agency, best online travel agency, cheapest days to fly',
};

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection {...homeData.hero} />
      <PopularDestinations destinations={homeData.popularDestinations} />

      {/* Featured Flight Deals */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">This Week's Featured Flight Deals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover limited-time flight ticket offers, cheap air fares, and low fare flights from top airlines. 
              Handpicked deals updated daily for the savvy traveler.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-48 rounded-t-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg"
                  alt="Flight deals"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Hot Deal
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">London to Dubai</h3>
                <p className="text-gray-600 mb-4">Direct flights from £299</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">£299</span>
                  <span className="text-sm text-gray-500 line-through">£450</span>
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-48 rounded-t-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
                  alt="Flight deals"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Best Value
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Manchester to Barcelona</h3>
                <p className="text-gray-600 mb-4">Weekend getaway from £89</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">£89</span>
                  <span className="text-sm text-gray-500 line-through">£150</span>
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-48 rounded-t-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
                  alt="Flight deals"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Limited Time
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Birmingham to Rome</h3>
                <p className="text-gray-600 mb-4">Cultural escape from £129</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">£129</span>
                  <span className="text-sm text-gray-500 line-through">£220</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/flight-deals" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore All Flight Deals
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Cheap Flights from UK */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Cheap Flights from the UK</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Compare cheap flight fares and book flights near you from airports like London, Manchester, and Birmingham. 
                Our intelligent search finds the best deals from your local airport.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Airlines</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">£29</div>
                  <div className="text-gray-600">From</div>
                </div>
              </div>
              
              <Link 
                href="/flight-deals/cheap-flights-from-uk" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Find Cheap Flights Near You
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg"
                  alt="UK airports"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Best Price Guarantee</div>
                    <div className="text-sm text-gray-600">We'll match any lower price</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Minute Flights */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 to-red-50/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
                  alt="Last minute travel"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">24/7 Support</div>
                    <div className="text-sm text-gray-600">Always here to help</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Last-Minute & Standby Flights</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Browse standby flights and last-minute deals including British Airways last minute breaks and flexible getaway options. 
                Perfect for spontaneous adventures.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4 bg-white rounded-xl p-4 shadow-md border border-gray-100">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Same-day departures available</div>
                    <div className="text-sm text-gray-600">Book and fly today</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-white rounded-xl p-4 shadow-md border border-gray-100">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Up to 60% off regular prices</div>
                    <div className="text-sm text-gray-600">Massive savings on unsold seats</div>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/flight-deals/last-minute" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Last-Minute Deals
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Black Friday Specials */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg"
            alt="Black Friday deals"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Black Friday Airline Deals</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Unlock exclusive discounts on black friday flights and airline ticket prices for your favourite routes. 
              Limited time offers with savings up to 70% off.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">70%</div>
                <div className="text-white font-semibold mb-2">OFF</div>
                <div className="text-gray-300 text-sm">Selected Routes</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24H</div>
                <div className="text-white font-semibold mb-2">FLASH SALES</div>
                <div className="text-gray-300 text-sm">Limited Time Only</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-white font-semibold mb-2">AIRLINES</div>
                <div className="text-gray-300 text-sm">Participating</div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/flight-deals/black-friday" 
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              See Black Friday Flight Deals
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Time to Book */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">When is the Best Time to Book Flights?</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Learn when to book flights to get the best prices. Discover the cheapest days to fly and the cheapest month to book flights from the UK. 
                Our data-driven insights save you hundreds.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Tuesday & Wednesday Bookings</h3>
                    <p className="text-gray-600">Save up to 25% by booking mid-week when demand is lower</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">6-8 Weeks in Advance</h3>
                    <p className="text-gray-600">The sweet spot for domestic and European flights</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Off-Peak Seasons</h3>
                    <p className="text-gray-600">January, February, and November offer the best deals</p>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/best-time-to-book-flights" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Read the Full Booking Guide
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
                  alt="Best time to book"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">35%</div>
                  <div className="text-sm text-gray-600">Average Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airline Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Compare Airlines and Save</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Compare Google flight tickets and fares from British Airways, EasyJet, Virgin Atlantic, and Qatar Airways all in one place. 
              Find the perfect balance of price, comfort, and convenience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-600 font-bold text-lg">BA</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">British Airways</h3>
                <p className="text-sm text-gray-600">Premium Service</p>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-orange-600 font-bold text-lg">EJ</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">EasyJet</h3>
                <p className="text-sm text-gray-600">Budget Friendly</p>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-purple-600 font-bold text-lg">QR</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Qatar Airways</h3>
                <p className="text-sm text-gray-600">Luxury Travel</p>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <span className="text-red-600 font-bold text-lg">VA</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Virgin Atlantic</h3>
                <p className="text-sm text-gray-600">Style & Service</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/compare-airlines" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Comparing Airlines
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Travel Tips and Insights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Expert Travel Tips</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insider knowledge from travel professionals to help you book smarter and travel better.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeData.expertTips.tips.map((tip, index) => (
              <article key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
                    alt={tip.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Expert Tip
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">{tip.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{tip.content}</p>
                  <a href="#" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group-hover:translate-x-1 transition-transform">
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & Trust Section */}
      <NewsletterSection {...homeData.newsletter} />
    </main>
  );
}