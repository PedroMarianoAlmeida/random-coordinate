import { useState, useEffect } from 'react'
import GoogleMapComponent from './../../src/components/GoogleMap';

const TrackingOriginPoint = () => {
    const [latitude, setLatitude] = useState(43)
    const [longitude, setLongitude] = useState(-79)
    const [distanceNumber, setDistanceNumber] = useState(100);
    const [distanceUnit, setDistanceUnit] = useState('km');
    const [lapTimeNumber, setLapTimeNumber] = useState(1);
    const [lapTimeUnit, setLapTimeUnit] = useState('minute');

    const [endPoint, setEndPoint] = useState('');
    const [coordinates, setCoordinates] = useState([]);

    const callAPI = async() => {
        const response = await fetch(endPoint);
        console.log(response);
        const data = await response.json();
        
    }

    useEffect(() => {
        setEndPoint(`https://dummy-coordinate.vercel.app/api/tracking/origin-point/=?latitude=${latitude}&longitude=${longitude}&${distanceUnit}=${distanceNumber}&lapTime=${lapTimeNumber}&timeUnit=${lapTimeUnit}`);
    }, [latitude, longitude, distanceNumber, distanceUnit, lapTimeNumber, lapTimeUnit])

    return (
        <>
            <form>
                <div>
                    <label>Latitude</label>
                    <input type='number' onChange={(e)=> setLatitude(e.target.value)} value={latitude} />
                </div>

                <div>
                    <label>Longitude</label>
                    <input type='number' onChange={(e)=> setLongitude(e.target.value)} value={longitude} />
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
            <div><button onClick={callAPI}>Call API</button></div>
            <GoogleMapComponent
                defaultLat={latitude}
                defaultLng={longitude}
                defaultZoom={1000 / distanceNumber }
                iconMarker1="marker"
                iconMarker2="origin"
                mapStyle="lostInDesert"
                markers1={[
                    { lat: 43.6426, lng: -79.3871 },
                    { lat: 43.060001, lng: -79.106667 },
                    { lat: 43.642664096, lng: -79.369665188 }
                ]}
                markers2={[{ lat: latitude, lng: longitude }]}
                sizeIconMarker1={25}
                sizeIconMarker2={25}
            />
        </>
    );
}

export default TrackingOriginPoint;