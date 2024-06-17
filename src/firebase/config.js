import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {

  apiKey: "AIzaSyAaMzqrhF1KjL-d6oLkQslkDXOuWRcsaEY",

  authDomain: "dv-cake-tracker.firebaseapp.com",

  projectId: "dv-cake-tracker",

  storageBucket: "dv-cake-tracker.appspot.com",

  messagingSenderId: "1056727947626",

  appId: "1:1056727947626:web:6da273729f74967f326d13"

};


firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const database = firebase.database();

export { database };