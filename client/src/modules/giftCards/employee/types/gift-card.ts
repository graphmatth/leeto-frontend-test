export type GiftCardType = {
  id: string;
  description: string;
  name: string;
  openingDate: string;
  closingDate: string;
  state: "active" | "archived";
  allowedAmount: number;
  consumedAmount: number;
  beneficiaries: {
    id: number;
    type: "user" | "companion" | "child";
    firstName: string;
    consumption: {
      allowedAmount: number;
      consumedAmount: number;
    };
  }[];
};

/* Type extraction from GiftCardType */
export type BeneficiaryType = GiftCardType["beneficiaries"][number]["type"];

export type BeneficiariesType = GiftCardType["beneficiaries"];

export type AllowedAmountType = GiftCardType["allowedAmount"];

export type ConsumedAmountType = GiftCardType["consumedAmount"];

export type GiftCardDescriptionProps = {
  description: GiftCardType["description"];
};

export type GiftCardBeneficiaryConsumptionProps = {
  beneficiaries: BeneficiariesType;
};
/* Component Types */
export type BeneficiaryAvatarProps = {
  type: BeneficiaryType;
  index?: number;
  label?: string;
};

export type GiftCardHeaderProps = {
  openingDate: string;
  closingDate: string;
  timeLeft?: string;
};

export type GiftCardBeneficiariesProps = {
  beneficiaries: BeneficiariesType;
};

export type GiftCardBalanceProps = {
  allowedAmount: AllowedAmountType;
  consumedAmount: ConsumedAmountType;
  percentageUsed: number;
};

export type IconMapProps = {
  user: "🙋‍♂️";
  companion: "💙";
  child: "👶";
};

export type GiftCardBeneficiariesAvatarProps = {
  beneficiaries: BeneficiariesType;
  iconMap: IconMapProps;
};
