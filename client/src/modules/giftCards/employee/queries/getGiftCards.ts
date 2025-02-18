import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GETGiftCards } from "../requests/GETGiftCards";
import { GiftCardType } from "../types";

export const useGiftCards = (state: 'active' | 'archived'): UseQueryResult<GiftCardType[], Error> => {
  return useQuery({
    queryKey: ["giftCards", state],
    queryFn: () => GETGiftCards(state),
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    retry: 2,
  });
}
