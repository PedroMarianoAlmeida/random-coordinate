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

    const callAPI = async() => {

        try{
            let response = await fetch(`${process.env.ADDRESS}/${endPoint}`);
            if(!response.ok) throw Error(response.statusText);
            const result = await response.json();
            setCoordinates([{lat: result.latitude, lng: result.longitude}]);            
            console.log(result)
        }
        catch(err){
            console.log(err);
        }        
    }

    useEffect(() => {
        setEndPoint(`api/tracking/origin-point/=?latitude=${latitude}&longitude=${longitude}&${distanceUnit}=${distanceNumber}&lapTime=${lapTimeNumber}&timeUnit=${lapTimeUnit}`);
    }, [latitude, longitude, distanceNumber, distanceUnit, lapTimeNumber, lapTimeUnit])

    return (
        <>
            <form>
                <div>
                    <label>Latitude</label>
                    <input type='number' onChange={(e)=> setLatitude(Number(e.target.value))} value={latitude} />
                </div>

                <div>
                    <label>Longitude</label>
                    <input type='number' onChange={(e)=> setLongitude(Number(e.target.value))} value={longitude} />
                </div>
                <div>
                    <label>Radius</label>
                    <input type='number' onChange={(e)=> setDistanceNumber(e.target.value)} value={distanceNumber} />
                    <select onChange={(e)=> setDistanceUnit(e.target.value)}>
                        <option value='km' selected={distanceUnit=='km'}>km</option>
                        <option value='miles' selected={distanceUnit=='miles'}>miles</option>
                    </select>
                </div>
                <div>
                    <label>Laptime</label>
                    <input type='number' onChange={(e)=> setLapTimeNumber(e.target.value)} value={lapTimeNumber}/>
                    <select onChange={(e)=> setLapTimeUnit(e.target.value)}>
                        <option value='milissecond' selected={lapTimeUnit=='milissecond'}>milissecond</option>
                        <option value='second' selected={lapTimeUnit=='second'}>second</option>
                        <option value='minute' selected={lapTimeUnit=='minute'}>minute</option>
                        <option value='hour' selected={lapTimeUnit=='hour'}>hour</option>
                        <option value='day' selected={lapTimeUnit=='day'}>day</option>
                    </select>
                </div>
            </form>
            <div><p>Endpoint:</p> <code>{endPoint}</code></div>
            <div><button onClick={callAPI}>Call API</button> <span className={coordinates.length === 0 ? 'hidden' : ''}>Result: {JSON.stringify(coordinates)}</span></div>
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
        </>
    );
}

export default TrackingOriginPoint;