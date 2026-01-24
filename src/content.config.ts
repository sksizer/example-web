import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const testDocs= defineCollection({
    loader: glob({
        pattern: "**/*.mdx",
        base: "./content/testDocs"}),
    schema: z.object({
        title: z.string()
    })
})

const blog = defineCollection({
    loader: glob({
        pattern: "**/*.mdx",
        base: "./content/blog"
    }),
    schema: z.object({
        title: z.string(),
        slug: z.optional(z.string())
    })
})

export const collections = {
    testDocs,
    blog
}