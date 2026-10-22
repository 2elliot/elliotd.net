import { smallVersion } from './images.mjs';

const imageSizes = ['small', 'medium', 'large', 'full'];

// Styles Markdown write-ups the way the hand-written pages were:
// - ![Alt text](/images/foo/Bar.png "medium") becomes a .blog-image with that size class.
//   It shows Bar-small.webp when it exists, and clicking it opens Bar.png full size.
// - Links to other sites open in a new tab.
// - Links to /topics/ get the dashed topic-link style.
export const blogMarkdown = {
    name: 'blog-markdown',
    element: [
        {
            // Markdown puts images inside <p>; on the page they sit between paragraphs instead
            filter: ['p'],
            visit(p, ctx) {
                const image = onlyImage(p);
                if (image) ctx.replaceNode(p, styledImage(image));
            },
        },
        {
            filter: ['img'],
            visit(img, ctx) {
                if (!onlyImage(ctx.parent(img))) ctx.replaceNode(img, styledImage(img));
            },
        },
        {
            filter: ['a'],
            visit(a, ctx) {
                const href = String(a.properties.href ?? '');
                if (/^https?:\/\//.test(href)) {
                    ctx.setProperty(a, 'target', '_blank');
                    ctx.setProperty(a, 'rel', ['noopener', 'noreferrer']);
                } else if (href.startsWith('/topics/')) {
                    ctx.setProperty(a, 'className', ['topic-link']);
                }
            },
        },
    ],
};

// The image in a paragraph that holds nothing else
function onlyImage(node) {
    if (node?.type !== 'element' || node.tagName !== 'p') return null;
    const content = node.children.filter(child => !(child.type === 'text' && !child.value.trim()));
    const only = content.length === 1 ? content[0] : null;
    return only?.type === 'element' && only.tagName === 'img' ? only : null;
}

function styledImage(img) {
    const { title, ...properties } = img.properties;
    const size = imageSizes.includes(title) ? title : null;
    if (title && !size) properties.title = title;
    properties.className = size ? ['blog-image', size] : ['blog-image'];

    const src = String(properties.src);
    const small = smallVersion(src);
    if (small !== src) {
        properties.src = small;
        properties.dataFullSrc = src;
    }
    return { ...img, properties };
}
