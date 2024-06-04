import { MainMenuItem } from '.';
import { i18n } from '../../i18n/i18n';

export const items: MainMenuItem[] = [
    {
        title: i18n('Video & audio'),
        id: 'index',
        url: './',
    },
    {
        title: 'GPU',
        id: 'gpu',
        url: './gpu.html',
    },
    {
        title: 'Gamepad',
        id: 'gamepad',
        hidden: true,
        url: './gamepad.html',
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
