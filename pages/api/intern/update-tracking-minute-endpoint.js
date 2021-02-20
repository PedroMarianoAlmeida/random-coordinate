//https://happykit.dev/post/turn-your-nextjs-api-routes-into-cron-jobs

import getMinuteCoordenate from './../../../src/functions/getMinuteCoordenate';
import {db} from './../../../src/config/firebaseConfig';

export default async (req, res) => {
    const coordenates = await getMinuteCoordenate();

    console.log(coordenates);

    coordenates.latitude++;
    coordenates.longitude++;

    console.log(coordenates);

    // Add a new document in collection "cities"
    db.collection('coordenates').doc('every-minute').set({coordenates})
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