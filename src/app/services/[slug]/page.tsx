import CTASection from "@/components/layout/CTA";
import { FAQSection } from "../Faq";
import Hero from "./Hero";

export default function Page() {
	return (
		<>
			{/* Hero */}
			<Hero />
			<FAQSection />
			<CTASection />
		</>
	);
}
