(function() {
    function getThemeFromLocalStorage() {
        if (!window.localStorage) { return ''; }
        var result = '';
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-empty
        try { result = localStorage.getItem('page-theme'); } catch(e) {}
        return result;
    }

    function isLightTheme() {
        return window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : false;
    }

    var themeLocalStorage = getThemeFromLocalStorage();
    if (themeLocalStorage !== 'dark' && themeLocalStorage !== 'light' ) {
        themeLocalStorage = '';
    }

    var theme = themeLocalStorage || (isLightTheme() ? 'light' : 'dark');
    document.documentElement.className += ' page-theme_' + theme;
})();
