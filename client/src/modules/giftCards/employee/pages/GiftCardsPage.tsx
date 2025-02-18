import { useGiftCards } from "@/modules/giftCards/employee/queries/getGiftCards";
import { indexRoute } from "@/routes/__root";
import { GiftCard } from "../components/GiftCard";
import { GiftCardType } from "@/modules/giftCards/employee/types";

export const GiftCardsPage = () => {
	const { state } = indexRoute.useSearch();

	const { data: giftCards, isLoading, error } = useGiftCards(state || "active");

	if (isLoading) return <p>Chargement...</p>;
	if (error) return <p>Erreur : {error.message}</p>;

	return (
		<>
			<header className="mb-6">
				<h1 className="font-semibold text-2xl">Cartes Cadeaux</h1>
			</header>
			<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{giftCards?.map((giftCard: GiftCardType) => (
					<GiftCard key={giftCard.id} {...giftCard} />
				))}
			</section>
		</>
	);
};


export default GiftCard;
