import { BeneficiaryType, getBeneficiaryAvatar } from "../../utils/beneficiary";
type BeneficiaryAvatarProps = {
	type: BeneficiaryType;
	index: number;
};

export const BeneficiaryAvatar = ({ type, index }: BeneficiaryAvatarProps) => (
	<span
		className={`${index === 0 ? "" : "-ml-0.5"} 
		bg-[#F1F5F9] 
		shadow-[0_0_0_2px_white] 
		rounded-full 
		size-8 
		flex 
		items-center 
		justify-center`}
	>
		{getBeneficiaryAvatar(type)}
	</span>
);
