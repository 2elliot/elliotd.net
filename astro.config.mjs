import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { blogMarkdown } from './src/lib/blog-markdown.mjs';

export default defineConfig({
    site: 'https://elliotd.net',
    markdown: {
        processor: satteri({
            hastPlugins: [blogMarkdown],
            // Keep apostrophes and quotes as typed, matching the rest of the site
            features: { smartPunctuation: false },
        }),
    },
    redirects: {
        '/portfolio': '/',
        '/side-projects': '/projects/',
    },
});
