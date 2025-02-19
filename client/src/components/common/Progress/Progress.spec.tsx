import { render, screen } from "@testing-library/react";
import { Progress } from "./Progress";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom";


describe("Progress Component", () => {
	test("renders with correct value", () => {
		const value = 75;
		render(<Progress value={value} />);

		const progressRoot = screen.getByRole("progressbar");
		expect(progressRoot).toHaveAttribute("aria-valuenow", value.toString());
	});

	test("applies additional className", () => {
		const customClass = "custom-progress";
		render(<Progress value={50} className={customClass} />);

		const progressRoot = screen.getByRole("progressbar");
		expect(progressRoot).toHaveClass(customClass);
	});

});
