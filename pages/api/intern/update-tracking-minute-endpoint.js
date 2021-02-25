//https://happykit.dev/post/turn-your-nextjs-api-routes-into-cron-jobs
//https://quirrel.dev/

import getMinuteCoordenate from './../../../src/functions/getMinuteCoordenate';
import { db } from './../../../src/config/firebaseConfig';
import { Queue } from "quirrel/next";

import newRandomCoordenate from '../../../src/functions/newRandomCoordenate.js';

export default Queue(
    "api/intern/update-tracking-minute-endpoint",
    async () => {
        console.log('Get current coordenates')
        const coordenates = await getMinuteCoordenate();
    
        const [latitude, longitude] = newRandomCoordenate(coordenates.latitude, coordenates.longitude, 1)
    
        db.collection('coordenates').doc('every-minute').set({ latitude, longitude })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }
)


