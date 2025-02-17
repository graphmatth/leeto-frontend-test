import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";
import { Progress as ProgressHeadless } from "@base-ui-components/react/progress";

export const Progress = ({
	className,
	value,
}: ComponentPropsWithoutRef<typeof ProgressHeadless.Root>) => {
	return (
		<ProgressHeadless.Root
			value={value}
			className={cn("w-48 overflow-hidden h-1.5 rounded-full block", className)}
		>
			<ProgressHeadless.Track className="bg-slate-200 overflow-hidden h-full">
				<ProgressHeadless.Indicator className="bg-brand-primary transition-[width] block rounded-full" />
			</ProgressHeadless.Track>
		</ProgressHeadless.Root>
	);
};
