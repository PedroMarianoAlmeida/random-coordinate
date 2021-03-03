import calculateNewCoordinate from './../../../../../src/functions/latitudeAndLongitudeHandling/calculateNewCoordinate';
import validDistance from './../../../../../src/functions/parametersEndpointValidation/validDistance.ts';
import distanceTreated from './../../../../../src/functions/parametersEndpointValidation/distanceTreated.ts';

export default (req, res) => {    
    //Sanitizing entry data
    const originLatitude = Number(req.query.latitude);
    const originLongitude = Number(req.query.longitude);    
    const radius = req.query.radius;
    const rawVelocity = Number(req.query.velocity); 
    
    if (!validDistance(radius)) res.status(400).json({ message: 'maxDistance should have a km or miles' })
    const distanceKm = distanceTreated(radius);
    const velocity = radius.includes('km') ? rawVelocity : rawVelocity * 0.621371 ;
    
    const lapTimeInMilisecond = velocity * 60 * 60 / (2 * Math.PI * distanceKm);  

    const currentLapTime = Date.now() % lapTimeInMilisecond // This ensures that will works cyclically
    /*
    Rule of 3: 
        2π (a whole circunference in radians) => lapTime 
        currentAngle => currentLapTime
    */
    const currentAngle = ( 2 * Math.PI * currentLapTime ) / lapTimeInMilisecond;    

    const coordinate = calculateNewCoordinate(originLatitude, originLongitude, currentAngle, distanceKm)

    res.status(200).json(coordinate)
  }