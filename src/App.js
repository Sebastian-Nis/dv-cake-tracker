// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NewMember from './components/NewMember/NewMember';
import MemberList from './components/MemberList/MemberList';
import { collection, getDocs, addDoc } from 'firebase/firestore'; // Remove this if not using Firestore

const App = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch members from your database if you are using one
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'members')); // Update if using Realtime Database
      const membersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMembers(membersData);
    };

    fetchData();
  }, []);

  const addMember = async (member) => {
    // Add member to your database
    const docRef = await addDoc(collection(db, 'members'), member); // Update if using Realtime Database
    setMembers([...members, { id: docRef.id, ...member }]);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-member" element={<NewMember addMember={addMember} />} />
          <Route path="/member-list" element={<MemberList members={members} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
