import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const testDocs = defineCollection({
	loader: glob({
		pattern: "**/*.mdx",
		base: "./content/testDocs",
	}),
	schema: z.object({
		title: z.string(),
	}),
});

const blog = defineCollection({
	loader: glob({
		pattern: "**/*.mdx",
		base: "./content/blog",
	}),
	schema: z.object({
		title: z.string(),
		slug: z.optional(z.string()),
	}),
});

const inlineCollection = defineCollection({
	loader: glob({
		pattern: "**/*.mdx",
		base: "./src/pages/astro/inline-collection",
		// base: "./content/blog"
	}),
	schema: z.object({}),
});

const siteCollection = defineCollection(
	{
		loader: glob({
			pattern: [
				"**/*.mdx",
				"!**/_*.mdx",
				"!**/inline-collection/**/*.mdx",
			],
			base: "./src/pages"
		}),
		schema: z.object({
			title: z.string(),
			references: z.optional(z.array(z.string().url()))
		})
	}
)

const referenceExampleParents = defineCollection(
	{
		loader: glob({
				pattern: ["**/*.md"],
				base: "./src/pages/astro/content-collection/references/parents"
			}),
		schema: z.object({
				children: z.array(reference("referenceExampleChildren"))
		})
	})
const referenceExampleChildren = defineCollection(
	{
		loader: glob({
			pattern: ["**/*.md"],
			base: "./src/pages/astro/content-collection/references/children"
		})
	}
)

export const collections = {
	blog,
	inlineCollection,
	referenceExampleParents,
	referenceExampleChildren,
	siteCollection,
	testDocs,
};
