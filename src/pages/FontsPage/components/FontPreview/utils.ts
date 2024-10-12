const fonts: Record<string, boolean | undefined> = {};

export function addFont(fullName: string, postscriptName: string) {
    if (fonts[fullName]) {
        return;
    }

    fonts[fullName] = true;

    const styleSheet = document.styleSheets[0];
    if (!styleSheet) {
        return;
    }

    styleSheet.insertRule(`@font-face {
          font-family: '${fullName}';
          src: local('${fullName}'), local('${postscriptName}');
        }`);
}
