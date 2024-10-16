import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import { Button } from '../../../../components/ui/Button';
import { Spinner } from '../../../../components/ui/Spinner';
import { List } from '../../../../components/ui/List';
import { ErrorMessage } from '../../../../components/ui/ErrorMessage';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { YaStaticMap } from '../YaStaticMap';
import { block } from '../../../../utils/css/bem';
import { i18n } from '../../../../i18n';
import { isSsr } from '../../../../utils/isSsr';

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
        return (<WarningMessage>{i18n('Geo Location API is not supported.')}</WarningMessage>);
    }

    const [coords, setCoords] = useState<Omit<GeolocationCoordinates, 'toJSON'> | null>(null);
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

    const items: [string, string | number | null, string, string][] = coords ? [
        [i18n('Latitude'), coords.latitude, '', '°'],
        [i18n('Longitude'), coords.longitude, '', '°'],
        [i18n('Accuracy'), coords.accuracy, ' ', i18n('m')],
        [i18n('Altitude'), coords.altitude, ' ', i18n('m')],
        [i18n('Altitude accuracy'), coords.altitudeAccuracy, ' ', i18n('m')],
        [i18n('Speed'), coords.speed, ' ', i18n('m/s')],
        [i18n('Heading'), coords.heading, '', '°'],
    ] : [];

    const preparedItems: [string, string][] = items
        .filter(item => item[1] !== null && item[1] !== '')
        .map(([title, ...values]) => [title, values.join('')]);

    return (
        <div class={b()}>
            <Button disabled={inProgress} theme="active" onClick={handleClick}>{inProgress ? (<Spinner size="m" />) : ''} {i18n('Request geo location')}</Button>
            {preparedItems.length ? (<List class={b('list')} items={preparedItems} />) : ''}
            {error ? (<ErrorMessage>{error}</ErrorMessage>) : ''}
            {coords ? (<div class={b('map')}>
                <YaStaticMap
                    latitude={coords.latitude}
                    longitude={coords.longitude}
                    width="300"
                    height="300"
                    zoom="13"
                    apikey={props.yaMapsApiKey}
                />
            </div>) : null}
        </div>
    );
}
