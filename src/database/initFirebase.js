import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    databaseURL: proccess.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
};

export default function initFirebase() {
    if (!firebase.apps.length) firebase.initializeApp(config);
}

initFirebase();

export { firebase };