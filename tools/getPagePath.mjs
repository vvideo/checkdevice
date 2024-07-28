export function getPagePath(lang, id) {
    const idPath = id === 'index' ? '' : (id + '/');
    const dir = `${lang ? lang + '/' : ''}${idPath}`;

    return {
        pagePath: `/${dir}`,
        dir,
        filePath: `${dir}/index.html`,
    };
}
