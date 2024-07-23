import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { Button } from '../Button';
import { TreeList } from '../TreeList';
import { YaStaticMap } from '../YaStaticMap';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';
import { Spinner } from '../Spinner';
import { isSsr } from '../../utils/isSsr';

import './index.css';

const b = block('geo-location');

interface GeoLocationProps {
    yaMapsApiKey: string;
}

export function GeoLocation(props: GeoLocationProps) {
    if (isSsr || typeof navigator.geolocation?.getCurrentPosition === 'undefined') {
        return '';
    }

    const [coords, setCoords] = useState<GeolocationCoordinates | null>(null);
    const [inProgress, setInProgress] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleClick = useCallback(() => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        setInProgress(true);

        function success(position: GeolocationPosition) {
            const { coords } = position;

            setCoords({
                latitude: coords.latitude,
                longitude: coords.longitude,
                accuracy: coords.accuracy,
                altitude: coords.altitude,
                altitudeAccuracy: coords.altitudeAccuracy,
                speed: coords.speed,
                heading: coords.heading,
            });

            setInProgress(false);
        }

        function error(error: GeolocationPositionError) {
            setInProgress(false);
            setError(error.message);
            console.error(error);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
    }, []);

    return html`
        <${Button} theme="active" onClick="${handleClick}">${i18n('Request geo location')}<//> ${inProgress ? html`<${Spinner} size="m" //>` : ''}
        ${coords ? html`<div class="${b('list')}"><${TreeList} data="${coords}" //></div>` : ''}
        ${error ? html`<div class="${b('error')}">${error}</div>` : ''}
        ${coords ? html`<div class="${b('map')}">
            <${YaStaticMap}
                latitude="${coords.latitude}"
                longitude="${coords.longitude}"
                width="300"
                height="300"
                zoom="13"
                apikey="${props.yaMapsApiKey}" //>
        </div>` : ''}
    `;
}