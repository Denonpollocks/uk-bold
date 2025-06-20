export interface FlightSearchRequest {
  tripType: "OW" | "RT" | "MT";
  origin: string;
  destination: string;
  departDate: string;
  arrivalDate: string;
  class: "Economy" | "Business" | "First";
  isFlexibleDate: boolean;
  isDirectFlight: boolean;
  airlineCode?: string;
  passengers: {
    adults: number;
    children: number;
    infants: number;
    youth: number;
  };
} 