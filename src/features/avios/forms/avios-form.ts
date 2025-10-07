import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const AviosFormSchema = z.object({
  departureAirportCode: z.string(),
  arrivalAirportCode: z.string(),
  departureTime: z.date(),
  arrivalTime: z.date(),
  price: z.string(),
  currency: z.string()
});

export type AviosFormInput = z.input<typeof AviosFormSchema>;

export type AviosFormOutput = z.output<typeof AviosFormSchema>;

export const aviosFormResolver = zodResolver(AviosFormSchema);
