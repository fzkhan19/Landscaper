"use client";
import { Home, Menu } from "lucide-react";
import Link from "next/link";
import React, { Suspense, useMemo } from "react";

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

import { CONTENT } from "@/constants/content";
import { IconLeaf } from "@tabler/icons-react";
import { ToggleTheme as ToggleThemeComponent } from "../toggle-theme";
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
} from "@/components/ui/navigation-menu";

interface RouteProps {
	href: string;
	label: string;
}

const MemoizedRouteList = React.lazy(() =>
	import("./MemoizedRouteList").then((module) => ({
		default: module.MemoizedRouteList,
	})),
);

const CustomNavigationMenu = React.memo(() => {
	const routeList: RouteProps[] = useMemo(
		() => [
			{
				href: "/",
				label: "Home",
			},
			{
				href: "/services",
				label: "Services",
			},
			{
				href: "/about",
				label: "About",
			},
			{
				href: "/portfolio",
				label: "Portfolio",
			},
			{
				href: "/contact",
				label: "Contact",
			},
		],
		[],
	);

	return (
		<NavigationMenu className="mx-auto hidden lg:block">
			<NavigationMenuList>
				<NavigationMenuItem>
					<Suspense fallback={<div>Loading...</div>}>
						<MemoizedRouteList routeList={routeList} />
					</Suspense>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
});

const MemoizedSheetContent = React.memo(SheetContent);
const MemoizedSheetFooter = React.memo(SheetFooter);
const ToggleTheme = React.memo(ToggleThemeComponent);

export const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	const routeList: RouteProps[] = useMemo(
		() => [
			{
				href: "/",
				label: "Home",
			},
			{
				href: "/about",
				label: "About",
			},
			{
				href: "/services",
				label: "Services",
			},
			{
				href: "/portfolio",
				label: "Portfolio",
			},
			{
				href: "/contact",
				label: "Contact",
			},
		],
		[],
	);

	return (
		<header
			className={cn(
				"absolute top-5 right-0 left-0 z-40 mx-auto flex w-[90%] items-center justify-between",
				"rounded-2xl border border-secondary p-4",
				"shadow-[0_0px_10px_rgb(0,0,0,0.2)] shadow-primary/30",
				"border-0 hover:shadow-primary/70",
				"transition-all duration-500 ease-in-out",
				"md:top-10 md:w-[70%] lg:w-[75%] lg:max-w-screen-xl",
				"bg-white/50 saturate-150 backdrop-blur backdrop-contrast-125 dark:bg-black/50",
			)}
		>
			<Link
				className="flex items-center gap-3 px-2 font-extrabold text-lime-800 text-xl dark:text-lime-200"
				href="/"
			>
				{/* <MemoizedImage src="/logo.svg" width={32} height={32} alt="logo" /> */}
				<IconLeaf />
				{CONTENT.PRODUCT_TITLE}
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
					<MemoizedSheetContent
						className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl border-secondary bg-card"
						side="left"
					>
						<div>
							<SheetHeader className="mb-4 ml-4">
								<SheetTitle className="flex items-center">
									<Link
										className="flex items-center gap-2 font-bold text-lg text-lime-700 dark:text-lime-200"
										href="/"
									>
										<IconLeaf />
										{CONTENT.PRODUCT_TITLE}
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

						<MemoizedSheetFooter className="w-full flex-col items-start justify-start sm:flex-col">
							<Separator className="mb-2" />
							<div className="flex w-full items-center justify-between">
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
						</MemoizedSheetFooter>
					</MemoizedSheetContent>
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
