import { GiftCardDescriptionProps } from "@/modules/giftCards/employee/types/gift-card";

export const GiftCardDescription = ({
	description,
}: GiftCardDescriptionProps) => {
	if (!description.length) return null;

	return (
		<div className="bg-[#F8FAFC] p-4 flex flex-col gap-2 text-slate-700 rounded-[8px]">
			<h2 className="font-semibold text-sm">Description de la carte-cadeau</h2>
			<p className="leading-6 text-slate-600">{description}</p>
		</div>
	);
};
