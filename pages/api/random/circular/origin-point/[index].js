import calculateNewCoordinate from './../../../../../src/functions/latitudeAndLongitudeHandling/calculateNewCoordinate';
import validDistance from './../../../../../src/functions/parametersEndpointValidation/validDistance.ts';
import distanceTreated from './../../../../../src/functions/parametersEndpointValidation/distanceTreated.ts';

export default (req, res) => {    
    const originLatitude = Number(req.query.latitude);
    const originLongitude = Number(req.query.longitude);
    const maxDistance = req.query.maxDistance;

    if (!validDistance(maxDistance)) res.status(400).json({ message: 'maxDistance should have a km or miles' })
    
    const distanceKm = distanceTreated(maxDistance);   

    const currentAngle = 2 * Math.PI * Math.random(); //A random number between 0 and 2π
    const currentDistance = distanceKm * Math.random(); //A random number between 0 and the max distance  

    const coordinate = calculateNewCoordinate(originLatitude, originLongitude, currentAngle, currentDistance)

    res.status(200).json(coordinate)
  }