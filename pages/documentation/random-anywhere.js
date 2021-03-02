import { useState } from 'react'
import GoogleMapComponent from '../../src/components/GoogleMap';
import Seo from './../../src/components/Seo'

const TrackingOriginPoint = () => {
    const [endPoint, setEndPoint] = useState('api/random/anywhere');
    const [coordinates, setCoordinates] = useState([]);

    const callAPI = async () => {

        try {
            let response = await fetch(`${process.env.ADDRESS}/${endPoint}`);
            if (!response.ok) throw Error(response.statusText);
            const result = await response.json();
            setCoordinates([{ lat: result.latitude, lng: result.longitude }]);
            console.log(result)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Seo
                title={'Dummy Coordinate | Random Anywhere'}
                description={'How to use the Random Anywhere endpoint'}
            />

            <div className='my-2 text-center'><p className='inline'>Endpoint:</p> <code className='bg-black p-2 text-white break-all text-left'>{`https://dummy-coordinate.vercel.app/${endPoint}`}</code></div>
            <div className='my-2 text-center'><button className='border-2 border-blue-500 rounded-full font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6' onClick={callAPI}>Call API</button> <span className={coordinates.length === 0 ? 'hidden' : ''}>Result: {JSON.stringify(coordinates)}</span></div>
            <div className='flex items-center justify-center'>
                <div>
                    <GoogleMapComponent
                        defaultLat={0}
                        defaultLng={0}
                        defaultZoom={1}
                        iconMarker1="marker"
                        iconMarker2="origin"
                        mapStyle="lostInDesert"
                        markers1={coordinates}
                        markers2={[]}
                        sizeIconMarker1={25}
                        sizeIconMarker2={25}
                    />
                </div>
            </div>
        </>
    );
}

export default TrackingOriginPoint;