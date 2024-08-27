export function createPage(params) {
    const {
        id, header, lang, content, canonicalUrl,
        description, keywords,
        alternateLinks,
        sitemap,
    } = params;

    return `<!DOCTYPE html>
<html lang="${lang || 'en'}">
<head>
    <script>!function(){var e=function(){if(!window.localStorage)return"";var e="";try{e=localStorage.getItem("page-theme")}catch(e){}return e}();"dark"!==e&&"light"!==e&&(e="");var t=e||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)")?"light":"dark");document.documentElement.className+=" page-theme_"+t}();</script>
    <title>${header}</title>
    ${description ? `<meta name="description" content="${description}" />` : ''}
    ${keywords ? `<meta name="keywords" content="${keywords}" />` : ''}
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#FFd700" />
    <meta name="google-site-verification" content="BUV1qxuhIx696cS8GU9knQcJcZaGugHSDV2kAkEG73I" />
    <meta name="yandex-verification" content="985312253f7c8a44" />
    ${canonicalUrl ? `<link rel="canonical" href="${canonicalUrl}" />` : '' }
    ${alternateLinks && alternateLinks.length ? alternateLinks.map(item => {
        return `<link rel="alternate" hreflang="${item.lang}" href="${item.url}" />
`; }) : '' }
    ${sitemap === false ? `<meta name="robots" content="noindex" />` : '' }
    <link rel="manifest" href="/manifest.json" />
    <link rel="shortcut icon" href="/static/favicons/icon32x32.png" />
    <link rel="apple-touch-icon" href="/static/favicons/icon152x152.png" />
    <link rel="stylesheet" href="/static/${id}.css?md5=" />
    <link rel="yandex-tableau-widget" href="/yandex-tableau-widget.json" />
    <script>
        var __appData__ = {
            pageId: '${id}',
            lang: '${lang || ''}'
        };
    </script>
</head>
<body>
    <div class="root">${content}</div>
    <script defer src="/static/${id}.js?md5="></script>
</body>
</html>
`;
}
