"use client";

import { useState, useRef, useEffect } from "react";
import { FlightSearchRequest } from "../types";
import { api } from "../lib/api";
import Calendar from "./Calendar";
import { format } from "date-fns";

export default function FlightSearch({ onSearch }: { onSearch: (results: any) => void }) {
  const [searchData, setSearchData] = useState<FlightSearchRequest>({
    tripType: "RT",
    origin: "",
    destination: "",
    departDate: format(new Date(), "yyyy-MM-dd"),
    arrivalDate: format(new Date(), "yyyy-MM-dd"),
    class: "Economy",
    isFlexibleDate: false,
    isDirectFlight: false,
    airlineCode: "",
    passengers: {
      adults: 2,
      children: 2,
      infants: 0,
      youth: 0,
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showDepartCalendar, setShowDepartCalendar] = useState(false);
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);
  const [showPassengersDropdown, setShowPassengersDropdown] = useState(false);
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const [departDate, setDepartDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(new Date());
  const [airlines, setAirlines] = useState<Array<{airlineCode: string, airlineName: string}>>([
    { airlineCode: "EK", airlineName: "Emirates" },
    { airlineCode: "BA", airlineName: "British Airways" },
    { airlineCode: "QR", airlineName: "Qatar Airways" },
    { airlineCode: "TK", airlineName: "Turkish Airlines" },
    { airlineCode: "LH", airlineName: "Lufthansa" }
  ]);

  const [originSuggestions, setOriginSuggestions] = useState<string[]>([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState<string[]>([]);
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);
  const originInputRef = useRef<HTMLInputElement>(null);
  const destinationInputRef = useRef<HTMLInputElement>(null);
  const passengersRef = useRef<HTMLDivElement>(null);
  const classRef = useRef<HTMLDivElement>(null);
  const departCalendarRef = useRef<HTMLDivElement>(null);
  const returnCalendarRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (passengersRef.current && !passengersRef.current.contains(event.target as Node)) {
        setShowPassengersDropdown(false);
      }
      if (classRef.current && !classRef.current.contains(event.target as Node)) {
        setShowClassDropdown(false);
      }
      if (departCalendarRef.current && !departCalendarRef.current.contains(event.target as Node)) {
        setShowDepartCalendar(false);
      }
      if (returnCalendarRef.current && !returnCalendarRef.current.contains(event.target as Node)) {
        setShowReturnCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    setError("");

    try {
      const requestData = {
        ...searchData,
        departDate: format(departDate!, "dd MMM yyyy").toUpperCase(),
        arrivalDate: searchData.tripType === "RT" ? format(returnDate!, "dd MMM yyyy").toUpperCase() : ""
      };

      console.log("Sending search request:", JSON.stringify(requestData, null, 2));

      const response = await api.searchFlights(requestData);
      if (response.success) {
        onSearch(response.data);
      } else {
        setError(response.error || "Search failed");
      }
    } catch (err) {
      setError("An error occurred during search");
    } finally {
      setLoading(false);
    }
  };

  const handleDepartDateSelect = (date: Date) => {
    setDepartDate(date);
    setShowDepartCalendar(false);
    setSearchData(prev => ({ ...prev, departDate: format(date, "yyyy-MM-dd") }));
  };

  const handleReturnDateSelect = (date: Date) => {
    setReturnDate(date);
    setShowReturnCalendar(false);
    setSearchData(prev => ({ ...prev, arrivalDate: format(date, "yyyy-MM-dd") }));
  };

  const handleSwapLocations = () => {
    setSearchData(prev => ({
      ...prev,
      origin: prev.destination,
      destination: prev.origin
    }));
  };

  const getTotalPassengers = () => {
    const { adults, children, infants, youth } = searchData.passengers;
    return adults + children + infants + youth;
  };

  const getPassengerText = () => {
    const { adults, children, infants, youth } = searchData.passengers;
    const total = adults + children + infants + youth;
    if (total === 1) return "1 passenger";
    if (adults > 0 && children === 0 && infants === 0 && youth === 0) {
      return `${adults} adult${adults > 1 ? 's' : ''}`;
    }
    return `${total} passengers`;
  };

  const handleOriginChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setSearchData({ ...searchData, origin: value });
    if (value.length >= 2) {
      const res = await api.getCities(value);
      setOriginSuggestions(res.data?.map((item: any) => item.AIRPORT) || []);
      setShowOriginSuggestions(true);
    } else {
      setOriginSuggestions([]);
      setShowOriginSuggestions(false);
    }
  };

  const handleDestinationChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setSearchData({ ...searchData, destination: value });
    if (value.length >= 2) {
      const res = await api.getCities(value);
      setDestinationSuggestions(res.data?.map((item: any) => item.AIRPORT) || []);
      setShowDestinationSuggestions(true);
    } else {
      setDestinationSuggestions([]);
      setShowDestinationSuggestions(false);
    }
  };

  const handleOriginSelect = (airport: string) => {
    const codeMatch = airport.match(/\[(\w{3})\]/);
    setSearchData({ ...searchData, origin: codeMatch ? codeMatch[1] : airport });
    setShowOriginSuggestions(false);
    setOriginSuggestions([]);
    if (originInputRef.current) originInputRef.current.blur();
  };

  const handleDestinationSelect = (airport: string) => {
    const codeMatch = airport.match(/\[(\w{3})\]/);
    setSearchData({ ...searchData, destination: codeMatch ? codeMatch[1] : airport });
    setShowDestinationSuggestions(false);
    setDestinationSuggestions([]);
    if (destinationInputRef.current) destinationInputRef.current.blur();
  };

  const updatePassengerCount = (type: keyof typeof searchData.passengers, increment: boolean) => {
    setSearchData(prev => ({
      ...prev,
      passengers: {
        ...prev.passengers,
        [type]: increment 
          ? prev.passengers[type] + 1 
          : Math.max(type === 'adults' ? 1 : 0, prev.passengers[type] - 1)
      }
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden max-w-6xl mx-auto">
      {/* Trip Type Tabs */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-6 py-4">
        <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1 w-fit">
          {[
            { value: "RT", label: "Round trip", icon: "⇄" },
            { value: "OW", label: "One way", icon: "→" },
            { value: "MT", label: "Multi-city", icon: "⚡" }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setSearchData(prev => ({ ...prev, tripType: option.value as any }))}
              className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 flex items-center space-x-1 sm:space-x-2 ${
                searchData.tripType === option.value
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <span className="text-sm sm:text-base">{option.icon}</span>
              <span className="hidden sm:inline">{option.label}</span>
              <span className="sm:hidden">{option.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg mb-4 flex items-center text-sm">
            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        {/* Main Search Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-end">
          {/* Origin */}
          <div className="lg:col-span-3 relative">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              From
            </label>
            <div className="relative">
              <input
                ref={originInputRef}
                type="text"
                placeholder="City or airport"
                value={searchData.origin}
                onChange={handleOriginChange}
                onFocus={() => setShowOriginSuggestions(originSuggestions.length > 0)}
                className="w-full h-10 sm:h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 text-sm sm:text-base font-medium placeholder-gray-400 transition-all duration-200 hover:border-gray-300"
                autoComplete="off"
              />
              {showOriginSuggestions && originSuggestions.length > 0 && (
                <div className="absolute z-50 w-full bg-white border border-gray-200 rounded-lg mt-1 shadow-xl max-h-48 overflow-auto">
                  {originSuggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      className="w-full px-3 py-2 text-left hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0 flex items-center text-sm"
                      onClick={() => handleOriginSelect(suggestion)}
                    >
                      <svg className="w-3 h-3 mr-2 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span className="text-gray-700 truncate">{suggestion}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Swap Button */}
          <div className="lg:col-span-1 flex justify-center order-3 lg:order-2">
            <button
              onClick={handleSwapLocations}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 hover:rotate-180"
            >
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
          </div>

          {/* Destination */}
          <div className="lg:col-span-3 relative order-2 lg:order-3">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              To
            </label>
            <div className="relative">
              <input
                ref={destinationInputRef}
                type="text"
                placeholder="City or airport"
                value={searchData.destination}
                onChange={handleDestinationChange}
                onFocus={() => setShowDestinationSuggestions(destinationSuggestions.length > 0)}
                className="w-full h-10 sm:h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 text-sm sm:text-base font-medium placeholder-gray-400 transition-all duration-200 hover:border-gray-300"
                autoComplete="off"
              />
              {showDestinationSuggestions && destinationSuggestions.length > 0 && (
                <div className="absolute z-50 w-full bg-white border border-gray-200 rounded-lg mt-1 shadow-xl max-h-48 overflow-auto">
                  {destinationSuggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      className="w-full px-3 py-2 text-left hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0 flex items-center text-sm"
                      onClick={() => handleDestinationSelect(suggestion)}
                    >
                      <svg className="w-3 h-3 mr-2 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span className="text-gray-700 truncate">{suggestion}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Departure Date */}
          <div className="lg:col-span-2 relative order-4" ref={departCalendarRef}>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Departure
            </label>
            <button
              onClick={() => setShowDepartCalendar(!showDepartCalendar)}
              className="w-full h-10 sm:h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 text-left text-sm sm:text-base font-medium transition-all duration-200 hover:border-gray-300 flex items-center justify-between"
            >
              <span className="text-gray-700 truncate">
                {departDate ? format(departDate, "MMM d, yyyy") : "Select date"}
              </span>
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showDepartCalendar && (
              <div className="absolute z-50 mt-1">
                <Calendar
                  startDate={departDate}
                  endDate={null}
                  onDateSelect={handleDepartDateSelect}
                  isRange={false}
                />
              </div>
            )}
          </div>

          {/* Return Date */}
          {searchData.tripType === "RT" && (
            <div className="lg:col-span-2 relative order-5" ref={returnCalendarRef}>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Return
              </label>
              <button
                onClick={() => setShowReturnCalendar(!showReturnCalendar)}
                className="w-full h-10 sm:h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 text-left text-sm sm:text-base font-medium transition-all duration-200 hover:border-gray-300 flex items-center justify-between"
              >
                <span className="text-gray-700 truncate">
                  {returnDate ? format(returnDate, "MMM d, yyyy") : "Select date"}
                </span>
                <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showReturnCalendar && (
                <div className="absolute z-50 mt-1">
                  <Calendar
                    startDate={returnDate}
                    endDate={null}
                    onDateSelect={handleReturnDateSelect}
                    isRange={false}
                    minDate={departDate || new Date()}
                  />
                </div>
              )}
            </div>
          )}

          {/* Passengers */}
          <div className={`${searchData.tripType === "RT" ? "lg:col-span-1" : "lg:col-span-2"} relative order-6`} ref={passengersRef}>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              Passengers
            </label>
            <button
              onClick={() => setShowPassengersDropdown(!showPassengersDropdown)}
              className="w-full h-10 sm:h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 text-left text-sm sm:text-base font-medium transition-all duration-200 hover:border-gray-300 flex items-center justify-between"
            >
              <span className="text-gray-700 truncate">{getPassengerText()}</span>
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showPassengersDropdown && (
              <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-xl p-4">
                <div className="space-y-4">
                  {[
                    { key: 'adults', label: 'Adults', sublabel: '18+ years', min: 1 },
                    { key: 'children', label: 'Children', sublabel: '2-17 years', min: 0 },
                    { key: 'infants', label: 'Infants', sublabel: '0-2 years', min: 0 },
                    { key: 'youth', label: 'Youth', sublabel: '12-17 years', min: 0 }
                  ].map((type) => (
                    <div key={type.key} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{type.label}</div>
                        <div className="text-xs text-gray-500">{type.sublabel}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updatePassengerCount(type.key as keyof typeof searchData.passengers, false)}
                          disabled={searchData.passengers[type.key as keyof typeof searchData.passengers] <= type.min}
                          className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-6 text-center font-semibold text-sm">
                          {searchData.passengers[type.key as keyof typeof searchData.passengers]}
                        </span>
                        <button
                          onClick={() => updatePassengerCount(type.key as keyof typeof searchData.passengers, true)}
                          className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-blue-500 transition-colors"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <button
                    onClick={() => setShowPassengersDropdown(false)}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Class */}
          <div className={`${searchData.tripType === "RT" ? "lg:col-span-1" : "lg:col-span-1"} relative order-7`} ref={classRef}>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Class
            </label>
            <button
              onClick={() => setShowClassDropdown(!showClassDropdown)}
              className="w-full h-10 sm:h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 text-left text-sm sm:text-base font-medium transition-all duration-200 hover:border-gray-300 flex items-center justify-between"
            >
              <span className="text-gray-700 truncate">{searchData.class}</span>
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showClassDropdown && (
              <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                {[
                  { value: "Economy", label: "Economy", desc: "Standard seating" },
                  { value: "Business", label: "Business", desc: "Premium comfort" },
                  { value: "First", label: "First Class", desc: "Luxury experience" }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSearchData({ ...searchData, class: option.value });
                      setShowClassDropdown(false);
                    }}
                    className={`w-full px-3 py-3 text-left hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                      searchData.class === option.value ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                    }`}
                  >
                    <div className="font-medium text-gray-900 text-sm">{option.label}</div>
                    <div className="text-xs text-gray-500">{option.desc}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Additional Options */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={searchData.isDirectFlight}
              onChange={(e) => setSearchData({ ...searchData, isDirectFlight: e.target.checked })}
              className="w-3 h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-xs sm:text-sm text-gray-700">Direct flights only</span>
          </label>
          
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={searchData.isFlexibleDate}
              onChange={(e) => setSearchData({ ...searchData, isFlexibleDate: e.target.checked })}
              className="w-3 h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-xs sm:text-sm text-gray-700">Flexible dates</span>
          </label>
        </div>

        {/* Search Button */}
        <div className="mt-6">
          <button
            onClick={handleSearch}
            disabled={loading || !searchData.origin || !searchData.destination}
            className="w-full h-12 sm:h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold text-base sm:text-lg rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Searching flights...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search flights</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}