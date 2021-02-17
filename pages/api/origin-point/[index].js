import randomBetween from './../../../src/functions/randomBetween.ts';

export default (req, res) => {
    const originLatitude = req.query.latitude;
    const originLongitude = req.query.longitude;
    const reachInKilometters = req.query.reach;

    const latitudeReach = reachInKilometters / 110.574
    const longitudeReach = reachInKilometters / ( 111.320 * Math.cos(originLatitude) )

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