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
		children:  [
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
						description: "Experimenting with various inline rendering",
					},
					{
						label: "MDX From Collection",
						url: "/astro/mdx/from-collection",
						description: "Astro MDX integration from using an astro collection",
					},
					{
						label: "Using a layout",
						url: "/astro/mdx/using-layout",
						description: "Specifying a layout with an mdx page",
					},
					{
						label: "Inline Collection - MDX as page and collection entry",
						url: "/astro/inline-collection",
					},
				],
			},
		],
	},
	{
		label: "CSS",
		url: "/css",
		children: [
			{
				label: "IDE",
				url: "/css/ide",
				description: "Example of CSS Grids for IDE Style Layout",
			},
			{
				label: "Media Queries",
				url: "/css/media-queries",
				description: "Example of Using Media Queries",
			},
		],
	},
	{
		label: "Examples",
		url: "/examples",
		children: [
			{
				label: "IDE",
				url: "/examples/ide",
				description: "Example of CSS Grids for IDE Style Layout",
			},
		],
	},
];

export const github_root = "https://github.com/sksizer/example-web/tree/main/"