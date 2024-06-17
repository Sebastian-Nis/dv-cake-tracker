// src/firebase/readUserData.js
import { getDatabase, ref, onValue } from "firebase/database";

const readUserData = () => {
  const db = getDatabase();
  const usersRef = ref(db, 'users/');
  onValue(usersRef, (snapshot) => {
    const data = snapshot.val();
    console.log('Fetched users:', data);
  });
};

export default readUserData;
