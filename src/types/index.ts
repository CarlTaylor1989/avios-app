/* These types would typically come from backend schema */

export type PricePoint = {
  percentage: number;
  cashDiscount: { amount: number; currency: string };
  aviosRequired: number;
};

export type ApiResponse = {
  route: { departureAirportCode: string; arrivalAirportCode: string };
  price: { amount: number; currency: string };
  pricePoints: PricePoint[];
};
