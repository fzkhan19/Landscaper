import HeroSection from "@/components/layout/Hero";
import Particles from "@/components/ui/particles";
export default function Home() {
	return (
		<article>
			<HeroSection />
			<Particles
				refresh
				className="absolute inset-0 -z-10"
				ease={80}
				quantity={200}
			/>
		</article>
	);
}
