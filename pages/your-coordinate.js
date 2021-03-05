import { useState, useEffect } from 'react';
import Link from 'next/link';

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

            <ul className='list-disc mx-4'>
                <li>Latitude: {latitude}</li>
                <li>Longitude: {longitude}</li>
            </ul>
            <div className='flex justify-center'>
                <div className='my-3 grid'>

                    <div className='my-5'>
                        <Link href='documentation/random-circular-origin-point'>
                            <a className={tailwindDirective.button}>
                                Go to Random Circular Origin Point
                        </a>
                        </Link>
                    </div>

                    <div className='my-5'>

                        <Link href='documentation/tracking-circular-origin-point'>
                            <a className={tailwindDirective.button}>
                                Go to Tracking Circular Origin Point
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CurrentPosition;