import { useState } from 'react'
import GoogleMapComponent from '../../src/components/GoogleMap';
import Seo from './../../src/components/Seo'

const TrackingOriginPoint = () => {
    const [endPoint, setEndPoint] = useState('api/random/anywhere');
    const [coordinates, setCoordinates] = useState('');
    const [coordinatesMaps, setCoordinatesMaps] = useState([])

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
            console.log(err);
        }
    }

    return (
        <>
            <Seo
                title={'Dummy Coordinate | Random Anywhere'}
                description={'How to use the Random Anywhere endpoint'}
            />

            <h1 className="text-center text-2xl mb-5 text-primary font-semibold tracking-wide">Random Anywhere - Example</h1>

            <div className='my-2 text-center'>
                <div className='inline-block'><button className='border-2 border-blue-500 rounded-full font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6' onClick={callAPI}>Call API</button></div>
                <div className='inline-block my-2 items-center'>
                    <div className='flex'>
                        <p className='flex-initial mr-2 py-2'>Endpoint:</p>
                        <code className='bg-black p-2 text-white break-all text-left flex-initial'>
                            {`https://dummy-coordinate.vercel.app/${endPoint}`}
                        </code>
                    </div>
                </div>
            </div>

            <div className='my-2 text-center'>
                <span className={coordinates.length === 0 ? 'hidden' : 'break-all'}>Result: {JSON.stringify(coordinates)}</span>
            </div>
            <div className='flex items-center justify-center'>
                <div className='w-full md:w-3/4 h-full'>
                    <GoogleMapComponent
                        defaultLat={coordinates === '' ? 0 : coordinates.latitude}
                        defaultLng={coordinates === '' ? 0 : coordinates.longitude}
                        defaultZoom={2}
                        iconMarker1="marker"
                        iconMarker2="origin"
                        mapStyle="lostInDesert"
                        markers1={coordinatesMaps}
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