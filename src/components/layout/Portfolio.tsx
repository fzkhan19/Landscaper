import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export default function Portfolio() {
	return (
		<>
			{/* Hero */}
			<div className="relative flex flex-col items-center justify-center overflow-hidden py-20 lg:py-20">
				<div className="relative z-10">
					<div className="container py-10 lg:py-8">
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
									Our commitment to excellence ensures that your landscape is
									not only stunning but also affordable.
								</p>
							</div>
							<div className="mt-5 flex flex-wrap justify-center gap-x-10 gap-y-10 lg:gap-x-20 lg:gap-y-20">

								<div>
									<Image
										src="/project1.png"
										alt="Project 1"
										width={400}
										height={400}
									/>
									<div
										className={cn(
											"absolute top-80 ml-12 max-w-[15rem] md:top-auto md:bottom-0",
											"rounded-3xl rounded-br-[3.5rem] bg-lime-200 p-8 px-4",
											"flex flex-col items-start justify-center gap-y-2",
										)}
									>
										<span className="font-light text-lime-800">Maintenance</span>
										<p className="mt-0.5 text-balance text-start font-bold text-lime-900 text-xl">
											Backyard transformation with a pool,fire pit, landscaping
											& more
										</p>
										<Button className="group rounded-full bg-white p-3 hover:scale-105">
											<ArrowUpRight className="size-5 group-hover:scale-110" />
										</Button>
									</div>
								</div>

								<div>
									<Image
										src="/project2.png"
										alt="Project 1"
										width={400}
										height={400}
									/>
									<div
										className={cn(
											"absolute right-0 bottom-0 mr-20 max-w-[15rem] ",
											"rounded-3xl rounded-br-[3.5rem] bg-lime-200 p-8 px-4",
											"flex flex-col items-start justify-center gap-y-2",
										)}
									>
										<span className="font-light text-lime-800">Maintenance</span>
										<p className="mt-0.5 text-balance text-start font-bold text-lime-900 text-xl">
											Backyard transformation with a pool,fire pit, landscaping
											& more
										</p>
										<Button className="grow rounded-full bg-white p-3 hover:scale-105">
											<ArrowUpRight className="size-5 group-hover:scale-110" />
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
