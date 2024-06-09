import fs from 'fs';
import { createPage } from './createPage.mjs';
import { updateTemplate } from './updateTemplate.mjs';
import { createSitemap } from './createSitemap.mjs';
import { loadJson } from './utils/loadJson.mjs';

const pages = loadJson('./src/pages/pages.json');

pages.forEach(item => {
    const html = createPage(item);
    fs.writeFileSync(`${item.id}.html`, html, 'utf-8');
});

pages.forEach(({ id }) => updateTemplate(id));

fs.writeFileSync(
    'sitemap.xml',
    createSitemap(pages),
    'utf-8'
);
