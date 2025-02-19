import { renderWithRouter } from "@/utils/test-utils";
import { GiftCardHeader } from "../GiftCardHeader";
import { screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom";
import { GiftCardHeaderProps } from "@/modules/giftCards/employee/types/gift-card";

describe("GiftCardHeader Component", () => {
	const mockProps: GiftCardHeaderProps = {
		openingDate: "2023-12-01",
		closingDate: "2024-12-01",
		timeLeft: "10 jours restants",
	};

	test("renders opening and closing dates", async () => {
		await renderWithRouter(<GiftCardHeader {...mockProps} />);
		expect(screen.getByText("2023-12-01 - 2024-12-01")).toBeInTheDocument();
	});
});
