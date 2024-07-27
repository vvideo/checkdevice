import fs from 'fs';
import { siteUrl } from './data.mjs';
import { langs } from './langs.mjs';
import { loadJson } from './utils/loadJson.mjs';
import { getPagePath } from './getPagePath.mjs';

const pages = loadJson('./src/pages/pages.json');

function buildList() {
    let result = [
        buildUrl(siteUrl),
    ];

    langs.forEach(lang => {
        pages.forEach(item => {
            result.push(
                buildUrl(`${siteUrl}${getPagePath(lang, item.id).pagePath}`)
            );
        });
    });

    return result.join('\n');
}

function buildUrl(loc) {
    return `  <url>
    <loc>${loc}</loc>
  </url>`;
}

const result = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${buildList()}
</urlset>
`;

fs.writeFileSync(
    'sitemap.xml',
    result,
    'utf-8'
);
