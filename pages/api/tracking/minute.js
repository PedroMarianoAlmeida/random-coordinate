import { initFirebase, db } from '../../../src/config/firebaseConfig';

export default (req, res) => {
    initFirebase();

    db.collection('coordenates').doc('every-minute').get().then(
        (doc) => {
            const coordenate = doc.data();
            const latitude = coordenate.latitude;
            const longitude = coordenate.longitude;

            res.setHeader('Cache-Control', 's-maxage=60 , stale-while-revalidate');

            res.status(200).json({
                latitude, longitude
            })
        }
    )
}