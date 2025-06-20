import { airlines } from '@/data/airlines';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return airlines.map((airline) => ({ slug: airline.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const airline = airlines.find((a) => a.slug === params.slug);
  if (!airline) return { title: 'Airline Not Found' };

  return {
    title: `${airline.name} Flights – Compare Routes & Fares | Halo Flights`,
    description: `Discover ${airline.name} flights, popular routes, booking tips, and airfare comparisons. Get the best deals from the UK.`,
    keywords: `${airline.name.toLowerCase()} flights, airline ticket offers, cheap air fares, compare airlines, book flights from UK`
  };
}

export default function AirlinePage({ params }: { params: { slug: string } }) {
  const airline = airlines.find((a) => a.slug === params.slug);

  if (!airline) return notFound();

  return (
    <main className="bg-white">
      {/* Hero Section with Interactive Elements */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#dc0069' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg"
            alt={`${airline.name} flights`}
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-yellow-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-8 border border-white/20">
                  <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  ✈️ Premium Airline Partner
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {airline.name}
                  <span className="block text-yellow-400 text-3xl md:text-4xl mt-2">
                    Flight Experience
                  </span>
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed mb-8">
                  {airline.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/search" 
                    className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search {airline.name} Flights
                  </Link>
                  <Link 
                    href="#routes" 
                    className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30"
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    View Routes
                  </Link>
                </div>
              </div>

              <div className="relative">
                {/* Interactive Airline Logo/Badge */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <span className="text-6xl font-bold" style={{ color: '#dc0069' }}>
                        {airline.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{airline.name}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 rounded-xl p-4">
                        <div className="text-2xl font-bold text-yellow-400">50+</div>
                        <div className="text-white text-sm">Destinations</div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-4">
                        <div className="text-2xl font-bold text-yellow-400">4.5★</div>
                        <div className="text-white text-sm">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Info Cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 animate-pulse">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Verified</div>
                      <div className="text-xs text-gray-600">Partner</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 animate-pulse" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Best Price</div>
                      <div className="text-xs text-gray-600">Guarantee</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Showcase */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-2xl" style={{ backgroundColor: '#dc0069' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose {airline.name}?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover the unique features and benefits that make {airline.name} stand out from the competition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {airline.features.map((feature, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#dc0069' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">
                      {index === 0 ? '✈️' : index === 1 ? '🎯' : '⭐'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                    {feature}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Experience premium service with {airline.name}'s commitment to excellence and customer satisfaction.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Routes Section */}
      <section id="routes" className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-2xl" style={{ backgroundColor: '#dc0069' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Popular Routes with {airline.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Explore the most popular destinations and routes available with {airline.name} from the UK.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {airline.routes.map((route, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
                      alt={`${route.from} to ${route.to}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div>
                          <div className="text-lg font-bold">{route.from}</div>
                          <div className="text-sm opacity-90">Departure</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-px bg-white mx-2"></div>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                          <div className="w-8 h-px bg-white mx-2"></div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{route.to}</div>
                          <div className="text-sm opacity-90">Arrival</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                        {route.from} → {route.to}
                      </h3>
                      <div className="text-2xl font-bold" style={{ color: '#dc0069' }}>
                        {route.fare}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>✈️ Direct flights available</span>
                      <span>⏱️ 2-8 hours</span>
                    </div>
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
                Book {airline.name} Flights
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Booking Tips */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg"
                    alt="Booking tips"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Interactive Tip Cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 text-lg">💡</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Pro Tip</div>
                      <div className="text-xs text-gray-600">Book Early</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-lg">💰</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Save 25%</div>
                      <div className="text-xs text-gray-600">Flexible Dates</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 shadow-2xl" style={{ backgroundColor: '#dc0069' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Tips for Booking {airline.name} Flights
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  To get the best fares on {airline.name}, book your tickets at least 6–8 weeks in advance. Use mid-week departure dates and avoid peak holiday periods for optimal pricing.
                </p>
                
                <div className="space-y-6 mb-8">
                  {[
                    {
                      icon: "📅",
                      title: "Book 6-8 Weeks Ahead",
                      description: "Get the best prices by booking in advance for domestic and European flights"
                    },
                    {
                      icon: "💰",
                      title: "Flexible Dates Save 25%",
                      description: "Use flexible date options to find the cheapest travel days"
                    },
                    {
                      icon: "🎯",
                      title: "Bundle for Extra Savings",
                      description: "Combine flights with hotels for additional discounts and convenience"
                    }
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{tip.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">{tip.title}</h3>
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
                  Read Our Flight Timing Guide
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-2xl" style={{ backgroundColor: '#dc0069' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                FAQs about {airline.name}
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to the most common questions about flying with {airline.name}
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: `Is ${airline.name} a budget or premium airline?`,
                  answer: `${airline.name} is known for ${airline.features[0].toLowerCase()}, offering a mix of economy and premium travel options with excellent value for money.`
                },
                {
                  question: `Can I book last-minute flights with ${airline.name}?`,
                  answer: `Yes, many of our partners offer last-minute ${airline.name} flights. Visit our Last-Minute Deals section for the latest availability and special offers.`
                },
                {
                  question: `Does ${airline.name} include baggage in ticket prices?`,
                  answer: `Most routes include carry-on baggage. For checked baggage, review your fare class during booking or compare with other airlines on our airline comparison page.`
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start group-hover:text-pink-600 transition-colors">
                    <span className="mr-3 text-2xl" style={{ color: '#dc0069' }}>Q:</span>
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

      {/* Explore More Airlines */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-2xl" style={{ backgroundColor: '#dc0069' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Explore More Airlines
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Compare {airline.name} with other top airlines to find the perfect match for your travel needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {airlines
                .filter((a) => a.slug !== params.slug)
                .slice(0, 8)
                .map((a) => (
                  <Link
                    key={a.slug}
                    href={`/compare-airlines/${a.slug}`}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-100 transition-colors">
                      <span className="font-bold text-lg group-hover:text-pink-600 transition-colors" style={{ color: '#dc0069' }}>
                        {a.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                      {a.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Compare flights →
                    </p>
                  </Link>
                ))}
            </div>
            
            <div className="text-center">
              <Link 
                href="/compare-airlines" 
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

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#dc0069' }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
            alt="Book flights"
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
              Ready to Book Your {airline.name} Flight?
            </h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Compare prices, routes, and fare types instantly. Booking smarter starts here with {airline.name} and our trusted travel partners.
            </p>
            <Link 
              href="/search" 
              className="inline-flex items-center px-12 py-6 bg-yellow-400 text-black font-bold text-xl rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search {airline.name} Flights
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}