import fs, { existsSync, mkdirSync } from 'fs';
import beautify from 'simply-beautiful';

import { createPage } from './createPage.mjs';
import { updateTemplate } from './updateTemplate.mjs';
import { loadJson } from './utils/loadJson.mjs';
import { buildPage, setLang, i18n, setPageId } from '../dist/ssr.mjs';
import { getPagePath } from './getPagePath.mjs';
import { siteUrl, langs } from './data.mjs';

function getAbsolutePageUrl(lang, id) {
    return `${siteUrl}/${getPagePath(lang, id).dir}`;
}

const pages = loadJson('./src/pages/pages.json');

langs.forEach(lang => {
    setLang(lang);

    pages.forEach(item => {
        setPageId(item.id);

        const { id } = item;
        let header = (item.header ? item.header[lang] : item.menuTitle[lang]);

        if (item.id !== 'index') {
            header += ' / ' + i18n('Check device online');
        }

        const canonicalUrl = item.isError ? '' : getAbsolutePageUrl(lang, id);
        const description = item.description ? item.description[lang] : '';
        const keywords = item.keywords ? item.keywords[lang] : '';
        const alternateLinks = item.isError ? [] : langs
            .filter(item => lang !== item)
            .map(item => ({
                lang: item,
                url: getAbsolutePageUrl(item, id),
            }));

        let html = createPage({
            id,
            header,
            lang,
            content: beautify.html(buildPage(id)),
            canonicalUrl,
            keywords,
            description,
            alternateLinks,
            sitemap: item.sitemap,
        });

        if (!existsSync(lang)) {
            mkdirSync(lang);
        }

        const dir = getPagePath(lang, id).dir;
        if (!existsSync(dir)) {
            mkdirSync(dir);
        }

        savePage(getPagePath(lang, id).filePath, html);

        if (lang === 'en' && (item.isIndex || item.isError)) {
            html = createPage({
                id,
                header,
                lang: undefined,
                content: beautify.html(buildPage(id)),
                canonicalUrl,
                keywords,
                description,
                sitemap: item.sitemap,
            });

            savePage(`${id}.html`, html);
        }
    });
});

function savePage(file, html) {
    fs.writeFileSync(file, html, 'utf-8');
    updateTemplate(file);
}
