// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { realtimeDatabase } from "firebase/database";


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