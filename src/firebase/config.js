// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database'; // if you are using Realtime Database

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAaMzqrhF1KjL-d6oLkQslkDXOuWRcsaEY",

  authDomain: "dv-cake-tracker.firebaseapp.com",

  projectId: "dv-cake-tracker",

  storageBucket: "dv-cake-tracker.appspot.com",

  messagingSenderId: "1056727947626",

  appId: "1:1056727947626:web:6da273729f74967f326d13"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const database = getDatabase(app); // if you are using Realtime Database

export { auth, database }; // Export the services you are using