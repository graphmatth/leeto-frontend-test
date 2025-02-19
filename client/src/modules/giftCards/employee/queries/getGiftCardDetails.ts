import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GETGiftCardDetails } from "@/modules/giftCards/employee/requests/GETGiftCardDetails";
import { GiftCardType } from "@/modules/giftCards/employee/types/gift-card";

export const useGiftCardDetails = (
  id: string
): UseQueryResult<GiftCardType, Error> => {
  return useQuery({
    queryKey: ["giftCardDetails", id],
    queryFn: () => GETGiftCardDetails(id),
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    retry: 2,
  });
};
