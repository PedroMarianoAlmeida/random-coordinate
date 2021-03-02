import randomBetween from './../../../../src/functions/randomBetween.ts';

const degreeToRadians = (number) => {
    const answer = number * Math.PI / (180)
    return answer
}

export default (req, res) => {    
    const originLatitude = Number(req.query.latitude);
    const originLongitude = Number(req.query.longitude);
    const reachInKilometters = Number(req.query.reach);

    const latitudeReach = reachInKilometters / 110.574;

    const originLatitudeInRadius = degreeToRadians(originLatitude);
    const longitudeReach = reachInKilometters / ( 111.320 * Math.cos(originLatitudeInRadius) );

    const bottomLatitude = originLatitude - latitudeReach < -90 ? -90 : originLatitude - latitudeReach;
    const topLatitude = originLatitude + latitudeReach > 90 ? 90 : originLatitude + latitudeReach;

    const bottomLongitude = originLongitude - longitudeReach < -180 ? -180 : originLongitude - longitudeReach;
    const topLongitude = originLongitude + longitudeReach > 180 ? 180 : originLongitude + longitudeReach;

    const latitude = randomBetween( bottomLatitude, topLatitude);
    const longitude = randomBetween(bottomLongitude, topLongitude);

    res.status(200).json({ 
        latitude, 
        longitude
      })

  }