import getMinuteCoordenate from './../../../src/functions/getMinuteCoordenate';

export default async (req, res) => {

    const coordenates = await getMinuteCoordenate();

    const latitude = coordenates.latitude;
    const longitude = coordenates.longitude;


    res.setHeader('Cache-Control', 's-maxage=60 , stale-while-revalidate');
    res.status(200).json({latitude, longitude})
}