import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";
import { Tabs as TabsHeadless } from "@base-ui-components/react/tabs";
import { compoundComponent } from "../../../utils/compound-component";

const TabsRoot = ({
	className,
	...props
}: ComponentPropsWithoutRef<typeof TabsHeadless.Root>) => (
	<TabsHeadless.Root className={className} {...props} />
);

TabsRoot.displayName = "Tabs.Root";

const TabsList = ({
	className,
	children,
	...props
}: ComponentPropsWithoutRef<typeof TabsHeadless.List>) => (
	<TabsHeadless.List
		className={cn(
			"relative flex gap-8 whitespace-nowrap border-b-[1px] border-slate-200",
			className,
		)}
		{...props}
	>
		{children}
		<TabsHeadless.Indicator className="bg-brand-primary w-(--active-tab-width) left-(--active-tab-left) absolute -bottom-[1px] h-0.5 motion-reduce:transition-none  transition-all z-10" />
	</TabsHeadless.List>
);

TabsList.displayName = "Tabs.List";

const TabsTab = ({
	className,
	...props
}: ComponentPropsWithoutRef<typeof TabsHeadless.Tab>) => (
	<TabsHeadless.Tab
		className={cn(
			"font-semibold px-4 py-2 text-neutral-350 text-slate-600 hover:text-brand-primary transition-colors duration-200 ease-in-out aria-selected:text-brand-primary cursor-pointer",
			className,
		)}
		{...props}
	/>
);
TabsTab.displayName = "Tabs.Tab";

const TabsPanel = ({
	className,
	...props
}: ComponentPropsWithoutRef<typeof TabsHeadless.Panel>) => (
	<TabsHeadless.Panel className={className} {...props} />
);

TabsPanel.displayName = "Tabs.Panel";

export const Tabs = compoundComponent(TabsRoot, {
	List: TabsList,
	Tab: TabsTab,
	Panel: TabsPanel,
});
