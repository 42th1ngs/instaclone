import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// here I want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAGJqCojB4G_i9NHSgQ3eeTmi5hMk4Szbw",
    authDomain: "instaclone-mc.firebaseapp.com",
    projectId: "instaclone-mc",
    storageBucket: "instaclone-mc.appspot.com",
    messagingSenderId: "661900762257",
    appId: "1:661900762257:web:c43e64e556b68caf18f330"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only once!)
// seedDatabase(firebase);


export { firebase, FieldValue };