import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import type { ComponentPropsWithoutRef } from "react";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md font-medium transition duration-200 cursor-pointer",
	{
		variants: {
			variant: {
				primary: "bg-brand-primary text-white px-4 py-2 hover:bg-blue-900",
				ghost: "",
			},
			size: {
				small: "text-sm px-2 py-1",
				medium: "text-base px-4 py-2",
				large: "text-lg px-6 py-3",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "medium",
		},
	},
);

export interface ButtonProps
	extends ComponentPropsWithoutRef<"button">,
		VariantProps<typeof buttonVariants> {}

export const Button = ({
	size,
	variant,
	children,
	className,
	...props
}: ButtonProps) => {
	return (
		<button
			type="button"
			className={cn(buttonVariants({ size, variant, className }))}
			{...props}
		>
			{children}
		</button>
	);
};
