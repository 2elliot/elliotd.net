import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// A year (2024) or a year and month (2025-08)
const date = z.coerce.string().regex(/^\d{4}(-\d{2})?$/, 'Use YYYY or YYYY-MM, e.g. 2024 or 2025-08');

const link = z.object({
    label: z.string(),
    url: z.string(),
});

// One Markdown file per project in src/content/projects/. The file name is its URL: nocte.md -> /projects/nocte/
// Anything written below the front matter becomes the project's page. With nothing written,
// the project's card links straight to its first link instead.
const projects = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        type: z.enum(['game', 'software', 'hackathon', 'research']),
        summary: z.string(),
        start: date.optional(),
        end: date.optional(),
        tags: z.array(z.string()).default([]),
        // The first link is shown as the main button
        links: z.array(link).default([]),
        // Full-size image in public/; its -small.webp copy is used where one exists
        poster: z.string().optional(),
        // Looping clip shown in place of the poster, linking to the trailer
        video: z.string().optional(),
        trailer: z.string().optional(),
        // Featured projects are shown on the home page
        featured: z.boolean().default(false),
        // Hidden projects still get a page, but aren't listed anywhere
        hidden: z.boolean().default(false),
    }),
});

// Background pages for teams, competitions, and events: /topics/<file name>/
const topics = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/topics' }),
    schema: z.object({
        title: z.string(),
        links: z.array(link).default([]),
    }),
});

export const collections = { projects, topics };
