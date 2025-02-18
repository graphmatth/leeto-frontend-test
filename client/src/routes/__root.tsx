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

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
