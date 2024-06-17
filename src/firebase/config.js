// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAaMzqrhF1KjL-d6oLkQslkDXOuWRcsaEY",
  authDomain: "dv-cake-tracker.firebaseapp.com",
  databaseURL: "https://dv-cake-tracker-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dv-cake-tracker",
  storageBucket: "dv-cake-tracker.appspot.com",
  messagingSenderId: "1056727947626",
  appId: "1:1056727947626:web:6da273729f74967f326d13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const database = getDatabase(app);

export { database };
