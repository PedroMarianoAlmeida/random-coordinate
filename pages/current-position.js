import {useState, useEffect} from 'react';

const CurrentPosition = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(()=> {
        
        const location = window.navigator.geolocation.getCurrentPosition( position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })   
    }, [])    
    
    return (
        <>
            <h1>Current Coordenates</h1>
            <div>Latitude: {latitude}</div>
            <div>Longitude: {longitude}</div>
        </>
      );
}
 
export default CurrentPosition;