import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GETGiftCards } from "../requests/GETGiftCards";
import { GiftCard } from "../types";

export const useGiftCards = (state: 'active' | 'archived'): UseQueryResult<GiftCard[], Error> => {
  return useQuery({
    queryKey: ["giftCards", state],
    queryFn: () => GETGiftCards(state),
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    retry: 2,
  });
}
