import Image from "next/image";

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
							<h1 className="text scroll-m-20 text-balance font-extrabold text-4xl text-lime-600 lg:text-6xl">
								Ready to transform your outdoor experience?
							</h1>
						</div>
						{/* End Title */}
						<div className="mt-5">
							<p className="text-balance text-base text-muted-foreground lg:text-lg">
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
			<div className="flex w-full justify-center">
				<Image
					src={"/video.png"}
					alt="video"
					className="rounded-xl"
					width={800}
					height={400}
				/>
			</div>
			{/* End Video */}
		</div>
	);
}
