import { h } from 'preact';

import { block } from '../../../../utils/css/bem';

interface ColumnProps {
    width: string;
    height: string;
    latitude: number;
    longitude: number;
    zoom: string;
    apikey: string;
}

const b = block('ya-static-map');

const YA_STATIC_IMAGE_URL = 'https://static-maps.yandex.ru/v1?';

export function YaStaticMap(props: ColumnProps) {
    const url = YA_STATIC_IMAGE_URL + [
        ['ll', `${props.longitude},${props.latitude}`],
        ['size', `${props.width},${props.height}`],
        ['z', props.zoom],
        ['apikey', props.apikey],
        ['pt', `${props.longitude},${props.latitude},flag`]
    ].map(item => {
        return `${item[0]}=${item[1]}`;
    }).join('&');

    return (<div class={b()}><img src={url} width={props.width} height={props.height} /></div>);
}