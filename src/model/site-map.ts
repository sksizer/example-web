import { links } from "./site/astro.ts";
import { css } from "./site/css.ts";
import examples from "./site/examples.ts";

export type Entry = {
	label: string;
	url: string;
	description?: string;
	children?: Entry[];
};

export type SiteMap = Entry[];

export const site: SiteMap = [
	{
		label: "Astro Examples",
		url: "/astro",
		children: links,
	},
	{
		label: "CSS",
		url: "/css",
		children: css,
	},
	{
		label: "Examples",
		url: "/examples",
		children: examples,
	},
];
