import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import {
	MdFamilyRestroom,
	MdStackedLineChart,
	MdCardGiftcard,
} from "react-icons/md";

const iconMapping = {
	family: MdFamilyRestroom,
	"line-chart": MdStackedLineChart,
	gift: MdCardGiftcard,
} as const;

type IconName = keyof typeof iconMapping;

const iconBoxVariants = cva(
	"size-8 flex items-center justify-center rounded-lg",
	{
		variants: {
			color: {
				pink: "bg-pink-100 text-pink-800",
				green: "bg-green-100 text-green-800",
			},
			size: {
				medium: "size-8",
				large: "size-10 md:size-16",
			},
		},
		defaultVariants: {
			color: "pink",
			size: "medium",
		},
	},
);

interface IconBoxProps extends VariantProps<typeof iconBoxVariants> {
	icon: IconName;
	className?: string;
}

export const IconBox: React.FC<IconBoxProps> = ({ icon, color, size, className }) => {
	const Icon = iconMapping[icon];

	return (
		<div className={cn(iconBoxVariants({ color, size }), className)}>
			<Icon className={`${size === "large" ? "size-[18px] md:size-6" : "size-[18px]"}`} />
		</div>
	);
};
