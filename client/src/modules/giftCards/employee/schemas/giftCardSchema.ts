import { z } from "zod";

export const StateSchema = z.enum(["active", "archived"]);

const ConsumptionSchema = z.object({
  allowedAmount: z.number(),
  consumedAmount: z.number(),
});

const BeneficiarySchema = z.object({
  id: z.number(),
  type: z.enum(["user", "companion", "child"]),
  firstName: z.string(),
  consumption: ConsumptionSchema,
});

const GiftCardSchema = z.object({
  id: z.string(),
  description: z.string(),
  name: z.string(),
  openingDate: z.string(),
  closingDate: z.string(),
  state: StateSchema,
  allowedAmount: z.number(),
  consumedAmount: z.number(),
  beneficiaries: z.array(BeneficiarySchema),
});

export const GiftCardsArraySchema = z.array(GiftCardSchema);
