export function buildPage(id, title) {
    return `<!DOCTYPE html>
<html>
<head>
    <title>Can I Watch Video${title ? `:${title}` : ''}</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="shortcut icon" href="./icons/favicon.png"/>
    <link rel="stylesheet" href="./dist/${id}.css?md5=" />
    <!--<script src="https://unpkg.com/show-js-error/dist/show-js-error.js"></script>-->
</head>
<body>
    <div class="page"></div>
    <script src="./dist/${id}.js?md5="></script>
</body>
</html>
`;
}
