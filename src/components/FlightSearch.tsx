"use client";

import { useState, useRef } from "react";
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

  return (
    <div className="bg-white p-6 w-full rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Flight Search</h2>
      
      {/* Trip Type Selection */}
      <div className="flex gap-6 mb-8">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={searchData.tripType === "RT"}
            onChange={() => setSearchData(prev => ({ ...prev, tripType: "RT" }))}
            className="form-radio text-blue-600"
          />
          <span className="text-gray-700">Return</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={searchData.tripType === "OW"}
            onChange={() => setSearchData(prev => ({ ...prev, tripType: "OW" }))}
            className="form-radio text-blue-600"
          />
          <span className="text-gray-700">One-way</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={searchData.tripType === "MT"}
            onChange={() => setSearchData(prev => ({ ...prev, tripType: "MT" }))}
            className="form-radio text-blue-600"
          />
          <span className="text-gray-700">Multi City</span>
        </label>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-12 gap-4 items-start">
        {/* Origin and Destination */}
        <div className="col-span-5 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">From where?</label>
          <input
            ref={originInputRef}
            type="text"
            placeholder="City or Airport"
            value={searchData.origin}
            onChange={handleOriginChange}
            onFocus={() => setShowOriginSuggestions(originSuggestions.length > 0)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
            autoComplete="off"
          />
          {showOriginSuggestions && originSuggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-auto">
              {originSuggestions.map((suggestion, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                  onClick={() => handleOriginSelect(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Swap Button */}
        <div className="col-span-2 flex items-center justify-center mt-6">
          <button
            onClick={handleSwapLocations}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-orange-500 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
        </div>

        <div className="col-span-5 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">To where?</label>
          <input
            ref={destinationInputRef}
            type="text"
            placeholder="City or Airport"
            value={searchData.destination}
            onChange={handleDestinationChange}
            onFocus={() => setShowDestinationSuggestions(destinationSuggestions.length > 0)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
            autoComplete="off"
          />
          {showDestinationSuggestions && destinationSuggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-auto">
              {destinationSuggestions.map((suggestion, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                  onClick={() => handleDestinationSelect(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Dates */}
        <div className="col-span-3 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Leaving on</label>
          <input
            type="text"
            value={departDate ? format(departDate, "MMMM d, yyyy") : ""}
            onClick={() => setShowDepartCalendar(true)}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 cursor-pointer text-lg"
          />
          {showDepartCalendar && (
            <div className="absolute z-20 mt-1">
              <Calendar
                startDate={departDate}
                endDate={null}
                onDateSelect={handleDepartDateSelect}
                isRange={false}
              />
            </div>
          )}
        </div>

        {searchData.tripType === "RT" && (
          <div className="col-span-3 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Returning on</label>
            <input
              type="text"
              value={returnDate ? format(returnDate, "MMMM d, yyyy") : ""}
              onClick={() => setShowReturnCalendar(true)}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 cursor-pointer text-lg"
            />
            {showReturnCalendar && (
              <div className="absolute z-20 mt-1">
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

        {/* Passengers Dropdown */}
        <div className="col-span-3 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
          <button
            onClick={() => setShowPassengersDropdown(!showPassengersDropdown)}
            className="w-full p-3 border border-gray-300 rounded-lg text-left text-lg flex justify-between items-center"
          >
            <span>{getTotalPassengers()} Passenger{getTotalPassengers() !== 1 ? 's' : ''}</span>
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showPassengersDropdown && (
            <div className="absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Adults</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSearchData(prev => ({
                        ...prev,
                        passengers: { ...prev.passengers, adults: Math.max(1, prev.passengers.adults - 1) }
                      }))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{searchData.passengers.adults}</span>
                    <button
                      onClick={() => setSearchData(prev => ({
                        ...prev,
                        passengers: { ...prev.passengers, adults: prev.passengers.adults + 1 }
                      }))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Children</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSearchData(prev => ({
                        ...prev,
                        passengers: { ...prev.passengers, children: Math.max(0, prev.passengers.children - 1) }
                      }))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{searchData.passengers.children}</span>
                    <button
                      onClick={() => setSearchData(prev => ({
                        ...prev,
                        passengers: { ...prev.passengers, children: prev.passengers.children + 1 }
                      }))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Class Selection */}
        <div className="col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
          <select
            value={searchData.class}
            onChange={(e) => setSearchData({ ...searchData, class: e.target.value as any })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First">First Class</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-indigo-900 text-white px-8 py-3 rounded-lg hover:bg-indigo-800 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium text-lg"
        >
          {loading ? "Searching..." : "Modify Search"}
        </button>
      </div>
    </div>
  );
}