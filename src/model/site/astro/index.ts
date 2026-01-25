import type { SiteMap } from "../../site-map.ts";

export const links: SiteMap = [
	{
		label: "Transition Persistence",
		url: "/astro/transition-persistence",
		description: "Astro transition persistence",
	},
	{
		label: "Layout",
		url: "/astro/layout",
		description: "Simple example using astro layout features",
	},
	{
		label: "MDX",
		url: "/astro/mdx",
		description: "Astro MDX integration using astro layout features",
		children: [
			{
				label: "Rendering",
				url: "/astro/rendering",
				description: "Experimenting with various inline rendering"
			},
			{
				label: "MDX From Collection",
				url: "/astro/mdx/from-collection",
				description: "Astro MDX integration from using an astro collection",
			},
			{
				label: "Using a layout",
				url: "/astro/mdx/using-layout",
				description: "Specifying a layout with an mdx page"
			},
			{
				label: "Inline Collection - MDX as page and collection entry",
				url: "/astro/inline-collection"
			}
		]
	},
];
