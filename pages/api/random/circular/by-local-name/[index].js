import calculateNewCoordinate from './../../../../../src/functions/latitudeAndLongitudeHandling/calculateNewCoordinate';

export default async(req, res) => {
    const address = req.query.address;
    const googleCloudKey = req.query.googleCloudKey;
    const distanceKm = req.query.km ? Number(req.query.km) : Number(req.query.miles) * 0.621371;

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