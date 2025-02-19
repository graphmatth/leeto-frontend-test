import { GiftCardType } from "../../types";
import { formatPrice } from "@/utils/format-price";
import { Progress } from "@/components/common/Progress/Progress";

type AllowedAmountType = GiftCardType["allowedAmount"];
type ConsumedAmountType = GiftCardType["consumedAmount"];

type GiftCardBalanceProps = {
	allowedAmount: AllowedAmountType;
	consumedAmount: ConsumedAmountType;
	percentageUsed: number;
};

export const GiftCardBalance = ({
	allowedAmount,
	consumedAmount,
	percentageUsed,
}: GiftCardBalanceProps) => {
	const availableAmount = allowedAmount - consumedAmount;

	return (
		<div className="flex gap-4 items-end">
			<p className="text-slate-700">
				<span className="font-semibold text-xl">
					{formatPrice(availableAmount)} €
				</span>
				<br />
				<span className="text-xs font-medium">disponible</span>
			</p>
			<div className="flex flex-col flex-1 gap-1">
				<p className="text-xs text-slate-600">
					{formatPrice(consumedAmount)}&nbsp;€ dépensés /{" "}
					{formatPrice(allowedAmount)} €
				</p>
				<div className="flex items-center w-full gap-2">
					<Progress className="w-full" value={percentageUsed} max={100} />
					<span className="text-xs font-medium text-slate-700">
						{percentageUsed}&nbsp;%
					</span>
				</div>
			</div>
		</div>
	);
};
