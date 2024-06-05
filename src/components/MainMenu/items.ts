import { MainMenuItem } from '.';
import { i18n } from '../../i18n/i18n';

export const items: MainMenuItem[] = [
    {
        title: i18n('Video & audio'),
        id: 'index',
        url: './',
    },
    {
        title: i18n('Screen'),
        id: 'screen',
        url: './screen.html',
        hidden: true,
    },
    {
        title: 'GPU',
        id: 'gpu',
        url: './gpu.html',
    },
    {
        title: i18n('Gamepad'),
        id: 'gamepad',
        url: './gamepad.html',
    },
    {
        title: i18n('Storage'),
        id: 'storage',
        url: './storage.html',
        hidden: true,
    },
    {
        title: i18n('Network'),
        id: 'network',
        url: './network.html'
    },
    {
        title: i18n('Battery'),
        id: 'battery',
        url: './battery.html'
    },
];
