// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NewMember from './components/newmember/NewMember';
import MemberList from './components/memberlist/MemberList';
import { db } from './firebase/config';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const App = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'members'));
      const membersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMembers(membersData);
    };

    fetchData();
  }, []);

  const addMember = async (member) => {
    const memberExists = members.some(existingMember =>
      existingMember.firstName === member.firstName &&
      existingMember.lastName === member.lastName &&
      existingMember.country === member.country &&
      existingMember.city === member.city
    );

    if (memberExists) {
      alert('Member with the same first name, last name, and location already exists.');
      return;
    }

    const birthDate = new Date(member.birthDate);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      alert('Member must be at least 18 years old.');
      return;
    }

    const docRef = await addDoc(collection(db, 'members'), member);
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
