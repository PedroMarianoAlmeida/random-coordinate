import checkLatitudeBondaries from './checkLatitudeBondaries';
import checkLongitudeBondaries from './checkLongitudeBondaries';

const degreeToRadians = (number) => {
    const answer = number * Math.PI / (180)
    return answer
}

const calculateNewCoordinate = (originLatitude, originLongitude, angleRad, distanceKm) => {
    const latitudeDeslocationInKm = distanceKm * Math.cos(angleRad);
    const longitudeDeslocationInKm = distanceKm * Math.sin(angleRad)
    //console.log(angleRad / (Math.PI / 180)) //Angle in DEG
    
    const latitudeDeslocationInAngle = latitudeDeslocationInKm / 110.574;
    const latitude = checkLatitudeBondaries(originLatitude + latitudeDeslocationInAngle);

    const latitudeInRadians = degreeToRadians(latitude);   
    const longitudeDeslocationInAngle = longitudeDeslocationInKm / ( 111.320 * Math.cos(latitudeInRadians) );
    const longitude = checkLongitudeBondaries(originLongitude + longitudeDeslocationInAngle );
    const coordinate = {latitude, longitude}

    return coordinate;
}

export default calculateNewCoordinate;