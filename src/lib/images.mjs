import fs from 'node:fs';
import path from 'node:path';

// Large images in public/ can have a lighter copy next to them: Foo.png -> Foo-small.webp.
// Returns the small copy's path when it exists, otherwise the original.
export function smallVersion(src) {
    if (!src.startsWith('/')) return src;
    const small = src.replace(/\.[^./]+$/, '-small.webp');
    return fs.existsSync(path.join('public', decodeURI(small))) ? small : src;
}
