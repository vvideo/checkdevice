import { showJSError } from 'show-js-error';
import { hit } from 'lyam';

import { I18NLanguage, setI18nLang } from '../../i18n';
import { withInstallApp } from '../../utils/withInstallApp';
import { addHoverOnBody } from '../../utils/css/addHoverOnBody';
import { isSsr } from '../../utils/isSsr';
import { setPageId } from '../../utils/pageId';
import { defaultLang, langs } from '../../i18n/langs';
import { config } from '../../config';
import { initPageTheme } from '../../lib/PageTheme';

import './global.css';

export function getLang() {
    let lang = window.__appData__.lang || getLangFromNavigator();

    const result = langs.filter(item => item.value === lang);
    if (!result.length) {
        lang = defaultLang;
    }

    return lang;
}

function getLangFromNavigator() {
    return ((navigator.language || '').split('-')[0] || defaultLang);
}

if (!isSsr) {
    showJSError.setSettings({
        reportUrl: config.showJSErrorRepportUrl,
    });

    hit(config.metrikaCounterId);

    const lang = getLang();
    setI18nLang(lang as I18NLanguage);

    setPageId(window.__appData__.pageId);

    withInstallApp();

    addHoverOnBody();

    initPageTheme();

    // ally
    document.documentElement?.setAttribute('lang', lang);
}
