import { Button } from "@/components/ui/button";
import { CONTENT } from "@/constants/content";
import { Calendar } from "lucide-react";
import Image from "next/image";

const CalendarIcon = () => <Calendar className="size-5" />;

export default function CTASection() {
	return (
		<>
			{/* Hero */}
			<div className="relative overflow-hidden">
				<div className="relative z-10">
					<div className="container py-10 pt-0">
						<div className="mx-auto max-w-2xl text-center">
							{/* Title */}
							<div className="max-w-2xl">
								<h1 className="text scroll-m-20 text-balance font-extrabold text-4xl text-lime-600 lg:text-6xl">
									We're ready to start.
								</h1>
							</div>
							{/* End Title */}
							<div className="mt-5 max-w-3xl">
								<p className="text-balance text-base text-muted-foreground lg:text-lg">
									Transform your home to zen garden
								</p>
							</div>
							{/* Buttons */}
							<div className="mx-4 mt-8 flex flex-col justify-center gap-3 gap-y-4 md:mx-0 md:flex-row">
								<Button
									className="font-semibold text-base"
									size={"lg"}
									variant={"expandIcon"}
									Icon={CalendarIcon}
									iconPlacement="right"
								>
									Make an appointment
								</Button>
							</div>
							{/* End Buttons */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
