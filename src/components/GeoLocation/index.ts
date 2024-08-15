import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { Button } from '../ui/Button';
import { TreeList } from '../TreeList';
import { YaStaticMap } from '../YaStaticMap';
import { block } from '../../utils/css/bem';
import { i18n } from '../../i18n';
import { Spinner } from '../ui/Spinner';
import { isSsr } from '../../utils/isSsr';
import { ErrorMessage } from '../ui/ErrorMessage';
import { WarningMessage } from '../ui/WarningMessage';

import './index.css';

const b = block('geo-location');

interface GeoLocationProps {
    yaMapsApiKey: string;
}

function getErrorMessage(error: GeolocationPositionError) {
    if (error.code === 1) { // PERMISSION_DENIED
        return i18n('The acquisition of the geolocation information failed because the page didn\'t have the permission to do it.');
    }

    if (error.code === 2) { // POSITION_UNAVAILABLE
        return i18n('The acquisition of the geolocation failed because one or several internal sources of position returned an internal error.');
    }

    if (error.code === 3) { // TIMEOUT
        return i18n('Geolocation information was not obtained in the allowed time.');
    }

    return error.message;
}

export function GeoLocation(props: GeoLocationProps) {
    if (!isSsr && typeof navigator.geolocation?.getCurrentPosition === 'undefined') {
        return html`<${WarningMessage}>${i18n('Geo Location API is not supported.')}<//>`;
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

        setError(null);
        setCoords(null);
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

            const message = getErrorMessage(error);
            setError(message);
            console.error(error);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
    }, []);

    return html`
        <${Button} disabled="${inProgress}" theme="active" onClick="${handleClick}">${i18n('Request geo location')}<//> ${inProgress ? html`<${Spinner} size="m" //>` : ''}
        ${coords ? html`<div class="${b('list')}"><${TreeList} data="${coords}" //></div>` : ''}
        ${error ? html`<${ErrorMessage}>${error}<//>` : ''}
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