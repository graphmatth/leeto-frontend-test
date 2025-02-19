import { z } from "zod";
import { GiftCardSchema } from "@/modules/giftCards/employee/schemas/giftCardSchema";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001/gift-cards";

export const GETGiftCardDetails = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);

      const errorBody = await response.text();
      throw new Error(
        `Network response was not ok: ${response.status} - ${errorBody}`
      );
    }

    const rawData = await response.json();

    const validatedData = GiftCardSchema.parse(rawData);
    return validatedData;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", {
        errors: error.errors,
      });
      throw error;
    }

    console.error("Fetch error details:", {
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
    throw error;
  }
};
