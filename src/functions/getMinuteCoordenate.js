import { initFirebase, db } from './../config/firebaseConfig';

const getMinuteCoordenate = async () => {

    initFirebase();

    const coordenate = await db.collection('coordenates').doc('every-minute').get().then(
        (doc) => {
            const coordenate = doc.data();
            return coordenate;           
        }
    )
    return coordenate
}
 
export default getMinuteCoordenate;