import {initFirebase, db} from '../../../src/config/firebaseConfig';

export default (req, res) => {
    initFirebase();
    
    db.collection('coordenates').get().then(
        (snapshot) => {
           console.log(snapshot.docs[0].data()); 
        }
    )
    
    res.status(200).json({ 
        name: 'John DoEe'
    //   latitude, 
    //   longitude
    })
  }