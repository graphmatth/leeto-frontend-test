import { useGiftCards } from "@/modules/giftCards/employee/queries/getGiftCards";
import { GiftCard } from "@/modules/giftCards/employee/types";
import { indexRoute } from "@/routes/__root";

export const GiftCardsPage = () => {
	const { state } = indexRoute.useSearch();

	const { data: giftCards, isLoading, error } = useGiftCards(state || "active");

	if (isLoading) return <p>Chargement...</p>;
	if (error) return <p>Erreur : {error.message}</p>;

	return (
		<div>
			<h1>Cartes Cadeaux</h1>

			{giftCards?.map((giftCard: GiftCard) => (
				<div key={giftCard.id}>
					<h2>{giftCard.name}</h2>
				</div>
			))}
		</div>
	);
};
