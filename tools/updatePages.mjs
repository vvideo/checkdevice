import fs, { existsSync, mkdirSync } from 'fs';
import beautify from 'simply-beautiful';

import { createPage } from './createPage.mjs';
import { updateTemplate } from './updateTemplate.mjs';
import { loadJson } from './utils/loadJson.mjs';
import { buildPage, setLang, i18n } from '../dist/ssr.mjs';
import { langs } from './langs.mjs';
import { getPagePath } from './getPagePath.mjs';
import { siteUrl } from './data.mjs';

const pages = loadJson('./src/pages/pages.json');

langs.forEach(lang => {
    setLang(lang);

    pages.forEach(item => {
        const { id } = item;
        let header = (item.header ? item.header[lang] : item.menuTitle[lang]);

        if (item.id !== 'index') {
            header += ' / ' + i18n('Check device online');
        }

        const canonicalUrl = `${siteUrl}/${getPagePath(lang, id).dir}`;
        const description = item.description ? item.description[lang] : '';
        const keywords = item.keywords ? item.keywords[lang] : '';

        let html = createPage({
            id,
            header,
            lang,
            content: beautify.html(buildPage(id)),
            canonicalUrl,
            keywords,
            description,
        });

        if (!existsSync(lang)) {
            mkdirSync(lang);
        }

        const dir = getPagePath(lang, id).dir;
        if (!existsSync(dir)) {
            mkdirSync(dir);
        }

        savePage(getPagePath(lang, id).filePath, html);

        if (lang === 'en' && (id === 'index' || id === 'error404')) {
            html = createPage({
                id,
                header,
                lang: undefined,
                content: beautify.html(buildPage(id)),
                canonicalUrl,
                keywords,
                description,
            });

            savePage(`${id}.html`, html);
        }
    });
});

function savePage(file, html) {
    fs.writeFileSync(file, html, 'utf-8');
    updateTemplate(file);
}
