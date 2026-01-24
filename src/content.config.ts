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

export const collections = {
    testDocs
}