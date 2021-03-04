import { useState, useEffect } from 'react'
import GoogleMapComponent from '../../src/components/GoogleMap';

import calcualateZoomMap from './../../src/functions/calculateZoomMap.ts';
import Seo from './../../src/components/Seo'

const TrackingOriginPoint = () => {
    const [localName, setLocalName] = useState('Halifax');
    const [googleCloudKey, setGoogleCloudKey] = useState('YOUR_API_KEY');

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [distanceNumber, setDistanceNumber] = useState(100);
    const [distanceUnit, setDistanceUnit] = useState('km');

    const [endPoint, setEndPoint] = useState('');
    const [coordinates, setCoordinates] = useState([]);

    const [zoomMap, setZoomMap] = useState(calcualateZoomMap(distanceNumber, distanceUnit));

    const circle = {
        center: {lat: latitude, lng: longitude},
        radius: distanceUnit === 'km' ? distanceNumber * 1000 : distanceNumber * 1000 * 0.621371
    }


    useEffect(() => {
        setZoomMap(calcualateZoomMap(distanceNumber, distanceUnit))
    }, [distanceNumber, distanceUnit])

    const getOriginPoint = async () => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(localName)}&key=${googleCloudKey}`);
            if (!response.ok) throw Error(response.statusText);
            const result = await response.json();
            const dataTreated = result.results[0].geometry.location
            const originLatitude = dataTreated.lat;
            const originLongitude = dataTreated.lng;
            setLatitude(originLatitude);
            setLongitude(originLongitude);
            console.log(`Origin Point: latitude: ${originLatitude} - Logitude: ${originLongitude}`);
        }
        catch (err) {
            console.log('getOriginPoint', err);
        }
    }

    const callAPI = async () => {
        try {
            let response = await fetch(`${process.env.ADDRESS}/${endPoint}`);
            if (!response.ok) throw Error(response.statusText);
            const result = await response.json();
            setCoordinates([{ lat: result.latitude, lng: result.longitude }]);
            console.log(result)
        }
        catch (err) {
            console.log("callAPI", err);
        }
    }

    const handleClick = () => {
        getOriginPoint();
        callAPI();
    }

    useEffect(() => {
        setEndPoint(`api/random/circular/by-local-name/=?address=${localName}&googleCloudKey=${googleCloudKey}&maxDistance=${distanceNumber}${distanceUnit}`);
    }, [latitude, longitude, distanceNumber, distanceUnit, localName, googleCloudKey])

    return (
        <>
            <Seo
                title={'Dummy Coordinate | Random By Local Name'}
                description={'How to use the Random By Local Name endpoint'}
            />

            <form className="text-sm font-semibold">
                <div className='text-center mb-3 border border-black rounded p-2 mx-4 grid grid-cols-1 md:grid-cols-3'>
                    <div>
                        <label className='mx-2'>Address</label>
                        <input type='text' onChange={(e) => setLocalName(e.target.value)} value={localName} className='mt-1 text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 w-100' />
                    </div>

                    <div>
                        <label className='mx-2'>Google Cloud Key</label>
                        <input type='text' onChange={(e) => setGoogleCloudKey(e.target.value)} value={googleCloudKey} className='mt-1 text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0' />
                    </div>

                    <div>
                        <label className='mx-2'>Radius</label>
                        <input type='number' onChange={(e) => setDistanceNumber(e.target.value)} value={distanceNumber} className='mt-1 text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 w-20' />
                        <select onChange={(e) => setDistanceUnit(e.target.value)} className='mt-1 text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ml-2'>
                            <option value='km' selected={distanceUnit == 'km'}>km</option>
                            <option value='miles' selected={distanceUnit == 'miles'}>miles</option>
                        </select>

                    </div>

                </div>


            </form>
            <div className='my-2 text-center'><p className='inline'>Endpoint:</p> <code className='bg-black p-2 text-white break-all text-left'>{`https://dummy-coordinate.vercel.app/${endPoint}`}</code></div>
            <div className='my-2 text-center'><button className='border-2 border-blue-500 rounded-full font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6' onClick={handleClick}>Call API</button> <span className={coordinates.length === 0 ? 'hidden' : ''}>Result: {JSON.stringify(coordinates)}</span></div>
            <div className='flex items-center justify-center'>
                <div>
                    <GoogleMapComponent
                        defaultLat={latitude}
                        defaultLng={longitude}
                        defaultZoom={zoomMap}
                        iconMarker1="marker"
                        iconMarker2="origin"
                        mapStyle="lostInDesert"
                        markers1={coordinates}
                        markers2={[{ lat: latitude, lng: longitude }]}
                        sizeIconMarker1={25}
                        sizeIconMarker2={25}
                        circle={circle}
                    />
                </div>
            </div>
        </>
    );
}

export default TrackingOriginPoint;