import { signIn } from "@/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import type React from "react";
import { Button } from "../ui/button";

export function SignupForm() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form submitted");
	};

	return (
		<div className="mx-auto w-full max-w-md p-4 md:rounded-2xl md:p-8">
			<h2 className="font-bold text-xl">Sign Up</h2>
			<form
				className="my-8"
				action={async () => {
					"use server";
					await signIn("google");
				}}
			>
				<div className="flex flex-col space-y-4">
					<Button
						className="group/btn relative flex h-10 w-full items-center justify-center space-x-2 rounded-md px-4 font-medium shadow-input dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
						type="submit"
					>
						<IconBrandGoogle className="size-4" />
						<span className="text-sm">Sign in with Google</span>
						<BottomGradient />
					</Button>
				</div>

				<div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

				<div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
					<LabelInputContainer>
						<Label htmlFor="firstname">First name</Label>
						<Input id="firstsname" placeholder="Tyler" type="text" />
					</LabelInputContainer>
					<LabelInputContainer>
						<Label htmlFor="lastname">Last name</Label>
						<Input id="lastname" placeholder="Durden" type="text" />
					</LabelInputContainer>
				</div>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="email">Email Address</Label>
					<Input id="email" placeholder="projectmayhem@fc.com" type="email" />
				</LabelInputContainer>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="password">Password</Label>
					<Input id="password" placeholder="••••••••" type="password" />
				</LabelInputContainer>

				<Button
					className="group/btn relative block h-10 w-full rounded-md font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
					type="submit"
				>
					Sign up &rarr;
					<BottomGradient />
				</Button>
			</form>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className="-bottom-px absolute inset-x-0 block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
			<span className="-bottom-px absolute inset-x-10 mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
		</>
	);
};

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex w-full flex-col space-y-2", className)}>
			{children}
		</div>
	);
};
