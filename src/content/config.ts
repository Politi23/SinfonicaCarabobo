import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(100),
    date: z.string().transform(str => new Date(str)),
    excerpt: z.string(),
    featuredImage: z.string().optional(),
    author: z.string(),
    categories: z.array(z.string()).default([]),
    readTime: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};