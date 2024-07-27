import { Check } from "lucide-react";
import Image from "next/image";

const badges = [
	"Garden edging options",
	"Turf suggestions",
	"Irrigation installation",
	"Concept planting ideas",
	"Hardscaping options & layouts",
];

export default function Hero() {
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
							WHAT WE DO
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

			{/* Services */}
			<div className="flex w-full flex-col items-center justify-center gap-4 px-8 pt-20 text-left md:px-0">
				<div className="flex max-w-6xl flex-col items-start justify-center gap-4 pt-20 text-left">
					<h1 className="w-full max-w-2xl font-bold text-3xl text-lime-600">
						With a focus on functionality, aesthetics, and sustainability
					</h1>
					<p className="max-w-3xl text-pretty text-left text-sm lg:text-lg">
						Our team can work with you to create a customized landscape sketch
						that reflects your style and desires for a landscaped garden. From
						concept to execution, we prioritize open communication and attention
						to detail to ensure your landscape becomes a source of pride and
						joy.
						<br />
						<br />
						Through this process, we will give advice on critical factors such
						as topography, sunlight exposure, existing vegetation, and
						structural wall requirements. With our skills, experience, and
						commitment to quality, we will bring your design to life, enhance
						your property’s value and provide a serene sanctuary for you to
						enjoy.
					</p>

					<h1 className="mt-16 w-full max-w-2xl font-bold text-3xl text-lime-600">
						Our services includes
					</h1>
					<p className="max-w-3xl text-pretty text-left text-sm lg:text-lg">
						For a comprehensive landscape design service we have a team we work
						with to provide you with a more in-depth consultation to understand
						your vision, requirements, and budget in further detail if required.
					</p>
					<div className="mt-8 flex flex-wrap gap-4 md:mt-16 md:max-w-4xl">
						{badges.map((badge, index) => (
							<div
								className="flex items-center gap-2 rounded-xl bg-foreground/90 p-2 px-2 md:gap-4 md:px-4"
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
							>
								<Check className="size-3 rounded-full bg-lime-300 p-0.5 text-foreground md:size-6 dark:bg-lime-700" />
								<p className="text-pretty text-left font-semibold text-[10px] text-background md:text-sm">
									{badge}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
