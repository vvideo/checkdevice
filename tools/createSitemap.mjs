export function createSitemap(pages) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${
    pages.map(item => {
        return `  <url>
    <loc>https://caniwatchvideo.online/${item.id === 'index' ? '' : `${item.id}.html`}</loc>
  </url>`;
    }).join('\n')
}
</urlset>
`;
}
