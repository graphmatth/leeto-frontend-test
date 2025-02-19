import { formatPrice } from "@/utils/format-price";
import { Progress } from "@/components/common/Progress/Progress";
import { IconBox } from "@/modules/giftCards/common/components/IconBox/IconBox";
import { GiftCardBeneficiariesProps } from "@/modules/giftCards/employee/types/gift-card";
import { BeneficiaryAvatar } from "@/modules/giftCards/employee/components/GiftCardDetails/BeneficiaryAvatar";

export const GiftCardBeneficiaryConsumption = ({
	beneficiaries,
}: GiftCardBeneficiariesProps) => {
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
								<BeneficiaryAvatar label={beneficiarie.type} type={beneficiarie.type} />

								<span className="text-sm text-slate-600">
									{beneficiarie.type === "user"
										? "Vous-même"
										: beneficiarie.firstName}
									{" · "}
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
