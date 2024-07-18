import Loader from "@/components/Loader/Loader";

export default function Loading() {
	return (
		<div className="-mt-24 flex h-screen w-full items-center justify-center">
			<Loader />
		</div>
	);
}
