import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    thesis: z.string(),
    role: z.string(),
    period: z.string(),
    stack: z.array(z.string()).default([]),
    status: z.enum(['Live', 'Private', 'In build', 'Archived']).default('Live'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    publishedAt: z.string(),
    ogImage: z.string().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { caseStudies, services };
