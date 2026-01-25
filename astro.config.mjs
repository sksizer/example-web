// @ts-check

import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), vue()],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathjax],
	},
});
