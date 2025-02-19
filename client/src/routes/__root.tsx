import {
	createRootRoute,
	Outlet,
	createRoute,
	createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { StateSchema } from "@/modules/giftCards/employee/schemas/giftCardSchema";
import z from "zod";
import { GiftCardsPage } from "@/modules/giftCards/employee/pages/GiftCardsPage";
import { GiftCardDetailsPage } from "@/modules/giftCards/employee/pages/GiftCardDetailsPage";

export const rootRoute = createRootRoute({
	component: () => (
		<>
			<main className="container p-4 md:p-10 mx-auto max-w-6xl">
				<Outlet />
			</main>
			<TanStackRouterDevtools />
		</>
	),
});

type SearchParams = {
	state: z.infer<typeof StateSchema>;
};

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: GiftCardsPage,
	validateSearch: (search: Record<string, unknown>): SearchParams => {
		const stateValue = StateSchema.safeParse(search.state);
		return {
			state: stateValue.success ? stateValue.data : "active",
		};
	},
});

export const giftCardDetailsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/$giftCardId",
	component: GiftCardDetailsPage,
});

const routeTree = rootRoute.addChildren([indexRoute, giftCardDetailsRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
