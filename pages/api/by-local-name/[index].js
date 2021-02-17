export default async(req, res) => {
    const address = req.query.address;
    const googleCloudKey = req.query.googleCloudKey;
    const reach = req.query.reach;

    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${googleCloudKey}`);
    const data = await response.json();
    
    if(data.status === 'OK') {
        const dataTreated = data.results[0].geometry.location
        const newUrl = `/api/origin-point/=?latitude=${dataTreated.lat}&longitude=${dataTreated.lng}&reach=${reach}`;
        res.writeHead(302, {
            'Location': newUrl
          });
        res.end();
        console.log(newUrl);
    }
    else {
        console.log(data); 
    } 
    res.status(400).json(data)
  }