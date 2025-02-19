import { createMemoryHistory } from "@tanstack/react-router";
import {
	createRouter,
	RouterProvider,
	RootRoute,
} from "@tanstack/react-router";
import { render, act } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";

window.scrollTo = vi.fn();

export function createTestRouter(ui: React.ReactElement) {
	const rootRoute = new RootRoute({
		component: () => ui,
	});

	const routeTree = rootRoute;

	return createRouter({
		routeTree,
		history: createMemoryHistory(),
		defaultPreload: "intent",
		defaultStaleTime: 0,
		defaultGcTime: 0,
		defaultPreloadStaleTime: 0,
	});
}

export async function renderWithRouter(ui: React.ReactNode) {
	if (!React.isValidElement(ui)) {
		throw new Error("ui must be a valid React element");
	}

	const router = createTestRouter(ui);

	let result;
	await act(async () => {
    // `as any` isn’t ideal.. but it’s just for testing purposes.
		result = render(<RouterProvider router={router as any} />);
		await router.load();
	});

	return {
		...result!,
		router,
	};
}
