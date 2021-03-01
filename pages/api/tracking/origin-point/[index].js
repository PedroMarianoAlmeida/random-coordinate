import calculateNewCoordinate from '../../../../src/functions/latitudeAndLongitudeHandling/calculateNewCoordinate';

const timeUnitToMilisecond = {
    milissecond: 1,
    second: 1 * 1000,
    minute: 1 * 1000 * 60,
    hour: 1 * 1000 * 60 * 60,
    day: 1 * 1000 * 60 * 60 * 24
}

//example: /api/tracking/=?latitude=0&longitude=0&km=100&lapTime=1&timeUnit=minute
export default (req, res) => {    
    //Sanitizing entry data
    const originLatitude = Number(req.query.latitude);
    const originLongitude = Number(req.query.longitude);
    const distanceKm = req.query.km ? Number(req.query.km) : Number(req.query.miles) * 0.621371;
    const lapTime = Number(req.query.lapTime);
    const timeUnit = req.query.timeUnit;

    console.log(distanceKm);

    const lapTimeInMilisecond = lapTime * timeUnitToMilisecond[timeUnit];

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