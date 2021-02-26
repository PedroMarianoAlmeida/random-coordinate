import randomBetween from './randomBetween.ts';

const degreeToRadians = (number) => {
    const answer = number * Math.PI / (180)
    return answer
}

const newRandomCoordenate = (latitude, longitude, reachInKilometers) => {
    const latitudeReach = reachInKilometers / 110.574;

    const originLatitudeInRadius = degreeToRadians(latitude);
    const longitudeReach = reachInKilometers / ( 111.320 * Math.cos(originLatitudeInRadius) );

    const bottomLatitude = latitude - latitudeReach < -90 ? -90 : latitude - latitudeReach;
    const topLatitude = latitude + latitudeReach > 90 ? 90 : latitude + latitudeReach;

    const bottomLongitude = longitude - longitudeReach < -180 ? -180 : longitude - longitudeReach;
    const topLongitude = longitude + longitudeReach > 180 ? 180 : longitude + longitudeReach;

    const newLatitude = randomBetween( bottomLatitude, topLatitude);
    const newLongitude = randomBetween(bottomLongitude, topLongitude);

    return [newLatitude, newLongitude];
}

export default newRandomCoordenate;