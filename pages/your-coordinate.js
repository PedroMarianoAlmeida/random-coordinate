import { useState, useEffect } from 'react';

import Seo from '../src/components/Seo';
import tailwindDirective from '../src/tailwindDirective';

const CurrentPosition = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {

        const location = window.navigator.geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })
    }, [])

    return (
        <>
            <Seo
                title={'Dummy Coordinate | Current Coordenate'}
                description={'Check your current coordenate to use in some endpoint'}
            />

            <h1 className={tailwindDirective.exampleTitle}>Current Coordenates</h1>
            <div>Latitude: {latitude}</div>
            <div>Longitude: {longitude}</div>
        </>
    );
}

export default CurrentPosition;