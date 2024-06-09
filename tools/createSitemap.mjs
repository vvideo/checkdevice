export function createSitemap(pages) {
    return `<urlset>
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
