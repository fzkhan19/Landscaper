import CTASection from "@/components/layout/CTA";
import { FAQSection } from "./Faq";
import WhatWeDo from "./WhatWeDo";

export default function Page() {
	return (
		<div className="relative overflow-hidden lg:py-20">
			{/* Gradients */}
			<div
				aria-hidden="true"
				className="-top-96 -translate-x-1/2 absolute start-1/2 flex transform"
			>
				<div className="-translate-x-[10rem] h-[44rem] w-[25rem] rotate-[-60deg] transform bg-gradient-to-r from-primary/50 to-primary/20 blur-3xl" />
				<div className="-rotate-12 -translate-x-[-35rem] h-[50rem] w-[50rem] origin-top-left rounded-full bg-gradient-to-tl from-primary/50 to-primary/10 blur-3xl" />
			</div>
			{/* End Gradients */}

			<WhatWeDo />
			<FAQSection />
			<CTASection />
		</div>
	);
}
