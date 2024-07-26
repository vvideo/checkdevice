import { siteUrl } from './data.mjs';
import { langs } from './langs.mjs';

export function createSitemap(pages) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${buildList(pages)}
</urlset>
`;
}

function buildList(pages) {
    let result = [
        buildUrl(siteUrl),
    ];

    langs.forEach(lang => {
        pages.forEach(item => {
            result.push(
                buildUrl(`${siteUrl}/${lang}/${item.id}/`)
            );
        });
    });


    return result;
}

function buildUrl(loc) {
    return `  <url>
    <loc>${loc}</loc>
  </url>`;
}
