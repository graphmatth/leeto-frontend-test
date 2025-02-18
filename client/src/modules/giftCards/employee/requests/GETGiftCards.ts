const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001/gift-cards";

export const GETGiftCards = async (state: "archived" | "active") => {
  try {
    const response = await fetch(`${API_URL}/?state=${state}`);
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);

      const errorBody = await response.text();
      throw new Error(
        `Network response was not ok: ${response.status} - ${errorBody}`
      );
    }
    return response.json();
  } catch (error) {
    console.error("Fetch error details:", {
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
};
