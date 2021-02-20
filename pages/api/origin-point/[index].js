import newRandomCoordenate from './../../../src/functions/newRandomCoordenate';

export default (req, res) => {    
    const originLatitude = Number(req.query.latitude);
    const originLongitude = Number(req.query.longitude);
    const reachInKilometters = Number(req.query.reach);

    const [ latitude, longitude ] = newRandomCoordenate(originLatitude, originLongitude, reachInKilometters);

    res.status(200).json({ 
        latitude, 
        longitude
      })

  }