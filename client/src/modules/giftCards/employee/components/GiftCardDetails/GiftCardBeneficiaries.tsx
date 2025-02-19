import React from "react";
import { formatBeneficiariesList } from "@/modules/giftCards/employee/utils/beneficiary";
import { GiftCardBeneficiariesProps } from "@/modules/giftCards/employee/types/gift-card";
import { BeneficiaryAvatar } from "./BeneficiaryAvatar";
import { IconBox } from "@/modules/giftCards/common/components/IconBox/IconBox";

export const GiftCardBeneficiaries = ({
	beneficiaries,
}: GiftCardBeneficiariesProps) => {
	const beneficiariesList = React.useMemo(
		() => formatBeneficiariesList(beneficiaries),
		[beneficiaries],
	);

	if (!beneficiariesList) return null;

	return (
		<div className="flex flex-col gap-2 p-4 border border-slate-200 rounded-[8px] mb-4 md:mb-0">
			<IconBox icon="family" color="green" className="size-10" />
			<p className="text-slate-900 font-medium">
				Quel(s) ayant(s)-droit validés bénéficient de cette cagnotte ?
			</p>
			<div className="flex text-slate-600 items-center">
				<div className="flex">
					{beneficiaries.map((beneficiary, index) => (
						<BeneficiaryAvatar
							key={beneficiary.id}
							type={beneficiary.type}
							index={index}
						/>
					))}
				</div>
				<p className="ml-2">{beneficiariesList}</p>
			</div>
		</div>
	);
};
