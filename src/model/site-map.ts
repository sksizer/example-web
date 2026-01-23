export type Entry = {
	label: string;
	url: string;
	children?: Entry[];
};

export type SiteMap = Entry[];

export const site: SiteMap = [
	{
		label: "Astro Examples",
		url: "/astro",
		children: [],
	},
];
