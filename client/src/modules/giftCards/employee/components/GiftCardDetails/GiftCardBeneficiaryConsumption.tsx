import { GiftCardType } from "../../types";
import { formatPrice } from "@/utils/format-price";
import { Progress } from "@/components/common/Progress/Progress";
import { BENEFICIARY_ICONS } from "../../utils/beneficiary";

import { IconBox } from "@/modules/giftCards/common/components/IconBox/IconBox";
type GiftCardBeneficiaryConsumptionProps = {
	beneficiaries: GiftCardType["beneficiaries"];
};

export const GiftCardBeneficiaryConsumption = ({
	beneficiaries,
}: GiftCardBeneficiaryConsumptionProps) => {
	return (
		<div className="flex flex-col gap-2 p-4 border border-slate-200 rounded-[8px]">
			<IconBox icon="line-chart" color="green" className="size-10" />
			<p className="text-slate-900 font-medium">Suivi de consommation</p>
			<div className="lg:grid lg:grid-cols-2 gap-4">
				{beneficiaries.map((beneficiarie, idx) => {
					const { allowedAmount, consumedAmount } = beneficiarie.consumption;
					const percentage =
						allowedAmount > 0
							? Math.round((consumedAmount / allowedAmount) * 100)
							: 0;

					return (
						<div
							key={beneficiarie.id}
							className={`flex flex-col ${idx === 0 ? "col-span-2" : ""} gap-1 text-slate-700`}
						>
							<p className="flex items-center gap-2">
								<span className="text-lg">
									{BENEFICIARY_ICONS[beneficiarie.type]}
								</span>
								<span className="text-sm text-slate-600">
									{beneficiarie.type === "user"
										? "Vous-même"
										: beneficiarie.firstName}{" · "}
									{formatPrice(consumedAmount)}&nbsp;€ /{" "}
									{formatPrice(allowedAmount)}&nbsp;€
								</span>
							</p>
							<div className="flex items-center w-full gap-2">
								<Progress className="w-full" value={percentage} max={100} />
								<span className="text-xs font-medium text-slate-700">
									{percentage}&nbsp;%
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
