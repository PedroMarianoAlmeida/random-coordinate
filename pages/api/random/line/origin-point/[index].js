import angleBetweenTwoPoints from './../../../../../src/functions/latitudeAndLongitudeHandling/angleBetweenTwoPoints.ts';
import calculateNewCoordinate from './../../../../../src/functions/latitudeAndLongitudeHandling/calculateNewCoordinate';

export default (req, res) => {
  const originLatitude = Number(req.query.latitude1);
  const originLongitude = Number(req.query.longitude1);

  const destinyLatitude = Number(req.query.latitude2);
  const destinyLongitude = Number(req.query.longitude2);

  const currentAngle = angleBetweenTwoPoints(
    { latitude: originLatitude, longitude: originLongitude },
    { latitude: destinyLatitude, longitude: destinyLongitude }
  )

  console.log(currentAngle * 180 / Math.PI)

  const distanceKm = 10;
  const currentDistance = distanceKm * Math.random(); //A random number between 0 and the max distance  

  const coordinate = calculateNewCoordinate(originLatitude, originLongitude, currentAngle, currentDistance)

  res.status(200).json(coordinate)
}