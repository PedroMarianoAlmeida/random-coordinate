import Link from 'next/link';
import { useState, useEffect } from 'react';
import GoogleMapComponent from '../../src/components/GoogleMap';

import calcualateZoomMap from './../../src/functions/calculateZoomMap.ts';
import Seo from './../../src/components/Seo'
import EndPointExample from './../../src/components/EndPointExample';
import TooltipTailwind from '../../src/components/TooltipTailwind';
import tailwindDirective from './../../src/tailwindDirective';

const TrackingOriginPoint = () => {
    const [localName, setLocalName] = useState('Halifax');
    const [googleCloudKey, setGoogleCloudKey] = useState('YOUR_API_CODE');

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [distanceNumber, setDistanceNumber] = useState(100);
    const [distanceUnit, setDistanceUnit] = useState('km');

    const [endPoint, setEndPoint] = useState('');
    const [coordinates, setCoordinates] = useState([]);
    const [coordinatesMaps, setCoordinatesMaps] = useState([])

    const [zoomMap, setZoomMap] = useState(calcualateZoomMap(distanceNumber, distanceUnit));

    const circle = {
        center: { lat: latitude, lng: longitude },
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
            setCoordinates(result);

            setCoordinatesMaps([{ lat: result.latitude, lng: result.longitude }])
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

            <h1 className={tailwindDirective.exampleTitle}>Random Cirular By Local Name - Example</h1>

            <form className="text-sm font-semibold">
                <div className='text-center my-3 border border-black rounded p-2 mx-4 md:flex grid'>

                    <div className='flex-1 text-left flex md:grid lg:flex m-1'>
                        <label className='mx-2 my-auto text-center'>Address</label>
                        <input type='text' onChange={(e) => setLocalName(e.target.value)} value={localName} className='mt-1 text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 flex-1' />
                    </div>

                    <div className='flex-1 text-left flex md:grid lg:flex m-1'>
                        <label className='mx-2 my-auto text-center'>
                            <span>Google Cloud Key</span>

                            <TooltipTailwind 
                                tooltip={
                                    <p>
                                        This endpoint requires a key provides by google, you need to {' '}  
                                        <Link href='/get-google-key-tutorial'>
                                            <a className='font-bold cursor-pointer underline'>
                                                 get your own key
                                            </a>
                                        </Link>
                                    </p>
                                }
                            >
                                <svg className='h-4 w-4 inline mx-3 text-red-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </TooltipTailwind>



                        </label>
                        <input type='text' onChange={(e) => setGoogleCloudKey(e.target.value)} value={googleCloudKey} className='mt-1 text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 flex-1' />
                    </div>

                    <div className='flex-1 text-left flex md:grid lg:flex m-1'>
                        <label className='mx-2 my-auto text-center'>Radius</label>
                        <div className='my-auto'>
                            <input type='number' onChange={(e) => setDistanceNumber(e.target.value)} value={distanceNumber} className='mt-1 text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0' />
                            <select onChange={(e) => setDistanceUnit(e.target.value)} className='mt-1 text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ml-2'>
                                <option value='km' selected={distanceUnit == 'km'}>km</option>
                                <option value='miles' selected={distanceUnit == 'miles'}>miles</option>
                            </select>
                        </div>
                    </div>

                </div>


            </form>

            <EndPointExample
                click={handleClick}
                endPoint={endPoint}
                coordinates={coordinates}
            />

            <div className='flex items-center justify-center'>
                <div className='w-full md:w-3/4 h-full'>
                    <GoogleMapComponent
                        defaultLat={latitude}
                        defaultLng={longitude}
                        defaultZoom={zoomMap}
                        iconMarker1="marker"
                        iconMarker2="origin"
                        mapStyle="lostInDesert"
                        markers1={coordinatesMaps}
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