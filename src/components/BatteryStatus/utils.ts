import { i18n } from '../../i18n';

export function formatTime(secs: number) {
    const h = Math.floor(secs / 60 / 60);
    const m = Math.floor((secs - h * 60 * 60) / 60);

    return [
        `${h ? `${h} ${i18n('hr.')}` : ''}`,
        `${!h && !m ? '' : `${m} ${i18n('min.')}`}`
    ].filter(Boolean).join(' ');
}
