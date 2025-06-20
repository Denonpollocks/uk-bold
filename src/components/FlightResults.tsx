"use client";

import { useState } from "react";
import { api } from "../lib/api";

export default function FlightResults({ 
  searchResults, 
  onSelectFlight, 
  onBack 
}: { 
  searchResults: any;
  onSelectFlight: (flight: any) => void;
  onBack: () => void;
}) {
  const [selectedFlight, setSelectedFlight] = useState<any>(null);
  const [pricingData, setPricingData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log("Search Results received in FlightResults:", searchResults);

  // Helper function to get the actual flight data regardless of structure
  const getFlightData = (results: any) => {
    if (!results) return null;
    
    // Handle the case where we get raw API response
    if (results.result?.airSolutions) {
      return results.result;
    }
    
    // Handle the case where we get wrapped response
    if (results.data?.result?.airSolutions) {
      return results.data.result;
    }

    return null;
  };

  const flightData = getFlightData(searchResults);
  
  if (!flightData) {
    console.log("No valid flight data found in:", searchResults);
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center text-gray-500">No flight results available</div>
      </div>
    );
  }

  const flights = flightData.airSolutions;

  const renderFlight = (flight: any, isReturn: boolean = false) => {
    const journey = flight.journey[isReturn ? 1 : 0];
    const option = journey.optionInfos[0];
    const segments = option.airSegmentInfos;

    return (
      <div key={flight.key} className="bg-white rounded-lg  shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
        {/* Price and Total Duration Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-semibold text-lg">
              {option.stop === 0 ? 'Direct Flight' : `${option.stop} Stop Flight`}
            </h3>
            <p className="text-sm text-gray-500">Total Duration: {option.totalFlightDuration}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">£{flight.totalPrice.toFixed(2)}</p>
            <p className="text-sm text-gray-500">
              Base: £{flight.basePrice} + Tax: £{flight.tax}
            </p>
          </div>
        </div>

        {/* Flight Segments */}
        {segments.map((segment: any, index: number) => (
          <div key={index} className="mb-6 last:mb-0">
            {/* Segment Header */}
            <div className="flex items-center mb-4">
              <img 
                src={segment.airlineLogoUrl} 
                alt={segment.airlineName} 
                className="h-8 w-auto mr-3"
              />
              <div>
                <h4 className="font-semibold">{segment.airlineName}</h4>
                <p className="text-sm text-gray-500">Flight {segment.flightNumber}</p>
              </div>
            </div>

            {/* Flight Details */}
            <div className="grid grid-cols-7 gap-4 items-center">
              <div className="col-span-3">
                <p className="text-lg font-semibold">{segment.departTime}</p>
                <p className="text-sm text-gray-600">{segment.originAirportCity}</p>
                <p className="text-xs text-gray-500">{segment.originAirportName}</p>
                <p className="text-xs text-gray-500">Terminal {segment.originTerminal}</p>
              </div>
              
              <div className="col-span-1 flex flex-col items-center">
                <p className="text-sm text-gray-500">{segment.travelDuration}</p>
                <div className="w-full h-px bg-gray-300 my-2"></div>
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              <div className="col-span-3 text-right">
                <p className="text-lg font-semibold">{segment.arrivalTime}</p>
                <p className="text-sm text-gray-600">{segment.destinationAirportCity}</p>
                <p className="text-xs text-gray-500">{segment.destinationAirportName}</p>
                <p className="text-xs text-gray-500">Terminal {segment.destinationTerminal}</p>
              </div>
            </div>

            {/* Layover Information */}
            {index < segments.length - 1 && (
              <div className="my-4 px-4 py-2 bg-orange-50 border-l-4 border-orange-400 text-orange-700">
                <p className="text-sm">
                  Layover in {segment.destinationAirportCity}: {segments[index + 1].connectionTime}
                </p>
              </div>
            )}
          </div>
        ))}

        {/* Footer with Additional Info */}
        <div className="flex justify-between items-center text-sm text-gray-600 border-t pt-4 mt-4">
          <div className="flex items-center gap-4">
            <span>✈️ {segments[0].cabinClass}</span>
            <span>🧳 {segments[0].baggageInfo.allowance}</span>
            <span>💺 {segments[0].seatsLeft} seats left</span>
          </div>
          <button
            onClick={() => onSelectFlight(flight)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Select
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Flight Results</h2>
          <p className="text-sm text-gray-500 mt-1">
            {flights.length} {flights.length === 1 ? 'flight' : 'flights'} found
          </p>
        </div>
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
        >
          <span>←</span> Back to Search
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <div className="space-y-6">
        {flights.map((flight: any) => (
          <div key={flight.key} className="space-y-4">
            {/* Outbound Flight */}
            {renderFlight(flight, false)}
            
            {/* Return Flight (if exists) */}
            {flight.journey.length > 1 && (
              <div className="ml-8 border-l-4 border-blue-200 pl-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Return Flight</h3>
                {renderFlight(flight, true)}
              </div>
            )}
          </div>
        ))}
      </div>

      {pricingData && (
        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Pricing Details</h3>
          <pre className="text-sm text-green-700 overflow-auto">
            {JSON.stringify(pricingData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}