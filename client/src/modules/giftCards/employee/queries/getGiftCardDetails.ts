import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GETGiftCardDetails } from "../requests/GETGiftCardDetails";
import { GiftCardType } from "@/modules/giftCards/employee/types";

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
