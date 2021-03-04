import calculateNewCoordinate from './../../../../../src/functions/latitudeAndLongitudeHandling/calculateNewCoordinate';
import validDistance from './../../../../../src/functions/parametersEndpointValidation/validDistance.ts';
import distanceTreated from './../../../../../src/functions/parametersEndpointValidation/distanceTreated.ts';

export default async(req, res) => {
    const address = req.query.address;
    const googleCloudKey = req.query.googleCloudKey;
    const maxDistance = req.query.maxDistance;

    if (!validDistance(maxDistance)) res.status(400).json({ message: 'maxDistance should have a km or miles' })

    const distanceKm = distanceTreated(maxDistance); 

    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${googleCloudKey}`);
    const data = await response.json();  

    if(data.status === 'OK') {       
      const dataTreated = data.results[0].geometry.location
      const currentAngle = 2 * Math.PI * Math.random(); //A random number between 0 and 2π
      const currentDistance = distanceKm * Math.random(); //A random number between 0 and the max distance
      const coordinate = calculateNewCoordinate(dataTreated.lat, dataTreated.lng, currentAngle, currentDistance)
      res.status(200).json(coordinate)
    }
    else {
        console.log(data);
        res.status(400).json(data) 
    } 
    
  }