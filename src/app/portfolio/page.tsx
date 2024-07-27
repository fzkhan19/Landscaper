import ProjectCard from "@/components/layout/projectCard";

const projects = [
	{
		title: "Maintenance",
		image: "/project1.png",
		description:
			"Backyard transformation with a pool,fire pit, landscaping & more",
	},
	{
		title: "Maintenance",
		image: "/project2.png",
		description:
			"Backyard transformation with a pool,fire pit, landscaping & more",
	},
	{
		title: "Maintenance",
		image: "/project2.png",
		description:
			"Backyard transformation with a pool,fire pit, landscaping & more",
	},
	{
		title: "Maintenance",
		image: "/project1.png",
		description:
			"Backyard transformation with a pool,fire pit, landscaping & more",
	},
];

export default function Page() {
	return (
		<div className="relative overflow-hidden pt-10 md:py-20">
			{/* Gradients */}
			<div
				aria-hidden="true"
				className="-top-96 -translate-x-1/2 absolute start-1/2 flex transform"
			>
				<div className="-translate-x-[10rem] h-[44rem] w-[25rem] rotate-[-60deg] transform bg-gradient-to-r from-primary/50 to-primary/20 blur-3xl" />
				<div className="-rotate-12 -translate-x-[-35rem] h-[50rem] w-[50rem] origin-top-left rounded-full bg-gradient-to-tl from-primary/50 to-primary/10 blur-3xl" />
			</div>
			{/* End Gradients */}

			<div className="container py-20 lg:py-20">
				<div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center">
					<p className="text-center text-lime-600 text-xs tracking-tight md:text-sm">
						PORTFOLIO
					</p>
					{/* Title */}
					<div className="mt-2 w-full">
						<h1 className="scroll-m-20 text-pretty font-extrabold text-4xl text-lime-600 lg:text-6xl">
							Recent project highlights
						</h1>
					</div>
					{/* End Title */}
					<div className="mt-5 max-w-lg">
						<p className="text-pretty text-base text-muted-foreground lg:text-lg">
							Our commitment to excellence ensures that your landscape is not
							only stunning but also affordable.
						</p>
					</div>
					<div className="mt-5 flex flex-wrap justify-center gap-x-10 gap-y-16 lg:gap-x-20 lg:gap-y-20">
						{projects.map((project) => (
							<ProjectCard project={project} key={project.title} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
