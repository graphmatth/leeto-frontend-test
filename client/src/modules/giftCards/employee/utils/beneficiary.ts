export type BeneficiaryType = 'user' | 'companion' | 'child';

export const BENEFICIARY_ICONS = {
  user: "🙋‍♂️",
  companion: "💙",
  child: "👶",
} as const;

export const getBeneficiaryAvatar = (type: BeneficiaryType) => BENEFICIARY_ICONS[type];

export const formatBeneficiariesList = (beneficiaries: Array<{ type: BeneficiaryType; firstName: string }>) => {
  if (!beneficiaries.length) return "";

  const names = beneficiaries.map(beneficiarie => beneficiarie.type === "user" ? "Vous-même" : beneficiarie.firstName);
  
  if (names.length === 1) return names[0];
  return `${names.slice(0, -1).join(", ")} et ${names[names.length - 1]}`;
};
