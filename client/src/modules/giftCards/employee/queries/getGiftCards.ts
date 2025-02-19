import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GETGiftCards } from "@/modules/giftCards/employee/requests/GETGiftCards";
import { GiftCardType } from "@/modules/giftCards/employee/types/gift-card";

import { StateSchema } from "@/modules/giftCards/employee/schemas/giftCardSchema";
import { z } from "zod";

export const useGiftCards = (
  state?: z.infer<typeof StateSchema>
): UseQueryResult<GiftCardType[], Error> => {
  return useQuery({
    queryKey: ["giftCards", state],
    queryFn: () => GETGiftCards(state),
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    retry: 2,
  });
};
