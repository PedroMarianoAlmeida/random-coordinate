import calculateNewCoordinate from './../../../../src/functions/latitudeAndLongitudeHandling/calculateNewCoordinate';

export default (req, res) => {    
    const originLatitude = Number(req.query.latitude);
    const originLongitude = Number(req.query.longitude);
    const distanceKm = req.query.km ? Number(req.query.km) : Number(req.query.miles) * 0.621371;

    const currentAngle = 2 * Math.PI * Math.random(); //A random number between 0 and 2π
    const currentDistance = distanceKm * Math.random(); //A random number between 0 and the max distance  

    const coordinate = calculateNewCoordinate(originLatitude, originLongitude, currentAngle, currentDistance)

    res.status(200).json(coordinate)
  }