import MillionLint from "@million/lint";
/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		domains: ["placehold.co"],
	},
};
export default MillionLint.next({
	rsc: true,
})(nextConfig);
