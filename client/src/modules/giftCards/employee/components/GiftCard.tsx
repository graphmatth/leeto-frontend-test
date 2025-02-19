import React from "react";
import { GiftCardType } from "@/modules/giftCards/employee/types/gift-card";
import { Progress } from "@/components/common/Progress/Progress";
import { isPast } from "date-fns";
import { getTimeLeft } from "@/utils/get-time-left";
import { getTimeConsume } from "@/utils/get-time-consume";
import { IconBox } from "@/modules/giftCards/common/components/IconBox/IconBox";
import { Link } from "@tanstack/react-router";

export const GiftCard = React.memo(
	({ name, allowedAmount, consumedAmount, closingDate, id }: GiftCardType) => {
		const percentageUsed = Math.round((consumedAmount / allowedAmount) * 100);

		const timeLeft = isPast(closingDate)
			? getTimeConsume(closingDate)
			: getTimeLeft(closingDate);

		return (
			<Link to={`${id}`} className="border border-slate-200 rounded-xl p-6">
				<IconBox icon="gift" className="mb-4" />
				<p className="text-xs text-slate-600 font-regular">{timeLeft} </p>
				<h2 className="text-slate-700 font-medium text-base mb-2">{name}</h2>
				<section>
					<p className="text-xs text-slate-600">
						{consumedAmount}&nbsp;€ dépensé{consumedAmount > 1 ? "s" : ""} /{" "}
						{allowedAmount}&nbsp;€
					</p>
					<div className="flex w-full items-center gap-2 mt-1">
						<Progress className="w-full" value={percentageUsed} max={100} />
						<span className="text-xs font-medium text-slate-700">
							{percentageUsed}%
						</span>
					</div>
				</section>
			</Link>
		);
	},
);
