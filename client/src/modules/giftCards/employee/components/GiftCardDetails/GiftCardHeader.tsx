import { MdCalendarToday } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { GiftCardHeaderProps } from "@/modules/giftCards/employee/types/gift-card";

export const GiftCardHeader = ({
	openingDate,
	closingDate,
	timeLeft,
}: GiftCardHeaderProps) => {
	return (
		<div className="flex flex-col gap-2 md:flex-row">
			<p className="flex items-center text-slate-600 text-sm gap-1">
				<MdCalendarToday className="size-4" />
				{openingDate} - {closingDate}
			</p>
			<p className="flex items-center text-slate-600 text-sm gap-1">
				<IoMdTime className="size-4" />
				{timeLeft}
			</p>
		</div>
	);
};
