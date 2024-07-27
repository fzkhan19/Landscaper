import { FAQSection } from "@/app/about/Faq";
import CTASection from "@/components/layout/CTA";
import Hero from "./Hero";
import PhotoGallery from "./PhotoGallery";

export default function Page({ params }: { params: { slug: string } }) {
	return (
		<>
			{/* Hero */}
			<Hero title={params.slug} />
			<PhotoGallery />
			<FAQSection />
			<CTASection />
		</>
	);
}
