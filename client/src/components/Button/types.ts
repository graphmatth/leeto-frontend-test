import type { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
	size?: "small" | "medium" | "large";
	variant?: "primary" | "ghost";
	onClick?: () => void;
	className?: string;
}
