import { renderWithRouter } from "@/utils/test-utils";
import { GiftCard } from "../../GiftCard";
import { screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom";
import { GiftCardType } from "../../../types/gift-card";

describe("GiftCard Component", () => {
	const mockProps: GiftCardType = {
		id: "3",
		description: "Votre CSE vous offre une carte cadeaux pour Noël.",
		name: "Carte cadeaux Noël 2023",
		openingDate: "2023-12-01",
		closingDate: "2024-12-01",
		state: "active",
		allowedAmount: 150,
		consumedAmount: 75,
		beneficiaries: [
			{
				id: 1,
				type: "user",
				firstName: "Geralt",
				consumption: {
					allowedAmount: 150,
					consumedAmount: 75,
				},
			},
		],
	};

	test("renders the gift card name", async () => {
		await renderWithRouter(<GiftCard {...mockProps} />);
		expect(screen.getByText("Carte cadeaux Noël 2023")).toBeInTheDocument();
	});

	test("renders the consumed amount correctly", async () => {
		await renderWithRouter(<GiftCard {...mockProps} />);
		expect(
			screen.getByText((content) => content.includes("75 € dépensé")),
		).toBeInTheDocument();
	});

	test("displays the correct percentage used", async () => {
		await renderWithRouter(<GiftCard {...mockProps} />);
		expect(screen.getByText("50%")).toBeInTheDocument();
	});
});
