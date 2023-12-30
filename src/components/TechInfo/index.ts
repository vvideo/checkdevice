import { html } from 'htm/preact';
import { VNode } from 'preact';
import { calcAspectRatio } from 'calc-aspect-ratio';
import { getGpuRenderer, getGpuVendor } from 'detect-audio-video';
import { block } from '../../utils/bem';

import './index.css';

const b = block('tech-info');

interface Item {
    title: string;
    handler: () => VNode;
}

interface Group {
    title: string;
    options: Item[];
}

const Tests: (Item | Group)[] = [
    {
        title: 'Screen',
        options: [
            {
                title: 'Size',
                handler: () => {
                    const line = [
                        screen.width,
                        screen.height,
                        window.devicePixelRatio,
                    ].join('×');
                    
                    return html`${line}`;
                }
            },
            {
                title: 'Aspect ratio',
                handler: () => {
                    return html`${calcAspectRatio(screen.width, screen.height).value}`;
                }
            },
            {
                title: 'Depth',
                handler: () => {
                    return html`${screen.colorDepth} bit`;
                }
            },
        ],
    },
    {
        title: 'UserAgent',
        handler: () => {
            return html`<small>${navigator.userAgent}</small>`;
        }
    },
    {
        title: 'GPU',
        options: [
            {
                title: 'Renderer',
                handler: () => {
                    return html`${getGpuRenderer()}`;
                }
            },
            {
                title: 'Vendor',
                handler: () => {
                    return html`${getGpuVendor()}`;
                }
            }
        ]
    },
    {
        title: 'Media Source',
        handler: () => {
            return html`${Boolean(window.MediaSource) ? 'true' : 'false'}`;
        }
    },
];

export function TechInfo() {
    let content: VNode[] = [];

    Tests.forEach((item) => {
        if ('options' in item) {
            const items: VNode[] = [];
            item.options.forEach((subitem) => {
                const result = subitem.handler();
                items.push(html`${subitem.title}: ${result}<br/>`);
            });

            content.push(html`
                <div class="${b('group')}">
                    <div class="${b('group-title')}">${item.title}</div>
                    ${items}
                </div>`
            );
        } else {
            const result = item.handler();
            content.push(html`${item.title}: ${result}<br/>`);
        }
    });

    return html`<div class="${b()}">${content}</div>`;
}
