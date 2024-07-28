"use client";
import { AutosizeTextarea } from "@/components/ui/autoResizeTextArea";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
export default function ContactForm() {
	const formSchema = z.object({
		name: z.string().min(2).max(50),
		email: z.string().email(),
		phone_number: z.string().min(10).max(15),
		address: z.string().min(2).max(50),
		notes: z.string().min(2).max(50),
	});

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<div className="mx-auto flex max-w-5xl flex-col items-center justify-center py-10 text-center">
			<p className="text-center text-lime-600 text-xs tracking-tight">
				CONTACT FORM
			</p>
			{/* Title */}
			<div className="mt-2 w-full">
				<h1 className="text scroll-m-20 text-balance font-bold text-2xl text-lime-600 lg:text-4xl">
					Let's schedule your appointment
				</h1>
			</div>
			{/* End Title */}
			<div className="mt-5 max-w-3xl">
				<p className="text-pretty text-muted-foreground text-sm md:text-base">
					Feel free to give us a call or send us a message and we'll help get
					the answers you need, or a quote for services at your residential or
					commercial property.
				</p>
			</div>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex w-full max-w-4xl flex-col space-y-8 py-20"
				>
					<div className="grid grid-cols-2 gap-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem className="flex flex-col space-y-4">
									<FormLabel className="ml-2 place-self-start text-lime-600 dark:text-lime-200">
										Name
									</FormLabel>
									<FormControl>
										<Input placeholder="Enter your name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="flex flex-col space-y-4">
									<FormLabel className="ml-2 place-self-start text-lime-600 dark:text-lime-200">
										Email
									</FormLabel>
									<FormControl>
										<Input placeholder="Enter your email" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<FormField
							control={form.control}
							name="phone_number"
							render={({ field }) => (
								<FormItem className="flex flex-col space-y-4">
									<FormLabel className="ml-2 place-self-start text-lime-600 dark:text-lime-200">
										Phone Number
									</FormLabel>
									<FormControl>
										<Input placeholder="Enter your phone number" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="address"
							render={({ field }) => (
								<FormItem className="flex flex-col space-y-4">
									<FormLabel className="ml-2 place-self-start text-lime-600 dark:text-lime-200">
										Address
									</FormLabel>
									<FormControl>
										<Input placeholder="Enter your address" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="notes"
						render={({ field }) => (
							<FormItem className="flex flex-col space-y-4">
								<FormLabel className="ml-2 place-self-start text-lime-600 dark:text-lime-200">
									Notes
								</FormLabel>
								<FormControl>
									<AutosizeTextarea
										className="no-scrollbar resize-none text-pretty pr-8"
										placeholder="Enter your message"
										minHeight={100}
										maxHeight={500}
										{...field}
									/>
									{/* <Input placeholder="Enter your message" {...field} /> */}
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="w-48 text-primary-foreground" type="submit">
						Send Message
					</Button>
				</form>
			</Form>
		</div>
	);
}
