import { useState, useEffect } from 'react';

import Seo from '../src/components/Seo';
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

            <h1>Current Coordenates</h1>
            <div>Latitude: {latitude}</div>
            <div>Longitude: {longitude}</div>
        </>
    );
}

export default CurrentPosition;