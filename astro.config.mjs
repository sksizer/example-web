// @ts-check

import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), vue()],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathjax],
	}
});
