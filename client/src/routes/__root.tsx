import {
	createRootRoute,
	Outlet,
	createRoute,
	createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { GiftCardsPage } from "@/modules/giftCards/employee/pages/GiftCardsPage";

export const rootRoute = createRootRoute({
	component: () => (
		<>
			<main className="container mx-auto">
				<Outlet />
			</main>
			<TanStackRouterDevtools />
		</>
	),
});


interface SearchParams {
	state?: "archived" | "active" | null;
}

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: GiftCardsPage,
	validateSearch: (search: Record<string, unknown>): SearchParams => ({
		state: search.state as SearchParams["state"],
	}),
});

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
