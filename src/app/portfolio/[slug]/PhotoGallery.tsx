import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const photos = [
	"photo1.png",
	"photo2.png",
	"photo3.png",
	"photo4.png",
	"photo5.png",
	"photo6.png",
];

export default function PhotoGallery() {
	return (
		<div className="flex w-full flex-col items-center justify-center gap-4 px-8 py-20 text-left md:px-0 md:pt-10 md:pb-0">
			<div className="flex max-w-6xl flex-col items-center justify-center gap-8 text-left">
				<h1 className="w-full max-w-2xl text-center font-bold text-3xl text-lime-600">
					Project Photo Gallery
				</h1>
				<div className="hidden max-w-3xl flex-wrap items-center justify-center gap-4 text-left md:flex md:px-0">
					{photos.map((photo) => (
						<Image
							key={photo}
							src={`/${photo}`}
							alt="photo"
							className="rounded-xl"
							width={200}
							height={200}
						/>
					))}
				</div>

				<Carousel
					className="md:hidden"
					opts={{
						loop: true,
						align: "center",
					}}
				>
					<CarouselContent className="ml-0">
						{photos.map((photo: string) => (
							<CarouselItem key={photo} className="basis-1/2">
								<Image
									src={`/${photo}`}
									alt={photo}
									className="rounded-xl"
									width={200}
									height={200}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="-translate-y-1/2 absolute top-1/2 left-0 fill-black md:left-[-50px]" />
					<CarouselNext className="-translate-y-1/2 absolute top-1/2 right-0 fill-black md:right-[-50px]" />
				</Carousel>
			</div>
		</div>
	);
}
