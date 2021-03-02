import { useState, useEffect } from 'react'
import GoogleMapComponent from './../../src/components/GoogleMap';

import calcualateZoomMap from './../../src/functions/calculateZoomMap.ts';

const TrackingOriginPoint = () => {
    const [latitude, setLatitude] = useState(43)
    const [longitude, setLongitude] = useState(-79)
    const [distanceNumber, setDistanceNumber] = useState(100);
    const [distanceUnit, setDistanceUnit] = useState('km');
    const [lapTimeNumber, setLapTimeNumber] = useState(1);
    const [lapTimeUnit, setLapTimeUnit] = useState('minute');

    const [endPoint, setEndPoint] = useState('');
    const [coordinates, setCoordinates] = useState([]);

    const [zoomMap, setZoomMap] = useState(calcualateZoomMap(distanceNumber, distanceUnit));

    useEffect(() => {
        setZoomMap(calcualateZoomMap(distanceNumber, distanceUnit))
    }, [distanceNumber, distanceUnit])

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

    useEffect(() => {
        setEndPoint(`api/tracking/origin-point/=?latitude=${latitude}&longitude=${longitude}&${distanceUnit}=${distanceNumber}&lapTime=${lapTimeNumber}&timeUnit=${lapTimeUnit}`);
    }, [latitude, longitude, distanceNumber, distanceUnit, lapTimeNumber, lapTimeUnit])

    return (
        <>
            <form className="text-sm font-semibold grid grid-cols-1 md:grid-cols-2">
                <div className='text-center mb-3 border border-black rounded p-2 mx-4 grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <label className='mx-2'>Latitude</label>
                        <input type='number' onChange={(e) => setLatitude(Number(e.target.value))} value={latitude} className='mt-1 text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 w-20' />
                    </div>

                    <div>
                        <label className='mx-2'>Longitude</label>
                        <input type='number' onChange={(e) => setLongitude(Number(e.target.value))} value={longitude} className='mt-1 text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 w-20' />
                    </div>
                </div>

                <div className='text-center mb-3 border border-black rounded p-2 mx-4 grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <label className='mx-2'>Radius</label>
                        <input type='number' onChange={(e) => setDistanceNumber(e.target.value)} value={distanceNumber} className='mt-1 text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 w-20' />
                        <select onChange={(e) => setDistanceUnit(e.target.value)} className='mt-1 text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ml-2'>
                            <option value='km' selected={distanceUnit == 'km'}>km</option>
                            <option value='miles' selected={distanceUnit == 'miles'}>miles</option>
                        </select>
                    </div>
                    <div>
                        <label className='mx-2'>Laptime</label>
                        <input type='number' onChange={(e) => setLapTimeNumber(e.target.value)} value={lapTimeNumber} className='mt-1 text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 w-20' />
                        <select onChange={(e) => setLapTimeUnit(e.target.value)} className='mt-1 text-center border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ml-2'>
                            <option value='milissecond' selected={lapTimeUnit == 'milissecond'}>milissecond</option>
                            <option value='second' selected={lapTimeUnit == 'second'}>second</option>
                            <option value='minute' selected={lapTimeUnit == 'minute'}>minute</option>
                            <option value='hour' selected={lapTimeUnit == 'hour'}>hour</option>
                            <option value='day' selected={lapTimeUnit == 'day'}>day</option>
                        </select>
                    </div>
                </div>

            </form>
            <div className='my-2 text-center'><p className='inline'>Endpoint:</p> <code className='bg-black p-2 text-white break-all text-left'>{endPoint}</code></div>
            <div className='my-2 text-center'><button className='border-2 border-blue-500 rounded-full font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6' onClick={callAPI}>Call API</button> <span className={coordinates.length === 0 ? 'hidden' : ''}>Result: {JSON.stringify(coordinates)}</span></div>
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
                    />
                </div>
            </div>
        </>
    );
}

export default TrackingOriginPoint;