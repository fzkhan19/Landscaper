import HowItWorks from "@/components/layout/HowItWorks";
import Portfolio from "@/components/layout/Portfolio";
import WhatWeDo from "@/components/layout/WhatWeDo";
import WhyChooseUs from "@/components/layout/WhyChooseUs";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/layout/Hero"), {
	ssr: true,
});

const AuroraBackground = dynamic(
	() => import("@/components/ui/aurora-background"),
	{
		ssr: true,
	},
);

export default function Home() {
	return (
		<article>
			<HeroSection />
			<WhatWeDo />
			<WhyChooseUs />
			<HowItWorks />
			<Portfolio />
		</article>
	);
}
