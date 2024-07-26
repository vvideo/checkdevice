import fs from 'fs';
import beautify from 'simply-beautiful';

import { createPage } from './createPage.mjs';
import { updateTemplate } from './updateTemplate.mjs';
import { createSitemap } from './createSitemap.mjs';
import { loadJson } from './utils/loadJson.mjs';
import { buildPage, setLang } from '../dist/ssr.mjs';
import { langs } from './langs.mjs';

const pages = loadJson('./src/pages/pages.json');

langs.forEach(lang => {
    setLang(lang);

    pages.forEach(item => {
        const { id } = item;
        let header = (item.header ? item.header[lang] : item.menuTitle[lang]);

        if (item.id !== 'index') {
            header += ' / Check device online';
        }

        let html = createPage({
            id,
            header,
            lang,
            content: beautify.html(buildPage(id)),
        });

        savePage(`${lang}/${item.id}.html`, html);

        if (lang === 'en' && (id === 'index' || id === 'error404')) {
            html = createPage({
                id,
                header,
                lang: undefined,
                content: beautify.html(buildPage(id)),
            });

            savePage(`${id}.html`, html);
        }
    });
});

fs.writeFileSync(
    'sitemap.xml',
    createSitemap(pages),
    'utf-8'
);

function savePage(file, html) {
    fs.writeFileSync(file, html, 'utf-8');
    updateTemplate(file);
}
