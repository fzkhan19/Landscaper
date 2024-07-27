import { BriefcaseBusiness, CalendarCheck, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero({ title }: { title: string }) {
	return (
		<div className="relative overflow-hidden pt-20 lg:py-20">
			{/* Gradients */}
			<div
				aria-hidden="true"
				className="-top-96 -translate-x-1/2 absolute start-1/2 flex transform"
			>
				<div className="-translate-x-[10rem] h-[44rem] w-[25rem] rotate-[-60deg] transform bg-gradient-to-r from-primary/50 to-primary/20 blur-3xl" />
				<div className="-rotate-12 -translate-x-[-35rem] h-[50rem] w-[50rem] origin-top-left rounded-full bg-gradient-to-tl from-primary/50 to-primary/10 blur-3xl" />
			</div>
			{/* End Gradients */}
			<div className="relative z-10">
				<div className="container py-10 lg:py-16">
					<div className="mx-auto max-w-5xl text-center">
						<p className="flex justify-center text-lime-600 text-xs">
							{title.toUpperCase()}
						</p>
						{/* Title */}
						<div className="mt-5 max-w-5xl">
							<h1 className="text scroll-m-20 text-balance font-extrabold text-3xl text-lime-600 lg:text-6xl">
								Ready to transform your outdoor experience?
							</h1>
						</div>
						{/* End Title */}
						<div className="mt-5">
							<p className="text-balance text-muted-foreground text-sm lg:text-lg">
								We offer a comprehensive range of services, including layout
								design sketch, plant selection and installation, revitalization
								of existing features, improved irrigation systems, paving
								options, simple aesthetic mulching and more
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Video */}
			<div className="flex w-full justify-center px-8 md:px-0">
				<Image
					src={"/video.png"}
					alt="video"
					className="rounded-xl"
					width={800}
					height={400}
				/>
			</div>
			{/* End Video */}

			{/* Badge Band */}
			<div className="flex w-full flex-col items-center justify-around gap-y-12 pt-12 md:mt-8 md:flex-row md:px-24 lg:py-20">
				<div className="flex flex-col items-center justify-center gap-y-3">
					<CalendarCheck className="size-8 text-lime-800 dark:text-lime-300" />
					<p className="text-balance font-semibold text-lg text-lime-800 dark:text-lime-300">
						Date
					</p>
					<span className="text-lime-600 text-sm ">April 15, 2024</span>
				</div>
				<div className="flex flex-col items-center justify-center gap-y-3">
					<BriefcaseBusiness className="size-8 text-lime-800 dark:text-lime-300" />
					<p className="text-balance font-semibold text-lg text-lime-800 dark:text-lime-300">
						Services
					</p>
					<span className="text-lime-600 text-sm">
						Garden Design Installation
					</span>
				</div>
				<div className="flex flex-col items-center justify-center gap-y-3">
					<MapPin className="size-8 text-lime-800 dark:text-lime-300" />
					<p className="text-balance font-semibold text-lg text-lime-800 dark:text-lime-300">
						Location
					</p>
					<span className="text-lime-600 text-sm">
						3375 Hillview Drive Columbus
					</span>
				</div>
			</div>
			{/* End Badge Band */}

			{/* Services */}
			<div className="flex w-full flex-col items-center justify-center gap-4 px-8 text-left md:px-0">
				<div className="flex max-w-6xl flex-col items-start justify-center gap-4 pt-20 text-left">
					<h1 className="w-full max-w-2xl font-bold text-3xl text-lime-600">
						Backyard Transformation With a Pool, Fire Pit, Landscaping & More
					</h1>
					<p className="max-w-3xl text-pretty text-left text-sm lg:text-lg">
						Our team recently completed a transformative backyard landscaping
						project at a home located in the Whitehawk neighborhood in Omaha,
						NE. Around the new swimming pool area, we installed retaining walls,
						a fire pit, stamped concrete, landscape lighting, landscaping, and
						more to turn our client's backyard into a beautiful oasis.
						<br />
						<br />
						This breathtaking project began with an initial meeting where we
						learned about our client's vision and discussed all of the details.
						Then, we used the information we gathered to design the project and
						select the best materials. Once our client approved the design, we
						executed the construction phase and brought the plan to life. Our
						team performed each installation with precise attention to detail to
						ensure a phenomenal outcome. Continue reading to learn more about
						this top-notch backyard landscaping project!
					</p>
				</div>
			</div>
		</div>
	);
}
