import { GiftCardBeneficiariesAvatarProps } from "@/modules/giftCards/employee/types/gift-card";

export const GiftCardBeneficiariesAvatar = ({
	beneficiaries,
	iconMap,
}: GiftCardBeneficiariesAvatarProps) => {
	return (
		<div className="flex">
			{beneficiaries.map((beneficiary, index) => (
				<span
					key={beneficiary.id}
					className={`${index === 0 ? "" : "-ml-0.5"} bg-[#F1F5F9] shadow-[0_0_0_2px_white] rounded-full size-8 flex items-center justify-center`}
				>
					{iconMap[beneficiary.type]}
				</span>
			))}
		</div>
	);
};
