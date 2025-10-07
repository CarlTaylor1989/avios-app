"use server";

import { AviosFormOutput } from "@/features/avios/forms/avios-form";
import { ApiResponse } from "@/types";
import { revalidateTag } from "next/cache";

const API_BASE = process.env.AVIOS_API_BASE;

export async function calculatePricePointsAction(
  formData: AviosFormOutput
): Promise<ApiResponse> {
  try {
    const payload = {
      departureAirportCode: formData.departureAirportCode,
      arrivalAirportCode: formData.arrivalAirportCode,
      departureTime: new Date(formData.departureTime).toISOString(),
      arrivalTime: new Date(formData.arrivalTime).toISOString(),
      price: Number(formData.price),
      currency: formData.currency
    };

    const result = await fetch(`${API_BASE}/price-points`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store"
    });

    const json = await result.json();

    revalidateTag("home");

    return json;
  } catch {
    throw new Error("Something didn't work");
  }
}
