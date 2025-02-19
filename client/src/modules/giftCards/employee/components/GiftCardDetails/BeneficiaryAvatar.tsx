import { getBeneficiaryAvatar } from "@/modules/giftCards/employee/utils/beneficiary";
import { BeneficiaryAvatarProps } from "@/modules/giftCards/employee/types/gift-card";

export const BeneficiaryAvatar = ({ type, index = 1, label }: BeneficiaryAvatarProps) => (
	<span
		className={`${index === 0 ? "" : "-ml-0.5"} 
		bg-[#F1F5F9] 
		shadow-[0_0_0_2px_white] 
		rounded-full 
		size-8 
		flex 
		items-center 
		justify-center`}
		role="img"
		aria-label={label ? label : undefined}
	>
		{getBeneficiaryAvatar(type)}
	</span>
);
