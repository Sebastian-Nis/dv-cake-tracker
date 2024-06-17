// src/firebase/writeUserData.js
import { getDatabase, ref, set } from "firebase/database";

const writeUserData = (userId, name, email, imageUrl) => {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl
  });
  console.log('Data written successfully');
};

export default writeUserData;
