export function createPage(params) {
    const {
        id, header, lang, content, canonicalUrl,
        description, keywords,
    } = params;

    return `<!DOCTYPE html>
<html lang="${lang || 'en'}">
<head>
    <title>${header}</title>
    ${description ? `<meta name="description" content="${description}" />` : ''}
    ${keywords ? `<meta name="keywords" content="${keywords}" />` : ''}
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#FFd700" />
    <meta name="google-site-verification" content="BUV1qxuhIx696cS8GU9knQcJcZaGugHSDV2kAkEG73I" />
    <meta name="yandex-verification" content="985312253f7c8a44" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="shortcut icon" href="/static/favicons/favicon.png" />
    <link rel="apple-touch-icon" href="/static/favicons/touch.png" />
    <link rel="stylesheet" href="/static/${id}.css?md5=" />
    <link rel="yandex-tableau-widget" href="/yandex-tableau-widget.json" />
    <script>
        window.appData = {
            pageId: '${id}',
            lang: '${lang || ''}'
        };
    </script>
</head>
<body>
    <div class="page">${content}</div>
    <script defer src="/static/${id}.js?md5="></script>
</body>
</html>
`;
}
