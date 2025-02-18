import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryProvider } from "@/providers/QueryProvider";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/routes/__root.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// biome-ignore lint/style/noNonNullAssertion:
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryProvider>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryProvider>
	</StrictMode>,
);
