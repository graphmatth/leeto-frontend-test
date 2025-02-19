import { useParams } from "@tanstack/react-router";
import { useGiftCardDetails } from "@/modules/giftCards/employee/queries/getGiftCardDetails";
import { GiftCardDetails } from "@/modules/giftCards/employee/components/GiftCardDetails/GiftCardDetails";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/common/Button/Button";
import { LuArrowLeft } from "react-icons/lu";

export const GiftCardDetailsPage = () => {
	const navigate = useNavigate();
	const { giftCardId } = useParams({ from: "/$giftCardId" });

	const {
		data: giftCardDetails,
		isLoading,
		error,
	} = useGiftCardDetails(giftCardId);
	const handleBack = () => {
		navigate({
			to: `/`,
			search: { state: `${giftCardDetails?.state ?? "active"}` },
		});
	};

	if (isLoading) return <p>Chargement...</p>;
	if (error) return <p>Une erreur est survenue</p>;

	return (
		<>
			<header className="mb-6">
				<Button onClick={handleBack} variant="outlined" size="icon">
					<LuArrowLeft />
				</Button>
			</header>

			<div className="gift-card">
				{giftCardDetails && <GiftCardDetails {...giftCardDetails} />}
			</div>
		</>
	);
};
