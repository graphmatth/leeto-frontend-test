import React from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { GiftCardType } from "@/modules/giftCards/employee/types/gift-card";
import { getTimeConsume } from "@/utils/get-time-consume";
import { getTimeLeft } from "@/utils/get-time-left";
import { isPast } from "date-fns";
import { IconBox } from "@/modules/giftCards/common/components/IconBox/IconBox";

import { GiftCardBalance } from "./GiftCardBeneficiariesBalance";
import { GiftCardDescription } from "./GiftCardDescription";
import { GiftCardBeneficiaryConsumption } from "./GiftCardBeneficiaryConsumption";
import { GiftCardHeader } from "./GiftCardHeader";
import { GiftCardBeneficiaries } from "./GiftCardBeneficiaries";

export const GiftCardDetails = ({
	name,
	closingDate,
	openingDate,
	consumedAmount,
	description,
	allowedAmount,
	beneficiaries,
}: GiftCardType) => {
	const formattedDates = React.useMemo(() => {
		return {
			opening: format(new Date(openingDate), "d MMM yyyy", {
				locale: fr,
			}),
			closing: format(new Date(closingDate), "d MMM yyyy", {
				locale: fr,
			}),
		};
	}, [openingDate, closingDate]);

	const timeLeft = isPast(closingDate)
		? getTimeConsume(closingDate)
		: getTimeLeft(closingDate);

	const percentageUsed = React.useMemo(
		() => Math.round((consumedAmount / allowedAmount) * 100),
		[consumedAmount, allowedAmount],
	);

	const beneficiariesList = React.useMemo(() => {
		if (!beneficiaries.length) return "";

		const names = beneficiaries.map((beneficiarie) =>
			beneficiarie.type === "user" ? "Vous-même" : beneficiarie.firstName,
		);

		if (names.length === 1) return names[0];

		return `${names.slice(0, -1).join(", ")} et ${names[names.length - 1]}`;
	}, [beneficiaries]);

	return (
		<>
			<div className="mb-4">
				<IconBox color="pink" icon="gift" size="large" />
				<h2 className="text-slate-700 font-s font-medium text-xl md:text-2xl">
					{name}
				</h2>
			</div>
			<div className="flex flex-col gap-4">
				<GiftCardHeader
					openingDate={formattedDates.opening}
					closingDate={formattedDates.closing}
					timeLeft={timeLeft}
				/>

				<GiftCardBalance
					allowedAmount={allowedAmount}
					consumedAmount={consumedAmount}
					percentageUsed={percentageUsed}
				/>

				{description.length > 0 && (
					<GiftCardDescription description={description} />
				)}

				<div className="md:grid grid-cols-1 md:grid-cols-2 gap-4">
					{beneficiariesList.length > 0 && (
						<GiftCardBeneficiaries beneficiaries={beneficiaries} />
					)}

					<GiftCardBeneficiaryConsumption beneficiaries={beneficiaries} />
				</div>
			</div>
		</>
	);
};
