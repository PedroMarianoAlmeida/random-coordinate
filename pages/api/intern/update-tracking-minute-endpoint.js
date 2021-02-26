//https://happykit.dev/post/turn-your-nextjs-api-routes-into-cron-jobs

import getMinuteCoordenate from './../../../src/functions/getMinuteCoordenate';
import { db } from './../../../src/config/firebaseConfig';

import newRandomCoordenate from '../../../src/functions/newRandomCoordenate.js';

export default async (req, res) => {
    const coordenates = await getMinuteCoordenate();

    const [latitude, longitude] = newRandomCoordenate(coordenates.latitude, coordenates.longitude, 1)

    db.collection('coordenates').doc('every-minute').set({ latitude, longitude })
        .then(() => {
            res.status(200).json({
                status: 'OK',
                message: "Document successfully written!"
            })
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}