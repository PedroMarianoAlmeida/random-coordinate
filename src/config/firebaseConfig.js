import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: process.env.apiKey ,
    authDomain: process.env.authDomain ,
    projectId: process.env.projectId ,
    storageBucket: process.env.storageBucket ,
    messagingSenderId: process.env.messagingSenderId ,
    appId: process.env.appId ,
};

export function initFirebase() {
    if (!firebase.apps.length) firebase.initializeApp(config);
}

initFirebase();

export const db = firebase.firestore();