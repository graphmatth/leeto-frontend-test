import { renderWithRouter } from "@/utils/test-utils";
import { GiftCardBeneficiaryConsumption } from "../GiftCardBeneficiaryConsumption";
import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import { GiftCardBeneficiaryConsumptionProps } from "@/modules/giftCards/employee/types/gift-card";

describe("GiftCardBeneficiaryConsumption Component", () => {
	const mockProps: GiftCardBeneficiaryConsumptionProps = {
		beneficiaries: [
			{
				id: 1,
				type: "user",
				firstName: "Geralt",
				consumption: {
					allowedAmount: 150,
					consumedAmount: 100,
				},
			},
			{
				id: 2,
				type: "companion",
				firstName: "Yennefer",
				consumption: {
					allowedAmount: 200,
					consumedAmount: 50,
				},
			},
		],
	};

    
	test("calculates and displays the correct consumption percentage ", async () => {
		await renderWithRouter(<GiftCardBeneficiaryConsumption {...mockProps} />);

		expect(screen.getByText("67 %")).toBeInTheDocument();
		expect(screen.getByText("25 %")).toBeInTheDocument();
	});

});
