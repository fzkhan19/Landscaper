"use client";
import { Home, Menu } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../../ui/sheet";

import { PRODUCT_LOGO, PRODUCT_TITLE } from "@/constants/content";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "../../ui/navigation-menu";
import { ToggleTheme } from "../toggle-theme";

interface RouteProps {
	href: string;
	label: string;
}

const routeList: RouteProps[] = [
	{
		href: "/taxis",
		label: "Book a Ride",
	},
	{
		href: "/rides",
		label: "Your Rides",
	},
	{
		href: "/about",
		label: "About",
	},
	{
		href: "/contact",
		label: "Contact",
	},
	{
		href: "/help",
		label: "Help",
	},
];

const MemoizedRouteList = React.lazy(() =>
	import("./MemoizedRouteList").then((module) => ({
		default: module.MemoizedRouteList,
	})),
);

const CustomNavigationMenu = React.memo(() => (
	<NavigationMenu className="mx-auto hidden lg:block">
		<NavigationMenuList>
			<NavigationMenuItem>
				<Suspense fallback={<div>Loading...</div>}>
					<MemoizedRouteList routeList={routeList} />
				</Suspense>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenu>
));

export const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<header
			className={cn(
				"sticky top-5 z-40 mx-auto flex w-[90%] items-center justify-between",
				"rounded-2xl border border-secondary p-4",
				"shadow-[0_0px_10px_rgb(0,0,0,0.2)] shadow-primary/30",
				"border-0",
				"md:top-10 md:w-[70%] lg:w-[75%] lg:max-w-screen-xl",
				"bg-white/20 saturate-150 backdrop-blur backdrop-contrast-125 dark:bg-black/20",
			)}
		>
			<Link className="flex items-center gap-2 px-2 font-bold text-lg" href="/">
				<PRODUCT_LOGO size={24} fill="currentColor" />
				{PRODUCT_TITLE}
			</Link>

			{/* <!-- Mobile --> */}
			<div className="flex items-center lg:hidden">
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Menu
							className="cursor-pointer lg:hidden"
							onClick={() => setIsOpen(!isOpen)}
						/>
					</SheetTrigger>
					<SheetContent
						className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl border-secondary bg-card"
						side="left"
					>
						<div>
							<SheetHeader className="mb-4 ml-4">
								<SheetTitle className="flex items-center">
									<Link
										className="flex items-center gap-2 font-bold text-lg"
										href="/"
									>
										<PRODUCT_LOGO size={24} fill="currentColor" />
										{PRODUCT_TITLE}
									</Link>
								</SheetTitle>
							</SheetHeader>

							<div className="flex flex-col gap-2">
								{routeList.map(({ href, label }) => (
									<Button
										key={href}
										asChild
										className="justify-start text-base"
										variant="ghost"
										onClick={() => setIsOpen(false)}
									>
										<Link href={href}>{label}</Link>
									</Button>
								))}
							</div>
						</div>

						<SheetFooter className="flex-col items-start justify-start sm:flex-col w-full">
							<Separator className="mb-2" />
							<div className="justify-between items-center flex w-full">
								<ToggleTheme />
								<Link className="mx-3" href={"/"}>
									<Button
										className="w-full justify-start"
										size="sm"
										variant="ghost"
									>
										<Home className="size-5" />
									</Button>
								</Link>
							</div>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</div>

			{/* <!-- Desktop --> */}
			<CustomNavigationMenu />

			<div className="hidden items-center lg:flex">
				<Link className="mx-3" href={"/"}>
					<Button className="w-full justify-start" size="sm" variant="ghost">
						<Home className="size-5" />
					</Button>
				</Link>
				<ToggleTheme />
			</div>
		</header>
	);
};
