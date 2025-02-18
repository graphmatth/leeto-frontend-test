import React from "react";
import { useGiftCards } from "@/modules/giftCards/employee/queries/getGiftCards";
import { indexRoute } from "@/routes/__root";
import { GiftCard } from "../components/GiftCard";
import { GiftCardType } from "@/modules/giftCards/employee/types";
import { StateSchema } from "../schemas/giftCardSchema";
import { Tabs } from "@/components/common/Tabs/Tabs";
import { Link } from "@tanstack/react-router";

export const GiftCardsPage = () => {
	const { state: rawState } = indexRoute.useSearch();
	const stateValue = StateSchema.safeParse(rawState);
	const finalState = stateValue.success ? stateValue.data : "active";
	const { data: giftCards, isLoading, error } = useGiftCards();

	const filteredGiftCards = React.useMemo(() => {
		return giftCards?.filter(
			(giftCard: GiftCardType) => giftCard.state === finalState,
		);
	}, [giftCards, finalState]);

	const activeGiftCardsCount = React.useMemo(() => {
		return giftCards?.filter(
			(giftCard: GiftCardType) => giftCard.state === "active",
		).length;
	}, [giftCards]);

	const archivedGiftCardsCount = React.useMemo(() => {
		return giftCards?.filter(
			(giftCard: GiftCardType) => giftCard.state === "archived",
		).length;
	}, [giftCards]);

	if (isLoading) return <p>Chargement...</p>;
	if (error) return <p>Erreur : {error.message}</p>;

	return (
		<>
			<header className="mb-6">
				<h1 className="font-semibold text-2xl">Cartes Cadeaux</h1>
			</header>
			<section>
				<Tabs value={finalState} className="mb-4">
					<Tabs.List className="grid grid-cols-2 md:flex">
						<Tabs.Tab
							value="active"
							render={
								<Link
									to="/"
									search={{
										state: "active",
									}}
								>
									Actives ({activeGiftCardsCount})
								</Link>
							}
						/>
						<Tabs.Tab
							value="archived"
							render={
								<Link
									to="/"
									search={{
										state: "archived",
									}}
								>
									Clôturées ({archivedGiftCardsCount})
								</Link>
							}
						/>
					</Tabs.List>
				</Tabs>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{filteredGiftCards?.map((giftCard: GiftCardType) => (
						<GiftCard key={giftCard.id} {...giftCard} />
					))}
				</div>
			</section>
		</>
	);
};
