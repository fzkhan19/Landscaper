import type { Metadata } from "next";

const title: string = "Book Airport Taxi - Fast, Easy & Reliable Transfers";
const description: string =
	"Reliable airport taxi booking service in the UK. Book your airport transfer in just 3 easy steps and get to your destination on time.";

// TODO: Change to original url when releasing
export const url: string = "https://take-off.uk";

export const METADATA: Metadata = {
	title: title,
	description: description,
	keywords: [
		"take off taxi",
		"take off cabs",
		"discount airport taxi service",
		"last-minute airport taxi booking",
		"airport taxi service with child seat",
		"pet-friendly airport taxi service",
		"airport taxi service for business travelers",
		"london airport taxi",
		"Heathrow Airport (LHR) - London",
		"Gatwick Airport (LGW) - London",
		"Manchester Airport (MAN)",
		"Stansted Airport (STN) - London",
		"London Luton Airport (LTN)",
		"Edinburgh Airport (EDI)",
		"Birmingham Airport (BHX)",
		"Glasgow Airport (GLA)",
		"Bristol Airport (BRS)",
		"Newcastle Airport (NCL)",
		"Liverpool John Lennon Airport (LPL)",
		"East Midlands Airport (EMA)",
		"London City Airport (LCY)",
		"Southampton Airport (SOU)",
		"Aberdeen Airport (ABZ)",
		"Belfast International Airport (BFS)",
		"Leeds Bradford Airport (LBA)",
		"London Southend Airport (SEN)",
		"Cardiff Airport (CWL)",
		"Exeter Airport (EXT)",
		"Heathrow airport taxi",
		"affordable Heathrow airport taxi",
		"cheap London airport taxi",
		"fast airport taxi service",
		"Ealing airport taxi service",
		"Croydon airport taxi booking",
		"Hounslow airport taxi service",
		"Wimbledon airport taxi booking",
		"Stratford airport taxi service",
	],
	manifest: "/manifest.webmanifest",
	icons: [
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon/favicon-16x16.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "192x192",
			url: "/favicon/android-icon-192x192.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "96x96",
			url: "/favicon/favicon-96x96.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon/favicon-16x16.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "57x57",
			url: "/favicon/apple-icon-57x57.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "60x60",
			url: "/favicon/apple-icon-60x60.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "72x72",
			url: "/favicon/apple-icon-72x72.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "76x76",
			url: "/favicon/apple-icon-76x76.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "114x114",
			url: "/favicon/apple-icon-114x114.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "120x120",
			url: "/favicon/apple-icon-120x120.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "144x144",
			url: "/favicon/apple-icon-144x144.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "152x152",
			url: "/favicon/apple-icon-152x152.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "/favicon/apple-icon-180x180.png",
		},
	],
	openGraph: {
		title,
		description,
		type: "website",
		siteName: "TAKEOFF.COM",
		url: url,
		images: [
			{
				url: "/opengraph/opengraph-image.png",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		title,
		description,
		card: "summary_large_image",
		creator: "@FaizKhan",
		creatorId: "10267032498603556917",
		images: [
			{
				url: "/opengraph/opengraph-image.png",
				width: 1200,
				height: 630,
			},
		],
	},
};

export const JSON_LD = {
	"@context": "https://schema.org",
	"@type": "TaxiService",
	name: "TakeOff.com",
	url: url,
	logo: `${url}/opengraph-image.png`,
	image: `${url}/opengraph-image.png`,
	description:
		"Book your airport taxi in London with TakeOff.com. Choose from a variety of cabs to suit your needs and budget.",
	areaServed: {
		"@type": "Place",
		name: "London",
		address: {
			"@type": "PostalAddress",
			addressLocality: "London",
			addressCountry: "GB",
		},
	},
	serviceType: "Airport Taxi Service",
	availableService: [
		{
			"@type": "Service",
			serviceType: "Standard Cab",
			description:
				"Affordable standard cab service for individual or small group transport.",
		},
		{
			"@type": "Service",
			serviceType: "Luxury Cab",
			description:
				"Luxury cab service for those looking for comfort and style.",
		},
		{
			"@type": "Service",
			serviceType: "Minivan",
			description: "Spacious minivans for larger groups or extra luggage.",
		},
	],
	offers: {
		"@type": "Offer",
		url: `${url}/taxis`,
		priceCurrency: "GBP",
		price: "Varies",
		eligibleRegion: {
			"@type": "Place",
			name: "London",
		},
		availability: "https://schema.org/InStock",
		itemOffered: {
			"@type": "Service",
			serviceType: "TaxiBooking",
		},
	},
	contactPoint: {
		"@type": "ContactPoint",
		telephone: "+44-20-12345678",
		contactType: "Customer Service",
		availableLanguage: "English",
		areaServed: "GB",
	},
	sameAs: [
		"https://www.facebook.com/takeoffcom",
		"https://www.twitter.com/takeoffcom",
		"https://www.instagram.com/takeoffcom",
	],
};
