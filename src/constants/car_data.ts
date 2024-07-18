export const CAR_TYPE_RATES: Record<string, number[]> = {
	SALOON: [10, 6.5, 3, 2.3, 2.2, 2.1],
	ESTATE: [11, 6.7, 3.1, 2.4, 2.3, 2.2],
	MPV: [12, 7, 3.2, 2.6, 2.5, 2.3],
	EIGHT_SEATER: [14, 8, 3.5, 2.8, 2.6, 2.4],
	EXECUTIVE: [15, 9, 3.6, 2.9, 2.7, 2.5],
};

export const CAR_TYPE = [
	"SALOON",
	"ESTATE",
	"MPV",
	"EIGHT_SEATER",
	"EXECUTIVE",
];

export const CAR_CARD = [
	{
		name: "Saloon",
		icon: "saloon-icon.svg",
		key: "SALOON",
		passengers: "4",
		suitcases: "2",
	},
	{
		name: "Estate",
		icon: "estate-icon.svg",
		key: "ESTATE",
		passengers: "4",
		suitcases: "2",
	},
	{
		name: "MPV",
		icon: "mpv-icon.svg",
		key: "MPV",
		passengers: "4",
		suitcases: "2",
	},
	{
		name: "8-Seater",
		icon: "eight-seater-icon.svg",
		key: "EIGHT_SEATER",
		passengers: "8",
		suitcases: "4",
	},
	{
		name: "Executive",
		icon: "executive-icon.svg",
		key: "EXECUTIVE",
		passengers: "4",
		suitcases: "2",
	},
];
